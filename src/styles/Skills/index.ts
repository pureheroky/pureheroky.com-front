import { Box, Paper, styled } from "@mui/material";

export const SkillsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridGap: theme.spacing(2),
  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
  width: "100%",
  maxHeight: 400,
  overflowY: "auto",
  padding: "1em",
}));

export const SkillsItem = styled(Paper)(() => ({
  padding: "10px",
  textAlign: "center",
  background: "transparent",
  height: "5em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
