import GridWrapper from '../../components/common/GridWrapper/GridWrapper';
import Loading from '../../components/common/Loading/Loading';
import CommonButton from '../../components/common/CommonButton/CommonButton';
import BasicSnackbar from '../../components/common/BasicSnackbar/BasicSnackbar';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

export default function SkeletonSnackbarPage() {
	const [ open, setOpen ] = useState( false );
	const [ loading, setLoading ] = useState( true );

	useEffect( () => {
		const timer = setTimeout( () => setLoading( false ), 2000 );
		return () => clearTimeout( timer );
	}, [] );

	const handleClick = () => {
		setOpen( true );
	};

	const handleClose = ( event, reason ) => {
		if ( reason === 'clickaway' ) {
			return;
		}

		setOpen( false );
	};
	return (
		<>
			<GridWrapper>
				{ loading ?
					<Loading>
						<CommonButton
							variant="contained"
							onClick={handleClick}
						>
						Open success snackbar
						</CommonButton>
					</Loading>
					:
					<CommonButton
						variant="contained"
						onClick={handleClick}
					>
					Open success snackbar
					</CommonButton>
				}

				{ loading ?
					<Loading>
						<Typography>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu sem ut velit vestibulum lobortis. Aliquam urna ex, hendrerit vel arcu in, vestibulum tempor ante. Vestibulum bibendum in ipsum eu aliquam. Ut pulvinar semper lectus sit amet pulvinar. Etiam scelerisque, neque et malesuada porta, dui mauris accumsan velit, ac consectetur nulla massa molestie lectus. Cras mollis nibh non augue sodales, a dictum velit varius. Sed interdum mauris ut condimentum hendrerit. Nulla pretium mi sed velit aliquam vehicula. Cras ut lacus eu ipsum tempus convallis. Ut non imperdiet ipsum. Donec ipsum nulla, rutrum quis bibendum quis, rutrum a odio. Nullam ornare imperdiet mi. Aliquam vitae elit quis eros euismod cursus.</p>
						</Typography>
					</Loading> :
					<Typography>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu sem ut velit vestibulum lobortis. Aliquam urna ex, hendrerit vel arcu in, vestibulum tempor ante. Vestibulum bibendum in ipsum eu aliquam. Ut pulvinar semper lectus sit amet pulvinar. Etiam scelerisque, neque et malesuada porta, dui mauris accumsan velit, ac consectetur nulla massa molestie lectus. Cras mollis nibh non augue sodales, a dictum velit varius. Sed interdum mauris ut condimentum hendrerit. Nulla pretium mi sed velit aliquam vehicula. Cras ut lacus eu ipsum tempus convallis. Ut non imperdiet ipsum. Donec ipsum nulla, rutrum quis bibendum quis, rutrum a odio. Nullam ornare imperdiet mi. Aliquam vitae elit quis eros euismod cursus.</p>
					</Typography>
				}
				{ loading ?
					<Loading>
						<Typography>
							<p>Donec cursus nunc sed magna consequat tristique. In hac habitasse platea dictumst. Mauris convallis mi leo, id congue lectus tristique sed. Etiam tempus tellus rhoncus, eleifend ex eget, faucibus augue. Praesent maximus fringilla lorem. In massa arcu, scelerisque ut accumsan vel, aliquam id nibh. Morbi fringilla consequat pharetra. Nullam eleifend ipsum in justo eleifend, sit amet facilisis mi porttitor. Praesent eget consectetur ex, sit amet convallis nisl. In maximus dignissim quam, in pulvinar tellus bibendum euismod.</p>
						</Typography>
					</Loading> :
					<Typography>
						<p>Donec cursus nunc sed magna consequat tristique. In hac habitasse platea dictumst. Mauris convallis mi leo, id congue lectus tristique sed. Etiam tempus tellus rhoncus, eleifend ex eget, faucibus augue. Praesent maximus fringilla lorem. In massa arcu, scelerisque ut accumsan vel, aliquam id nibh. Morbi fringilla consequat pharetra. Nullam eleifend ipsum in justo eleifend, sit amet facilisis mi porttitor. Praesent eget consectetur ex, sit amet convallis nisl. In maximus dignissim quam, in pulvinar tellus bibendum euismod.</p>
					</Typography>
				}
				{ loading ?
					<Loading>
						<Typography>
							<p>Suspendisse sit amet nibh vitae odio viverra vulputate. Quisque sagittis nibh et ligula ornare, eget sagittis felis pellentesque. Aliquam erat volutpat. Maecenas laoreet, massa in venenatis scelerisque, libero ligula pharetra velit, non ultrices tellus libero a dolor. Suspendisse id pulvinar ipsum, et posuere libero. Pellentesque eu dignissim velit, a vestibulum augue. Donec elementum ex vitae felis pellentesque, ac consectetur nibh sagittis. Phasellus rutrum facilisis libero, non volutpat magna pretium eu. Nunc at lacus risus. Sed posuere metus non tristique tempor.</p>
						</Typography>
					</Loading> :
					<Typography>
						<p>Suspendisse sit amet nibh vitae odio viverra vulputate. Quisque sagittis nibh et ligula ornare, eget sagittis felis pellentesque. Aliquam erat volutpat. Maecenas laoreet, massa in venenatis scelerisque, libero ligula pharetra velit, non ultrices tellus libero a dolor. Suspendisse id pulvinar ipsum, et posuere libero. Pellentesque eu dignissim velit, a vestibulum augue. Donec elementum ex vitae felis pellentesque, ac consectetur nibh sagittis. Phasellus rutrum facilisis libero, non volutpat magna pretium eu. Nunc at lacus risus. Sed posuere metus non tristique tempor.</p>
					</Typography>
				}

				<BasicSnackbar
					open={open}
					onClose={handleClose}
					severity='success'
					message='snackbar opened'
				/>
			</GridWrapper>
		</>
	);
}
