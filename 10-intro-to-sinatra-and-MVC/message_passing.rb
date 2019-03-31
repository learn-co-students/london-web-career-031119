DATABASE = [
  {
    id: 1,
    name: "Dan",
    turtle_fan: true
  },
  {
    id: 2,
    name: "Gabe",
    turtle_fan: false
  },
  {
    id: 3,
    name: "Sarah",
    turtle_fan: true
  },
]

def show_home(name)
  system("clear")

  puts "Welcome, #{name}!"
end

def show_profile(id)
  system("clear")

  found = DATABASE.find {|person| person[:id] == id.to_i}

  puts "Hey, my name is #{found[:name]}!"
  if found[:turtle_fan]
    puts "I love turtles!!"
  else
    puts "Ew, turtles are gross!!!!"
  end
end



def router(route)
  system("clear")
  case route
  when 1
    puts "What's your name, bud?"
    data = gets.chomp
    show_home(data)
  when 2
    puts "Gimme an ID!"
    data = gets.chomp.to_i
    show_profile(data)
  else
    puts "404: Hold your horses! I don't know where you wanna go!"
  end

  gets.chomp
  run
end


def run
  system("clear")
  puts "What do you want to do?"
  puts "1. See the homepage"
  puts "2. See someone's profile"
  selection = gets.chomp.to_i

  router(selection)
end

run



# def router(route, parameters={})
#   case route
#   when 1
#     puts "What's your name, bud?"
#     data = gets.chomp
#     router(3, data)
#   when 2
#     puts "Gimme an ID!"
#     data = gets.chomp.to_i
#     router(4, data)
#   when 3
#     show_home(parameters)
#   when 4
#     show_profile(parameters)
#   end
# end

