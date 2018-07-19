class Api::ChannelsController < ApplicationController
  def index
    @channels = Server.find(params[:server_id]).channels
  end

  def show
    @channel = Channel.includes(:server, :messages).find(params[:id])
  end

  def new
    @channel = Channel.new
  end

  def create
    @channel = Server.find(params[:server_id]).channels.new(channel_params)
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
    if @channel
      @channel.destroy
      render json: {}
    else
      render json: ['Unable to Delete Server'], status: 422
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:channel_name, :channel_info, :id, :server_id)
  end
end
