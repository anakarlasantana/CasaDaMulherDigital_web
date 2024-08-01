import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import MaskedInput from "../../utils/mask";
import { useToastContext } from "../../contexts/ToastContext";
import FormDataProps from "../../interfaces/formatData";
import { contact } from "../../service/contact";
import { useState } from "react";

const TextFieldForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormDataProps>();

  const [loading, setLoading] = useState(false);
  const { openToast, errorToast } = useToastContext();

  const onSubmit: SubmitHandler<FormDataProps> = async (data) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      await contact.create(data);
      openToast("Informações registradas com sucesso");
      reset();
    } catch (error) {
      console.error("Error:", error);
      errorToast("Erro ao registrar dados");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {loading ? (
          <Stack
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress color="primary"/>
            <Typography variant="h6" >
              Carregando...
            </Typography>
          </Stack>
        ) : (
          <>
            <Stack>
              <TextField
                id="standard-multiline-static"
                label="Nome"
                multiline
                variant="filled"
                {...register("name", { required: "Nome é obrigatório" })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                id="standard-multiline-static"
                label="Email"
                multiline
                type="email"
                variant="filled"
                {...register("email", {
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email inválido",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <MaskedInput
                control={control}
                mask="(99) 99999-9999"
                variant="filled"
                label="Telefone"
                placeholder="Ex: (00) 0000-0000"
                {...register("phone", { required: "Telefone é obrigatório" })}
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
              <TextField
                id="standard-multiline-static"
                label="Adicione sua message"
                multiline
                rows={4}
                variant="filled"
                {...register("message", { required: "Mensagem é obrigatória" })}
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            </Stack>
            <Stack alignItems={"end"}>
              <Button
                type="submit"
                variant="contained"
                color="info"
                sx={{ m: 1 }}
              >
                Enviar
              </Button>
            </Stack>
          </>
        )}
      </Box>
    </Grid>
  );
};

export default TextFieldForm;
