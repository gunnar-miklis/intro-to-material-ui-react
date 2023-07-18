import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './pages/consts/routes';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import Error from './pages/Error/Error';


ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
	<ThemeProvider theme={theme}>

		<BrowserRouter>
			<Routes>
				<Route path='/' element={ <App/> } >
					{ routes.map( ( route ) => <Route key={route.id} path={route.path} element={route.element} /> ) }
				</Route>
				<Route path='*' element={ <Error/> } />
			</Routes>
		</BrowserRouter>

	</ThemeProvider>,
);
