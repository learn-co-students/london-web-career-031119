# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.destroy_all
Game.destroy_all

Player.create(
  name: "Riccardo",
  age: 21,
  bio: "Raised by wolves.",
  special_skill: "cheating"
)


Player.create(
  name: "Pete",
  age: 54,
  bio: "Debugger",
  special_skill: "losing"
)


Player.create(
  name: "Cully",
  age: 14,
  bio: "Most available",
  special_skill: "joker finder"
)


Game.create(
  time: rand(10..30),
  room: "Turing",
  prize: "$25000"
)
Game.create(
  time: rand(10..30),
  room: "Lounge",
  prize: "$30000 Burrito"
)
Game.create(
  time: rand(10..30),
  room: "Berners-Lee",
  prize: "$1000000"
)

Player.first.games << Game.first
Player.first.games << Game.second

Player.second.games << Game.first
Player.second.games << Game.third

Player.third.games << Game.second
Player.third.games << Game.third
