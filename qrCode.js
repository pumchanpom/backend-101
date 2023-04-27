const qrcode = require("qrcode-terminal");
const generatePayload = require("promptpay-qr");
const prompt = require("prompt-sync")();

const mobileNumber = prompt("What is your mobile number? ");
const amountTotal = +prompt("How much is the total payment? ");
const peopleTotal = +prompt("How many people do they have to pay? ");
const amountDivided = amountTotal / peopleTotal;
const paymentQRCode = generatePayload(mobileNumber, { amount: amountDivided });

qrcode.generate(paymentQRCode);
