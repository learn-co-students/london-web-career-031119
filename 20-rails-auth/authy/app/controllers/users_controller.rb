class UsersController < ApplicationController
  # before_action :current_user

  def create
    @user = User.create(user_params)

    redirect_to user_path(@user)
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end

  def profile
    if !@current_user
      flash[:notice] = "Please sign in to continue!"
      redirect_to "/login_form"
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end
