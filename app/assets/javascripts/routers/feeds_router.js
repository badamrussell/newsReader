NewReader.Routers.Feeds = Backbone.Router.extend({

  initialize: function($el, feeds) {
    this.$el = $el;
    this.feeds = feeds;
  },

  routes: {
    "" : "index",
    "feeds/:feed_id/entries" : "show",
    "feeds/:feed_id/entries/:id" : "entry"
  },

  index: function() {
    console.log("IN INDEX")
    this.feedsView = new NewReader.Views.FeedsIndex({
      collection: this.feeds,
      parentView: this
    });

    this._swapView(this.feedsView);
    //this.$el.html(this.feedsView.render().$el);
  },

  show: function(id) {
    console.log("IN SHOW")

    var feed = this.feeds.findWhere({id: +id});

    this.feedsView = new NewReader.Views.FeedShow({
      model: feed,
      parentView: this
    });

    this._swapView(this.feedsView);
    //this.$el.html(this.feedsView.render().$el);
  },

  entry: function(feed_id, id) {
    console.log("IN ENTRIES")
    var feed = this.feeds.findWhere({id: +feed_id});
    var entry = feed.entries.get(id)

    this.entryView = new NewReader.Views.EntryShow({
      model: entry,
      options: {
        feed: feed,
        parentView: this
      }
    });

    this._swapView(this.entryView);
    //this.$el.html(this.entryView.render().$el);
  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$el.html(newView.render().$el);
  }
});
