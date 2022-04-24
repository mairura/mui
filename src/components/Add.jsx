import {
  Avatar,
  Box,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
import IMG2 from "../Images/img2.jpg";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='Delete'
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc( 50% -25%)", md: 30 },
        }}
      >
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          width={600}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant='h6' color='gray'>
            Create Post
          </Typography>
          <UserBox>
            <Avatar alt='Remy Sharp' src={IMG2} />
            <Typography variant='span' fontWeight={500}>
              Ted Mairura
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id='standard-multiline-static'
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant='standard'
          />
          <Stack direction='row' gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color='primary' />
            <VideoCameraFrontIcon color='secondary' />
            <PersonAddIcon color='success' />
            <ImageIcon color='error' />
          </Stack>
          <ButtonGroup
            fullWidth
            variant='contained'
            aria-label='outlined primary button group'
            gap={2}
          >
            <Button>Add</Button>
            <Button sx={{ with: "100px" }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
