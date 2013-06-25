class Tag < ActiveRecord::Base
  attr_accessible :photo_id, :user_id

  belongs_to :photo
  belongs_to :tagged_user, :class_name => "User", :foreign_key => :user_id
end
