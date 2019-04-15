class NachosController < ApplicationController
  before_action :find_nacho, only: :show
  before_action :initialize_cart, only: [:index]

  def index
    @cart_nachos = session[:cart].map do |nacho_id|
      Nacho.find(nacho_id)
    end

    @nachos = Nacho.all
  end

  def show
    render :show
  end

  private

  def find_nacho
    @nacho = Nacho.find(params[:id])
  end
end
