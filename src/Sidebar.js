import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, ListItemButton } from '@mui/material';

export const Sidebar = () => {
    return (
        <Drawer
            variant='permanent'
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MulDrawer-paper`]: { width, drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            Home
                        </ListItemIcon>
                        <ListItemText primary="Home">
                            
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    )
}