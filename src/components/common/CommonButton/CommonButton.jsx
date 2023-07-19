import { Button } from '@mui/material';

export default function CommonButton( { children, color, disabled, onClick, size, sx, variant } ) {
	return (
		<Button
			color={color}
			disabled={disabled}
			onClick={onClick}
			size={size}
			sx={sx}
			variant={variant}
		> { children }
		</Button>
	);
}
