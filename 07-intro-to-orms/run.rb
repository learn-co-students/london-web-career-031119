require 'sqlite3'
require 'pry'
require_relative './Artist.rb'

DB = SQLite3::Database.new('music.db')
DB.results_as_hash = true

# instanciate
artist = Artist.new(name: "Nicolas")

# create it on the debug
artist.save

# change its name on both the instance and the DB
artist.name = "Bananarama"

# delete it from the DB
artist.destroy

# find an artist by name
Artist.find_by_name("AC/DC")

# or by id
Artist.find_by_id(2)

binding.pry
puts 'mischief managed!'
