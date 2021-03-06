class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
      t.string :user_image_url, null: false
      t.timestamps
    end
    add_index :users, :username
    add_index :users, :session_token, unique: true 
  end
end
