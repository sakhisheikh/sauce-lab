import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  progress: {
    height: '100%',
    position: 'fixed',
    zIndex: 999999,
    backgroundColor: 'rgba(255,255,255, 1)',
    transition: 'opacity 500ms',
  },
  loader: {
    color: 'blue',
  },
});

const Loading = ({ classes }) => {
  return (
    <div>
      <Grid item id="loadingGrid" xs={12} className={classes.root}>
        <Grid
          container
          className={classes.progress}
          alignItems="center"
          direction="row"
          justify="center"
        >
          <CircularProgress disableShrink className={classes.loader} />
        </Grid>
      </Grid>
    </div>
  );
};

Loading.propTypes = {
  loadScreen: PropTypes.any,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  loadScreen: state.devices.loadScreen,
})

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)((Loading)))