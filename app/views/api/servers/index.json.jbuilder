@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :server_name, :server_info, :server_image_url, :server_owner_id, :channel_ids, :member_ids
  end
end
