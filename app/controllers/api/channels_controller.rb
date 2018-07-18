class Api::ChannelsController < ApplicationController
  def index
    # debugger
    # @server = Server.find(params[:server_id])
    # @channels = @server.channels
    @channels = Channel.all
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def new
    @channel = Channel.new
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render '/api/channels/show'
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def edit
    @channel = Channel.find(params[:id])
  end

  def update
    @channel = Channel.find(params[:id])
  end

  def destroy
    @channel = Channel.find(params[:id])
  end

  private
  def channel_params
    params.require(:channel).permit(:channel_name, :channel_info, :server_id)
  end
end
