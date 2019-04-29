class Artist < ActiveRecord::Base
  has_many :tracks
  has_many :fandoms
  has_many :fans, through: :fandoms

  def write_song(name)
    Track.create(artist: self, title: name)
  end
end

# Model: Ruby Class <=> DB Table
# i.e. Artist <=> artists
