const LiqPay = require("../../lib/liqpay");
const { PUBLIC_LIQPAY_KEY, PRIVATE_LIQPAY_KEY, BASE_URL, BASE_URL_FRONT } =
  process.env;
const liqpay = new LiqPay(PUBLIC_LIQPAY_KEY, PRIVATE_LIQPAY_KEY);

const base64 = require("base-64");
const utf8 = require("utf8");

const getLiqPaySignature = (totalPrice, _id) => {
  const description = `Для сплати  рахунку в ресторані. ID замовлення: ${_id}`;
  const apiUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/user/status"
      : `${BASE_URL}/api/user/status`;

  const frontUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5173"
      : `${BASE_URL_FRONT}`;

  console.log(apiUrl);
  const dataParams = {
    public_key: PUBLIC_LIQPAY_KEY,
    version: 3,
    action: "pay",
    amount: totalPrice,
    currency: "UAH",
    description,
    order_id: _id,
    result_url: frontUrl,
    server_url: apiUrl,
  };

  return liqpay.cnb_object(dataParams);
};

const payStatus = (data, signature) => {
  const str = PRIVATE_LIQPAY_KEY + data + PRIVATE_LIQPAY_KEY;
  const mySign = liqpay.str_to_sign(str);

  if (mySign !== signature) {
    console.log("Invalid signature");
  }

  const bytes = base64.decode(data);
  const decData = JSON.parse(utf8.decode(bytes));

  const {
    order_id,
    status,
    amount,
    completion_date,
    create_date,
    description,
    end_date,
    err_code,
    err_description,
    ip,
    is_3ds,
    liqpay_order_id,
    payment_id,
    paytype,
    receiver_commission,
    sender_card_mask2,
    sender_card_type,
    sender_commission,
    sender_first_name,
    sender_last_name,
    sender_phone,
  } = decData;
};

module.exports = { getLiqPaySignature, payStatus };
