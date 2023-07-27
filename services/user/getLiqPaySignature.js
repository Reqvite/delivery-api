const LiqPay = require("../../lib/liqpay");
const { PUBLIC_LIQPAY_KEY, PRIVATE_LIQPAY_KEY, BASE_URL, BASE_URL_FRONT } =
  process.env;
const liqpay = new LiqPay(PUBLIC_LIQPAY_KEY, PRIVATE_LIQPAY_KEY);

const decodeBase64UTF8 = require("../../helpers/lib/decodeBase64UTF8");

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

  const dataParams = {
    public_key: PUBLIC_LIQPAY_KEY,
    version: 3,
    action: "pay",
    amount: Number(totalPrice),
    currency: "USD",
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

  const {
    order_id,
    status,
    amount,
    completion_date,
    create_date,
    description,
    end_date,
    paytype,
  } = decodeBase64UTF8(data);

  // const {
  //   order_id,
  //   status,
  //   amount,
  //   completion_date,
  //   create_date,
  //   description,
  //   end_date,
  //   err_code,
  //   err_description,
  //   ip,
  //   is_3ds,
  //   liqpay_order_id,
  //   payment_id,
  //   paytype,
  //   receiver_commission,
  //   sender_card_mask2,
  //   sender_card_type,
  //   sender_commission,
  //   sender_first_name,
  //   sender_last_name,
  //   sender_phone,
  // } = decData;

  return {
    order_id,
    status,
    amount,
    completion_date,
    create_date,
    description,
    end_date,
    paytype,
  };
};

module.exports = { getLiqPaySignature, payStatus };

// 1 opearation status
// liqpay.api(
//   "request",
//   {
//     action: "status",
//     version: "3",
//     order_id: "64c242d218b65356f40d4f93",
//   },
//   function (json) {
//     console.log(json);
//   }
// );

// archive
// liqpay.api(
//   "request",
//   {
//     action: "reports",
//     version: "3",
//     date_from: "1677820800000",
//     date_to: "1688102400000",
//   },
//   function (json) {
//     console.log(json);
//   }
// );

// send receipts
// liqpay.api(
//   "request",
//   {
//     action: "ticket",
//     version: "3",
//     order_id: "64c242d218b65356f40d4f93",
//     email: "test@gmail.com",
//   },
//   function (json) {
//     console.log(json);
//   }
// );
