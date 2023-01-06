import Head from "next/head";
import dynamic from "next/dynamic";
import DashboardLayout from "../../../../components/Dashboard/Layout/Dashboard.Layout";
import { Typography } from "@mui/material";
import withFirebaseAuth, {
  FirebaseAuthProps,
} from "../../../../utils/auth/withFirebaseAuth.hoc";
interface Props {}

const Editor = dynamic(() => import("../../../../components/Editor/Editor"), {
  ssr: false,
});

const CreatePost: React.FunctionComponent<Props & FirebaseAuthProps> = (
  props: Props & FirebaseAuthProps
) => {
  const MainContent = () => {
    return (
      <>
        <div style={{ marginBottom: "0.5rem" }}>
          <Typography variant="h5" color={"GrayText"}>
            Create a post
          </Typography>
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
      <DashboardLayout
        authProps={props}
        body={<MainContent />}
      ></DashboardLayout>
    </>
  );
};

export default withFirebaseAuth(CreatePost);
