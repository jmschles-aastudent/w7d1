# == Schema Information
#
# Table name: friendships
#
#  id          :integer          not null, primary key
#  friender_id :integer
#  friend_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Friendship < ActiveRecord::Base
  attr_accessible :friend_id, :friender_id

  belongs_to :friender, :class_name => "User", :foreign_key => :friender_id
  belongs_to :friend, :class_name => "User", :foreign_key => :friend_id

end
