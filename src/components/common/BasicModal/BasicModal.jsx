import { Box, Modal, Typography } from '@mui/material';
import CommonButton from '../CommonButton/CommonButton';
import { modalStyles } from './styles';

export default function BasicModal( { open, onClose, title, subtitle, content, onSubmit } ) {
	return (
		<div>
			<Modal
				open={open}
				onClose={onClose}
			><Box sx={modalStyles.wrapper}>
					<Typography variant="h6" component="h2">
						{title}
					</Typography>
					<Typography sx={{ mt: 2 }}>
						{subtitle}
					</Typography>
					{ content }
					<Box sx={modalStyles.buttons}>
						<CommonButton variant='contained' onClick={onSubmit}>Submit</CommonButton>
						<CommonButton onClick={onClose}>Cancel</CommonButton>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}
