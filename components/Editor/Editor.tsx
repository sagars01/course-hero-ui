import { EditorState, convertToRaw } from "draft-js";
// import draftToHtml from "draftjs-to-html";
import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import SaveBtn from "./addons/Save";

import { getWindowHeight } from "../Utilities/window.utils";

import { ToolbarOptions } from "./editor.toolbaropts";
import { EditorWrapper } from "./styles/editor.styles";

export default function EditorComponent() {
  const toolbarOptions = { ...ToolbarOptions };
  const windowHeight = getWindowHeight(window || {});
  const handleImageUpload = (file: File) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://api.imgur.com/3/image");
      xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
      const data = new FormData();
      data.append("image", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  };
  toolbarOptions.image.uploadCallback = handleImageUpload;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };

  // Custom Components Dependency Array
  const toolBarCustomComponents = [<SaveBtn editorState={editorState} />];

  return (
    <>
      <EditorWrapper windowHeight={windowHeight}>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbar={toolbarOptions}
          editorClassName="editor-class-main"
          toolbarCustomButtons={toolBarCustomComponents}
        />
      </EditorWrapper>
    </>
  );
}
