module.exports.routes = {

  '/': {
    view: 'pages/homepage'
  },
  '/readsomething': {
    view:   'pages/read',
    locals: {
      output: [{
        title: 'Hello world',
        body: 'Hello world',
        name: 'Robert',
        avatar: 'bunny'
      }]
    }
  }

};
