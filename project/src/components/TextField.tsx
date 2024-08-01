// import React, { useEffect } from "react";
// import FormControl from "@mui/material/FormControl";
// import FormHelperText from "@mui/material/FormHelperText";
// import MUITextField, { TextFieldProps } from "@mui/material/TextField";
// import ReactInputMask from "react-input-mask";
// import { useFormContext } from "react-hook-form";

// export type CustomTextFieldProps = TextFieldProps & {
//   name: string;
//   mask?: string;
//   min?: number;
//   max?: number;
// };

// const TextField: React.FC<CustomTextFieldProps> = ({
//   name,
//   label,
//   mask,
//   min,
//   max,
//   ...rest
// }) => {
//   const {
//     register,
//     formState: { errors },
//   } = useFormContext();
//   const inputRef = React.useRef<HTMLInputElement>(null);

//   // Register the field with react-hook-form
//   const { onChange, onBlur, name: fieldName, ref, registerField } = register(name);

  
//   useEffect(() => {
//     registerField({
//       name: fieldName,
//       ref: inputRef.current,
//       path: "value",
//     });
//   }, [fieldName, registerField]);

//   return (
//     <FormControl
//       error={!!errors[name]}
//       variant="standard"
//       style={{ width: "100%" }}
//     >
//       {label && <label htmlFor={name}>{label}</label>}
//       {mask ? (
//         <ReactInputMask mask={mask} onChange={() => {}} {...rest}>
//           {(inputProps) => (
//             <MUITextField
//               {...inputProps}
//               inputRef={inputRef}
//               value={value}
//               id={fieldName}
//               defaultValue={defaultValue}
//             />
//           )}
//         </ReactInputMask>
//       ) : (
//         <MUITextField
//           {...register(name)}
//           inputRef={inputRef}
//           id={name}
//           InputProps={{ inputProps: { min, max } }}
//           variant="outlined"
//           {...rest}
//         />
//       )}
//       <FormHelperText>{errors[name]?.message}</FormHelperText>
//     </FormControl>
//   );
// };

// export default TextField;
