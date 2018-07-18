import * as ServerAPIUtil from '../util/server_api_util';

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const RECEIVE_CURRENT_SERVER = "RECEIVE_CURRENT_SERVER";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";

const receiveAllServers = (servers) => {
  return {
    type: RECEIVE_ALL_SERVERS,
    servers
  };
};

const receiveServer = (payload) => {
  return {
    type: RECEIVE_SERVER,
    payload
  };
};

const removeServer = (serverId) => {
  return {
    type: REMOVE_SERVER,
    serverId
  };
};

export const receiveCurrentServer = (serverId) => {
  return {
    type: RECEIVE_CURRENT_SERVER,
    serverId
  };
};

export const fetchServers = () => {
  return (dispatch) => {
    return ServerAPIUtil.fetchServers().then((servers) => {
      return dispatch(receiveAllServers(servers));
    });
  };
};

export const fetchServer = (id) => {
  return (dispatch) => {
    return ServerAPIUtil.fetchServer(id).then((server) => {
      return dispatch(receiveServer(server));
    });
  };
};

export const createServer = (server) => {
  return (dispatch) => {
    return ServerAPIUtil.createServer(server).then((server) => {
      return dispatch(receiveServer(server));
    });
  };
};

export const updateServer = (server) => {
  return (dispatch) => {
    return ServerAPIUtil.updateServer(server).then((server) => {
      return dispatch(receiveServer(server));
    });
  };
};

export const deleteServer = (serverId) => {
  return (dispatch) => {
    return ServerAPIUtil.deleteServer(serverId).then(() => {
      return dispatch(removeServer(serverId));
    });
  };
};

export const joinServer = (serverName) => {
  return (dispatch) => {
    return ServerAPIUtil.joinServer(serverName).then((server) => {
      return dispatch(receiveServer(server));
    });
  };
};

export const leaveServer = (serverId) => {
  return (dispatch) => {
    return ServerAPIUtil.leaveServer(serverId).then((res) => {
      return dispatch(removeServer(res));
    });
  };
};
