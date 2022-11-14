import DashboardLayout from "../../../components/Dashboard/Layout/Dashboard.Layout";
import Head from "next/head";
import { GetAllCourses } from "./services/getAllCourses";
import { ICourse } from "./services/types/courses.interface";
export default function CreatorHome({ allCoursesData: { courses } }: any) {
  return (
    <>
      <Head>
        <title>Creator Dashboard</title>
      </Head>
      <DashboardLayout userCreatedCourse={courses}></DashboardLayout>
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
