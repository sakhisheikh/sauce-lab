import * as actions from '../ducks/devices/actions'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import DeviceCard from '../components/DeviceCard';
import Loader from '../components/Loader'

// constants
import { AVAILABILITY_REGION } from '../ducks/devices/constants';


const styles = theme => ({
  root: {
    flexGrow: 1,
    overflowX: 'hidden',
  },
  card: {
    maxWidth: 345,
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      margin: 30,
    },
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class DevicesList extends Component {
  state = {
    os: '',
  }

  componentDidMount() {
    this.processDevices();
  }

  componentDidUpdate(prevProps, state) {
    const { match } = this.props;
    if (prevProps.match.params.region !== match.params.region)
      this.processDevices();
  }

  processDevices = () => {
    Promise.all([
      this.checkAvailability(),
      this.loadDevices(),
    ])
  }

  loadDevices = () => {
    const { getDevices, match } = this.props;
    getDevices({ region: match.params.region }).then(
      (res) => {
        return res;
      }
    );
  }

  checkAvailability = () => {
    const { checkAvailability, match } = this.props;
    checkAvailability({ region: AVAILABILITY_REGION[match.params.region].availability }).then(
      (res) => {
        return res;
      }
    );
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { devices, classes, availableDevices } = this.props;
    const { os } = this.state;

    const filteredDevices = devices.length && devices.filter(device => new RegExp(os, 'i').test(device.os));
    if (!filteredDevices.length) {   // initial first render loadtime handled when no type is defined
      return (
        <Loader />
      )
    }
    return (
      <React.Fragment>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">OS Version</InputLabel>
              <Select
                value={os}
                onChange={this.handleChange}
                inputProps={{
                  name: 'os',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value='android'>Android</MenuItem>
                <MenuItem value='ios'>iOS</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Grid
              alignItems="flex-start"
              direction="row"
              container
              className={`${classes.root}`}
              item
              spacing={8}
            >
              {filteredDevices.map((device, i) => (
                <Fade key={i.toString()} in timeout={800}>
                  <Grid className={classes.centered} item xs={12} lg={2} md={3} sm={6} key={i}>
                    <Grid item xs={12}>
                      <DeviceCard
                        id="device-card"
                        {...{ device, availableDevices }}
                      />
                    </Grid>
                  </Grid>
                </Fade>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  devices: state.devices.devices,
  availableDevices: state.devices.checkAvailability,
});

const mapDispatchToProps = dispatch => ({
  getDevices: ({ region }) => dispatch(actions.getDevices({ region })),
  checkAvailability: ({ region }) => dispatch(actions.checkAvailability({ region })),
  loadScreen: isLoading => dispatch(actions.loadScreen(isLoading)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)((DevicesList))))
