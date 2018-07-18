json.servers do
  json.set! @server.id do
    json.extract! @server, :server_name, :server_info, :server_owner_id, :server_image_url, :id, :channel_ids
  end
end

json.channels do
  @server.channels.each do |channel|
    json.set! channel.id do
      json.extract! channel, :channel_name, :channel_info, :id, :server_id
    end
  end
end
