class HomeController < ApplicationController

  def index
    @galleries = Gallery.all.order(id: :desc).where(carousel: true)
    @testimonials = Testimonial.all.order(id: :desc)
  end

end
