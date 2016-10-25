const axios = require('axios');

exports.sendMessage = cb => axios
.get('https://api.tropo.com/1.0/sessions?action=create&token=4971636f4461474b50456664677a4f444f7a68726b676357645557754f4b4e537449624a6d6d4a5047654554&numberToDial=17148750963&customerName=donovan&msg=the+sky+is+falling')
.then(res => cb(null, res))
.catch(err => process.stdout.write('!!! ERROR: ', err, '\n'));
