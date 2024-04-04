import { useRecoilRefresher_UNSTABLE } from "recoil";
import { addMemoList, cacheMemos } from "@/entities/memo";
import { useState } from "react";

interface MemoAddButtonProps {
  editor: { title: string; content: string };
  init: () => void;
}

const MemoAddButton = ({ editor, init }: MemoAddButtonProps) => {
  const refresh = useRecoilRefresher_UNSTABLE(cacheMemos);
  const [disabled, setDisabled] = useState(false);

  const toggle = () => setDisabled((prev) => !prev);

  const reload = () => {
    refresh();
    init();
  };

  const onAdd = async () => {
    try {
      toggle();
      await addMemoList(editor).then(reload);
    } catch (e) {
      window.alert("메모 등록에 실패하였습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      toggle();
    }
  };

  return (
    <button className="memo-add-btn" onClick={onAdd} disabled={disabled}>
      메모 저장하기
    </button>
  );
};

export default MemoAddButton;
