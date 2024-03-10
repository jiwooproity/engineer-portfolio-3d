import "@/shared/assets/css/windows/app-terminal.css";
import { useWindows } from "@/shared/hooks";

const Terminal = () => {
  const { WINDOWS, closeApplication } = useWindows();

  const onClose = () => closeApplication(WINDOWS.TERMINAL);

  return (
    <div className="terminal-wrapper">
      <div className="terminal-nav">
        <div className="terminal-nav-btns-wrapper">
          <button className="terminal-nav-btn close" onClick={onClose} />
          <button className="terminal-nav-btn unfold" />
          <button className="terminal-nav-btn full" />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
