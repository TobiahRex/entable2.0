import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config({ silent: true });

const createTwimlMsg = (msg) => {
  const twiml = new twilio.TwimlResponse();
  return twiml.message(msg).toString();
};

export const replyReceived = (reqBody, cb) => {
  console.log('req.body >>> \n', req.body);
  return cb(null, null);
};

export const replyGreeting = cb => cb(null, createTwimlMsg('Cheers from Entable!\n We appreciate your interest in helping the people of Africa. \n\nIf you would like to make a donation, text "#donate<ammount>" to us. And we will send you more information on how you can participate.\n Thanks again!'));

export const replyOk = cb => cb(null, createTwimlMsg('okie dokie'));

export const sendBankerMessage = (msg, phone, cb) => {
  const accountSid = process.env.TWILIO_ENTABLE_SID;
  const authToken = process.env.TWILIO_ENTABLE_AUTH_TOKEN;
  const entablePhone = process.env.TWILIO_ENTABLE_TEST_PHONE;

  const client = twilio(accountSid, authToken);
  client.messages.create({
    to: phone,
    from: entablePhone,
    body: msg,
  }, cb);
};

export const textAddressBtc = (phone, cb) => {
  const accountSid = process.env.TWILIO_ENTABLE_SID;
  const authToken = process.env.TWILIO_ENTABLE_AUTH_TOKEN;
  const entablePhone = process.env.TWILIO_ENTABLE_TEST_PHONE;
  const cbBTCaddress = process.env.COINBASE_BTC_PUBLIC_ADDRESS;

  const client = twilio(accountSid, authToken);
  client.messages.create({
    to: `+${phone}`,
    from: entablePhone,
    body: 'Hey again from Entable, Here\'s our Public Bitcoin Address, and thanks again for your interest in Entable & Table Banking.',
  }, cb);
  client.messages.create({
    to: `+${phone}`,
    from: entablePhone,
    body: cbBTCaddress,
  }, cb);
};
