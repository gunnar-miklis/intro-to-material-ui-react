import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './consts/mainNavbarItems';
import { navbarStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

export default function Navbar() {
	const navigate = useNavigate();

	return (
		<>
			<Grid item xs={4}>
				<Drawer
					sx={ navbarStyles.drawer }
					variant="permanent"
					anchor="left"
				>
					<Toolbar />
					<Divider />
					<List>
						{mainNavbarItems.map( ( item ) => (
							<ListItem key={item.id} disablePadding>
								<ListItemButton onClick={() => navigate( item.route )}>
									<ListItemIcon sx={ navbarStyles.icons }>
										{item.icon}
									</ListItemIcon>
									<ListItemText primary={item.label} sx={navbarStyles.item} />
								</ListItemButton>
							</ListItem>
						) )}
					</List>
				</Drawer>
			</Grid>
		</>
	);
}
