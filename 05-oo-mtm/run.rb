require 'pry'
require_relative './Hotel.rb'
require_relative './Guest.rb'
require_relative './Booking.rb'

h1 = Hotel.new("Premier Inn")
h2 = Hotel.new("Grand Hotel")
h3 = Hotel.new("W")
h4 = Hotel.new("Hilton")

bob = Guest.new("Bob")
rob = Guest.new("Rob")
dob = Guest.new("Dob")
mob = Guest.new("Mob")

b1 = Booking.new(h1, bob, '14/03/2019', 5)
b2 = Booking.new(h1, rob, '10/03/1988', 2)
b3 = Booking.new(h1, dob, '16/03/2019', 3)
b4 = Booking.new(h1, mob, '15/03/2019', 4)
b5 = Booking.new(h2, bob, '17/03/2019', 1)
b6 = Booking.new(h3, bob, '18/03/2019', 4)
b7 = Booking.new(h4, bob, '19/03/2019', 2)
b8 = Booking.new(h1, bob, '20/03/2019', 3)
b9 = Booking.new(h1, bob, '21/03/2019', 1)
b10 = Booking.new(h1, bob, '22/03/2019', 2)
b11 = Booking.new(h1, bob, '24/03/2019', 4)
b12 = Booking.new(h2, rob, '24/03/2019', 4)

binding.pry
puts "Mischief managed!"
