class Artist < ActiveRecord::Base
  has_many :tracks
  has_many :fandoms
  has_many :fans, through: :fandoms

  validates :name, presence: true

  def self.all_names
    self.all.map { |artist| artist.name }
  end
end
