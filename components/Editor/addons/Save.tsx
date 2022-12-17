import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { convertToRaw } from "draft-js";
import { FunctionComponent, useEffect, useState } from "react";
import { EditorState } from "react-draft-wysiwyg";

const SaveButton: FunctionComponent<ISaveBtnProps> = ({ editorState }) => {
  const [disabled, setDisabled] = useState(false);

  const saveToDB = async (editorData: any) => {
    try {
      const response = await fetch("/api/editor/createPost", {
        method: "POST",
        body: JSON.stringify({
          data: editorData,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const onSave = async () => {
    const editorData = convertToRaw(editorState.getCurrentContent());
    const response = await saveToDB(editorData);
    console.log(response);
  };

  useEffect(() => {
    setDisabled(false);
  }, [editorState]);
  return (
    <>
      <span
        style={{ marginTop: "4px", padding: "0 0.2rem", cursor: "pointer" }}
        onClick={onSave}
      >
        <SaveOutlinedIcon color={disabled ? "disabled" : "primary"} />
      </span>
    </>
  );
};

interface ISaveBtnProps {
  editorState: EditorState;
}

export default SaveButton;
