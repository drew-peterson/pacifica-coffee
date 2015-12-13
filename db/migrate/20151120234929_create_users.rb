class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name, :last_name, :user_name, :password_digest, :email, :phone_number
      t.boolean :admin, :default => false
      t.text :cart, :address, :default => ''

      t.timestamps null: false
    end
  end
end
