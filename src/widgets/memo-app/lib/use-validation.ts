interface ValidationHooksProps {
  title: string;
  content: string;
}

const useValidation = ({ title, content }: ValidationHooksProps) => {
  return [title !== "" && content !== ""];
};

export default useValidation;
