class BandsController < ApplicationController

  def show
    @band = Band.find(params[:id])
  end

  def new
    if flash[:data]
      @band = Band.new(flash[:data])
    else 
      @band = Band.new
    end
  end

  def create
    @band = Band.new(band_params)

    if @band.save
      redirect_to band_path(@band)
    else
      # render :new
      flash[:errors] = @band.errors.full_messages
      flash[:data] = @band
      redirect_to new_band_path
    end

    # Check to see if values are in the params hash
      # Caveats: 
      # 1. Not repeatable - must be written in every action involving form data for this model
      # 2. If you have a lot of inputs, this is a ton of logic
      # 3. The point is to check whether the data from the form is in line with the data as the model needs
  end

  def edit
    
  end

  def update
    
  end

  def band_params
    params.require(:band).permit(:name, :home_city, :instrument_type, :number_of_members, :active)
  end

end