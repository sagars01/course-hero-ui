import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/Layout/Dashboard.Layout";

export default function CreateCourse() {
  const MainContent = () => {
    return <></>;
  };
  return (
    <>
      <Head>
        <title>Create Courses</title>
      </Head>
      <DashboardLayout body={<MainContent />}></DashboardLayout>
    </>
  );
}