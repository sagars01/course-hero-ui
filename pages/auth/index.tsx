import { Card, CardContent, styled, useMediaQuery, Theme } from "@mui/material";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  [theme.breakpoints.down("sm")]: {
    height: "auto",
  },
}));

const CardWrapper = styled(Card)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

export default function CenteredCard() {
  const isSmallScreen = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Root>
      <CardWrapper>
        <CardContent>This is a centered card.</CardContent>
      </CardWrapper>
    </Root>
  );
}
