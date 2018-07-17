class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def show
    @Channel = Channel.find(params[:id])
  end

  def new
    @channel = Channel.new
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.server_id = params[:id]
    if @channel.save
      render '/api/channels/show'
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def edit
    @Channel = Channel.find(params[:id])
  end

  def update
    @Channel = Channel.find(params[:id])
  end

  def destroy
    @Channel = Channel.find(params[:id])
  end

  private
  def channel_params
    params.require(:channel).permit(:channel_name, :channel_info)
  end
end
