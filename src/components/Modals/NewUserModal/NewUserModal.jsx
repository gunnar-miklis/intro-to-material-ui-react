import { Box, TextField } from '@mui/material';
import BasicModal from '../../common/BasicModal/BasicModal';
import { newUserModalStyles } from './styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

// reset values on-modal-close
const defaultValues = {
	userId: '',
	email: '',
	phone: '',
};

export default function NewUserModal( { open, onClose, addNewUserCallback } ) {
	const [ values, setValues ] = useState( defaultValues ); // COMMENT: "values" is an object
	function handleChange( value ) {
		setValues( value );
	}
	useEffect( () => {
		if ( open ) setValues( defaultValues ); // reset values on-modal-close
	}, [ open ] );

	// yup schema for validating form inputs
	const validationSchema = Yup.object().shape( {
		userId: Yup.string()
			.required( 'User ID is required' )
			.min( 6, 'Provide at least 6 characters' ),
		email: Yup.string()
			.required( 'Email is required' )
			.email( 'Email is invalid' ),
		phone: Yup.string()
			.matches( /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid' ),
	} );

	// 1. handling textfield names (register)
	// 2. submit on correct user input (handleSubmit) or display errors as "helperText"
	// 3. parse through validation schema using the "resolver"
	const { register, handleSubmit, formState: { errors } } = useForm( { resolver: yupResolver( validationSchema ) } );

	// pass input data back to the "form input validation and searchbar page"
	function addUser( data ) {
		addNewUserCallback( data );
	}

	function getFormInputContent() {
		return (
			<Box sx={newUserModalStyles.input}>
				<TextField
					placeholder='User ID'
					name='userId'
					label='User ID'
					required
					{...register( 'userId' )} // useForm, react-hook-form
					error={errors.userId ? true : false}
					helperText={errors.userId?.message}
					value={values.userId}
					onChange={ ( event )=> handleChange( { ...values, userId: event.target.value } ) } // COMMENT: to write the "userId" to the corresponding object property, use spread operator: ...object
				/>
				<TextField
					placeholder='Email'
					name='email'
					label='Email'
					required
					{...register( 'email' )}
					error={errors.email ? true : false}
					helperText={errors.email?.message}
					value={values.email}
					onChange={ ( event )=> handleChange( { ...values, email: event.target.value } ) }
				/>
				<TextField
					placeholder='Phone'
					name='phone'
					label='Phone'
					{...register( 'phone' )}
					error={errors.phone ? true : false}
					helperText={errors.phone?.message}
					value={values.phone}
					onChange={ ( event )=> handleChange( { ...values, phone: event.target.value } ) }
				/>
			</Box>
		);
	}

	return (
		<>
			<BasicModal
				open={open}
				onClose={onClose}
				title='New user'
				subtitle='Fill out inputs and hit &apos;submit&apos; button.'
				content={getFormInputContent()}
				onSubmit={handleSubmit( addUser )}
			/>
		</>
	);
}
