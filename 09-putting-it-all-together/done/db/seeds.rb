Fandom.destroy_all
Fan.destroy_all
Track.destroy_all
Artist.destroy_all

metallica = Artist.create(name: 'Metallica')
taylor_swift = Artist.create(name: 'Taylor Swift')

Track.create([
  {title: 'Sad but true', artist: metallica},
  {title: 'Enter sandman', artist: metallica},
  {title: 'Master of puppets', artist: metallica},
  {title: 'Trouble', artist: taylor_swift},
  {title: 'Shake it off', artist: taylor_swift},
  {title: 'Look what you made me do', artist: taylor_swift}
])

nico = Fan.create(name: 'Nicolas')
guy = Fan.create(name: 'Guy')
vasile = Fan.create(name: 'Vasile')

Fandom.create([
  {artist: metallica, fan: nico},
  {artist: taylor_swift, fan: nico},
  {artist: metallica, fan: guy},
  {artist: taylor_swift, fan: vasile}
])
