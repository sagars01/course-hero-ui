import DashboardLayout from "../../../components/Dashboard/Layout/Dashboard.Layout";
import Head from "next/head";
import { GetAllCourses } from "./services/getAllCourses";
import CreatedCourses from "../../../components/Dashboard/Body/Courses.component";
import SelectionPanel from "../../../components/Dashboard/Body/SelectionPanel.component";
export default function CreatorHome({ allCoursesData: { courses } }: any) {
  
  const MainContent = () => {
    return (
      <>
        <SelectionPanel></SelectionPanel>
        <CreatedCourses userCreatedCourse={courses} />
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
  const allCoursesData = await GetAllCourses();
  return {
    props: {
      allCoursesData,
    },
  };
}
