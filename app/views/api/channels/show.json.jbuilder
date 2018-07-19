json.channels do
  json.set! @channel.id do
    json.extract! @channel, :id, :channel_name, :channel_info, :server_id
  end
end

json.servers do
    json.set! @channel.server.id do
      json.extract! @channel.server, :server_name, :server_info, :id, :server_owner_id, :server_image_url
    end
end
