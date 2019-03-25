class CLI

  def initialize
    @prompt = TTY::Prompt.new
  end

  def get_users_name
    name = @prompt.ask("Yo, what's your name?")
    @user = Fan.find_or_create_by(name: name)
  end

  def welcome
    puts "Sup #{@user.name}, welcome to Taylorallica!"
  end

  def show_their_artists
    puts "You currently like:"
    @user.artists.each do |artist|
      puts artist.name
    end
  end

  def like_another_artist?
    @prompt.yes?("Would you like to like another artist?")
  end

  def pick_an_artist
    @prompt.select("Ok. Choose one below:", Artist.all_names)
  end

  def start
    get_users_name
    welcome
    show_their_artists
    if like_another_artist?
      pick_an_artist
    else
      puts "Ok, bye!"
    end
  end

end
