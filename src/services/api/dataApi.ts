import {
  Commit,
  CommitReponse,
  Project,
  ProjectResponse,
  RequestForm,
  SkillsResponse,
  UserData,
  UserDataResponse,
} from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8080",
  }),
  endpoints: (builder) => ({
    getUserData: builder.query<UserData, void>({
      query: () => "/user",
      transformResponse: (rawResult: UserDataResponse) => rawResult.data,
    }),
    getUserSkills: builder.query<SkillsResponse, void>({
      query: () => "/skills",
    }),
    getUserProjects: builder.query<Project[], void>({
      query: () => "/projects",
      transformResponse: (rawResult: ProjectResponse) => rawResult.projects,
    }),
    getUserCommits: builder.query<Commit[], void>({
      query: () => "/commits",
      transformResponse: (rawResult: CommitReponse) => rawResult.commits,
    }),
    sendUserMessage: builder.mutation<RequestForm, RequestForm>({
      query: (body) => ({
        url: "/request",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            toast.success("Message successfully sent");
          }
        } catch (error) {
          toast.error("Error occured");
          console.warn(error);
        }
      },
    }),
  }),
});

export const {
  useGetUserDataQuery,
  useGetUserSkillsQuery,
  useGetUserProjectsQuery,
  useGetUserCommitsQuery,
  useSendUserMessageMutation,
} = dataApi;
