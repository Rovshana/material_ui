import { Box, Modal, Tooltip, styled, Typography, Avatar, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: 'center',
    alignItems: "center"

})
const UserBox = styled(Box)({
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px"

})
 function Add(props) {
    
const [open, setOpen] = useState(false)
    return (
        <>
        <Tooltip sx={{position: "fixed", bottom: 20,}} onClick={(e)=>setOpen(true)}>
        <Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>

        </Tooltip>
        <StyledModal
  open={open}
  onClose={(e)=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={250} bgcolor={'white'} p={3} >
<Typography variant='h6' textAlign="center">Create Post</Typography>
<UserBox>
    <Avatar/>
    <Typography>Lingua Marina</Typography>
</UserBox>
<TextField
          id="standard-multiline-static"
          sx={{width: "100%"}}
          multiline
          
          rows={3}
          placeholder="add your thoughts"
          variant="standard"
        />
  </Box>

</StyledModal>
            
        </>
    )
}
export default Add