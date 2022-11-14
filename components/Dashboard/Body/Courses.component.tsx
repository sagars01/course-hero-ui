import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { ICourse } from "../../../pages/creator/home/services/types/courses.interface";

export default function CourseComponent({ userCreatedCourse }: IProps) {
  const CourseCard = ({ course }: any) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://www.freecodecamp.org/news/content/images/size/w2000/2022/07/joan-gamell-ZS67i1HLllo-unsplash.jpg"
            alt="code"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {course.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course.short_desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    );
  };
  return (
    <>
      {userCreatedCourse?.map((course) => (
        <>
          <CourseCard course={course} />
        </>
      ))}
    </>
  );
}

interface IProps {
  userCreatedCourse: [ICourse];
}
