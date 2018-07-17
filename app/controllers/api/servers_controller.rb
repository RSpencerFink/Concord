class Api::ServersController < ApplicationController
  before_action :require_login
  before_action :require_ownership, only: [:edit, :update, :destroy]

  def new
    @server = Server.new
  end

  def create
    @server = current_user.owned_servers.new(server_params)
    if @server.save
      ServerMembership.create(user_id: current_user.id, server_id: @server.id)
      render '/api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def index
    @servers = current_user.servers
  end

  def show
    @server = Server.find(params[:id])
  end

  def edit
    @server = Server.find(params[:id])
  end

  def update
    @server = Server.find(params[:id])
    if @server.update(server_params)
      render '/api/servers/show'
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find(params[:id])
    if @server
      @server.destroy
      render json: {}
    else
      render json: ['Unable to Delete Server'], status: 422
    end
  end

  private
  def server_params
    params.require(:server).permit(:server_name, :server_info, :server_image_url, :server_owner_id)
  end

  def require_ownership
    return if current_user.owned_servers.find_by(id: params[:id])
    render json: ['Forbidden'], status: :forbidden
  end
end
