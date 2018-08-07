class MessageColumnNameChange < ActiveRecord::Migration[5.2]
  def change
    rename_column :messages, :message, :body
  end
end
