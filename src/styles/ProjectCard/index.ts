import { Paper, styled } from "@mui/material";

export const ProjectCardWrapper = styled(Paper)(
  ({ image }: { image: string }) => ({
    minWidth: 200,
    minHeight: 220,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(http://127.0.0.1:8080${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",

    "&:hover": {
      transform: "scale(1.1)",
    },

    "&:hover::after": {
      transform: "scale(1)",
    },
  })
);
