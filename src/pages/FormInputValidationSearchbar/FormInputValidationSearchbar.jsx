import { Box, IconButton, Typography } from '@mui/material';
import BasicCard from '../../components/common/BasicCard/BasicCard';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import { cardContentStyles, cardHeaderStyles } from './styles';
import { useState } from 'react';
import NewUserModal from '../../components/Modals/NewUserModal/NewUserModal';
import RefreshIcon from '@mui/icons-material/Refresh';


export default function FormInputValidationSearchbarPage() {
	const [ open, setOpen ] = useState( false );
	const [ users, setUsers ] = useState( [
		{
			userId: 'user123',
			email: 'user@123.com',
			phone: 123123123,
		},
		{
			userId: 'user999',
			email: 'user@999.com',
			phone: 999999999,
		},
		{
			userId: 'someone',
			email: 'someone@999.de',
			phone: 444444444,
		},
	] );
	const [ searchResults, setSearchResults ] = useState( users );

	function getCardHeader() {
		// NOTE: search functionality
		function handleSearch( value ) {
			filterData( value );
		}
		function filterData( value ) {
			const lowerCasedValue = value.toLowerCase().trim(); // format, to make matching easier
			if ( !lowerCasedValue ) setUsers( searchResults ); // if the searchbar is empty, set to intial/default user list
			else {
				const filteredData = searchResults.filter( ( item ) => { // filter out the true/false
					return Object.keys( item ).some( ( key ) => { // loop through object, if one ("some") condition (.includes(value) ) is met, return true/false
						return item[key].toString().toLowerCase().includes( lowerCasedValue );
					} );
				} );
				setUsers( filteredData );
			}
		}
		// NOTE: create the entire card-header structure, "searchbar" + "addUser button"
		return (
			<Box sx={cardHeaderStyles.wrapper}>
				<SearchBar
					placeholder="Search by email address, phone number, or user UID"
					onChange={ ( event ) => handleSearch( event.target.value ) }
				/>
				<Box sx={cardHeaderStyles.buttonsWrapper}>
					<CommonButton
						variant='contained'
						onClick={ () => setOpen( true ) }
						size='large'
						sx={cardHeaderStyles.addUserButton}
					>Add user</CommonButton>
					<IconButton>
						<RefreshIcon onClick={()=>setUsers( [] )}/>
					</IconButton>
				</Box>
			</Box>
		);
	}

	// add new user to the users list
	function addNewUserCallback( data ) {
		users.push( { ...data } );
		setOpen( false );
	}

	// NOTE: create the entire card-content structure, "users list"
	function getCardContent() {
		return (
			<>
				{ users.length ?
					users.map( ( user, key ) => (
						<Box key={key} sx={{ marginBottom: '20px' }}>
							<Typography><Box component='span' sx={{ fontWeight: 'bold' }}>User ID:</Box> {user.userId}</Typography>
							<Typography><Box component='span' sx={{ fontWeight: 'bold' }}>Email:</Box> {user.email}</Typography>
							<Typography><Box component='span' sx={{ fontWeight: 'bold' }}>Phone:</Box> {user.phone}</Typography>
						</Box>
					) ) :
					<Typography
						align='center'
						sx={cardContentStyles.typo}
					>No users for this project yet</Typography>
				}
			</>
		);
	}

	return (
		<>
			<GridWrapper>
				<BasicCard header={getCardHeader()} content={getCardContent()}/>
				<NewUserModal open={open} onClose={()=>setOpen( false )} addNewUserCallback={addNewUserCallback} />
			</GridWrapper>
		</>
	);
}
