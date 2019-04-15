class CartController < ApplicationController
  before_action :initialize_cart, only: [:add_to_cart]

  def add_to_cart
    session[:cart] << params[:id]

    redirect_to nachos_path
  end

  def remove_from_cart
    session[:cart] = session[:cart].select{ |item| item != params[:id]}

    redirect_to nachos_path
  end

  def clear_cart
    session[:cart] = []

    redirect_to nachos_path
  end


end