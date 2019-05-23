class UsersController < ApplicationController
  def signin
    user = User.find_by(username: params[:username])
    if user and user.authenticate(params[:password])
      render json: {id: user.id}
    else
      render json: { error: "User/password combination failed." }, status: 400
    end
  end

  def validate
    id = request.headers['Authorization']
    user = User.find_by(id: id)
    if user
      render json: {username: user.username}
    else
      render json: {error: 'Invalid id.'}, status: 404
    end 
  end
end
