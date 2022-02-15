
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
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function Birthday() {
  return (
    <Card variant="outlined" sx={{width:"80vw",maxWidth:"700px", borderRadius:"10px",marginTop:"20px",marginBottom:"20px"}}>
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
        title="Amoga Team is wishing you Happy Birthday"
        subheader="Oct20, 2021"
        
      />
      <CardActionArea>
        <Container 
        sx={{height:"200px",backgroundImage:"url('https://cdn.pixabay.com/photo/2020/06/05/08/35/happy-birthday-5262041__340.png') ",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"}}>

            <Container sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Avatar sx={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",height:"130px",width:"130px",bgcolor: red[500] }} aria-label="recipe" src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551__340.jpg"/>
            </Container>
        </Container>

         <Divider light />
        
      <CardContent>
        
      </CardContent>
      </CardActionArea>
      <CardActions disableSpacing sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        {/* <Typography variant="caption" sx={{flex:4,marginLeft:"8px",color: grey[600]}} gutterBottom>
            15 Going . 30 Interested
        </Typography> */}
        <Typography sx={{display:"flex",alignItems:"center"}} variant="caption">
            <RecommendIcon sx={{marginLeft:"8px",color: blue[600]}} />
            Ashruti Singh and 5 others
        </Typography>
        
        <Typography sx={{color: grey[600]}} variant="caption" gutterBottom>
            25 Comments
        </Typography>
      </CardActions>

      <Divider light />

      <Stack sx={{height:"50px",alignItems:"center",paddingLeft:"10px"}} direction="row" spacing={1}>
            <ThumbUpOutlinedIcon sx={{marginRight:"10px"}}/> 
            <Typography variant='body2'>Like</Typography>
            
            <ModeCommentOutlinedIcon sx={{marginRight:"20px"}}/>
            <Typography variant='body2'>Comment</Typography>
            
            <ShareOutlinedIcon sx={{marginRight:"10px"}} />
            <Typography variant='body2'>Share</Typography>
        </Stack>

        <Divider light />

        <Stack sx={{display:"flex",alignItems:"center", justifyContent:"center"}} direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551__340.jpg"></Avatar>
             <TextField sx={{width:"65vw"}} label="Add Comment" id="fullWidth" />
        </Stack>

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
        title="Rob Doe"
        subheader="Lorem ipsum dolor sit amet, consecterfgiop elit. Fuses et ee;iopskld Fuies posuren sapiens afcut."
      />
      <CardActions disableSpacing sx={{display:"flex",justifyContent:"flex-start", alignItems:"center"}}>
        <Typography variant="caption" sx={{marginLeft:"60px",marginRight:"5px",color: grey[600]}} gutterBottom>
            Like
        </Typography><RecommendIcon/> <Typography sx={{marginRight:"5px"}} variant="caption">1 | </Typography>
        <Typography sx={{flex:1,marginRight:"5px",color: grey[600]}} variant="caption" gutterBottom>
            Reply
        </Typography>
        
      </CardActions>
      <Typography sx={{margin:"5px 10px"}} variant='caption'> Load more comments</Typography>
        
    </Card>
  )
}
