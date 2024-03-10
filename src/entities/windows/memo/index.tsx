import "@/shared/assets/css/windows/app-memo.css";
import { useWindows } from "@/shared/hooks";

const Memo = () => {
  const { WINDOWS, closeApplication } = useWindows();

  const onClose = () => closeApplication(WINDOWS.MEMO);

  return (
    <div className="memo-wrapper">
      <div className="memo-nav">
        <div className="memo-nav-left-area">
          <div className="memo-nav-btns-wrapper">
            <button className="memo-nav-btn close" onClick={onClose} />
            <button className="memo-nav-btn unfold" />
            <button className="memo-nav-btn full" />
          </div>
        </div>
        <div className="memo-nav-right-area">
          <input
            className="memo-nav-search"
            placeholder="Search"
            draggable={true}
          />
        </div>
      </div>
      <div className="memo-content-area" draggable={true}>
        <div className="memo-content-left-area">
          <div className="memo-comment-list">
            <div className="memo-comment-item">
              <h1 className="memo-item-title">포트폴리오</h1>
              <span className="memo-item-content">오전 : 이건 제 포트 ..</span>
            </div>
            <div className="memo-comment-item">
              <h1 className="memo-item-title">안녕하세요</h1>
              <span className="memo-item-content">
                오후 : 프론트엔드 개발 ..
              </span>
            </div>
          </div>
        </div>
        <div className="memo-content-right-area">
          <h1 className="memo-content-title">안녕하세요</h1>
          <p className="memo-content-text">프론트엔드 개발자 소지우입니다.</p>
          <p className="memo-content-text">
            주로 Javascript, React 기술을 사용합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Memo;
