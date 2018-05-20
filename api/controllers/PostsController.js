module.exports = {
  getPosts: function getPosts(req, res) {
    Posts
    .find()
    .sort('id desc')
    .limit(4)
    .skip(0)
    .then(posts => {
      // TODO: ajax and error handling logic
      res.view('pages/read', { output: posts });
    });
  },
};
