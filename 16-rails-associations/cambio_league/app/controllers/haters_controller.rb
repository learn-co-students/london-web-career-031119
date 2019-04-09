class HatersController < ApplicationController

  def new
    @hater = Hater.new
    @players = Player.all
  end

  def create
    @hater = Hater.create(hater_params)
  end

  def hater_params
    params.require(:hater).permit(:name, :player_id)
  end
end
