@messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :user_id, :channel_id, :message
  end
end