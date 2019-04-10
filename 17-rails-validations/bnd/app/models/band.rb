class Band < ApplicationRecord
  validates :name, presence: true
  validates :home_city, presence: true
  validates :instrument_type, presence: true
  validates :number_of_members, presence: true
  validates :number_of_members, numericality: {greater_than: 1}
  validates :active, presence: true
end
