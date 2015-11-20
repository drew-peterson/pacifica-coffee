require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake dbseed:  (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



Admin.create(first_name: 'Joji', last_name: 'Gordon', user_name: 'joji', password: '1234', phone_number: '911')

10.times do |x|
  Item.create(
    item_name: Faker::Commerce.product_name, 
    item_description: Faker::Lorem.sentence(3), 
    quantity: rand(99), 
    price: rand(213), 
    sku: 'BAH6281', 
    large_image: Faker::Company.logo, 
    )
end