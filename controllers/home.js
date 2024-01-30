/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

function foobar() {
  console.log('hello world');
}

// exports.unsaferedirectbodytest = (req, res) => {
//   console.log("unsafe redirect")
//   let content = req.query.name;
//   return res.redirect(content);
// };
