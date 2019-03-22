class Artist < ActiveRecord::Base
  has_many :tracks
  has_many :fandoms
  has_many :fans, through: :fandoms
end

# Model: Ruby Class <=> DB Table
# i.e. Artist <=> artists
