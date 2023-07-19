import { Box, IconButton, Typography } from '@mui/material';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import CommonButton from './../../components/common/CommonButton/CommonButton';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import { cardContentStyles, cardHeaderStyles } from './styles';
import { useState } from 'react';
import NewUserModal from '../../components/Modals/NewUserModal/NewUserModal';


export default function Authentication() {
	const [ open, setOpen ] = useState( false );
	const [ users, setUsers ] = useState( [] );
	const [ searchResults, setSearchResults ] = useState( users );

	function getHeader() {
		function handleSearch( value ) {
			filterData( value );
		}
		function filterData( value ) {
			const lowerCasedValue = value.toLowerCase().trim();
			if ( !lowerCasedValue ) setUsers( searchResults );
			else {
				const filteredData = searchResults.filter( ( item ) => {
					return Object.keys( item ).some( ( key ) => {
						return item[key].toString().toLowerCase().includes( lowerCasedValue );
					} );
				} );
				setUsers( filteredData );
			}
		}
		function addUser() {
			setOpen( true );
		}
		return (
			<Box sx={cardHeaderStyles.wrapper}>
				<SearchBar
					placeholder="Search by email address, phone number, or user UID"
					onChange={ ( event ) => handleSearch( event.target.value ) }
				/>
				<Box sx={cardHeaderStyles.buttonsWrapper}>
					<CommonButton
						variant='contained'
						onClick={addUser}
						size='large'
						sx={cardHeaderStyles.addUserButton}
					>Add user
					</CommonButton>
					<IconButton>
						<RefreshIcon />
					</IconButton>
				</Box>
			</Box>
		);
	}

	function addNewUser( data ) {
		users.push( { ...data } );
		setOpen( false );
	}
	function getContent() {
		return (
			<>
				{ users.length ? users.map( ( user, key ) => (
					<Box key={key} sx={{ marginBottom: '20px' }}>
						<Typography>User ID: {user.userId}</Typography>
						<Typography>Email: {user.email}</Typography>
						<Typography>Phone: {user.phone}</Typography>
					</Box>
				) ) :
					<Typography
						align='center'
						sx={cardContentStyles.typo}>No users for this project yet</Typography>
				}
			</>
		);
	}

	return (
		<>
			<GridWrapper>
				<BasicCard header={getHeader()} content={getContent()}/>
				<NewUserModal open={open} onClose={()=>setOpen( false )} addNewUser={addNewUser} />
			</GridWrapper>
		</>
	);
}
