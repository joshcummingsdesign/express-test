/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

const test = () => console.log('this is a test');

// exports.unsaferedirectbodytest = (req, res) => {
//   console.log("unsafe redirect")
//   let content = req.query.name;
//   return res.redirect(content);
// };
