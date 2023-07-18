import { Grid } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';

export default function App() {
	const [ title, setTitle ] = useState( null );
	const location = useLocation();
	useEffect( () => {
		const parsedTitle = location.pathname
			.replace( /\//, '' )
			.replace( /-/, ' ' ); // 'capitalize' first letter in JSS with 'textTransform'
		setTitle( parsedTitle );
	}, [ location ] );

	return (
		<>
			<Grid container>
				<Navbar />
				<Header title={title}/>
				<Outlet />
			</Grid>
		</>
	);
}
