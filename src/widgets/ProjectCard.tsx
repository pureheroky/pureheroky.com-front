import { ProjectCardWrapper } from "@/styles/ProjectCard";
import { Project } from "@/types";
import { Spinner, Text } from "@/styles";
import { useAppDispatch } from "@/hooks/redux";
import { setOpenProject } from "@/services/slices/openProjectSlice";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

const ProjectCard: React.FC<Project> = (props) => {
  const dispatch = useAppDispatch();
  const { name, image, development_status } = props;

  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = `https://akirakayoo.store${image}`;
    img.onload = () => {
      setIsImageLoading(false);
    };
  }, [image]);

  return (
    <ProjectCardWrapper
      image={image}
      onClick={() => {
        dispatch(setOpenProject(props));
      }}
    >
      {isImageLoading && (
        <Spinner>
          <CircularProgress />
        </Spinner>
      )}
      <Text textAlign={"center"} size="xl" weight="thin">
        {name}
      </Text>
      <Text size="lg">{development_status}</Text>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
