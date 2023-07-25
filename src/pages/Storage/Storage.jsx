import { useEffect, useState } from 'react';
import BasicSnackbar from '../../components/common/BasicSnackbar/BasicSnackbar';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import Loading from '../../components/common/Loading/Loading';

export default function Storage() {
	const [ open, setOpen ] = useState( false );
	const [ loading, setLoading ] = useState( true );

	useEffect( () => {
		const timer = setTimeout( () => setLoading( false ), 2000 );
		return () => clearTimeout( timer );
	}, [] );

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
				{ loading ?
					<Loading>
						<CommonButton
							variant="contained"
							onClick={handleClick}
						>
					Open success snackbar
						</CommonButton>
					</Loading>
					:
					<CommonButton
						variant="contained"
						onClick={handleClick}
					>
					Open success snackbar
					</CommonButton>
				}

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
