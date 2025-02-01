import { Project } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface OpenProjectState {
  OpenProject: Project | null;
}

const initialState: OpenProjectState = {
  OpenProject: null,
};

const openProjectSlice = createSlice({
  name: "openProject",
  initialState,
  reducers: {
    setOpenProject(state, action: PayloadAction<Project | null>) {
      state.OpenProject = action.payload;
    },
  },
});

export const selectOpenProject = (state: RootState) =>
  state.openProject.OpenProject;

export const { setOpenProject } = openProjectSlice.actions;
export default openProjectSlice.reducer;
