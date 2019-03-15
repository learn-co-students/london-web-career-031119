class Booking
  attr_reader :hotel, :guest, :date, :rating
  @@all = []

  def initialize(hotel, guest, date, rating = nil)
    @hotel = hotel
    @guest = guest
    @date = date
    @rating = rating
    @@all << self
  end

  def self.all
    @@all
  end
end
