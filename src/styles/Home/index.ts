"use client";

import { Box, styled } from "@mui/material";
import { animated } from "react-spring";

export const HomeWrapper = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  flexDirection: "column",
}));

export const MainContent = styled(animated.div)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
