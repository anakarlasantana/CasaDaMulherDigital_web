import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import ReactInputMask from "react-input-mask";
import { Controller, Control } from "react-hook-form";

interface MaskProps extends Omit<TextFieldProps, "InputProps"> {
  mask: string;
  control: Control;
  name: string;
}

const MaskedInput: React.FC<MaskProps> = ({ mask, control, name, ...props }) => {
  const InputMaskComponent = (inputProps: any) => (
    <ReactInputMask
      {...inputProps}
      mask={mask}
      alwaysShowMask={false}
      maskPlaceholder=""
    />
  );

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "Campo é obrigatório" }}
      render={({ field, fieldState }) => (
        <TextField
          {...props}
          {...field}
          InputProps={{
            inputComponent: InputMaskComponent,
          }}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};

export default MaskedInput;
