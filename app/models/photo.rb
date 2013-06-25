class Photo < ActiveRecord::Base
  attr_accessible :title, :user_id

  validates user_id, :presence => true

  has_many :tags
  belongs_to :user

end
