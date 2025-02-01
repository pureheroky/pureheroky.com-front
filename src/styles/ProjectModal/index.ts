import { Box, Modal, Paper, styled } from "@mui/material";
import Image from "next/image";

export const ProjectModalWrapper = styled(Modal)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  margin: "1em",
}));

export const ProjectModalContent = styled(Paper)(() => ({
  padding: "20px",
  width: "100%",
  maxWidth: 800,
  minHeight: 500,
  outline: "none",
  display: "flex",
  flexDirection: "column",
}));

export const ProjectModalClose = styled(Box)(() => ({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
}));

export const ProjectModalData = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  padding: "1em",
}));

export const ProjectModalTextData = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1em",
  margin: "1em",
}));

export const ProjectImageWrapper = styled(Box)(() => ({
  width: "20em",
  height: "11em",
}));

export const ProjectImage = styled(Image)(() => ({
  width: "20em",
  height: "11em",
  borderRadius: "10px",
  position: "relative",
}));

export const ProjectActions = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
}));

export const ProjectActionIcon = styled(Image)(() => ({
  width: "42px",
  height: "42px",
  paddingBottom: "2px",
  transition: "all 0.3s ease",

  "&:hover": {
    transform: "scale(1.2)",
  },
}));
