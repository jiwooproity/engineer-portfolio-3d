import "@/shared/assets/css/windows/app-terminal.css";

import { Suspense, useEffect, useState } from "react";

import { useWindows } from "@/shared/hooks";

import { getGitRelease } from "@/shared/fetch/git-release/fetch";
import { type GitReleaseResultsIF } from "@/shared/types/git-release-fetch";

import dayjs from "dayjs";
import { marked } from "marked";

const Terminal = () => {
  const { WINDOWS, closeApplication } = useWindows();
  const [release, setRelease] = useState<GitReleaseResultsIF>({
    body: "",
    created_at: "",
    name: "",
    published_at: "",
    tag_name: "",
  });

  const onClose = () => closeApplication(WINDOWS.TERMINAL);

  const onLoad = async () => {
    const releaseInfo = await getGitRelease();
    const date = dayjs(releaseInfo.published_at).format("YYYY-MM-DD");
    const html = await marked.parse(releaseInfo.body);
    setRelease({ ...releaseInfo, published_at: date, body: html });
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
      <Suspense fallback={null}>
        <div className="terminal-content">
          <p className="release">{release.name}</p>
          <p>Published: {release.published_at}</p>
          <br />
          <div
            className="git-markdown"
            dangerouslySetInnerHTML={{ __html: release.body }}
          ></div>
          <br />
          <p>Business: Dejay</p>
          <p>E-mail: jiwooproity@naver.com</p>
          <br />
          <p className="in-cursor">
            [ Front-End Developer ] Created By So Jiwoo
          </p>
        </div>
      </Suspense>
    </div>
  );
};

export default Terminal;
