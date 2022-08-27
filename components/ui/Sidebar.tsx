import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { UIContext } from '../../context/ui'

const menuItems : string[] = ['Inbox', 'Starred', 'Send email', 'Drafts']
export const Sidebar = () => {

    const { sideMenuOpen, closeSideMenu } = useContext( UIContext )
    return (
        <Drawer
            anchor='left'
            open={ sideMenuOpen }
            onClose={ closeSideMenu }
        >
            <Box sx={{ width:250}}>
                <Box sx={{ padding:'5px 10px'}}>
                    <Typography variant='h4'>Menú</Typography>
                </Box>
                <List>
                    {
                        menuItems.map(( item, index) =>(
                            <ListItem button key={ index }>
                                <ListItemIcon>
                                    { index % 2 ? <MoveToInboxOutlinedIcon/> : <EmailOutlinedIcon/> }
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))
                    }
                    
                </List>
                <Divider/>
                <List>
                    {
                        menuItems.map(( item, index) =>(
                            <ListItem button key={ index }>
                                <ListItemIcon>
                                    { index % 2 ? <MoveToInboxOutlinedIcon/> : <EmailOutlinedIcon/> }
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        ))
                    }
                    
                </List>

                
            </Box>
           
             
        </Drawer>
    )
}
