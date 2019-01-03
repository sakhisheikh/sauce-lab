import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = () => ({
  root: {
    fontSize: 15,
  }
});

function OverviewContainer({ classes }) {
  return (
    <p className={classes.root}>Please Select a region</p>
  );
}

OverviewContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OverviewContainer);
