import * as ServerAPIUtil from '../util/server_api_util'

export const RECEIVE_ALL_SERVERS = "RECEIVE_ALL_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";

const receiveAllServers = (servers) => {
  return {
    type: RECEIVE_ALL_SERVERS,
    servers
  };
};

const receiveServer = (server) => {
  return {
    type: RECEIVE_SERVER,
    server
  }
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
