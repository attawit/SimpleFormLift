/* eslint-disable  indent,object-shorthand,object-property-newline */
const orgId = "XEP2RV4hYOVY8ionwR1B";
const licenseId = "Event";
const organization = "JEvent";
const payments = [
  {
    image: "/img/payment-scb.png",
    title: "โอนเงิน ธนาคารไทยพาณิขย์",
    detail: "<p>บัญชีเลขที่ 037-253546-4 </p><p>นายอรรถวิชญ์ เกตุแก้ว</p>",
    promptpay: false,
    paybutton: false
  },
  {
    image: "https://promptpay.io/0818085651/",
    title: "Prompt-Pay",
    detail: "<p>prompt-pay 0818085651 </p><p>นายอรรถวิชญ์ เกตุแก้ว</p>",
    promptpay: true,
    paybutton: false
  },
  {
    image: "/img/payment-credit-card.png",
    title: "CREDIT CARD",
    detail: "Under Implementation",
    promptpay: false,
    paybutton: true
  }
];

export default {
  orgId: orgId,
  licenseId: licenseId,
  organization: organization,
  payments: payments
};
