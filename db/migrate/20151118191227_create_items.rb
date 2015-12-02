class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :item_name
      t.text :item_description
      t.integer :quantity
      t.integer :price
      t.string :sku
      t.string :large_image
      t.string :small_image
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
