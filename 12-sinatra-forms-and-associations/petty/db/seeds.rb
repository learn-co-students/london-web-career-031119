Pet.destroy_all
Owner.destroy_all

10.times do 
  Owner.create(
    name: Faker::FunnyName.name,
    age: rand(5..83),
    catchphrase: Faker::Hipster.sentence
  )
end

20.times do
  pet = ["dog", "cat"].sample
  if pet == "dog"
    Pet.create(
      name: Faker::Creature::Dog.name,
      species: "dog",
      breed: Faker::Creature::Dog.breed,
      color: Faker::Color.color_name,
      age: rand(1..20),
      owner: Owner.all.sample
    )
  else
    Pet.create(
      name: Faker::Creature::Cat.name,
      species: "cat",
      breed: Faker::Creature::Cat.breed,
      color: Faker::Color.color_name,
      age: rand(1..20),
      owner: Owner.all.sample
    )
  end
end