import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, IconButton, Tooltip } from '@mui/material';
import BasicMenu from '../BasicMenu/BasicMenu';

export default function NotificationBell( { iconColor } ) {
	const [ open, setOpen ] = React.useState( false );
	const [ anchorEl, setAnchorEl ] = React.useState( null );
	function handleClose() {
		setOpen( false );
	}
	function handleOpen( event ) {
		setAnchorEl( event.currentTarget );
		setOpen( true );
	}

	const notifications = [
		{
			id: 0,
			label: 'first notification',
		},
		{
			id: 1,
			label: 'second notification',
		},
	];
	return (
		<>
			<Tooltip title={`You have ${ notifications.length ? notifications.length : 0 } new notifications`}>
				<IconButton
					color={iconColor}
					onClick={ notifications.length ? handleOpen : null }
					anchorEl={anchorEl}
				><Badge badgeContent={notifications.length} color='error'><NotificationsIcon /></Badge>
				</IconButton>
			</Tooltip>
			<BasicMenu
				open={open}
				anchorEl={anchorEl}
				handleClose={handleClose}
				menuItems={notifications}
			/>
		</>
	);
}
