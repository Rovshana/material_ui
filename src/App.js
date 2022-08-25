import Sidebar from './components/Sidebar'
import Main from './components/Main'
import RightBar from './components/RightBar';
import NavBar from './components/Navbar'
import {Box, createTheme, Stack, ThemeProvider }from '@mui/material'
import Add from './components/Add';
import {useState} from 'react'
function App() {
  const [mode, setMode] = useState("dark")
  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
<NavBar/>
<Stack direction="row" spacing={2} justifyContent="space-between"> 
      <Sidebar mode={mode} setMode={setMode}/>
      <Main/>
      <RightBar/>
      </Stack>
      <Add/>
      </Box>
      </ThemeProvider>
  )
}

export default App;
