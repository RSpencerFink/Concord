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

const receiveChannel = (payload) => {
  return {
    type: RECEIVE_CHANNEL,
    payload
  }
};

const removeChannel = (channelId) => {
  return {
    type: REMOVE_CHANNEL,
    channelId
  };
};

export const receiveCurrentChannel = (serverId, channelId) => {
  return {
    type: RECEIVE_CURRENT_CHANNEL,
    serverId,
    channelId
  };
};

export const fetchChannels = (serverId) => {
  return (dispatch) => {
    return ChannelAPIUtil.fetchChannels(serverId).then((channels) => {
      return dispatch(receiveAllChannels(channels));
    });
  };
};

export const fetchChannel = (serverId, id) => {
  return (dispatch) => {
    return ChannelAPIUtil.fetchChannel(serverId, id).then((payload) => {
      return dispatch(receiveChannel(payload));
    });
  };
};

export const createChannel = (serverId, channel) => {
  return (dispatch) => {
    return ChannelAPIUtil.createChannel(serverId, channel).then((channel) => {
      return dispatch(receiveChannel(channel));
    });
  };
};

export const updateChannel = (serverId, channel) => {
  return (dispatch) => {
    return ChannelAPIUtil.updateChannel(serverId, channel).then((channel) => {
      return dispatch(receiveChannel(channel));
    });
  };
};

export const deleteChannel = (serverId, id) => {
  return (dispatch) => {
    return ChannelAPIUtil.deleteChannel(serverId, id).then(() => {
      return dispatch(removeChannel(id));
    });
  };
};
