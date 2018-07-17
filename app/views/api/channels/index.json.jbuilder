@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :channel_name, :channel_info, :server_id
  end
end
