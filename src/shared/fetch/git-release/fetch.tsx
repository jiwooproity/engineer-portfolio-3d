import gitInstance from "@/shared/fetch/gitInstance";
import { type GitReleaseResponseIF } from "@/shared/types/git-release-fetch";

const ID = "jiwooproity";
const REPOSITORY = "engineer-portfolio-3d";

export const getGitRelease = async () => {
  const url = `/${ID}/${REPOSITORY}/releases`;
  const { data } = (await gitInstance.get(url)) as GitReleaseResponseIF;

  return data[0];
};
