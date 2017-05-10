import Inferno, { render } from 'inferno';
import { Provider } from 'inferno-redux';
import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './containers/app';
import configureStore from './store/configureStore';

const store = configureStore();

const browserHistory = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
