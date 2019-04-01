class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  # set :method_override, true

  # TODO create a route to root/home render home


  # TODO all books
  # Index page for Books


  # TODO Individual book
  get '/books' do
    @books = Book.all
    erb :index
  end

  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :show
  end

end
