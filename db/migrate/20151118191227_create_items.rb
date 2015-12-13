class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :item_name, :sku, :large_image, :small_image
      t.integer :quantity, :price
      t.text :item_description

      t.timestamps null: false
    end
  end
end
