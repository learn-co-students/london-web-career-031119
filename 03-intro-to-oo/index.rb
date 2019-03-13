# Intro to OO

require 'pry'

name = "Nicolas"
age = 31

name2 = "Oli"
age2 = 30

# person = ["Nicolas", 31]
# person2 = ["Oli", 30]
# person3 = ["Name", 100]

person = {
  name: "Nicolas",
  age: 31
}

person2 = {
  name: "Oli",
  age: 30
}

def greet(person)
  puts "Hey there, I'm #{person[:name]} and I'm #{person[:age]} years old."
end

class Person

  attr_reader :legs
  attr_accessor :name, :age

  @@all = []

  def initialize(name, age)
    @name = name
    @age = age
    @legs = 2
    @@all << self
  end

  def have_accident
    if @legs > 0
      @legs -= 1
    else
      "What leg!?!?"
    end
  end

  def greet
    puts "Hey there, I'm #{@name} and I'm #{@age} years old, and I have #{@legs} legs."
  end

  def self.all
    @@all
  end

end

Person.new("Nicolas", 31)
Person.new("Oli", 30)
Person.new("Oli", 30)
Person.new("Oli", 30)
Person.new("Oli", 30)
Person.new("Oli", 30)
Person.new("Oli", 30)
Person.new("Oli", 30)

binding.pry
puts "Mischief managed!"
