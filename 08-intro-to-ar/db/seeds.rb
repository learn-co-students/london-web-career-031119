Artist.destroy_all
Track.destroy_all
Fandom.destroy_all
Fan.destroy_all

nico = Artist.create(name: "Nicolas")
oli = Artist.create(name: "Oli")

Artist.create([
  {name: "Ricky"},
  {name: "Gio"},
  {name: "Take this"}
])

Track.create([
  {title: "Sunshine", artist: nico},
  {title: "Sunshine 2", artist: nico},
  {title: "Sunshine 3", artist: nico},
  {title: "Sunshine 4", artist: nico},
  {title: "Blah", artist_id: 17},
  {title: "Friday", artist_id: 18},
  {title: "Yayday!", artist_id: 19}
])

fan1 = Fan.create(name: "Fan 1")
fan2 = Fan.create(name: "Fan 2")
fan3 = Fan.create(name: "Fan 3")
fan4 = Fan.create(name: "Fan 4")

Fandom.create([
  {artist: nico, fan: fan1},
  {artist: nico, fan: fan2},
  {artist: nico, fan: fan3},
  {artist: nico, fan: fan4},
  {artist: oli, fan: fan1},
  {artist: oli, fan: fan2},
  {artist: oli, fan: fan3},
  {artist: oli, fan: fan4}
])
