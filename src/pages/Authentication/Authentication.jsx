import { Grid } from '@mui/material';
import CommonButton from '../../components/Navbar/common/CommonButton/CommonButton';

export default function Authentication() {
	return (
		<>
			<Grid item xs={8} style={{ backgroundColor: '#009be5' }}>
				<h1>Authentication</h1>
				<CommonButton
					size='large'
					variant='contained'
				>Add user
				</CommonButton>
				<CommonButton
					variant='outlined'
				>Web Setup
				</CommonButton>
			</Grid>
		</>
	);
}
