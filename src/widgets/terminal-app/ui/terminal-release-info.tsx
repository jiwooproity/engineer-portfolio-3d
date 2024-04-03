import { useEffect, useState } from "react";
import { getGitRelease } from "@/entities/terminal";

interface GitReleaseResultsIF {
  tag_name: string;
  name: string;
  created_at: string;
  published_at: string;
  body: string;
}

const TerminalReleaseInfo = () => {
  const [release, setRelease] = useState<GitReleaseResultsIF>({
    body: "",
    created_at: "",
    name: "",
    published_at: "",
    tag_name: "",
  });

  const onLoad = async () => {
    const lastRelease = await getGitRelease();
    setRelease({ ...lastRelease });
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>
      <p className="release">{release.name}</p>
      <p>Published: {release.published_at}</p>
      <br />
      <div className="git-markdown" dangerouslySetInnerHTML={{ __html: release.body }}></div>
      <br />
      <p>Business: Dejay</p>
      <p>E-mail: jiwooproity@naver.com</p>
      <br />
      <p className="in-cursor">[ Front-End Developer ] Created By So Jiwoo</p>
    </>
  );
};

export default TerminalReleaseInfo;
