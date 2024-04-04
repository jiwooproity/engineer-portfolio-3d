import { ChangeEvent, Suspense, useState } from "react";

import MemoList from "./memo-list";
import MemoEditor from "./memo-editor";

import { MemoAddButton } from "@/features/memo";
import { Window, Loading } from "@/shared/components";

import useValidation from "../lib/use-validation";

export interface MemoIF {
  title: string;
  content: string;
  date: string;
}

const MemoContainer = () => {
  const [selected, setSelected] = useState(0);
  const [useEditor, setUseEditor] = useState(false);

  const [editor, setEditor] = useState({ title: "", content: "" });
  const [visible] = useValidation({ ...editor });

  const onInit = () => {
    setEditor({ title: "", content: "" });
  };

  const onSelect = (idx: number) => {
    setSelected(idx);
    setUseEditor(idx === -1);
    onInit();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditor({ ...editor, [e.target.name]: e.target.value });
  };

  return (
    <Window name="memo">
      <Window.Navigation>
        <Window.Buttons />
      </Window.Navigation>
      <Window.Body>
        <Suspense fallback={<Loading />}>
          <MemoList selected={selected} onSelect={onSelect} useEditor={useEditor} editor={editor} />
          <MemoEditor selected={selected} onChange={onChange} useEditor={useEditor} editor={editor}>
            {visible && <MemoAddButton editor={editor} init={onInit} />}
          </MemoEditor>
        </Suspense>
      </Window.Body>
    </Window>
  );
};

export default MemoContainer;
