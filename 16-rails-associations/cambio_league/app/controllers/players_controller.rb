class PlayersController < ApplicationController
  # skip_before_action :verify_authenticity_token

  def index
    @players = Player.all
    # render :index
  end

  def show
    @player = Player.find(params[:id])
    @player_game = PlayerGame.new
    @games = Game.all

    # render :show
  end

  def new
    @player = Player.new
    # render :new
  end

  def create
    player = Player.create(player_params)

    # redirect_to "/players/#{player.id}"
    # redirect_to player_path(player)
    redirect_to player
  end

  def edit
    @player = Player.find(params[:id])
  end

  def destroy
    @player = Player.find(params[:id])
    @player.destroy

    redirect_to players_path
  end

  def update
    byebug
  end

  def player_params
    params.require(:player).permit(:name, :age, :bio, :special_skill)
  end
end
