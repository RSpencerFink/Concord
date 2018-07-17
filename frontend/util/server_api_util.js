export const fetchServers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/servers'
  });
};

export const fetchServer = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/servers/${id}`
  });
};

export const createServer = (server) => {
  return $.ajax({
    method: 'POST',
    url: `api/servers/`,
    data: { server }
  });
};

export const updateServer = (server) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/servers/${server.id}`,
    data: { server }
  });
};

export const deleteServer = (serverId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/servers/${serverId}`,
  });
};

export const joinServer = (server_name) => {
  return $.ajax({
    method: 'POST',
    url: `api/server_memberships`,
    data: { server_name }
  });
};

export const leaveServer = (serverId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/server_memberships/${serverId}`
  });
};
