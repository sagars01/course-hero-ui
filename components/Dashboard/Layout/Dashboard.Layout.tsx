import Navbar from "./AppNavBar";

import { Container, Grid } from "@mui/material";
import { StyledDashboardBody } from "../dashboard.styles";

export default function DashboardLayout({ body }: IProps) {

  return (
    <>
      <Navbar />
      <Grid container>
        <Container>
          <Grid item xs={12} md={12}>
            <StyledDashboardBody>{body}</StyledDashboardBody>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

interface IProps {
  body?: any;
  header?: any;
}
