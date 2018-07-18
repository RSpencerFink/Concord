import * as ChannelAPIUtil from '../util/channel_api_util'

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CURRENT_CHANNEL = "RECEIVE_CURRENT_CHANNEL";

const receiveAllChannels = (channels) => {
  return {
    type: RECEIVE_ALL_CHANNELS,
    channels
  };
};

const receiveChannel = (channel) => {
  return {
    type: RECEIVE_CHANNEL,
    channel
  }
};

const removeChannel = (channelId) => {
  return {
    type: REMOVE_CHANNEL,
    channelId
  };
};

export const receiveCurrentChannel = (channelId) => {
  return {
    type: RECEIVE_CURRENT_CHANNEL,
    channelId
  };
};

export const fetchChannels = (currentServerId) => {
  return (dispatch) => {
    return ChannelAPIUtil.fetchChannels(currentServerId).then((channels) => {
      return dispatch(receiveAllChannels(channels));
    });
  };
};

export const fetchChannel = (id) => {
  return (dispatch) => {
    return ChannelAPIUtil.fetchChannel(id).then((channel) => {
      return dispatch(receiveChannel(channel));
    });
  };
};

export const createChannel = (channel) => {
  return (dispatch) => {
    return ChannelAPIUtil.createChannel(channel).then((channel) => {
      return dispatch(receiveChannel(channel));
    });
  };
};

export const updateChannel = (channel) => {
  return (dispatch) => {
    return ChannelAPIUtil.updateChannel(channel).then((channel) => {
      return dispatch(receiveChannel(channel));
    });
  };
};

export const deleteChannel = (channelId) => {
  return (dispatch) => {
    return ChannelAPIUtil.deleteChannel(channelId).then(() => {
      return dispatch(removeChannel(channelId));
    });
  };
};
