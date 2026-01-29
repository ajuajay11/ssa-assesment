import React, { memo } from "react";
import { MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";

const HandleInputForm = memo(({ field, fieldState, fieldProps }) => {
  const { t: $t } = useTranslation();
 
  return (
    <Box>
      {(field.type === "text" || field.type === "tel" || field.type === "email" || field.type === "date") && (
        <TextField
          fullWidth
          type={field.type}
          label={$t(`application.fields.${field.name}`) || field.label}
          variant="outlined"
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
          slotProps={field.type === "date" ? { inputLabel: { shrink: true } } : {}}
          {...fieldProps}
          onChange={(e) => {
            fieldProps.onChange(e);
          }}
        />
      )}

      {field.type === "number" && (
        <TextField
          fullWidth
          type="number"
          label={$t(`application.fields.${field.name}`) || field.label}
          variant="outlined"
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
          {...fieldProps}
        />
      )}

      {field.type === "select" && (
        <TextField
          {...fieldProps}
          select
          fullWidth
          label={$t(`application.fields.${field.name}`)}
          error={!!fieldState?.error}
          helperText={fieldState?.error?.message}
        >
          <MenuItem value="" disabled>
            {$t("application.select.placeholder")}
          </MenuItem>
          {field.options?.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {$t(`application.${field.name}.${option.value}`) || option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    </Box>
  );
});

export default HandleInputForm;