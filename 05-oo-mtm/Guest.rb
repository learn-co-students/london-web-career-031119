class Guest
  attr_reader :name
  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def bookings
    Booking.all.select { |booking| booking.guest == self }
  end

  def hotels
    bookings.map { |booking| booking.hotel }
  end

  def booking_dates
    bookings.map { |booking| booking.date }
  end

  def visit_hotel(hotel, date, rating = nil)
    Booking.new(hotel, self, date, rating)
  end

end
