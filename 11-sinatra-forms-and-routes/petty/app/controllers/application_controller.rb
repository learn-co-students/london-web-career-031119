require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    # Allows you to use PATCH, PUTS, DELETE
    set :method_override, true
  end

  get "/" do
    erb :welcome
  end

  # Index
  # GET /pets
  get "/pets" do
    @pets = Pet.all
    erb :index
  end

  # New
  # GET /pets/new
  get "/pets/new" do
    erb :new
  end

  # Show
  # GET /pets/:id
  get "/pets/:id" do
    @pet = Pet.find(params[:id])
    erb :show
  end


  # Create
  # POST /pets
  post "/pets" do
    pet = Pet.create(params)

    redirect "/pets/#{pet.id}"
    # @pets = Pet.all
    # erb :index
  end

  # Edit
  # GET /pets/:id/edit
  get "/pets/:id/edit" do
    @pet = Pet.find(params[:id])

    erb :edit
  end

  # Update
  # PATCH /pets/:id
  patch "/pets/:id" do
    pet = Pet.find(params[:id])
    pet.update(params[:pet])

    redirect "/pets/#{pet.id}"
  end

  # Delete
  # DELETE /pets/:id
  delete "/pets/:id" do
    pet = Pet.find(params[:id])
    pet.destroy

    redirect "/pets"
  end


end
