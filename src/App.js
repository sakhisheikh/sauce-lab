import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store.js';
import Header from './components/Header';
import OverviewContainer from './containers/OverviewContainer';
import DevicesList from './containers/DevicesList';
import Main from './Main';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" render={() => (<OverviewContainer />)} />
            <Route path="/device/:region" render={() => (<DevicesList />)} />
            <Route render={() => (<div>Not found :(</div>)} />
          </Switch>
        </Main>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
