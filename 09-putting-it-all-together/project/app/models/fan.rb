class Fan < ActiveRecord::Base
  has_many :fandoms
  has_many :artists, through: :fandoms

  validates :name, presence: true
end
