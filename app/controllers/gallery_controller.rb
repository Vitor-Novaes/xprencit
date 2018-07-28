class GalleryController < ApplicationController

  def index
    @galleries = Gallery.all.order(id: :desc)
  end
end
