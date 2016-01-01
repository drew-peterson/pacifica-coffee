class AddCaffeineAndRoastAndRegionToItem < ActiveRecord::Migration
  def change
    add_column :items, :caffeine, :string
    add_column :items, :roast, :string
    add_column :items, :region, :string
  end
end
