"use client";

import * as images from "@/assets/images";
import { useAppDispatch } from "@/hooks/redux";
import { setPage } from "@/services/slices/navigationSlice";
import {
  BottomNavbarIcon,
  ToolTipIconWrapper,
  BottomNavbarWrapper,
} from "@/styles";
import { Tooltip } from "@mui/material";
import React from "react";

const NavbarButtons = [
  { title: "Profile", image: images.profile, page: 0 },
  { title: "About", image: images.about, page: 1 },
  { title: "Skills", image: images.skills, page: 2 },
  { title: "Projects", image: images.project, page: 3 },
  { title: "Latest commits", image: images.git, page: 4 },
  { title: "Request", image: images.request, page: 5 },
];

const BottomNavbar: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <BottomNavbarWrapper>
      {NavbarButtons.map((btn, ind) => {
        return (
          <Tooltip key={ind} title={btn.title}>
            <ToolTipIconWrapper>
              <BottomNavbarIcon
                src={btn.image}
                alt={btn.title}
                onClick={() => {
                  dispatch(setPage(btn.page));
                }}
              />
            </ToolTipIconWrapper>
          </Tooltip>
        );
      })}
    </BottomNavbarWrapper>
  );
};

export default BottomNavbar;
