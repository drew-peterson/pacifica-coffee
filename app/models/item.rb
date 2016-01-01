class Item < ActiveRecord::Base

  include Filterable # file in models/concerns/filterable.rb

  # used for specific queries
  scope :caffeine, -> (caffeine) { where caffeine: caffeine }
  scope :roast, -> (roast) { where roast: roast }
  scope :region, -> (region) { where region: region }
end
