import { Avatar, AvatarGroup, Box, Divider, Typography } from '@mui/material'
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

 function RightBar(props) {
    

    return (
        <Box  flex={2} p={2} sx={{display: {xs:"none", sm: "block"}}}>
    <Box  sx={{width: "300px"}}>
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
      <Avatar alt="Kate Sharp" src="https://image.shutterstock.com/image-photo/young-girl-warm-sweater-reads-260nw-1184409154.jpg" />
    
      <Avatar alt="Marina" src="https://1.bp.blogspot.com/-aczal5A6xzw/XplcdymdBuI/AAAAAAAACJ8/JdqtAhClvmcUXwX3fg9r_Srwusmvb55uQCLcBGAsYHQ/s1600/Marina%2BMogilko.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
     <Avatar alt="Lucy Henderson" src="https://yt3.ggpht.com/ytc/AMLnZu_jPUtDOpyYiSpRob4q8D8_y8bFrbbSs5zPicSaEw=s900-c-k-c0x00ffffff-no-rj" />
     <Avatar alt="Linda Walker" src="/static/images/avatar/4.jpg" />
     <Avatar alt="Lala Walker" src="https://papik.pro/en/uploads/posts/2022-06/1655715036_1-papik-pro-p-cool-profile-picture-avatars-for-girls-1.jpg" />
     <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
    </AvatarGroup>

    <Typography variant="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} gap={5}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Typography variant='h5' mt={2} mb={2}>Latest Conversations</Typography>
    <List sx={{ width: '100%', maxWidth: 360 }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Marina" src="https://1.bp.blogspot.com/-aczal5A6xzw/XplcdymdBuI/AAAAAAAACJ8/JdqtAhClvmcUXwX3fg9r_Srwusmvb55uQCLcBGAsYHQ/s400/Marina%2BMogilko.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               Marina
              </Typography>
              {" — it sounds great"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

    </Box>
            
        </Box>
    )
}
export default RightBar

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
      title: 'paris',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://s35691.pcdn.co/wp-content/uploads/2016/01/iStock_collaborative.160201.jpg',
      title: 'our group',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://media.istockphoto.com/photos/graduation-day-picture-id1066324992?k=20&m=1066324992&s=612x612&w=0&h=IThBZfVQnjL1mCR5fivmqigAhCPL_RkRzGuaSisNXrc=',
      title: 'gradution day)',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];