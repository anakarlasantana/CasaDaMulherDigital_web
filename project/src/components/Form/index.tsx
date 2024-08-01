import { Stack, Typography } from "@mui/material";
import TextFieldForm from "./TextField";

const Contact = () => {
  return (
    <Stack id="contact">
      <Typography variant="h5" gutterBottom textAlign={"center"}>
        Contato
      </Typography>
      <TextFieldForm/>
    </Stack>
  );
};

export default Contact;
