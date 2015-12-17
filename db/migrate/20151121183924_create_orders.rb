class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.string :item_ids_quantities, :shipping_address, :billing_address
      t.integer :user_id
      t.boolean :shipped, :requested_return, :return_received, :refunded,  :default => false

      t.timestamps null: false
    end
  end
end
