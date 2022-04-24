import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import IMG1 from "../Images/img1.avif";
import IMG2 from "../Images/img2.jpg";
import IMG3 from "../Images/img3.avif";
import IMG5 from "../Images/img5.avif";
import IMG6 from "../Images/img6.avif";
import IMG7 from "../Images/img7.avif";
import IMG8 from "../Images/img8.avif";
import IMG9 from "../Images/img9.avif";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed' width={600}>
        <Typography variant='h6' fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={5} style={{ alignItems: "center" }}>
          <Avatar alt='Remy Sharp' src={IMG2} />
          <Avatar alt='Travis Howard' src={IMG3} />
          <Avatar alt='Cindy Baker' src={IMG5} />
          <Avatar alt='Agnes Walker' src={IMG6} />
          <Avatar alt='Trevor Henderson' src={IMG1} />
          <Avatar alt='Trevor Henderson' />
          <Avatar alt='Trevor Henderson' />
          <Avatar alt='Trevor Henderson' />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowWeight={100} gap={5}>
          <ImageListItem>
            <img src={IMG7} alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src={IMG8} alt='' />
          </ImageListItem>
          <ImageListItem>
            <img src={IMG9} alt='' />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Remy Sharp' src={IMG3} />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Travis Howard' src={IMG1} />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt='Cindy Baker' src={IMG5} />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
