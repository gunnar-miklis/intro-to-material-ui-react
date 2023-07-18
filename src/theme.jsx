import { createTheme } from '@mui/material';

export const theme = createTheme( {
	components: {
		MuiButton: {
			styleOverrides: {
				fontSize: 0.875,
				fontWeight: 600,
				textTransform: 'capitalize',
				borderRadius: 2.5,
				contained: {
					'backgroundColor': '#009be5',
					':hover': {
						backgroundColor: '#006db3',
					},
				},
				outlined: {
					'color': '#fff',
					'borderColor': '#fff',
					':hover': {
						backgroundColor: 'transparent',
					},
				},
			},
		},
	},
	typography: {
		fontSize: 12,
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join( ',' ),
	},
} );