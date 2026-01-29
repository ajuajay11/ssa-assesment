import {
  TextField,
  Button,
  Modal,
  Box,
  Typography,
  Skeleton,
  Alert,
} from "@mui/material";
import React from "react";
import { useAiAssistantopenAi } from "../hooks/useAiAssistantOpenAi.js";
import { useTranslation } from "react-i18next";
import AiButton from "./common/AiButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 520,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const AiAssistant = ({
  label,
  name,
  fieldState,
  fieldProps,
  setValue,
  watch,
}) => {
  const { t: $t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  // modal state
  const [suggestion, setSuggestion] = React.useState("");
  const [editableText, setEditableText] = React.useState("");
  const [isEditing, setIsEditing] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");

  const { main, loading } = useAiAssistantopenAi();

  const currentInput = watch ? watch(name) : "";

  // ✅ Only show error if field has validation error
  const shouldShowError = !!fieldState?.error;

  const resetModal = () => {
    setSuggestion("");
    setEditableText("");
    setIsEditing(false);
    setErrMsg("");
  };

  const generateNow = async () => {
    try {
      setErrMsg("");
      setSuggestion("");
      setEditableText("");
      setIsEditing(false);

      const text = await main({ label, input: currentInput });

      if (!text || !String(text).trim()) {
        setErrMsg($t("application.autoGenerate.noSuggestion"));
        return;
      }

      setSuggestion(text);
      setEditableText(text);
    } catch (e) {
      console.error(e);
      setErrMsg($t("application.autoGenerate.error"));
    }
  };

  const handleOpen = async () => {
    setOpen(true);
    resetModal();
    await generateNow();
  };

  const handleClose = () => {
    setOpen(false);
    resetModal();
  };

  const handleAccept = () => {
    const finalText = (isEditing ? editableText : suggestion).trim();

    setValue(name, finalText, {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true,
    });

    handleClose();
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    handleClose();
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        <TextField
          fullWidth
          type={"textarea"}
          label={label}
          margin="normal"
          multiline
          minRows={3}
          error={shouldShowError}
          helperText={shouldShowError ? fieldState?.error?.message : undefined}
          {...fieldProps}
          // Remove the onChange prop - fieldProps already has it
        />

        <div
          style={{
            position: "absolute",
            right: 0,
            top: 20,
            transform: "scale(0.9)",
          }}
        >
          <AiButton onClick={handleOpen}>
            {$t("application.autoGenerate.helpMe")}
          </AiButton>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6">
            {$t("application.autoGenerate.helpMeWrite", { label })}
          </Typography>

          {loading && (
            <Box sx={{ mt: 2 }}>
              <Skeleton variant="text" height={30} />
              <Skeleton variant="text" height={30} />
              <Skeleton variant="rectangular" height={140} sx={{ mt: 1 }} />
            </Box>
          )}

          {!loading && errMsg && (
            <Box sx={{ mt: 2 }}>
              <Alert severity="error">{errMsg}</Alert>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  justifyContent: "flex-end",
                  mt: 2,
                }}
              >
                <Button type="button" onClick={handleCancel}>
                  {$t("application.autoGenerate.cancel")}
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  onClick={generateNow}
                  disabled={loading}
                >
                  {$t("application.autoGenerate.generateAgain")}
                </Button>
              </Box>
            </Box>
          )}

          {!loading && !errMsg && (suggestion || editableText) && (
            <Box sx={{ mt: 2 }}>
              {!isEditing ? (
                <Typography sx={{ whiteSpace: "pre-wrap" }}>
                  {suggestion}
                </Typography>
              ) : (
                <TextField
                  fullWidth
                  multiline
                  minRows={6}
                  label={$t("application.autoGenerate.editSuggestion")}
                  value={editableText}
                  onChange={(e) => setEditableText(e.target.value)}
                />
              )}

              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  justifyContent: "flex-end",
                  mt: 3,
                }}
              >
                <Button type="button" onClick={handleCancel}>
                  {$t("application.autoGenerate.cancel")}
                </Button>
                {!isEditing && (
                  <Button type="button" onClick={handleEdit}>
                    {$t("application.autoGenerate.edit")}
                  </Button>
                )}
                <Button
                  type="button"
                  variant="contained"
                  onClick={handleAccept}
                  disabled={
                    !(isEditing ? editableText.trim() : suggestion.trim())
                  }
                >
                  {$t("application.autoGenerate.accept")}
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default AiAssistant;
