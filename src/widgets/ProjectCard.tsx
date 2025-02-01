import { ProjectCardWrapper } from "@/styles/ProjectCard";
import { Project } from "@/types";
import { Text } from "@/styles";
import { useAppDispatch } from "@/hooks/redux";
import { setOpenProject } from "@/services/slices/openProjectSlice";

const ProjectCard: React.FC<Project> = (props) => {
  const dispatch = useAppDispatch();
  const { name, image, development_status } = props;

  return (
    <ProjectCardWrapper
      image={image}
      onClick={() => {
        dispatch(setOpenProject(props));
      }}
    >
      <Text textAlign={"center"} size="xl" weight="thin">
        {name}
      </Text>
      <Text size="lg">{development_status}</Text>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
