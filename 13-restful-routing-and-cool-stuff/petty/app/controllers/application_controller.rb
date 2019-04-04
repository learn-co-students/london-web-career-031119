require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end


  get "/" do
    erb :welcome
  end

  get "/pets" do
    category = params[:category]
    @error = params[:error]
    if (category)
      @pets = Pet.where(species: category)
    else
      @pets = Pet.all
    end

    erb :"pet/index"
  end

  get "/pets/new" do
    @owners = Owner.all
    erb :"pet/new"
  end

  get "/pets/:id" do
    begin
      @pet = Pet.find(params[:id])
      erb :"pet/show"
    rescue
      redirect "/pets?error=Not%20Found"
    end
  end


  post "/pets" do
    pet = Pet.create(params)
    redirect "/pets/#{pet.id}"
  end

  get "/pets/:id/edit" do
    @pet = Pet.find_by(id: params[:id])
    if @pet
     erb :"pet/edit"
    else
      "YOU DUN GOOFED"
    end
  end

  patch "/pets/:id" do
    pet = Pet.find(params[:id])
    pet.update(params[:pet])
    redirect "/pets/#{pet.id}"
  end

  delete "/pets/:id" do
    pet = Pet.find(params[:id])
    pet.destroy
    redirect "/pets"
  end


  get "/owners/:id" do
    @owner = Owner.find(params[:id])
    erb :"owner/show"
  end
end
