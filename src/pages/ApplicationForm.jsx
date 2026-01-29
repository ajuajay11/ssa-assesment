import React, { useCallback, useMemo, useState, useEffect } from "react";
import { Steps, defaultForm } from "../utils/forms";
import { useForm, useController } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import HandleInputForm from "../components/HandleInputForm";
import { useTranslation } from "react-i18next";
import { applicationData } from "../store/settings/settingSlice";
import AiAssistant from "../components/AiAssistant";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SsaButton from "../components/common/Button";

// ✅ Move ControlledField OUTSIDE the component
const ControlledField = ({ field, fieldIndex, control, setValue, watch, errors, $t }) => {
  const getValidationRules = () => {
    const rules = {
      required: field.required
        ? $t("application.validation.required", {
            field: $t(`application.fields.${field.name}`) || field.label,
          })
        : false,
    };

    if (
      field.type === "text" &&
      ["name", "city", "country"].includes(field.name)
    ) {
      rules.pattern = {
        value: /^[A-Za-z\s]+$/i,
        message: $t(`application.validation.alphabetical_only`, {
          field: $t(`application.fields.${field.name}`) || field.label,
        }),
      };
    }

    if (field.name === "address") {
      rules.pattern = {
        value: /^[A-Za-z0-9\s.,#-]+$/i,
        message:
          $t(`application.validation.alphanumeric_punctuation_only`, {
            field: $t(`application.fields.${field.name}`) || field.label,
          }) ||
          "Should only contain letters, numbers, and common symbols (.,#-)",
      };
    }

    if (field.name === "nationalId") {
      rules.pattern = {
        value: /^[A-Za-z0-9]+$/i,
        message:
          $t(`application.validation.alphanumeric_only`, {
            field: $t(`application.fields.${field.name}`) || field.label,
          }) || "Should only contain letters and numbers",
      };
    }

    if (field.type === "email") {
      rules.pattern = {
        value: /^\S+@\S+\.\S+$/,
        message: $t("application.validation.email_invalid"),
      };
    }

    if (field.type === "tel") {
      rules.minLength = {
        value: 7,
        message: $t("application.validation.phone_short"),
      };
    }

    if (field.type === "number") {
      rules.min = {
        value: 1,
        message:
          $t("application.validation.min_positive") ||
          "Value must be more than 0",
      };
      rules.validate = (val) =>
        Number(val) > 0 ||
        $t("application.validation.min_positive") ||
        "Value must be more than 0";
    }

    if (field.type === "textarea-ai") {
      rules.minLength = {
        value: 10,
        message: $t("application.validation.min_chars", { count: 10 }),
      };
      rules.maxLength = {
        value: 1000,
        message: $t("application.validation.max_chars", { count: 1000 }),
      };
    }

    return rules;
  };

  const { field: fieldProps, fieldState } = useController({
    name: field.name,
    control,
    rules: getValidationRules(),
  });

  return (
    <Grid
      key={fieldIndex}
      size={field.type === "textarea-ai" ? { xs: 12 } : { xs: 12, md: 6 }}
    >
      {field.type === "textarea-ai" ? (
        <Box sx={{ mb: 2 }}>
          <AiAssistant
            fieldState={fieldState}
            fieldProps={fieldProps}
            setValue={setValue}
            watch={watch}
            name={field.name}
            label={$t(`application.fields.${field.name}`) || field.label}
          />
        </Box>
      ) : (
        <HandleInputForm
          field={field}
          fieldState={fieldState}
          fieldProps={fieldProps}
          errors={errors}
          setValue={setValue}
          watch={watch}
        />
      )}
    </Grid>
  );
};

export default function ApplicationForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeStep]);

  const { t: $t, i18n } = useTranslation();
  const isRtl = i18n.dir() === "rtl";

  const theme = useMemo(
    () =>
      createTheme({
        direction: i18n.dir(),
        typography: {
          fontFamily:
            'var(--font-primary, "Inter", "Roboto", "Helvetica", "Arial", sans-serif)',
        },
      }),
    [i18n],
  );

  const getFormData = useSelector((state) => state.settings.application);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    trigger,
    getValues,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: Object.keys(getFormData).length ? getFormData : defaultForm,
  });

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(applicationData(data));
    setSnackbarOpen(true);
    setActiveStep(Steps.length);
    setTimeout(() => {
      setActiveStep(0);
      dispatch(applicationData([]));
      location.reload("/");
    }, 3000);
  };

  const nextStep = useCallback(async () => {
    const fieldsToValidate = Steps[activeStep].fields.map((f) => f.name);

    const isValid = await trigger(fieldsToValidate);
    const currentValues = getValues();
    if (isValid) {
      dispatch(applicationData(currentValues));
      setActiveStep((prev) => prev + 1);
    }
  }, [activeStep, trigger, getValues, dispatch]);

  const prevStep = () => setActiveStep((prev) => prev - 1);

  const currentStep = Steps[activeStep];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ py: { xs: 2, md: 8 }, minHeight: "100vh", bgcolor: "grey.50" }}
        dir={i18n.dir()}
      >
        <div className="container mx-auto p-4">
          <Box sx={{ width: "100%", maxWidth: 1000, mx: "auto" }}>
            <Box
              sx={{
                p: { xs: 2, md: 6 },
                bgcolor: "background.paper",
                borderRadius: 4,
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <Stepper
                activeStep={activeStep}
                sx={{
                  mb: 6,
                  "& .MuiStepConnector-root": {
                    insetInlineStart: "calc(-50% + 20px)",
                    insetInlineEnd: "calc(50% + 20px)",
                  },
                  "& .MuiStepConnector-line": {
                    borderColor: "#e0e0e0",
                  },
                }}
                alternativeLabel
              >
                {Steps.map((step, index) => (
                  <Step key={index}>
                    <StepLabel
                      error={
                        !!Object.keys(errors).some((key) =>
                          step.fields.some((f) => f.name === key),
                        )
                      }
                    >
                      {$t(`application.steps.${step.name?.toLowerCase()}`) ||
                        step.label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>

              {activeStep === Steps.length ? (
                <Box
                  sx={{
                    textAlign: "center",
                    py: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      bgcolor: "success.light",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      color: "success.main",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    }}
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </Box>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ fontWeight: "800", color: "text.primary" }}
                  >
                    {$t("application.steps.all_done") || "All Done!"}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="textSecondary"
                    sx={{ mb: 4, maxWidth: 600, lineHeight: 1.6 }}
                  >
                    {$t("application.steps.success_submit") ||
                      "Your application has been submitted successfully."}
                  </Typography>
                </Box>
              ) : (
                <>
                  <Typography
                    variant="h5"
                    sx={{ mb: 4, fontWeight: "700", color: "primary.main" }}
                  >
                    {$t(
                      `application.steps.${currentStep?.name?.toLowerCase()}`,
                    ) || currentStep?.label}
                  </Typography>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Enter" &&
                        e.target.tagName !== "TEXTAREA"
                      ) {
                        e.preventDefault();
                        if (activeStep === Steps.length - 1) {
                          handleSubmit(onSubmit)();
                        } else {
                          nextStep();
                        }
                      }
                    }}
                  >
                    <Grid container spacing={3}>
                      {currentStep?.fields.map((field, idx) => (
                        <ControlledField
                          key={field.name}
                          field={field}
                          fieldIndex={idx}
                          control={control}
                          setValue={setValue}
                          watch={watch}
                          errors={errors}
                          $t={$t}
                        />
                      ))}
                    </Grid>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        pt: 6,
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        color="inherit"
                        variant="outlined"
                        disabled={activeStep === 0}
                        onClick={prevStep}
                        sx={{
                          px: 4,
                          borderRadius: 2,
                          textTransform: "none",
                          fontWeight: "600",
                          height: "48px",
                        }}
                      >
                        {$t("application.buttons.back")}
                      </Button>

                      <SsaButton
                        onClick={
                          activeStep === Steps.length - 1
                            ? handleSubmit(onSubmit)
                            : nextStep
                        }
                        type="button"
                      >
                        {activeStep === Steps.length - 1
                          ? $t("application.buttons.submit")
                          : $t("application.buttons.next")}
                      </SsaButton>
                    </Box>
                  </form>
                </>
              )}
            </Box>
          </Box>
        </div>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: isRtl ? "left" : "right",
          }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%", borderRadius: 2 }}
          >
            {$t("application.steps.success_submit")}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}