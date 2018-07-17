class CreateChannel < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :channel_name, null: false
      t.string :channel_info
      t.integer :server_id, null: false
      t.timestamps
    end
    add_index :channels, :channel_name
    add_index :channels, :server_id
  end
end
