import { Grid } from '@mui/material';
import { gridWrapperStyles } from './styles';

export default function GridWrapper( { children } ) {
	return (
		<Grid item xs={12} sx={gridWrapperStyles}>
			{ children }
		</Grid>
	);
}
