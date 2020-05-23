import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
	root: {
		// display: 'flex',
		// flexWrap: 'wrap',
	}
});

const RouteWithLayout = props => {
	const { layout: Layout, component: Component, ...rest } = props;

	return (
		<Route
			{...rest}
			render={matchProps => (
				<Layout>
					<Component {...matchProps} />
				</Layout>
			)}
		/>
	);
};

RouteWithLayout.propTypes = {
	component: PropTypes.any.isRequired,
	layout: PropTypes.any.isRequired,
	path: PropTypes.string
};

export default withStyles(styles)(RouteWithLayout);
