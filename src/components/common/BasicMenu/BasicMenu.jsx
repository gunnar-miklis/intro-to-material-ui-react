import { Menu, MenuItem } from '@mui/material';

export default function BasicMenu( { anchorEl, handleClose, open, menuItems } ) {
	return (
		<>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>{ menuItems.map( ( item, key ) => <MenuItem onClick={handleClose} key={key}>{item.label}</MenuItem> )}

			</Menu>
		</>
	);
}
