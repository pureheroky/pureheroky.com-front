"use client";

import { HomeWrapper, MainContent } from "@/styles/Home";
import { useState, useEffect } from "react";
import { useSpring } from "@react-spring/web";
import { AnimatedGradientBg } from "@/styles";
import BottomNavbar from "@/widgets/BottomNavbar";
import Profile from "@/components/Profile/Profile";
import About from "@/components/About/About";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  useGetUserCommitsQuery,
  useGetUserDataQuery,
  useGetUserProjectsQuery,
  useGetUserSkillsQuery,
} from "@/services/api/dataApi";
import Skills from "@/components/Skills/Skills";
import { Projects } from "@/components/Projects";
import { AnimatedText, ProgressBar } from "@/widgets";
import GitCommits from "@/components/GitCommits/GitCommits";
import {
  setCommits,
  setData,
  setProjects,
  setSkills,
} from "@/services/slices/dataSlice";
import { Request } from "@/components/Request";

const Home = () => {
  const dispatch = useAppDispatch();

  const { data: userData, isLoading: isUserDataLoading } =
    useGetUserDataQuery();
  const { data: userSkills, isLoading: isUserSkillsLoading } =
    useGetUserSkillsQuery();
  const { data: userProjects, isLoading: isUserProjectsLoading } =
    useGetUserProjectsQuery();
  const { data: userCommits, isLoading: isUserCommitsLoading } =
    useGetUserCommitsQuery();

  const loadingCount = [
    isUserDataLoading,
    isUserSkillsLoading,
    isUserProjectsLoading,
    isUserCommitsLoading,
  ].filter(Boolean).length;

  const totalRequests = 4;
  const progress = ((totalRequests - loadingCount) / totalRequests) * 100;

  const [showGradient, setShowGradient] = useState(false);
  const [textMounted, setTextMounted] = useState(true);
  const [textVisible, setTextVisible] = useState(true);
  const [progressState, setProgressState] = useState(0);

  useEffect(() => {
    if (userData && userSkills && userProjects && userCommits) {
      dispatch(setData(userData));
      dispatch(setSkills(userSkills));
      dispatch(setProjects(userProjects));
      dispatch(setCommits(userCommits));
    }
  }, [dispatch, userData, userSkills, userProjects, userCommits]);

  useEffect(() => {
    if (progressState < progress) {
      setProgressState(progress);
    }
  }, [progress, progressState]);

  const currentPage = useAppSelector((state) => state.page.currentPage);

  const setPageContent = () => {
    switch (currentPage) {
      case 0:
        return <Profile />;
      case 1:
        return <About />;
      case 2:
        return <Skills />;
      case 3:
        return <Projects />;
      case 4:
        return <GitCommits />;
      case 5:
        return <Request />;
      default:
        return <></>;
    }
  };

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setShowGradient(true), 500);
    }
  }, [progress]);

  const gradientProps = useSpring({
    opacity: showGradient ? 1 : 0,
    config: { duration: 2000 },
    onRest: () => {
      if (showGradient) {
        setTextVisible(false);
      }
    },
  });

  const contentProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: !textMounted ? 1 : 0 },
    config: { duration: 1200 },
  });

  return (
    <HomeWrapper>
      <AnimatedGradientBg style={gradientProps} />
      {textMounted && (
        <>
          <AnimatedText
            visible={textVisible}
            onRest={() => {
              if (!textVisible) {
                setTextMounted(false);
              }
            }}
          >
            welcome to pureheroky.com
          </AnimatedText>

          <ProgressBar
            value={progressState}
            max={100}
            label={true}
            visible={textVisible}
            onRest={() => {}}
          />
        </>
      )}

      {!textMounted && (
        <>
          <MainContent style={contentProps}>
            {setPageContent()}
            <BottomNavbar />
          </MainContent>
        </>
      )}
    </HomeWrapper>
  );
};

export default Home;
