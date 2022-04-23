import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IMG1 from "../Images/img1.avif";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "20%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
}));

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA DEV
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder='Search...'></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
          <Badge badgeContent={6} color='error'>
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} alt='Remy Sharp' src={IMG1} />
        </Icons>
        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }} alt='Remy Sharp' src={IMG1} />
          <Typography variant='span'>Alex</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
