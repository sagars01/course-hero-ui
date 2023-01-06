import Navbar from "./AppNavBar";

import { Container, Grid } from "@mui/material";
import { StyledDashboardBody } from "../dashboard.styles";
import { FirebaseAuthProps } from "../../../utils/auth/withFirebaseAuth.hoc";

export default function DashboardLayout({ body, header, authProps }: IProps) {
  return (
    <>
      <Navbar isLoggedIn={authProps?.isLoggedIn} />
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
  authProps?: FirebaseAuthProps;
}
