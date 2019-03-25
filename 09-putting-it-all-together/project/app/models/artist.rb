class Artist < ActiveRecord::Base
  has_many :tracks
  has_many :fandoms
  has_many :fans, through: :fandoms

  validates :name, presence: true

  def write_song(title)
    track = Track.new(title: title, artist: self)
    if track.save
      puts "it worked!"
    else
      puts track.errors.messages
    end
  end

  def self.all_names
    self.all.map { |artist| artist.name }
  end
end
