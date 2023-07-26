const { payStatus } = require("../../services/user/getLiqPaySignature");

const payStatusController = async (req, res) => {
  const { data, signature } = req.body;

  const status = payStatus(data, signature);
  res.status(200).json({
    message: `success`,
    code: 200,
    status,
  });
};

module.exports = {
  payStatusController,
};
