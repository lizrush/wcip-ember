import Ember from "ember";

export default Ember.Component.extend({
  insertMap: function() {
    var container = this.$(".map-canvas");

    var options = {
      center: new window.google.maps.LatLng(this.get("latitude"), this.get("longitude")),
      zoom: 17,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP
    };

    new window.google.maps.Map(container[0], options);
  }.on('didInsertElement')
});
