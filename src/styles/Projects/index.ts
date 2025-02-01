import { Box, styled } from "@mui/material";

export const ProjectGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridGap: theme.spacing(3),
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 2fr))",
  maxHeight: 520,
  overflowY: "auto",
  padding: "2em",
  width: "100%",
}));
