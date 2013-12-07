class FeedsController < ApplicationController
  respond_to :html, :json

  def index
    respond_with @feeds = Feed.all
  end

  def create
    feed = Feed.find_or_create_by_url(params[:feed][:url])

    if feed
      feed.reload
      render :json => feed.to_json(include: :entries)
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end
end
