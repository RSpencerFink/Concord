# == Schema Information
#
# Table name: channels
#
#  id           :bigint(8)        not null, primary key
#  channel_name :string           not null
#  channel_info :string
#  server_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Channel < ApplicationRecord

  validates :channel_name, :server_id, presence: true

  belongs_to :server,
  foreign_key: :server_id,
  class_name: :Server

end
