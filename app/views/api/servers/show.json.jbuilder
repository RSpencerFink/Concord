json.servers do
  json.set! @server.id do
    json.extract! @server, :server_name, :server_info, :server_owner_id, :server_image_url, :id, :channel_ids, :member_ids
  end
end

json.channels do
  @server.channels.each do |channel|
    json.set! channel.id do
      json.extract! channel, :channel_name, :channel_info, :id, :server_id
    end
  end
end

json.users do
  @server.members.each do |member|
    json.set! member.id do
      json.extract! member, :username, :email, :id, :user_image_url
    end
  end
end
