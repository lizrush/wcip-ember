import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('seattle');
  this.route('about');
  this.route('how-it-works');

});

export default Router;
