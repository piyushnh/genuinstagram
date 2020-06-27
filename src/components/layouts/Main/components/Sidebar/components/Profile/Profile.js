import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		minHeight: "fit-content"
	},
	avatar: {
		width: 60,
		height: 60
	},
	name: {
		color: theme.palette.white,
		marginTop: theme.spacing(1)
	}
}));

const Profile = props => {
	const { className, ...rest } = props;

	const classes = useStyles();

	const user = {
		name: "prathik nayak",
		avatar: "/images/avatars/prathik.jpg",
		bio: "@naitefoods"
	};

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<Avatar
				alt="Person"
				className={classes.avatar}
				component={RouterLink}
				src={user.avatar}
				to="/settings"
			/>
			<Typography className={classes.name} variant="h4">
				{user.name}
			</Typography>
			<Typography className={classes.name} variant="body2">
				{user.bio}
			</Typography>
		</div>
	);
};

Profile.propTypes = {
	className: PropTypes.string
};

export default Profile;
