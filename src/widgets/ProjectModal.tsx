import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  selectOpenProject,
  setOpenProject,
} from "@/services/slices/openProjectSlice";
import { ToolTipIconWrapper, Text, Spinner } from "@/styles";
import {
  ProjectActionIcon,
  ProjectActions,
  ProjectImage,
  ProjectImageWrapper,
  ProjectModalClose,
  ProjectModalContent,
  ProjectModalData,
  ProjectModalTextData,
  ProjectModalWrapper,
} from "@/styles/ProjectModal";
import { CloseOutlined } from "@mui/icons-material";
import { git, website } from "@/assets/images";
import { CircularProgress, Tooltip } from "@mui/material";
import { useState } from "react";

const ProjectModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const openProject = useAppSelector(selectOpenProject);
  const [isProjectImageLoading, setIsProjectImageLoading] = useState(true);

  const handleClose = () => {
    dispatch(setOpenProject(null));
  };

  if (!openProject) return;

  return (
    <ProjectModalWrapper open={!!openProject} onClose={handleClose}>
      <ProjectModalContent>
        <ProjectModalClose>
          <CloseOutlined sx={{ cursor: "pointer" }} onClick={handleClose} />
        </ProjectModalClose>
        <ProjectModalData>
          <ProjectImageWrapper>
            {isProjectImageLoading && (
              <Spinner>
                <CircularProgress />
              </Spinner>
            )}
            <ProjectImage
              src={`https://akirakayoo.store${openProject.image}`}
              alt={openProject.name}
              width={500}
              height={500}
              priority
              onLoadingComplete={() => setIsProjectImageLoading(true)}
            />
          </ProjectImageWrapper>
          <ProjectModalTextData>
            <Text textAlign={"center"} size="lg">
              {openProject.name} - {openProject.development_status}
            </Text>
            <Text textAlign={"center"} size="md">
              release date: {openProject.date}
            </Text>
            <Text sx={{ marginTop: "1em" }} textAlign={"center"} size="sm">
              {openProject.description}
            </Text>
          </ProjectModalTextData>
          <ProjectActions>
            {openProject.web_link ? (
              <Tooltip title="Website">
                <ToolTipIconWrapper>
                  <ProjectActionIcon
                    src={website}
                    alt="website"
                    onClick={() => {
                      open(openProject.web_link, "_blank");
                    }}
                  />
                </ToolTipIconWrapper>
              </Tooltip>
            ) : (
              <></>
            )}
            <Tooltip title="Project page">
              <ToolTipIconWrapper>
                <ProjectActionIcon
                  src={git}
                  alt="Project page"
                  onClick={() => {
                    open(openProject.git_link, "_blank");
                  }}
                />
              </ToolTipIconWrapper>
            </Tooltip>
          </ProjectActions>
        </ProjectModalData>
      </ProjectModalContent>
    </ProjectModalWrapper>
  );
};

export default ProjectModal;
