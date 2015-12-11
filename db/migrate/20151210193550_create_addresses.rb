class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :nickname
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
