# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  username      :string(255)
#  password      :string(255)
#  session_token :string(255)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class User < ActiveRecord::Base
  attr_accessible :username, :password

  validates :username, :presence => true,
                       :uniqueness => true

  validates :password, :presence => true

  has_many :photos
  has_many :friendships, :foreign_key => :friender_id
  has_many :friends, through: :friendships, :source => :friend_id
  has_many :tags, :foreign_key => :user_id


  def verify_password(password_attempt)
    return password == password_attempt
  end

  def reset_session_token
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!

    return self.session_token
  end
end
