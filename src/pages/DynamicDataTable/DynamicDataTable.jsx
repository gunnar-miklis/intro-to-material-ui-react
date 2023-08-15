import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import UserTable from '../../components/UserTable/UserTable';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import { useState } from 'react';
import BasicSnackbar from '../../components/common/BasicSnackbar/BasicSnackbar';

export default function DynamicDataTablePage() {
	const [ open, setOpen ] = useState( false );

	const handleClose = ( event, reason ) => {
		if ( reason === 'clickaway' ) {
			return;
		}

		setOpen( false );
	};
	return (
		<>
			<GridWrapper>
				<BasicCard
					content={<UserTable onError={()=>setOpen( true )}/>}
				/>
				<BasicSnackbar
					open={open}
					onClose={handleClose}
					severity='error'
					message='Error fetching the API Data.'
					hideDuration={9999999999999}
				/>
			</GridWrapper>
		</>
	);
}
