

exports.getHomeRoute = (req, res, next) => {

  res
    .status(200)
    .json({
      success: true,
      data: "Hellooo",
    });
};
