import { Box, TextField } from '@mui/material';
import BasicModal from '../../common/BasicModal/BasicModal';
import { newUserModalStyles } from './styles';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

const defaultValues = {
	userId: '',
	email: '',
	phone: '',
};

export default function NewUserModal( { open, onClose, addNewUser } ) {
	const [ values, setValues ] = useState( defaultValues );

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

	const { register, handleSubmit, formState: { errors } } = useForm( { resolver: yupResolver( validationSchema ) } );

	function addUser( data ) {
		addNewUser( data );
	}
	function handleChange( value ) {
		setValues( value );
	}
	useEffect( () => {
		if ( open ) setValues( defaultValues );
	}, [ open ] );


	function getContent() {
		return (
			<Box sx={newUserModalStyles.input}>
				<TextField
					placeholder='User ID'
					name='userId'
					label='User ID'
					required
					{...register( 'userId' )}
					error={errors.userId ? true : false}
					helperText={errors.userId?.message}
					value={values.userId}
					onChange={ ( event )=> handleChange( { ...values, userId: event.target.value } ) }
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
				content={getContent()}
				onSubmit={handleSubmit( addUser )}
			>

			</BasicModal>
		</>
	);
}
