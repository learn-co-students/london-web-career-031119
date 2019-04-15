Rails.application.routes.draw do
  resources :nachos, only: [:index, :show]

  # get "/cart", to: "cart#index"

  patch "/add_to_cart", to: "cart#add_to_cart"
  delete "/clear_cart", to: "cart#clear_cart"
  delete "/remove_from_cart", to: "cart#remove_from_cart"
end
