import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { CardActionArea } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey, red,blue} from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { makeStyles } from '@mui/material';
import Stack from '@mui/material/Stack';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';


export default function Tweet() {
    const options = ['Send', 'Post To', 'Discard'];
    const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Card variant="outlined" sx={{ width:"80vw",maxWidth:"700px",height:"230px", borderRadius:"10px",marginTop:"20px" }}>
        <Stack sx={{height:"50px",alignItems:"center",paddingLeft:"10px"}} direction="row" spacing={1}>
            <Button startIcon={<PostAddOutlinedIcon  />}>
                Post
            </Button>     
            
            <Button startIcon={<PollOutlinedIcon  />}>
                Poll
            </Button>
            
            <Button startIcon={<EventAvailableIcon />}>
                Poll
            </Button>
        </Stack>
      {/* <Divider light /> */}
      <CardActionArea>
      <TextField
          id="filled-multiline-static"
          label="Write Something..."
          multiline
          rows={4}
          defaultValue=""
          fullWidth={true}
          sx={{border:"none"}}
        />

        
      
      </CardActionArea>

      <CardActions disableSpacing sx={{display:"flex",justifyContent:"space-between"}}>
        <Container sx={{flex:4,display:"flex",justifyContent:"left",alignItems:"center"}}>
            <Button sx={{color: grey[600],padding:"10px"}} startIcon={<ImageOutlinedIcon />}/> 
            <Button sx={{color: grey[600]}} startIcon={<VideocamOutlinedIcon />}/> 
        </Container>
        
        

        <ButtonGroup sx={{height:"40px",width:"160px"}} variant="contained" ref={anchorRef} aria-label="split button">
        <Button sx={{height:"40px",width:"160px"}} onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <Button sx={{height:"40px",width:"60px",marginLeft:"5px"}} variant="contained" disabled>
        Post
      </Button>
        

      </CardActions>
    </Card>
  )
}


// <div className='share'>
//       <div className="shareWrapper">
//           <div className="shareTop">
//               <img src={person1} alt="Profile Pic" className="shareProfileImg" />
//               <input placeholder="What's in your mind Mahavirbha !?" className="shareInput" />
//           </div>
//           <hr className='shareHr'/>
//           <div className="shareBottom">
//               <div className="shareOptions">
//                   <div className="shareOption">
//                       <PermMediaIcon htmlColor='red' className='shareIcon'/>
//                       <span className="shareOptionText">Photo or Video</span>
//                   </div>

//                   <div className="shareOption">
//                       <LabelIcon htmlColor='blue' className='shareIcon'/>
//                       <span className="shareOptionText">Tag</span>
//                   </div>

//                   <div className="shareOption">
//                       <FmdGoodIcon htmlColor='green' className='shareIcon'/>
//                       <span className="shareOptionText">Location</span>
//                   </div>

//                   <div className="shareOption">
//                       <EmojiEmotionsIcon htmlColor='Orange' className='shareIcon'/>
//                       <span className="shareOptionText">Feelings</span>
//                   </div>
//               </div>

//             <button className="shareButton">Share</button>

//           </div>
//       </div>
//   </div>