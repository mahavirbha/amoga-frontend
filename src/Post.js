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
import { grey, red,blue } from '@mui/material/colors';
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

import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { makeStyles } from '@mui/material';


export default function Post() {

  return (
    <Card variant="outlined" sx={{width:"80vw",maxWidth:"700px", borderRadius:"10px",marginTop:"20px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551__340.jpg">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="John Doe added a new post"
        subheader="32 minutes"
      />
      <CardActionArea>
      <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: grey[500] }}>
                <EventAvailableIcon />
            </Avatar>
        }
        title="The future of Innovation"
        subheader="32 minutes"
      />
   
        <List sx={{margin:"0px 50px"}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TodayOutlinedIcon/>
              </ListItemIcon>
              <ListItemText secondary="Oct 20, 2021 at 10am to Oct 20,2021 at 10am" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocationOnOutlinedIcon />
              </ListItemIcon>
              <ListItemText secondary="taj West End, Bengaluru 25, Race Course Rd, high Grounds, Bengaluru, Karnataka" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <VideocamOutlinedIcon/>
              </ListItemIcon>
              <ListItemText 
                disableTypography
                secondary={<Typography type="body2" style={{ color: blue[600],textDecorationLine: 'underline' }}>https://amogagoogleamogagoogleamogagoogle... </Typography>}/>
            </ListItemButton>
          </ListItem>
        </List>
      <CardContent>
        <Typography variant="body2" color="text.primary">
          The future of innovation--it starts here. Join at Intel Innovation, a others join us at Intel Innovation, a others new event for developers and insiders.
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions disableSpacing sx={{display:"flex",justifyContent:"space-between"}}>
        <Typography variant="caption" sx={{flex:4,marginLeft:"8px",color: grey[600]}} gutterBottom>
            15 Going . 30 Interested
        </Typography>
        <Typography sx={{flex:1,color: grey[600]}} variant="caption" gutterBottom>
            24 Comments
        </Typography>
      </CardActions>
    </Card>
  );
}
