@messages.each do |message_el|
  json.set! message_el.id do
    json.extract! message_el, :id, :user_id, :channel_id, :body, :created_at
  end
end
