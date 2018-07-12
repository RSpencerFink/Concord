class CreateServer < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :server_name, null: false
      t.integer :server_owner_id, null: false
      t.text :server_info
      t.string :server_image_url, null: false
      t.timestamps
    end
    add_index :servers, :server_name
    add_index :servers, :server_owner_id
  end
end
