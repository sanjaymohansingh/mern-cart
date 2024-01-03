const test = (req, res) => {
  res.json({
    message: "hello from user controller",
  });
};

module.exports = { test };
