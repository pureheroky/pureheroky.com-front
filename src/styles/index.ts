"use client";

import { Box, Input, styled, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { animated } from "react-spring";

type FontWeightOptions = "thin" | "thick";
type FontSizeOptions = "sm" | "mb" | "lg" | "xl" | string;

export const ObjectWrapper = styled(Box)(({ theme }) => ({
  maxWidth: 800,
  minWidth: 300,
  background: "transparent",
  backgroundColor: "transparent !important",
  boxShadow: "none",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  gridGap: "0",
  margin: "2em",
  justifyContent: "center",
  padding: "1em",
  [theme.breakpoints.up("md")]: {
    width: 800,
  },
}));

export const ObjectContent = styled(Box)(({ theme }) => ({
  minHeight: 400,
  width: "100%",

  [theme.breakpoints.down("md")]: {
    maxWidth: 400,
  },
}));

export const Text = styled(Typography)(
  ({
    weight = "thick",
    size = "1.5em",
  }: {
    weight?: FontWeightOptions;
    size?: FontSizeOptions;
  }) => {
    const fontWeights: Record<FontWeightOptions, number> = {
      thin: 200,
      thick: 500,
    };
    const fontSizes: Record<FontSizeOptions, string> = {
      sm: "0.9em",
      mb: "1em",
      lg: "1.1em",
      xl: "1.4em",
    };

    return {
      fontWeight: fontWeights[weight] || 500,
      fontSize: fontSizes[size as FontSizeOptions] || size,
      "@media (max-width: 768px)": {
        fontSize:
          size === "lg"
            ? fontSizes["mb"]
            : size === "mb"
            ? fontSizes["sm"]
            : fontSizes[size as FontSizeOptions],
      },
    };
  }
);

export const TextLink = styled(Link)(({ size }: { size?: string }) => ({
  fontWeight: 300,
  fontSize: size || "1.5em",
  textDecoration: "none",
  color: "#99B2DD",
  transition: "font-weight 0.1s ease",
  "&:hover": {
    fontWeight: 500,
  },
}));

export const BottomNavbarWrapper = styled(Box)(() => ({
  position: "fixed",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "20em",
  height: "3em",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  zIndex: 1000,
}));

export const ToolTipIconWrapper = styled("div")(() => ({
  position: "relative",
  display: "inline-block",
  cursor: "pointer",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "2px",
    backgroundColor: "#99B2DD",
    transform: "scaleX(0)",
    transformOrigin: "right",
    transition: "transform 0.3s ease",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "left",
  },
}));

export const BottomNavbarIcon = styled(Image)(() => ({
  width: "28px",
  height: "28px",
  paddingBottom: "2px",
  transition: "all 0.3s ease",

  "&:hover": {
    transform: "scale(1.4)",
  },
}));

export const ProgressBarWrapper = styled(animated.div)(({ theme }) => ({
  width: "30em",
  height: "20px",
  backgroundColor: "#181818",
  borderRadius: "10px",
  overflow: "hidden",
  position: "relative",
  margin: "1em",
  [theme.breakpoints.down("md")]: {
    width: "20em",
  },
}));

export const ProgressBarInner = styled(animated.div)(() => ({
  height: "100%",
  backgroundColor: "#3f51b5",
  borderRadius: "10px",
}));

export const ProgressBarText = styled(Typography)(() => ({
  position: "absolute",
  width: "100%",
  textAlign: "center",
  top: "0",
  lineHeight: "20px",
  fontSize: "12px",
  fontWeight: "bold",
  color: "#fff",
}));

export const AnimatedGradientBg = styled(animated.div)(() => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
  background: "linear-gradient(45deg, #282f94, #be1818)",
  backgroundSize: "400% 400%",
  animation: "gradientAnimation 15s ease infinite",

  "@keyframes gradientAnimation": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
}));

export const Search = styled(Input)(() => ({
  marginBottom: "1em",
  outline: "none",
  width: "100%",
}));

export const Spinner = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
}));
