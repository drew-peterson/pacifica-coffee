require 'faker'
require 'csv'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake dbseed:  (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



User.create(first_name: 'Joji', last_name: 'Gordon', user_name: 'joji', password: '1234', phone_number: '911', admin: true)

User.create(first_name: 'Daniel', last_name: 'Huang', user_name: 'daniel', password: '1234', phone_number: '911')

CSV.foreach('db/seed.csv', :headers => true) do |obj|
  Item.create(
    id: rand(10000..99999),
    item_name: obj['name'],
    item_description: obj['description'],
    quantity: rand(99),
    price: rand(8..16),
    sku: 'BAH6281',
    large_image: Faker::Company.logo,
    )
end

Address.create(nickname: "Joji's Palace", address: '123 456th st', city: 'El Cerrito', state: 'CA', zip: 94999, user_id: 1)
Address.create(nickname: "Joji's Loft", address: '654 321st st', city: 'Manhattan', state: 'NY', zip: 99997, user_id: 1)
Address.create(nickname: "Joji's Mansion", address: '789 123rd ave', city: 'Beverly Hills', state: 'CA', zip: 99999, user_id: 1)

# Testing key
# PUBLISHABLE_KEY=sk_test_dLVNZ2c2HOfN6Ff5dcV1NbcF SECRET_KEY=pk_test_uksl51zPIOATT1torKitrzfN rails s

