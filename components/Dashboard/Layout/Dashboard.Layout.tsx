import Navbar from "./AppNavBar";
import CreatedCourses from "../Body/Courses.component";
import { Container, Grid } from "@mui/material";
import styled from "styled-components";
import { ICourse } from "../../../pages/creator/home/services/types/courses.interface";

export default function DashboardLayout({ userCreatedCourse }: IProps) {
  const Item = styled.div`
    background: #cecece;
    border: 1px solid #000;
  `;
  return (
    <>
      <Navbar />
      <Grid container>
        <Container>
          <Grid item xs={12} md={12}>
            <CreatedCourses userCreatedCourse={userCreatedCourse} />
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

interface IProps {
  userCreatedCourse: [ICourse];
  header?: React.Component;
}
