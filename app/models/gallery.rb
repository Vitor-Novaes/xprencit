class Gallery < ApplicationRecord
  validates_presence_of :title, :photo
  has_attached_file :photo, styles: { medium: "800x530#", thumb: "225x100#" },
  :storage => :cloudinary, :path => ':id/:style/:filename',
  :cloudinary_credentials => Rails.root.join("config/cloudinary.yml"),
  default_url: "/images/:style/missing.jpg"
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/
end
