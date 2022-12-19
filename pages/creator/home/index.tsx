import DashboardLayout from "../../../components/Dashboard/Layout/Dashboard.Layout";
import Head from "next/head";
import { GetAllCourses } from "./services/getAllCourses";
import CreatedCourses from "../../../components/Dashboard/Body/Courses.component";
import SelectionPanel from "../../../components/Dashboard/Body/SelectionPanel.component";
import AlertError from "../../../components/Error/Alert.error";

export default function CreatorHome({
  allCoursesData: { courses, error },
}: any) {
  const MainContent = () => {
    return (
      <>
        <SelectionPanel></SelectionPanel>
        {error ? (
          
            <AlertError message="Error Fetching Posts" />
          
        ) : (
          <CreatedCourses userCreatedCourse={courses} />
        )}
      </>
    );
  };
  return (
    <>
      <Head>
        <title>Creator Dashboard</title>
      </Head>
      <DashboardLayout body={<MainContent />}></DashboardLayout>
    </>
  );
}

export async function getServerSideProps(_context: any) {
  let allCoursesData = {};
  try {
    allCoursesData = await GetAllCourses();
  } catch (e) {
    allCoursesData = {
      error: true,
    };
  }
  return {
    props: {
      allCoursesData,
    },
  };
}
