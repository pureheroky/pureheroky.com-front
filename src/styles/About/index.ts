import { Box, CardContent, styled, Typography } from "@mui/material";

export const AboutCardContent = styled(CardContent)(() => ({
  boxShadow: "none",
}));

export const CardHeader = styled(Typography)(() => ({
  fontSize: "1.5rem",
  fontWeight: 200,
  textAlign: "center",
  marginBottom: "0.5em",
}));

export const InfoRow = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "0.5em 0",
}));
