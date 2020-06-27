import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(4)
	}
}));

const Footer = props => {
	const { className, ...rest } = props;

	const classes = useStyles();

	return (
		<div {...rest} className={clsx(classes.root, className)}>
			<Typography variant="body1">
				&copy;{" "}
				<Link component="a" href="" target="_blank">
					Rotato Inc
				</Link>
				. 2019
			</Typography>
			<Typography variant="caption">Created with love by rotato</Typography>
		</div>
	);
};

Footer.propTypes = {
	className: PropTypes.string
};

export default Footer;
