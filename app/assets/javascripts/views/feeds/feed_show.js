NewReader.Views.FeedShow = Backbone.View.extend({

  template: JST["feeds/show"],

  initialize: function() {
    var that = this;

    var events = ["add", "remove", "reset"];

    _(events).each(function (event) {
      that.listenTo(that.model.entries, event, that.render);
    });
  },

  events: {
    "click .refresh_feed": "refresh"
  },

  render: function() {
    this.$el.html(this.template({
      feed: this.model
    }))

    return this;
  },

  refresh: function(event) {
    console.log("REFRESH");
    event.preventDefault();

    console.log(this.model.entries.at(1))
    //var renderCallback = that.render.bind(this)
    this.model.entries.fetch({
      success: function(collection, response, options) {
        console.log("SUCCESS")
        console.log(collection.at(1))
      },

      error: function(collection, response, options) {
        console.log("ERROR")
      }


    })
  }
});