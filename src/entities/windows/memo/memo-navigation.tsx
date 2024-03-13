import { useWindows } from "@/shared/hooks";

const MemoNavigation = () => {
  const { WINDOWS, closeApplication } = useWindows();
  const onClose = () => closeApplication(WINDOWS.MEMO);

  return (
    <div className="memo-nav">
      <div className="memo-nav-left-area">
        <div className="memo-nav-btns-wrapper">
          <button className="memo-nav-btn close" onClick={onClose} />
          <button className="memo-nav-btn unfold" />
          <button className="memo-nav-btn full" />
        </div>
      </div>
    </div>
  );
};

export default MemoNavigation;
