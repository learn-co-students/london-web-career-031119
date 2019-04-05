class Politician < ApplicationRecord
  has_many :signatures
  has_many :laws, through: :signatures
end
