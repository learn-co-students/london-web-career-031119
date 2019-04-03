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
    @pets = Pet.all
    erb :"pet/index"
  end

  get "/pets/new" do
    @owners = Owner.all
    erb :"pet/new"
  end

  get "/pets/:id" do
    @pet = Pet.find(params[:id])
    erb :"pet/show"
  end

  get "/owners/:id" do
    @owner = Owner.find(params[:id])
    erb :"owner/show"
  end

  post "/pets" do
    pet = Pet.create(params)
    redirect "/pets/#{pet.id}"
  end

  get "/pets/:id/edit" do
    @pet = Pet.find(params[:id])
    erb :"pet/edit"
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
end
