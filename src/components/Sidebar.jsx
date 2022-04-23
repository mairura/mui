import React from "react";
import { Box } from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      backgroundColor='blue'
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};

export default Sidebar;
