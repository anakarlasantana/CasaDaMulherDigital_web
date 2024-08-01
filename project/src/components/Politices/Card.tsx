import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import CustomDialog from "../Dialog";

interface PolicyCardProps {
  title: string;
  description: string;
  image?: string;
  date?: string;
}

const PolicyCard: React.FC<PolicyCardProps> = ({
  title,
  image,
  description,
  date,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card variant="elevation" sx={{}}>
        {image && (
          <CardMedia
            sx={{ maxHeight: "200px" }}
            component="img"
            image={image}
          />
        )}
        <CardContent sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h6" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography fontSize={"12px"} component="div" color={"primary"}>
            {date}
          </Typography>
          <Typography fontSize={"14px"} component="div" gutterBottom>
            {description.length > 100
              ? `${description.substring(0, 150)}...`
              : description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpen}>
            Saiba mais
          </Button>
        </CardActions>
      </Card>
      <CustomDialog
        open={open}
        onClose={handleClose}
        title={title}
        description={description}
        image={image}
        date={date}
      />
    </div>
  );
};

export default PolicyCard;
