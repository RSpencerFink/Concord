import * as MessageAPIUtil from '../util/message_api_util';

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const receiveAllMessages = (messages) => {
  return {
    type: RECEIVE_ALL_MESSAGES,
    messages
  };
};

export const receiveMessage = (message) => {
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

export const createMessage = (message) => {
  return (dispatch) => {
    return MessageAPIUtil.createMessage(message).then((message) => {
      return dispatch(receiveMessage(message));
    });
  };
};
