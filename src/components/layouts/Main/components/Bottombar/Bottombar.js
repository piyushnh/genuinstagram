import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
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
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(theme => ({
	root: {
		boxShadow: "none",
		background: "linear-gradient(315deg, #FE6B8B 30%, #FF8E53 90%)",
		width: "100%",
		position: "fixed",
		bottom: 0
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

const Bottombar = props => {
	const { className, onSidebarOpen, ...rest } = props;

	const classes = useStyles();

	const [notifications] = useState([]);
	const [value, setValue] = React.useState(0);

	return (
		<BottomNavigation
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
			showLabels
			className={classes.root}
		>
			<BottomNavigationAction
				className={classes.name}
				label="Recents"
				icon={<RestoreIcon />}
			/>
			<BottomNavigationAction
				className={classes.name}
				label="Favorites"
				icon={<FavoriteIcon />}
			/>
			<BottomNavigationAction
				className={classes.name}
				label="Nearby"
				icon={<LocationOnIcon />}
			/>
		</BottomNavigation>
	);
};

Bottombar.propTypes = {
	className: PropTypes.string,
	onSidebarOpen: PropTypes.func
};

export default Bottombar;
