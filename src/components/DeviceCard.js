import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: 12,
  },
  card: {
    maxWidth: 150,
    boxShadow: '0 0 10px rgba(0,0,0,0.85)',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 325,
    },
  },
  cardRoot: {
    boxShadow: 'none',
  },
  appBar: {
    position: 'relative',
    background: 'linear-gradient(to right, #141e30, #243b55)',
  },
  flex: {
    flex: 1,
  },
  overviewCard: {
    maxWidth: 500,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 350,
    },
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  title: {
    color: '#dadada',
    fontWeight: '600',
    fontSize: 13,
  },
  releaseDate: {
    color: '#0a1c1d',
    fontSize: 12,
    fontWeight: '600',
  },
  rating: {
    borderRadius: '50%',
    height: 150,
    width: 150,
    border: '8px solid #818181',
  },
  ratingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#141e30',
  },
  overviewTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: '#141e30',
  },
  overviewSummary: {
    fontSize: 15,
    fontWeight: 500,
    color: '#243b55',
  },
  fixed: theme.mixins.toolbar,
  verticalGap: {
    margin: '15px 0',
  },
  deviceCard: {
    padding: 10,
  },
  chip: {
    margin: theme.spacing.unit,
  },
  deviceImg: {
    height: 200,
    margin: '0 auto',
    objectFit: 'contain',
  },
  preview: {
    height: 500,
    margin: '0 auto',
    objectFit: 'contain',
  },
  inactive: {
    '-webkit-filter': 'grayscale(100%)',
  },
  heading: {
    fontSize: 12,
    color: 'grey',
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class DeviceCard extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };


  render() {
    const { classes, device, availableDevices } = this.props;
    const deviceStatus = availableDevices.includes(device.descriptorId) ? '' : classes.inactive;
    const { open } = this.state;

    return (
      <React.Fragment>
        <Card elevation={0} classes={{ root: classes.cardRoot }}
          onClick={this.handleClickOpen} className={classes.card}>
          <CardActionArea>
            <img className={`${classes.deviceImg} ${deviceStatus}`} alt="device" src={`https://d3ty40hendov17.cloudfront.net/device-pictures/${device.descriptorId}.png`} />
          </CardActionArea>
        </Card>
        <Typography className={classes.releaseDate}>
          {device.name}
        </Typography>
        <Typography className={classes.releaseDate}>
          {device.os}
        </Typography>
        <Dialog
          fullScreen
          open={open}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClickOpen} aria-label="Close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <div className={classes.fixed} />
          <Grid
            alignItems="center"
            justify="center"
            direction="row"
            container
            className={classes.deviceCard}
            item
          >
            <Grid className={classes.centered} item xs={12} md={6} lg={6}>
              <Grid item xs={12} lg={6}>
                <Card classes={{ root: classes.cardRoot }} className={classes.overviewCard}>
                  <CardActionArea>
                    <img className={`${classes.preview} ${deviceStatus}`} alt="device" src={`https://d3ty40hendov17.cloudfront.net/device-pictures/${device.descriptorId}.png`} />
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
            <Grid
              className={classes.centered}
              alignItems="center"
              justify="center"
              direction="row"
              container
              xs={12} md={6} lg={6}>
              <Grid container direction="row" xs={12} className={`${classes.verticalGap} ${classes.centered}`}>
                <Grid item xs={6}>
                  <Typography className={classes.overviewTitle}>
                    {device.name}
                  </Typography>
                </Grid>
                <Grid xs={6} className={classes.centered}>
                  <div className={`${classes.rating} ${classes.centered}`}>
                    <Typography className={classes.ratingText}>
                      {device.os}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.overviewTitle}>
                    CPU-TYPE:   <span className={classes.heading}>{device.cpuType}</span>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.overviewTitle}>
                    CPU-CORES: <span className={classes.heading}>{device.cpuCores}</span>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.overviewTitle}>
                    RAM SIZE:  <span className={classes.heading}>{device.ramSize}</span>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.overviewTitle}>
                    SCREEN SIZE: <span className={classes.heading}>{device.screenSize}</span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Dialog>
      </React.Fragment >
    );
  }
}

DeviceCard.propTypes = {
  classes: PropTypes.object.isRequired,
  device: PropTypes.object,
};

export default withStyles(styles)(DeviceCard);
