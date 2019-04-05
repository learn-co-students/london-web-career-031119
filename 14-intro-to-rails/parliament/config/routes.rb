Rails.application.routes.draw do
  resources :pets
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  # get "/laws", to: "laws#index"
  # get "/laws/:id", to: "laws#show"
  # get "/laws/new", to: "laws#new"
  # post "/laws", to: "laws#create"
  # get "/laws/:id/edit", to: "laws#edit"
  # patch "/laws/:id", to: "laws#update"
  # delete "/laws/:id", to: "laws#delete"

  resources :laws, only: [:index, :show]

end
