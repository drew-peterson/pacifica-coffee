class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :item_ids_quantities
      t.integer :user_id
      t.boolean :shipped, :default => false
      t.boolean :requested_return, :default => false
      t.boolean :return_received, :default => false
      t.boolean :refunded, :default => false

      t.timestamps null: false
    end
  end
end
