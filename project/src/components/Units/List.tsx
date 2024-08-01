import { LocationOn } from "@mui/icons-material";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { UnitProps } from "../../interfaces/units";


export default function ListUnit({ name, address, email, phone }: UnitProps) {
  return (
    <List sx={{ maxHeight: 360, bgcolor: "background.paper"}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LocationOn />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                variant="inherit"
                color="text.primary"
              >
                {address}
              </Typography>
              <Typography fontSize={"14px"}>{email}</Typography>
              <Typography fontSize={"14px"}>{phone}</Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
