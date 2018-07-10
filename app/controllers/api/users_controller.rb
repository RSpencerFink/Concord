class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :index
    else
      render json: @user.errors.full_messages, status: 422
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
