class Artist
  attr_reader :id, :name

  def initialize(id: nil, name:)
    @id = id
    @name = name
  end

  def self.all
    artist_hashes = DB.execute "SELECT * FROM artists;"
    artist_hashes.map { |artist_hash| parse_artist_hash(artist_hash) }
  end

  def self.find_by_id(id)
    result = DB.execute("SELECT * FROM artists WHERE id = ? LIMIT 1;", id)
    artist_hash = result[0]
    if artist_hash
      parse_artist_hash(artist_hash)
    else
      "Not found."
    end
  end

  def self.find_by_name(name)
    result = DB.execute("SELECT * FROM artists WHERE name = ? LIMIT 1;", name)
    artist_hash = result[0]
    if artist_hash
      parse_artist_hash(artist_hash)
    else
      "Not found."
    end
  end

  def save
    if @id
      "User already exists."
    else
      DB.execute("INSERT INTO artists (name) VALUES (?);", @name)
      Artist.find_last
    end
  end

  def self.find_last
    result = DB.execute "SELECT * FROM artists ORDER BY id DESC LIMIT 1;"
    artist_hash = result[0]
    parse_artist_hash(artist_hash)
  end

  def greet
    "Hey, I'm #{@name} and I am id: #{@id}."
  end

  def self.create(name:)
    artist = Artist.new(name: name)
    artist.save
  end

  def destroy
    DB.execute("DELETE FROM artists WHERE id = ?;", @id)
  end

  def name=(new_name)
    @name = new_name
    DB.execute("UPDATE artists SET name = ? WHERE id = ?;", @name, @id)
  end

end
