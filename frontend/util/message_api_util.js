export const fetchMessages  = (serverId, channelId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/servers/${serverId}/channels/${channelId}/messages`
  });
};

export const fetchMessage  = (serverId, channelId, messageId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/servers/${serverId}/channels/${channelId}/messages/${messageId}`
  });
};

export const createMessage  = (message) => {
  return $.ajax({
    method: 'POST',
    url: `/api/servers/${message.server_id}/channels/${message.channel_id}/messages`,
    data: { message }
  });
};
