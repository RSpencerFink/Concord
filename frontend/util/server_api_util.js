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

// export const joinServer = (server_id, user_id) => {
//   return $.ajax({
//     method: 'POST',
//     url: `api/servermemberships`,
//     data: {server_id}
//   });
// };
