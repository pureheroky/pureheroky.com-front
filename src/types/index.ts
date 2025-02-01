export type ProgressBarProps = {
  value: number;
  max: number;
  label?: boolean;
};

export type UserData = {
  username: string;
  age: number;
  status: string;
  avatar: string;
};

export type UserDataResponse = {
  data: UserData;
  status: number;
};

export type SkillsResponse = {
  skills: string[];
  status: number;
};

export type Project = {
  name: string;
  description: string;
  date: string;
  image: string;
  git_link: string;
  development_status: string;
  web_link: string;
};

export type ProjectResponse = {
  projects: Project[];
  status: number;
};

export type Commit = {
  project_name: string;
  branch: string;
  date: string;
  message: string;
};

export type CommitReponse = {
  commits: Commit[];
  status: number;
};

export type RequestForm = {
  username: string;
  useremail: string;
  usermessage: string;
};

export type RequestFormErrors = {
  username: boolean;
  useremail: boolean;
  usermessage: boolean;
};
