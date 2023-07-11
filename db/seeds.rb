greetings = [
  "Hello!",
  "Hi there!",
  "Greetings!",
  "Welcome!",
  "Salutations!"
]

greetings.each do |greeting|
  Message.create(content: greeting)
end
