import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

const receiveAllMessages = (messages) => {
  return {
    type: RECEIVE_ALL_MESSAGES,
    messages
  };
};

const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

export const fetchMessages = (serverId, channelId) => {
  return (dispatch) => {
    return MessageAPIUtil.fetchMessages(serverId, channelId).then((messages) => {
      return dispatch(receiveAllMessages(messages));
    });
  };
};

export const createMessage = (serverId, channelId, message) => {
  return (dispatch) => {
    return MessageAPIUtil.createMessage(serverId, channelId, message).then((message) => {
      return dispatch(receiveMessage(message));
    });
  };
};
