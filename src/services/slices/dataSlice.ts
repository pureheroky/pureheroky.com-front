import { UserData, Project, SkillsResponse, Commit } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface DataState {
  Data: UserData | undefined;
  Skills: SkillsResponse | undefined;
  Projects: Project[];
  Commits: Commit[];
}

const initialState: DataState = {
  Data: undefined,
  Skills: undefined,
  Projects: [],
  Commits: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<UserData>) {
      state.Data = action.payload;
    },
    setProjects(state, action: PayloadAction<Project[]>) {
      state.Projects = action.payload;
    },
    setSkills(state, action: PayloadAction<SkillsResponse>) {
      state.Skills = action.payload;
    },
    setCommits(state, action: PayloadAction<Commit[]>) {
      state.Commits = action.payload;
    },
  },
});

export const selectProjects = (state: RootState) => state.data.Projects;
export const selectCommits = (state: RootState) => state.data.Commits;

export const { setData, setProjects, setSkills, setCommits } = dataSlice.actions;
export default dataSlice.reducer;
