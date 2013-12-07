NewReader.Models.Feed = Backbone.Model.extend({
  initialize: function () {
    this.entries = new NewReader.Collections.Entries(this.get('entries'))
    this.entries.url = '/feeds/' + this.id + '/entries';
  }
});
