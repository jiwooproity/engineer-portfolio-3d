import { MemoDataIF } from ".";

interface MemoListPropsIF {
  data: MemoDataIF[];
  onSelect: (index: number) => void;
}

const MemoList = (props: MemoListPropsIF) => {
  const { data, onSelect } = props;

  return (
    <div className="memo-comment-list">
      {data.map((memo, i) => (
        <div className="memo-comment-item" onClick={() => onSelect(i)}>
          <h1 className="memo-item-title">{memo.title}</h1>
          <span className="memo-item-content">{`${memo.content}`}</span>
        </div>
      ))}
    </div>
  );
};

export default MemoList;
