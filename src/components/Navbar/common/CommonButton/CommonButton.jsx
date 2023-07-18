import { Button } from '@mui/material';

export default function CommonButton( { children, color, disabled, size, sx, variant } ) {
	return (
		<Button
			color={color}
			disabled={disabled}
			size={size}
			sx={sx}
			variant={variant}
		> { children }
		</Button>
	);
}
