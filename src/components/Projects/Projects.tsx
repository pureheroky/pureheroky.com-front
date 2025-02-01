import { useAppSelector } from "@/hooks/redux";
import { selectProjects } from "@/services/slices/dataSlice";
import { ObjectContent, ObjectWrapper } from "@/styles";
import { ProjectGrid } from "@/styles/Projects";
import { ProjectCard, ProjectModal } from "@/widgets";

const Projects: React.FC = () => {
  const projects = useAppSelector(selectProjects) || [];

  return (
    <ObjectWrapper>
      <ObjectContent>
        <ProjectGrid>
          {projects.map((project, ind) => {
            return (
              <ProjectCard
                key={ind}
                name={project.name}
                image={project.image}
                git_link={project.git_link}
                date={project.date}
                description={project.description}
                development_status={project.development_status}
                web_link={project.web_link}
              />
            );
          })}
        </ProjectGrid>
      </ObjectContent>
      <ProjectModal />
    </ObjectWrapper>
  );
};

export default Projects;
