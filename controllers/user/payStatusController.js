const { payStatus } = require("../../services/user/getLiqPaySignature");

const payStatusController = async (req, res) => {
  try {
    const { data, signature } = req.body;
    console.log(req.body);
    // console.log(1);
    // console.log(req.body);

    // payStatus(data, signature);
    res.status(200).json({
      message: `success`,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  payStatusController,
};
