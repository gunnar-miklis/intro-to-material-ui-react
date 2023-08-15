const cardHeaderStyles = {
	wrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: '20px',
		paddingRight: '20px',
		height: '65px',
		backgroundColor: '#f5f5f5',
		borderBottom: '1px solid rgba(0,0,0,0.12)',
	},
	buttonsWrapper: {
		display: 'flex',
		flexFlow: 'row nowrap',
		paddingLeft: '20px',
	},
	addUserButton: {
		fontSize: '1.05rem',
		whiteSpace: 'nowrap',
	},
};
const cardContentStyles = {
	typo: {
		margin: '40px 16px',
		color: 'rgba(0,0,0,0.6)',
		fontSize: '1.3rem',
	},
};

export { cardHeaderStyles, cardContentStyles };
