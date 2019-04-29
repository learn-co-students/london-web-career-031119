class Fandom < ActiveRecord::Base
  belongs_to :artist
  belongs_to :fan
end
