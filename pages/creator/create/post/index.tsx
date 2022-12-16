import Head from "next/head";
import dynamic from "next/dynamic";
import DashboardLayout from "../../../../components/Dashboard/Layout/Dashboard.Layout";
import { Typography } from "@mui/material";
interface Props {
  showEditor: boolean;
}

const Editor = dynamic(() => import("../../../../components/Editor/Editor"), {
  ssr: false,
});
export default function CreatePost<Props>(): JSX.Element {
  const MainContent = () => {
    return (
      <>
        <div style={{ marginBottom: "0.5rem" }}>
          <Typography variant="h5" color={"GrayText"}>Create a post</Typography>
        </div>
        <Editor />
      </>
    );
  };
  return (
    <>
      <Head>
        <title>Create a Post</title>
        <meta charSet="utf-8" />
      </Head>
      <DashboardLayout body={<MainContent />}></DashboardLayout>
    </>
  );
}
