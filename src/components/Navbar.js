import { AppBar, styled, Toolbar, Typography, Box, Avatar, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { InputBase } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({display: "flex", alignItems: "center", gap: "20px"}));
function Navbar(props) {
    const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Live & Learn
        </Typography>
        <LocalLibraryIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search...." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
           <NotificationsNoneIcon/>
          </Badge>
          <Avatar onClick ={(e)=>setOpen(true)} sx={{width: "30px", height: "30px"}} src="https://e3.365dm.com/20/03/1600x900/skynews-vanessa-hudgens-actress_4949948.jpg?20200318024743"/>
        {/* <Avatar  sx={{width: "30px", height: "30px"}} onClick ={(e)=>setOpen(true)}/> */}
        </Icons>
        
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
export default Navbar;
