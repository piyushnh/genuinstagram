import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Badge,
	Hidden,
	IconButton,
	Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import {onLogout} from '../../../../../store/actions/authentication' 

const useStyles = makeStyles(theme => ({
	root: {
		boxShadow: "none",
		background: "linear-gradient(315deg, #FE6B8B 30%, #FF8E53 90%)",
		display: "flex",
		flexDirection: "column"
	},
	flexGrow: {
		flexGrow: 1
	},
	signOutButton: {
		marginLeft: theme.spacing(1)
	},
	name: {
		color: theme.palette.white,
		fontFamily: "monospace",
		fontWeight: "normal"
	}
}));

const Topbar = (props) => {
	const { className, onSidebarOpen, ...rest } = props;

	const classes = useStyles();

	const [notifications] = useState([]);

	const logout = () => {
		props.dispatch(onLogout())
	}

	return (
		<AppBar {...rest} className={clsx(classes.root, className)}>
			<Toolbar>
				{/*         <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/logo--white.svg"
          />
        </RouterLink> */}
				<Hidden lgUp>
					<IconButton color="inherit" onClick={onSidebarOpen}>
						<MenuIcon />
					</IconButton>
				</Hidden>
				<Typography className={classes.name} variant="h3">
					influ
				</Typography>
				<div className={classes.flexGrow} />
				{/* <Hidden mdDown> */}
				<IconButton color="inherit">
					<Badge
						badgeContent={notifications.length}
						color="primary"
						variant="dot"
					>
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<IconButton className={classes.signOutButton} onClick={logout} color="inherit">
					<InputIcon />
				</IconButton>
				{/* </Hidden> */}
			</Toolbar>
		</AppBar>
	);
};

Topbar.propTypes = {
	className: PropTypes.string,
	onSidebarOpen: PropTypes.func
};

const mapStateToProps = state => ({

})




export default connect(mapStateToProps)(Topbar)
