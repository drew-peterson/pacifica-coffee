class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :nickname, :address, :city, :state
      t.integer :zip, :user_id

      t.timestamps null: false
    end
  end
end
