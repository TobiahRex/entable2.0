import twilio from 'twilio';

const createTwimlMsg = (msg) => {
  const twiml = new twilio.TwimlResponse();
  return twiml.message(msg).toString();
};

export const replyGreeting = cb => cb(null, createTwimlMsg('Cheers from Entable!\n We appreciate your interest in helping the people of Africa. \n\nIf you would like to make a donation, text "#donate<ammount>" to us. And we will send you more information on how you can participate.\n Thanks again!'));

export const replyReceived = (reqBody, cb) => {
  console.log('req.body: ', req.body);
}

export const replyOk = cb => cb(null, createTwimlMsg('okie doki'));

export const sendBankerMessage = (msg, phone, cb) => {
  const accountSid = process.env.TWILIO_TEST_SID;
  const authToken = process.env.TWILIO_TEST_AUTH_TOKEN;
  const entablePhone = process.env.TWILIO_ENTABLE_TEST_PHONE;

  const client = twilio(accountSid, authToken);
  client.message.create({
    to: phone,
    from: entablePhone,
    body: msg,
  }, cb);
};

export const textAddressBtc = (phone, cb) => {
  const accountSid = process.env.TWILIO_TEST_SID;
  const authToken = process.env.TWILIO_TEST_AUTH_TOKEN;
  const entablePhone = process.env.TWILIO_ENTABLE_TEST_PHONE;
  const cbBTCaddress = process.env.COINBASE_BTC_PUBLIC_ADDRESS;

  const client = twilio(accountSid, authToken);
  client.message.create({
    to: phone,
    from: entablePhone,
    body: cbBTCaddress,
  }, cb);
};
