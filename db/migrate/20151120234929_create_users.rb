class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :user_name
      t.string :password_digest
      t.string :email
      t.string :phone_number
      t.boolean :admin, :default => false
      t.text :cart, :default => ''
      t.text :address, :default => ''

      t.timestamps null: false
    end
  end
end
