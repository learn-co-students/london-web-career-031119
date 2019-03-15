class Hotel

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
    Booking.all.select { |booking| booking.hotel == self }
  end

  def guests
    bookings.map { |booking| booking.guest }.uniq
  end

  def guest_names
    guests.map { |guest| guest.name }
  end



  def average_rating
    ratings.sum / ratings.length.to_f
  end

  def self.top_rated
    @@all.max_by { |hotel| hotel.average_rating }
  end

  private
  def ratings
    bookings.map { |booking| booking.rating }
  end

end
