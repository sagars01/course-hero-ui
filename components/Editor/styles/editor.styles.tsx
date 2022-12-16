import styled from "styled-components";

interface EditorWrapperProps {
  windowHeight?: string;
}
export const EditorWrapper = styled.div<EditorWrapperProps>`
  .editor-class-main {
    border: 1px solid #cecece;
    padding: 0.5rem;
    overflow-y: scroll;
    height: ${(props) => props.windowHeight || "50vh"};
  }
`;
