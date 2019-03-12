# hashes and the internet
require 'pry'
require 'json'
require 'rest-client'

# name = "Nicolas"
# stuff = '{"name": "Nicolas", "age": 31}'
#
# response = RestClient.get('https://www.reddit.com/')
# response2 = RestClient.get('https://www.reddit.com/.json')
#
# data = JSON.parse(response2)
# posts = data["data"]["children"]
# posts.each do |post|
#   puts "*" * 20
#   puts ""
#   puts post["data"]["title"]
#   puts ""
# end

def welcome
  puts "Welcome to Gooks!"
end

def get_user_input
  puts "Enter your search term below:"
  gets.chomp
end

def get_books_data(search_term)
  url = "https://www.googleapis.com/books/v1/volumes?q=#{search_term}"
  response = RestClient.get(url)
  data = JSON.parse(response)
  data["items"]
end

def get_book_title(book)
  book["volumeInfo"]["title"]
end

def get_book_snippet(book)
  if book["searchInfo"] && book["searchInfo"]["textSnippet"]
    book["searchInfo"]["textSnippet"]
  else
    "Snippet not available."
  end
end

def print_book(book)
  puts "*" * 20
  puts ""
  puts "Title: ", get_book_title(book)
  puts "Snippet: ", get_book_snippet(book)
  puts ""
end

def print_books(books)
  books.each { |book| print_book(book) }
end

def run
  # welcome user
  welcome

  # get search term from user
  search_term = get_user_input

  # get book data from the Google API (parse it, too!)
  books = get_books_data(search_term)

  # print it in a nice, human-readable format
  print_books(books)
end

run
#
# binding.pry
# puts "Mischief managed!"
