@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :email, :user_image_url, :server_ids, :owned_server_ids
  end
end
