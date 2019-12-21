# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

posts = Post.create([
  {title: 'title one', description: 'description one', url: 'https://www.youtube.com/embed/S0-UR3FVH1E'},
  {title: 'title two', description: 'description two', url: 'https://www.youtube.com/embed/S0-UR3FVH1E'},
  {title: 'title three', description: 'description three', url: 'https://www.youtube.com/embed/S0-UR3FVH1E'}
])