class Api::MessagesController < ApplicationController

  def create
    @message = current_user.messages.new(message_params)
    if @message.save
      @channel = Channel.find(@message.channel_id)
      ChannelChannel.broadcast_to(@channel, {channel: @channel, message: @message})
      render '/api/messages/show'
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def index
    @messages = Channel.find_by(channel_id: params[:id]).messages.order(created_at: :desc)
  end

  private
  def message_params
    params.require(:message).permit(:body, :channel_id)
  end
end
