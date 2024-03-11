import { useWindows } from "@/shared/hooks";

interface MemoNavigationPropsType {
  onToggle: () => void;
}

const MemoNavigation = (props: MemoNavigationPropsType) => {
  const { onToggle } = props;

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
      <div className="memo-nav-right-area">
        <button onClick={onToggle}>작성</button>
        <input
          className="memo-nav-search"
          placeholder="Search"
          draggable={true}
        />
      </div>
    </div>
  );
};

export default MemoNavigation;
