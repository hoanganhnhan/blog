class NewsController {
  // [Get => news]
  index(req, res) {
    res.render("news");
  }
  show(req, res) {
    res.send("News detail");
  }
}
module.exports = new NewsController();
