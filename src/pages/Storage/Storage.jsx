import { useState } from 'react';
import BasicSnackbar from '../../components/common/BasicSnackbar/BasicSnackbar';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import CommonButton from '../../components/common/CommonButton/CommonButton';

export default function Storage() {
	const [ open, setOpen ] = useState( false );

	const handleClick = () => {
		setOpen( true );
	};

	const handleClose = ( event, reason ) => {
		if ( reason === 'clickaway' ) {
			return;
		}

		setOpen( false );
	};
	return (
		<>
			<GridWrapper>
				<CommonButton
					variant="contained"
					onClick={handleClick}
				>
					Open success snackbar
				</CommonButton>
				<BasicSnackbar
					open={open}
					onClose={handleClose}
					severity='error'
					message='some error'
				/>
			</GridWrapper>
		</>
	);
}
