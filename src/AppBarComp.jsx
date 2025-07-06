import './AppBarComp.css'
import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material';



function AppBarComp() {
    return(
        <div className='AppBare'>
        <AppBar position='fixed' sx={{backgroundColor:'#fcfcfc' }}>
            <Toolbar sx={{minHeight: 200, whiteSpace:"nowrap"}} >
            <Typography variant="h21" sx={{fontSize: '24px', color:'#000000', fontWeight:'600'}} onClick={()=> window.open('./Baldeep Singh Taluja Resume (1).pdf' , '_blank')}>
                BST Photography
            </Typography>
            <Stack direction="row" spacing={2} justifyContent={"flex-end"}   sx={{ width: '100%' }}  >
            <Button onClick={()=> window.open('https://www.instagram.com/bst.photography_/', '_blank')} sx={{color:'#000000', fontSize:'22.5px'}}> Instagram</Button>
            <Button onClick={()=> window.open('https://github.com/BoltDrifter', '_blank')} sx={{color:'#000000', fontSize:'22.5px'}}> Github</Button>
            <Button onClick={()=> window.open('https://www.linkedin.com/in/baldeep-singh-t-606348266/', '_blank')} sx={{color:'#000000', fontSize:'22.5px'}}> LinkedIn</Button>

            </Stack>
            </Toolbar>
        </AppBar>
    </div>
    );
}

export default AppBarComp;
