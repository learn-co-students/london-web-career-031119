class Law < ApplicationRecord
  has_many :signatures
  has_many :politicians, through: :signatures
end
