import { createTheme } from '@mui/material';

export const theme = createTheme( {
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontSize: '0.875rem',
					fontWeight: 600,
					textTransform: 'none',
					borderRadius: 8.5,
				},
				contained: {
					'backgroundColor': '#009be5',
					'&:hover': {
						backgroundColor: '#006db3',
					},
				},
				outlined: {
					'color': '#fff',
					'borderColor': 'rgba(255,255,255,0.7)',
					'&:hover': {
						backgroundColor: 'rgba(0,0,0,0.04)',
					},
				},
			},
		},
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					fontSize: '1.7rem',
				},
			},
		},
	},
	palette: {
		white: {
			main: '#fff',
		},
	},
	typography: {
		h1: {
			fontSize: '1.6rem',
			fontWeight: 600,
			color: '#fff',
			letterSpacing: '0.5px',
			textTransform: 'capitalize',
		},
	},
} );
