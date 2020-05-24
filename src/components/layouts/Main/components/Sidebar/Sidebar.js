import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Divider, Drawer } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import ImageIcon from "@material-ui/icons/Image";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";

import { Profile, SidebarNav, UpgradePlan } from "./components";

const useStyles = makeStyles(theme => ({
	drawer: {
		width: 240,
		[theme.breakpoints.up("lg")]: {
			marginTop: 64,
			height: "calc(100% - 64px)"
		}
	},
	root: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		display: "flex",
		flexDirection: "column",
		height: "100%",
		padding: theme.spacing(2)
	},
	divider: {
		margin: theme.spacing(2, 0)
	},
	nav: {
		marginBottom: theme.spacing(2)
	}
}));

const Sidebar = props => {
	const { open, variant, onClose, className, ...rest } = props;

	const classes = useStyles();

	const pages = [
		{
			title: "Home",
			href: "/home",
			icon: <HomeIcon />
		},
		{
			title: "Notifications",
			href: "/notifications",
			icon: <FastfoodIcon />
		},
		{
			title: "Restaurant",
			href: "/restaurants",
			icon: <RestaurantIcon />
		},
		{
			title: "Friends",
			href: "/friends",
			icon: <PeopleIcon />
		},

		{
			title: "Cart",
			href: "/cart",
			icon: <ShoppingCartIcon />
		},
		{
			title: "Account",
			href: "/account",
			icon: <AccountBoxIcon />
		},
		{
			title: "Settings",
			href: "/settings",
			icon: <SettingsIcon />
		},
		{
			title: "Sign out",
			href: "/signOut",
			icon: <ExitToAppIcon />
		}
	];

	return (
		<Drawer
			anchor="left"
			classes={{ paper: classes.drawer }}
			onClose={onClose}
			open={open}
			variant={variant}
		>
			<div {...rest} className={clsx(classes.root, className)}>
				<Profile />
				<Divider className={classes.divider} />
				<SidebarNav className={classes.nav} pages={pages} />
			</div>
		</Drawer>
	);
};

Sidebar.propTypes = {
	className: PropTypes.string,
	onClose: PropTypes.func,
	open: PropTypes.bool.isRequired,
	variant: PropTypes.string.isRequired
};

export default Sidebar;
