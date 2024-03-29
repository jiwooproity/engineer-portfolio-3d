import "./terminal.css";

import { useEffect, useState } from "react";

import { useWindows } from "@/shared/hooks";

import { getGitRelease } from "@/shared/fetch/git-release/fetch";
import { type GitReleaseResultsIF } from "@/shared/types/git/git-release";

const GitLoader = () => {
  return <p className="in-cursor">Loading Git Release Information .. </p>;
};

const GitReleaseInfo = ({ data }: { data: GitReleaseResultsIF }) => {
  return (
    <>
      <p className="release">{data.name}</p>
      <p>Published: {data.published_at}</p>
      <br />
      <div
        className="git-markdown"
        dangerouslySetInnerHTML={{ __html: data.body }}
      ></div>
      <br />
      <p>Business: Dejay</p>
      <p>E-mail: jiwooproity@naver.com</p>
      <br />
      <p className="in-cursor">[ Front-End Developer ] Created By So Jiwoo</p>
    </>
  );
};

const Terminal = () => {
  const { WINDOWS, closeApplication } = useWindows();
  const [loaded, setLoaded] = useState(false);
  const [release, setRelease] = useState<GitReleaseResultsIF>({
    body: "",
    created_at: "",
    name: "",
    published_at: "",
    tag_name: "",
  });

  const onClose = () => closeApplication(WINDOWS.TERMINAL);

  const onLoad = async () => {
    const lastRelease = await getGitRelease();
    setRelease({ ...lastRelease });
    setTimeout(() => setLoaded(true), 500);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="terminal-wrapper">
      <div className="terminal-nav">
        <div className="terminal-nav-left-area">
          <div className="terminal-nav-btns-wrapper">
            <button className="terminal-nav-btn close" onClick={onClose} />
            <button className="terminal-nav-btn unfold" />
            <button className="terminal-nav-btn full" />
          </div>
        </div>
        <div className="terminal-nav-right-area">
          <div className="terminal-sub-nav">
            <span className="terminal-sub-nav-dir">~ (-zsh)</span>
          </div>
          <div className="terminal-sub-nav-add">+</div>
        </div>
      </div>
      <div className="terminal-content" draggable={true}>
        {loaded ? <GitReleaseInfo data={release} /> : <GitLoader />}
      </div>
    </div>
  );
};

export default Terminal;
