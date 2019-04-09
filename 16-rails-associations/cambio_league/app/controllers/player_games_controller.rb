class PlayerGamesController < ApplicationController
  def new
    @players = Player.all
    @games = Game.all
    
    @player_game = PlayerGame.new
  end

  def create
    player_game = PlayerGame.create(player_games_params)

    redirect_to player_path(player_game.player)
  end

  def player_games_params
    params.require(:player_game).permit(:player_id, :game_id)
  end

end
