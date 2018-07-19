class CreateMessage < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :message, null: false
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
    end
    add_index :messages, :user_id
    add_index :messages, :channel_id
  end
end
