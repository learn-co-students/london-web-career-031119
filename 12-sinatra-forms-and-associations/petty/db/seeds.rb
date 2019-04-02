Pet.destroy_all

20.times do
  pet = ["dog", "cat"].sample
  if pet == "dog"
    Pet.create(
      name: Faker::Creature::Dog.name,
      species: "dog",
      breed: Faker::Creature::Dog.breed,
      color: Faker::Color.color_name,
      age: rand(1..20)
    )
  else
    Pet.create(
      name: Faker::Creature::Cat.name,
      species: "cat",
      breed: Faker::Creature::Cat.breed,
      color: Faker::Color.color_name,
      age: rand(1..20)
    )
  end
end