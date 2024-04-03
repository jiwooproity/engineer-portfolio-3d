import { gitInstance } from "@/shared/api";

import dayjs from "dayjs";
import { marked } from "marked";

export interface GitReleaseResultsIF {
  tag_name: string;
  name: string;
  created_at: string;
  published_at: string;
  body: string;
}

export interface GitReleaseResponseIF {
  data: GitReleaseResultsIF[];
}

const ID = "jiwooproity";
const REPOSITORY = "engineer-portfolio-3d";

const getGitRelease = async () => {
  const url = `/${ID}/${REPOSITORY}/releases`;
  const { data } = (await gitInstance.get(url)) as GitReleaseResponseIF;
  const lastRelease = data[0];

  const date = dayjs(lastRelease.published_at).format("YYYY-MM-DD");
  const html = await marked.parse(lastRelease.body);

  return { ...lastRelease, published_at: date, body: html };
};

export default getGitRelease;
