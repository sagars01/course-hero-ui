import AddIcon from "@mui/icons-material/Add";
import { Button, Grid } from "@mui/material";
import { CourseBodyActions } from "../dashboard.styles";

export default function SelectionPanel() {
  const handleClick = (path: string) => {
    window.location.href = "/creator/create/" + path;
  };
  return (
    <>
      <CourseBodyActions>
        <Grid container spacing={2} columns={16} direction={"row-reverse"}>
          <Grid item>
            <Button
              onClick={() => handleClick("post")}
              size="large"
              variant="contained"
              endIcon={<AddIcon />}
            >
              Create Post
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => handleClick("course")}
              size="large"
              variant="contained"
              endIcon={<AddIcon />}
            >
              Create Course
            </Button>
          </Grid>
        </Grid>
      </CourseBodyActions>
    </>
  );
}
