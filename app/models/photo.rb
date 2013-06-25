# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  title      :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  url        :string(255)
#

class Photo < ActiveRecord::Base
  attr_accessible :title, :user_id, :url

  validates :user_id, :presence => true
  validates :url, :presence => true


  has_many :tags
  belongs_to :user

end
