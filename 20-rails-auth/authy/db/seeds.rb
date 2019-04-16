# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


10.times do
  username = Faker::Games::Pokemon.name
  User.create(
    username: username,
    password: "123",
    avatar_url: "https://robohash.org/#{username}.png?set=set4&size=300x300"
  )
end

User.all.each do |user|
  rand(4..10).times do
    post = Post.create(
      title: Faker::Hipster.sentence(3),
      content: Faker::Hipster.paragraphs(4).join(" "),
      author: user
    )

    rand(6..15).times do
      Comment.create(
        content: Faker::Hipster.sentences(2).join(" "),
        post: post,
        user: User.all.sample
      )
    end
  end
end