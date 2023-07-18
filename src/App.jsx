import { Grid } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function App() {
	return (
		<>
			<Grid container spacing={2}>
				<Navbar />
				<Outlet />
			</Grid>
		</>
	);
}
