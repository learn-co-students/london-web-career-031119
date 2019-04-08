class PlayersController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def index
    @players = Player.all
    # render :index
  end

  def show
    @player = Player.find(params[:id])
    # render :show
  end

  def new
    # render :new
  end

  def create
    Player.create(player_params)
  end

  def player_params
    params.require(:player).permit(:name, :age, :bio, :special_skill)
  end
end
