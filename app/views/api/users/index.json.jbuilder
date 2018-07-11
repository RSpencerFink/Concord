@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :email, :user_image_url
  end
end
