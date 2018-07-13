# == Schema Information
#
# Table name: servers
#
#  id               :bigint(8)        not null, primary key
#  server_name      :string           not null
#  server_owner_id  :integer          not null
#  server_info      :text
#  server_image_url :string           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Server < ApplicationRecord
  validates :server_name, :server_owner_id, :server_image_url, presence: true

  belongs_to :server_owner,
  foreign_key: :server_owner_id,
  class_name: :User

  has_many :memberships,
  foreign_key: :server_id,
  class_name: :ServerMembership,
  dependent: :destroy

  has_many :members,
  through: :memberships,
  source: :user

end
