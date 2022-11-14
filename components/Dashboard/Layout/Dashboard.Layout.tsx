import Navbar from "./AppNavBar";
import CreatedCourses from "../Body/Courses.component";
import { Container, Grid } from "@mui/material";
import styled from "styled-components";

export default function DashboardLayout({ body }: IProps) {
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
            <CreatedCourses />
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

interface IProps {
  body?: React.Component;
  header?: React.Component;
}
