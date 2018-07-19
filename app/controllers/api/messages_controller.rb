class MessagesController < ApplicationController

  def create
    @message = current_user.messages.new(message_params)
    if @message.save

    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def index
    @messages = Message.find_by(channel_id: params[:id])
  end

  private
  def message_params
    params.require(:message).permit(:user_id, :channel_id, :message)
  end
end
