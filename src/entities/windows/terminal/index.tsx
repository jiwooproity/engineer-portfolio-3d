import "@/shared/assets/css/windows/app-terminal.css";
import { useWindows } from "@/shared/hooks";

const Terminal = () => {
  const { WINDOWS, closeApplication } = useWindows();

  const onClose = () => closeApplication(WINDOWS.TERMINAL);

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
      <div className="terminal-content">
        <p>Release version v2.1.0</p>
        <p>Created By So Jiwoo ( Front-End Developer )</p>
        <p>Business: Dejay</p>
        <p>E-mail: jiwooproity@naver.com</p>
        <br />
        <p>Thank for watching ..</p>
      </div>
    </div>
  );
};

export default Terminal;
