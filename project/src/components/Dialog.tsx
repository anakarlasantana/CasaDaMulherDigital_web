import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";

interface CustomDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image?: string;
  date?: string;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  open,
  onClose,
  title,
  description,
  image,
  date,
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{ height: 200, objectFit: "cover" }}
        />
      )}
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {date && (
          <Typography fontSize="12px" color="primary" gutterBottom>
            {date}
          </Typography>
        )}
        <Typography>{description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
