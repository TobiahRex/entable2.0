const Bank = require('./Bank');

const parseCallCSV = (body) => {
  let callObj = null;

  try {
    callObj = JSON.parse(body.call);
  } catch (err) {
    process.stdout.write('??? Parse ERROR: \n', err, '\n');
    return callObj;
  }

  const textArr = callObj.text.split('#');
  const inputArr = textArr[1].split(',');

  return {
    type: textArr[0],
    input: inputArr,
    sender: callObj.sender,
  };
};
const parseCall = (body) => {
  let callObj = null;

  try {
    callObj = JSON.parse(body.call);
  } catch (err) {
    process.stdout.write('??? Parse ERROR: \n', err, '\n');
    return callObj;
  }

  const textArr = callObj.text.split('#');

  return {
    type: textArr[0],
    input: textArr[1],
    sender: callObj.sender,
  };
};

exports.all = (req, res) => Bank.find({})
.exec()
.then(dbBanks => res.send(dbBanks))
.catch(err => res.status(400).send(err));

exports.create = (req, res) => {
  process.stdout.write('!>> TROPO CREATE: \n', req.body);

  const call = parseCall(req.body);  // wtf is "parseCall" ?

  if (!call) return res.end();
  const bankInfo = {
    name: call.input,
    chair: call.sender,
    members: [],
    transactions: [],
  };

  return Bank.create(bankInfo)
  .then(() => Bank.find({}))
  .then(dbBanks => res.socketEmitter('banks', dbBanks).end())
  .catch(err => res.socketEmitter('banks', err).end());
};

exports.trans = (req, res) => {
  process.stdout.write('!>> TROPO TRANS: \n', req.body);

  const call = parseCallCSV(req.body);

  if (!call) return res.end();
  return Bank.find({}).exec()
  .then((dbBanks) => {
    const members = {};

    dbBanks.forEach((bank) => {
      members[bank.chair] = bank.chair;
      bank.members.forEach((member) => {
        members[member] = bank.chair;
      });
    });

    if (members[call.sender] !== undefined) {
      const filteredBanks = dbBanks.filter(curr => curr.chair === members[call.sender]);
      const trans = filteredBanks[0].transactions;

      trans.push({
        amount: call.input[0],
        description: call.input[1],
        sender: call.sender,
      });

      return Bank.findOneAndUpdate({ chair: members[call.sender] },
        { $set: { transactions: trans },
      });
    }

    return process.stdout.write('?>> Call Sender = undefined.');
  })
  .then(() => Bank.find({}).exec())
  .then(banks => res.socketEmitter('banks', banks).end())
  .catch(err => res.socketEmitter('banks', err).end());
};

exports.member = (req, res) => {
  process.stdout.write('!>> TROPO MEMBER: \n', req.body);

  const call = parseCallCSV(req.body);

  if (!call) return res.end();

  return Bank.find({ chair: call.sender }).exec()
  .then((bank) => {
    call.input.forEach(element => bank[0].members.push(element));

    const newMembers = bank[0].members;
    return Bank.findOneAndUpdate({ chair: call.sender },
      { $set: { members: newMembers },
    });
  })
  .then(() => Bank.find({}).exec())
  .then(banks => res.socketEmitter('banks', banks).end())
  .catch(err => res.socketEmitter('banks', err).end());
};
