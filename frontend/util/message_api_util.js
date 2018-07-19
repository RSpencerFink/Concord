export const fetchMessages  = (serverId, channelId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/servers/${serverId}/channels/${channelId}/messages`
  });
};

export const createMessage  = (serverId, channelId, message) => {
  return $.ajax({
    method: 'GET',
    url: `/api/servers/${serverId}/channels/${channelId}/messages`,
    data: { message }
  });
};
