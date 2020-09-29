import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import Zoom from '@material-ui/core/Zoom';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
}));

function ScrollTop(props: any) {
	const navigate = useNavigate();
	const { children, window } = props;
	const classes = useStyles();
	
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event: any) => {
		const anchor = (event.target.ownerDocument || document).querySelector('#home-page');

		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
		else{
			navigate("/");
		}
	};

	return (
		<Zoom in={trigger}>
			<div onClick={handleClick} role="presentation" className={classes.root}>
				{children}
			</div>
		</Zoom>
	);
}



export default function StT(props: any) {
	
	return (
		<React.Fragment>
			<ScrollTop {...props}>
				<Fab size="medium" aria-label="back to Home" color="primary">
					Home
				</Fab>
			</ScrollTop>
		</React.Fragment>
	);
}