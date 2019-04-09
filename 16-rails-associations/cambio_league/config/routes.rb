Rails.application.routes.draw do
  resources :haters
  resources :player_games
  resources :games
  resources :players

  # get "/players", to "players#index"
  # get "/players/new", to "players#new"
  # get "/players/:id", to "players#show"
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
