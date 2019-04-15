class ApplicationController < ActionController::Base

  def initialize_cart
    session[:cart] ||= []
  end
end
