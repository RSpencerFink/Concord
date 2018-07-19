export const fetchChannels = (server_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/servers/${server_id}/channels`,
  });
};

export const fetchChannel = (server_id, id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/servers/${server_id}/channels/${id}`
  });
};

export const createChannel = (server_id, channel) => {
  return $.ajax({
    method: 'POST',
    url: `/api/servers/${server_id}/channels`,
    data: { channel }
  });
};

export const updateChannel = (server_id, channel) => {
  return $.ajax({
    method: 'POST',
    url: `/api/servers/${server_id}/channels/${channel.id}`,
    data: { channel }
  });
};

export const deleteChannel = (server_id, id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/servers/${server_id}/channels/${id}`,
  });
};
