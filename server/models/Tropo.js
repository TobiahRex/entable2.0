var Bank = require('./Bank');

exports.create = (req, res) => {
  console.log('TROPO CREATE: ', req.body);

  var call = parseCall(req.body);
  if (!call) return res.end();

  Bank.create({ name: call.input,
               chair: call.sender,
               members: [],
               transactions: [] })
    .then(() => {
      // res.end()
      return Bank.find({});
    })
    .then((banks) => {
      res.socketEmitter('banks', banks);
      res.end();
    })
    .catch(() => res.end());


  // (err) => {
  //   if (err) console.log(err);
  //   return res.end();
  // });
};

exports.trans = (req, res) => {
  console.log('TROPO TRANS: ', req.body);

  var call = parseCallCSV(req.body);
  if (!call) return res.end();

  Bank.find({})
    .then((banks) => {
      var members = {};
      console.log('banks: ', banks);
      banks.forEach((bank) => {
        members[bank.chair] = bank.chair;
        bank.members.forEach((member) => {
          members[member] = bank.chair;
        });
      });

      // console.log('members: ', members);
      // console.log('call.sender: ', call.sender);
      // console.log('members[call.sender]: ', members[call.sender]);
      // console.log('typeof call.sender: ', typeof call.sender);

      if (members[call.sender] !== undefined) {

        const edit = banks.filter((curr) => curr.chair === members[call.sender]);
        const trans = edit[0].transactions;

        trans.push({ amount: call.input[0], description: call.input[1], sender: call.sender });
        console.log('edit: ', edit);
        return Bank.findOneAndUpdate({ chair: members[call.sender] },
                                     { $set: { transactions: trans } });
      // } else {
      //   console.log('in else');
      //   return res.end();
      }
    })
    .then(() => {
      // res.end()
      return Bank.find({});
    })
    .then((banks) => {
      res.socketEmitter('banks', banks);
      res.end();
    })
    .catch(() => res.end());


  // res.end();
};

exports.member = (req, res) => {
  // console.log('TROPO MEMBER: ', req.body);
  var call = parseCallCSV(req.body);
  if (!call) return res.end();

  Bank.find({ chair: call.sender })
    .then((bank) => {
      call.input.forEach((element) => {
        bank[0].members.push(element);
      });

      //bank[0].members.push(call.input);
      var newMembers = bank[0].members;
      return Bank.findOneAndUpdate({ chair: call.sender },
                                   { $set: { members: newMembers } });
    })
    .then(() => {
      // res.end()
      return Bank.find({});
    })
    .then((banks) => {
      res.socketEmitter('banks', banks);
      res.end();
    })
    .catch(() => res.end());
};

function parseCallCSV(body) {
  var callObj = null;

  try {
    callObj = JSON.parse(body.call);
  } catch (err) {
    console.log(err);
    return callObj;
  }

  var textArr = callObj.text.split('#');
  var inputArr = textArr[1].split(',');

  return {
    type: textArr[0],
    input: inputArr,
    sender: callObj.sender,
  };
}

function parseCall(body) {
  var callObj = null;

  try {
    callObj = JSON.parse(body.call);
  } catch (err) {
    console.log(err);
    return callObj;
  }

  var textArr = callObj.text.split('#');

  return {
    type: textArr[0],
    input: textArr[1],
    sender: callObj.sender,
  };
}

exports.all = (req, res) => {
  console.log('INSIDE ALL');
  Bank.find({}, (err, data) => {
    res.status(err ? 400 : 200).send(err || data);
  });
};
