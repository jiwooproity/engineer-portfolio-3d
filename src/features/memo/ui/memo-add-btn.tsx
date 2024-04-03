import { addMemoList } from "@/entities/memo";

interface MemoAddButtonProps {
  editor: { title: string; content: string };
  reload: () => void;
}

const MemoAddButton = ({ editor, reload }: MemoAddButtonProps) => {
  const onAdd = async () => {
    try {
      await addMemoList(editor);
      reload();
    } catch (e) {
      window.alert("메모 등록에 실패하였습니다. 잠시 후 다시 시도해 주세요.");
    }
  };

  return (
    <button className="memo-add-btn" onClick={onAdd}>
      메모 저장하기
    </button>
  );
};

export default MemoAddButton;
