class Api::ServerMembershipsController < ApplicationController
  def create
    @server = Server.find_by(server_name: params[:server_name][:server_name])
    @server_membership = ServerMembership.create(user_id: current_user.id, server_id: @server.id)
    if @server_membership.save
      render '/api/servers/show'
    else
      render json: @server_membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @server_membership = ServerMembership.find_by(server_id: params[:id])
    if @server_membership
      @server_membership.destroy
      render json: {serverId: @server_membership.server_id}
    else
      render json: @server_membership.errors.full_messages, status: 422
    end
  end

  private
  def server_membership_params
    params.require(:server_membership).permit(:server_name)
  end
end
