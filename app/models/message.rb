# == Schema Information
#
# Table name: messages
#
#  id         :bigint(8)        not null, primary key
#  message    :text             not null
#  user_id    :integer          not null
#  channel_id :integer          not null
#

class Message < ApplicationRecord
  
  validates :message, :user_id, :channel_id, presence: true

  belongs_to :author,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :channel,
  foreign_key: :channel_id,
  class_name: :Channel

end
