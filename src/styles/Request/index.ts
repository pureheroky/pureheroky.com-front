import { Box, Button, styled, TextField } from "@mui/material";

export const RequestFields = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: 8,
  flexDirection: "column",
  justifyContent: "start",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
  },
}));

export const RequestField = styled(TextField)(({ theme }) => ({
  maxWidth: "15em",
  margin: "0em 0em 1.5em 0em",
  [theme.breakpoints.down("md")]: {
    maxWidth: "unset",
    width: "100%",
  },
}));

export const RequestTextArea = styled(TextField)(({ theme }) => ({
  minHeight: "15em",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    minHeight: "unset",
  },
}));

export const RequestSend = styled(Button)(({ theme }) => ({
  width: "100%",
  maxWidth: "15em",
  alignSelf: "center",
  [theme.breakpoints.down("md")]: {
    marginTop: "3.5em",
  },
}));
