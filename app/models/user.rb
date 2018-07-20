# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  user_image_url  :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :password_digest, :session_token, :user_image_url, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}


  after_initialize :ensure_session_token, :ensure_user_image_url

  has_many :owned_servers,
  foreign_key: :server_owner_id,
  class_name: :Server,
  dependent: :destroy

  has_many :server_memberships,
  foreign_key: :user_id,
  class_name: :ServerMembership

  has_many :servers,
  through: :server_memberships,
  source: :server

  has_many :messages,
  foreign_key: :user_id,
  class_name: :Message,
  dependent: :destroy

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def ensure_user_image_url
    self.user_image_url ||= "placeholder_user.png"
  end
end
