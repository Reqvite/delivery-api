const { payStatus } = require("../../services/user/getLiqPaySignature");

const payStatusController = async (req, res) => {
  const { data, signature } = req.body;
  console.log(req.body);

  payStatus(data, signature);
  res.status(200).json({
    message: `success`,
  });
};

module.exports = {
  payStatusController,
};
