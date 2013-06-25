# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

users = User.create([
  {username: "Jamie", password: "123"},
  {username: "Asher", password: "123"}
])

photos = Photo.create([
  {title: "Puppy", user_id: 2, url: "http://www.acuteaday.com/blog/wp-content/uploads/2012/04/dalmatian-puppies-playing.jpg"},
  {title: "Frumpy bulldog", user_id: 2, url: "http://images4.fanpop.com/image/photos/15800000/Cute-Puppy-puppies-15813366-1600-1200.jpg"},
  {title: "GIANT RODENT PUPPY", user_id: 1, url: "http://i.huffpost.com/gen/1040788/thumbs/r-GIANT-RODENT-PUPPIES-large570.jpg?15"}
])

friendships = Friendship.create([
  {friend_id: 1, friender_id: 2},
  {friend_id: 2, friender_id: 1},
])