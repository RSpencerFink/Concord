class Api::SessionsController < ApplicationController

  def create
   @user = User.find_by_credentials(
     params[:user][:email],
     params[:user][:password]
   )
   if @user
     log_in(@user)
     render '/api/users/show'
   else
     render json: ["Invalid Credentials"], status: 401
   end
 end

 def destroy
   log_out
   redirect_to new_api_session_url
 end

end
