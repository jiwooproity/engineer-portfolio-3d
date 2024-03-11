import { gitInstance } from "@/shared/fetch/instance";
import { type GitReleaseResponseIF } from "@/shared/types/git/git-release";

import dayjs from "dayjs";
import { marked } from "marked";

const ID = "jiwooproity";
const REPOSITORY = "engineer-portfolio-3d";

export const getGitRelease = async () => {
  const url = `/${ID}/${REPOSITORY}/releases`;
  const { data } = (await gitInstance.get(url)) as GitReleaseResponseIF;
  const lastRelease = data[0];

  const date = dayjs(lastRelease.published_at).format("YYYY-MM-DD");
  const html = await marked.parse(lastRelease.body);

  return { ...lastRelease, published_at: date, body: html };
};
