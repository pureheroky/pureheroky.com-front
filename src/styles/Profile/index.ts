import { Box, styled } from "@mui/material";
import Image from "next/image";

export const ProfileWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: 600,
}));

export const ProfileAvatarWrapper = styled(Box)(() => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "20em",
  height: "20em",
}));

export const ProfileAvatarCat = styled(Image)(() => ({
  position: "absolute",
  display: "flex",
  bottom: "0",
  right: "0",
  width: "10em",
  height: "10em",
}));

export const ProfileAvatar = styled(Image)(() => ({
  width: "15em",
  height: "15em",
  padding: "1em",
  borderRadius: "50%",
}));

export const ProfileInfo = styled(Box)(() => ({
  display: "flex",
  margin: "2em",
  flexDirection: "column",
  alignItems: "center",
}));

export const ProfileStatus = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  gap: "8px",
}));
