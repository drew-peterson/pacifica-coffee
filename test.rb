require 'csv'

CSV.foreach('test.csv', :headers => true) do |obj|
  p "name: #{obj['name']}"
  p "des: #{obj['description']}"
end