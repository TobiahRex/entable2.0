import twilio from 'twilio';

export const replyGreeting = (cb) => {
  const twiml = new twilio.TwimlResponse();
  twiml.message('Cheers from Entable!\n We appreciate your interest in helping the people of Africa. \n\nIf you would like to make a donation, text "#donate<ammount>" to us. And we will send you more information on how you can participate.\n Thanks again!');
  cb(null, twiml.toString());
};

export const replyOk = (cb) => {
  const twiml = new twilio.TwimlResponse();
  twiml.message('Okie dokie');
  cb(null, twiml.toString());
};

export const sendBankerMessage = (msg, phone, cb) => {
  const accountSid = process.env.TWILIO_TEST_SID;
  const authToken = process.env.TWILIO_TEST_AUTH_TOKEN;
  const entablePhone = process.env.TWILIO_TEST_PHONE;

  const client = twilio(accountSid, authToken);
  client.message.create({
    to: phone,
    from: entablePhone,
    body: msg,
  }, (err, message) => {
    if (err) return cb(err);
    return cb(null, message);
  });
};
