import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IMG4 from "../Images/img4.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVertIcon />
          </IconButton>
        }
        title='Mairura Brian'
        subheader='April 24, 2022'
      />
      <CardMedia component='img' height='194' image={IMG4} alt='Ted' />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Checkbox
            icon={<FavoriteBorderIcon />}
            checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
