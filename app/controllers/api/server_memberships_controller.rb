class Api::ServerMembershipsController < ApplicationController
  def create
    @server_membership = ServerMembership.create(server_membership_params)
    if @server_membership.save
      render '/api/servers/index'
    else
      render json: @server_membership.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private
  def server_membership_params
    params.require(:server_membership).permit(:user_id, :server_id)
  end
end
