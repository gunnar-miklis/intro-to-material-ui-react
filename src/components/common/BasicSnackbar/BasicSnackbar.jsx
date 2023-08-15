import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { forwardRef } from 'react';
import { Slide } from '@mui/material';

const Alert = forwardRef( function Alert( props, ref ) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
} );

export default function BasicSnackbar( { open, onClose, severity, message, hideDuration } ) {
	return (
		<>
			<Snackbar
				open={open}
				autoHideDuration={hideDuration? hideDuration : 3000}
				onClose={onClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			>
				<Slide direction="up" in={open} mountOnEnter unmountOnExit>
					<Alert
						onClose={onClose}
						severity={severity}
						sx={{ width: '100%' }}
					>
						{message}
					</Alert>

				</Slide>
			</Snackbar>
		</>
	);
}
