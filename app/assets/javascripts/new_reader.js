window.NewReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(feedsJSON) {
    var $rootEl = $("#content");

    var feeds = window.NewReader.feeds = new NewReader.Collections.Feeds(feedsJSON.feeds);

    new NewReader.Routers.Feeds($rootEl, feeds);
    Backbone.history.start();
  }
};
