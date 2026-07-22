import Box from "@mui/material/Box";
import InputBase, { type InputBaseProps } from "@mui/material/InputBase";
import { useId } from "react";
import { color, radius, typography } from "../../theme";

export interface TextFieldProps extends Omit<InputBaseProps, "error"> {
  label: string;

  error?: string;
}

export const TextField = ({ label, error, sx, ...rest }: TextFieldProps) => {
  const id = useId();
  const hasError = Boolean(error);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        width: "100%",
      }}
    >
      <Box
        component="label"
        htmlFor={id}
        sx={{
          ...typography.label,
          color: hasError ? color.status.error : color.text.secondary,
        }}
      >
        {label}
      </Box>

      <InputBase
        id={id}
        error={hasError}
        aria-describedby={hasError ? `${id}-error` : undefined}
        {...rest}
        sx={{
          backgroundColor: color.bg.paper,
          borderRadius: `${radius.sm}px`,
          border: `1px solid ${hasError ? color.status.error : color.border.strong}`,
          px: "12px",
          py: "10px",
          "&:focus-within": {
            border: `2px solid ${hasError ? color.status.error : color.accent.default}`,
            px: "11px",
            py: "9px",
          },
          "& .MuiInputBase-input": {
            p: 0,
            ...typography.body,
            color: color.text.primary,
            "&::placeholder": { color: color.text.secondary, opacity: 1 },
          },
          ...sx,
        }}
      />

      {hasError && (
        <Box
          id={`${id}-error`}
          sx={{ ...typography.helper, color: color.status.error }}
        >
          {error}
        </Box>
      )}
    </Box>
  );
};
