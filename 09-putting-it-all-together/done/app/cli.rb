class CLI

  attr_accessor :name

  def initialize
    @prompt = TTY::Prompt.new
  end

  def start
    get_name
    pick_artist
  end

  def get_name
    @name = @prompt.ask("Hey, what's your name? ")
  end

  def pick_artist
    @prompt.select("Ok #{name}, pick an artist!", Artist.all_names)
  end
end
