module.exports = {
  attributes: {
    createdAt: false,
    updatedAt: false,
    title: {
      type: 'string',
      maxLength: 100,
    },
    body: {
      type: 'string'
    },
    avatar: {
      type: 'string',
      maxLength: 30
    },
    name: {
      type: 'string',
      maxLength: 100
    },
  }
};
