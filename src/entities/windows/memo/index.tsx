import "@/shared/assets/css/windows/app-memo.css";
import { useWindows } from "@/shared/hooks";

const Memo = () => {
  const { WINDOWS, closeApplication } = useWindows();

  return (
    <div className="memo-wrapper" draggable={false}>
      <div className="memo-nav">
        <div className="memo-nav-left-area">
          <div className="memo-nav-btns-wrapper">
            <button
              className="memo-nav-btn close"
              onClick={() => closeApplication(WINDOWS.MEMO)}
            />
            <button className="memo-nav-btn unfold" />
            <button className="memo-nav-btn full" />
          </div>
        </div>
        <div className="memo-nav-right-area">
          <input className="memo-nav-search" placeholder="Search" />
        </div>
      </div>
      <div className="memo-content-area">
        <div className="memo-content-left-area">
          <div className="memo-comment-list">
            <div className="memo-comment-item">
              <h1 className="memo-item-title">포트폴리오</h1>
              <span className="memo-item-content">오전 : This is ..</span>
            </div>
            <div className="memo-comment-item">
              <h1 className="memo-item-title">포트폴리오</h1>
              <span className="memo-item-content">오전 : This is ..</span>
            </div>
            <div className="memo-comment-item">
              <h1 className="memo-item-title">포트폴리오</h1>
              <span className="memo-item-content">오전 : This is ..</span>
            </div>
          </div>
        </div>
        <div className="memo-content-right-area"></div>
      </div>
    </div>
  );
};

export default Memo;
