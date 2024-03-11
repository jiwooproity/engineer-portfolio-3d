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
