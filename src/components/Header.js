import React from 'react';
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import './Header.scss';

const styles = theme => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  root: {
    paddingLeft: 30,
  },
  navLink: {
    padding: 5,
    color: '#fff',
  },
});

const Header = ({ classes }) => (
  <header className={`${classes.header} header`}>
    <img src={logo} alt="Sauce Labs" className="logo" />
    <NavLink
      activeStyle={{
        fontWeight: "bold",
        color: "#436afe"
      }}
      className={`${classes.root} ${classes.navLink}`}
      to="/device/eu-devices"
    >
      EU DEVICES
  </NavLink>
    <NavLink
      activeStyle={{
        fontWeight: "bold",
        color: "#436afe"
      }}
      className={classes.navLink}
      to="/device/us-devices"
    >
      US DEVICES
      </NavLink>
  </header>
);

export default withStyles(styles)(Header);
