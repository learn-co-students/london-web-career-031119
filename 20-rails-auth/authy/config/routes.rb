Rails.application.routes.draw do
  resources :posts, only: [:show, :new, :create]
  resources :users, only: [:show, :new, :create]

  post "/posts/:id/add_comment", to: "posts#add_comment", as: "add_comment"

  get "/login_form", to: "sessions#login_form"
  post "/login", to: "sessions#login", as: "login"

  delete "/logout", to: "sessions#logout"

  get "/profile", to: "users#profile"

  delete "/comments/:id", to: "comments#delete"
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
