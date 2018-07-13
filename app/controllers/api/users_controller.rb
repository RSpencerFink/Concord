class Api::UsersController < ApplicationController
  def new
    @user = User.new()
  end

  def index
    @users = User.all
    render '/api/users/index'
  end

  def show
    @user = User.find_by(params[:id]).includes(:server_ids, :owned_server_ids)
    render '/api/users/show'
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
