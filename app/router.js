import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user');
  this.route('ex2');
  this.route('ex1');
  this.route('ex3');
  this.route('td2');
  this.route('td2_3');
  this.route('add');
});

export default Router;
