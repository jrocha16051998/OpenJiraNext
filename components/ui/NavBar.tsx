import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

export const NavBar = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton size='large' edge='start'>
                    <MenuRoundedIcon/>
                </IconButton>
                <Typography variant='h6' sx={{ paddingLeft: '5px'}}> OJiTarea</Typography>
            </Toolbar>
        </AppBar>
    )
}
