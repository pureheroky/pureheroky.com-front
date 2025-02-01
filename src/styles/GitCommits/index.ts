import { Box, Select, styled, TableContainer } from "@mui/material";

export const GitCommitsTableContainer = styled(TableContainer)(({ theme }) => ({
  maxHeight: 500,
  overflowX: "auto",
  maxWidth: "100%",
  background: "transparent",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    overflowX: "scroll",
    maxWidth: 400,
  },
}));

export const GitCommitsSearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 12,
  width: "100%",
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    justifyContent: "start",
    width: "auto",
    flexDirection: "column",
  },
}));

export const GitCommitsSearchFilter = styled(Box)(() => ({
  display: "flex",
  gap: 12,
  alignItems: "center",
}));

export const GitCommitsSelect = styled(Select)(() => ({
  minWidth: 100,
  border: "none",
  "&.MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "&:focus": {
    border: "none",
    outline: "none",
    boxShadow: "none",
  },
}));
