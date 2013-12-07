NewReader.Views.FeedsIndex = Backbone.View.extend({

  template: JST['feeds/index'],

  initialize: function() {
    var that = this;

    _.bindAll(this, "render");

    var events = ["add", "remove", "reset"];

    _(events).each(function (event) {
      that.listenTo(that.collection, event, that.render);
    });
  },

  render: function() {
    this.$el.html(this.template({
      collection: this.collection
    }))

    return this;
  }
});
