module.exports.routes = {

  '/': {
    view: 'pages/homepage'
  },
  'GET /readsomething': 'PostsController.getPosts'
};
