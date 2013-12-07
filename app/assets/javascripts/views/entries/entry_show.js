NewReader.Views.EntryShow = Backbone.View.extend({

  initialize: function(options) {
    this.options = options.options || {};
  },

  template: JST["entries/show"],

  events: {
    //"click .refresh_feed": "refresh"
  },

  render: function() {
    this.$el.html(this.template({
      entry: this.model
    }))

    return this;
  }
});
