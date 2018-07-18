export const fetchChannels = (currentServerId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels`,
    data: { currentServerId }
  });
};

export const fetchChannel = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}`
  });
};

export const createChannel = (channel) => {
  return $.ajax({
    method: 'POST',
    url: `/api/channels`,
    data: { channel }
  });
};

export const updateChannel = (channel) => {
  return $.ajax({
    method: 'POST',
    url: `/api/channels/${channel.id}`,
    data: { channel }
  });
};

export const deleteChannel = (channelId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/channels/${channelId}`,
  });
};
