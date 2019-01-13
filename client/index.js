import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
         Route,
         Switch
       } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { withTracker } from 'meteor/react-meteor-data';
import './index.html';

import Admin from '../imports/ui/Admin';
import Dashboard from '../imports/ui/Dashboard';
import QuizEditor from '../imports/ui/QuizEditor';
import Signin from '../imports/ui/Signin';
import Signup from '../imports/ui/Signup';
import QuizList from '../imports/ui/QuizList';
import QuizListitem from '../imports/ui/QuizListItem';
import Logout from '../imports/ui/Logout';
import ManageUsers from '../imports/ui/ManageUsers';




const history = createBrowserHistory();
window.browserHistory = history;

const unauthenticatedPages = ['/signin', '/signup'];
const authenticatedPages = ['/dash', '/admin', '/manageusers'];

export const routes = (
  <Router history={history}>
    <Switch>
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/dash" component={Dashboard}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/manageusers" component={ManageUsers}/>
    </Switch>
  </Router>
);


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  const pathname = history.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push('/dash', '/admin', '/manageusers');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.push('signin');
  }
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById("render-target"));
});
