/* eslint no-use-before-define: 0 */
/* eslint-env es6*/
const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
  contact: {
    primary: {
      phone: {
        number: { type: String, default: '<empty>' },
        twilio: { type: Boolean, default: true },
      },
      text: { type: String, default: '<empty>' },
    },
  },
  people: {
    chair: { type: String, default: '<empty>' },
    donors: [{ name: {
      type: String, default: '<empty>' },
    }],
    members: [{
      name: { type: String, default: '<empty>' },
    }],
  },
  description: {
    name: { type: String, required: true, default: '<empty>' },
    country: { type: String, required: true, default: '<empty>' },
    desc1: { type: String, required: true, default: '<empty>' },
    desc2: { type: String, required: true, default: '<empty>' },
    desc3: { type: String, required: true, default: '<empty>' },
    images: [{ type: String, required: true }],
  },
  finance: {
    currency: {
      locale: { type: String, default: 'NGN' },
      tracking: { type: String, default: 'USD', enum: ['USD', 'BTC'] },
    },
    balance: {
      starting: { type: Number, default: 0 },
      current: { type: Number, default: 0 },
    },
    addresses: {
      bitcoin: { type: String, default: '<empty>' },
    },
    transactions: {
      api_ids: {
        coinbase: { type: String, default: '<empty>' },
        bitpesa: { type: String, default: '<empty>' },
      },
      donations: [{
        date: '',
        ammount: 0,
        donor: '',
      }],
      withdrawals: [{
        date: '',
        member: '', // person name
        amount: 0,
        description: '',
      }],
      payins: [{
        date: '',
        member: '',
        amount: 0,
        description: '',
      }],
      transfers: [{
        date: { type: Date, default: Date.now },
        status: { type: String, enum: ['pending', 'completed'] },
        currency: { type: String, default: 'BTC' },
        ammount: { type: Number, default: '0.00000' },
        verified: { type: Boolean, default: false },
      }],
    },
  },
});
bankSchema.statics.findBankByManagerId = (managerId, cb) => {
  if (!managerId) return cb({ error: 'Did not provide manager id.' });

  return Bank.find({ people: { chair: managerId } })
  .then(dbBankArray => cb(null, dbBankArray[0]))
  .catch(error => cb({ problem: 'Could not find a bank with that manager id.', error }));
};

bankSchema.statics.assignManagerAsChair = (id, managerId, cb) => {
  if (!id || !managerId) return cb({ error: 'Did not provide required id\'s' });

  return Bank.findByIdAndUpdate(id, { $set: { people: { chair: managerId } } }, { new: true })
  .then(updatedBank => cb(null, updatedBank))
  .catch(error => cb({ problem: 'Could not assign bank manager.', error }));
};

const Bank = mongoose.model('Bank', bankSchema);
export default Bank;

/*  Dummy Data
export default {
data: [
{
Name: 'Bank of Sauri',
Country: 'Kenya',
Description: 'Located in western Kenya, the Sauri cluster lies in Yala Division, Siaya District, Nyanza Province.',
Description2: 'In Sauri, almost 80% of the population earned less than $1 per day, and 59% of children under five exhibited stunting, a sign of chronic malnutrition.',
Description3: 'The bank aims to alleviate these issues and develop the local economy.',
Images: ['sauri-kenya-feature.jpg', 'http://millenniumvillages.org/wp-content/uploads/2013/02/sauri-kenya-feature.jpg'],
Starting: '$350',
Current: '$1050',
},

{ Name: 'Dertu Village Bank',
Country: 'Kenya',
Description1: 'The village of Dertu is located in northeastern Kenya, approximately 140km from the border with Somalia.',
Description2: 'The village is characterized by high poverty levels and for years there has been a high level of dependency on food aid.',
Description3: 'The bank hopes to reduce poverty and develop education in the area.',
Images: ['dertu-kenya-feature.jpg', 'http://millenniumvillages.org/wp-content/uploads/2013/02/dertu-kenya-feature.jpg'],
Starting: '$425',
Current: '$870' },

{ Name: 'Koraro Bank',
Country: 'Ethiopia',
Description1: 'The Koraro cluster is located in the Hawzien district in northern Ethiopia.',
Description2: 'Koraro is located in one of the poorest regions of Ethiopia, suffers from a severely degraded soil, high malaria and maternal mortality rates, lack of classrooms, unsafe drinking water, and extremely poor infrastructure.',
Description3: 'The first priority of the bank is to focus on basic health and sanitation isssues.',
Images: ['koraro-ethiopia-feature.jpg', 'http://millenniumvillages.org/wp-content/uploads/2013/02/koraro-ethiopia-feature.jpg'],
Starting: '$260',
Current: '$800' },

{ Name: 'Bank of Bonsaaso',
Country: 'Ghana',
Description1: 'Bonsaaso is located in the Amansie-West District of the Ashanti Region of Ghana.',
Description2: 'Getting goods in and out of the isolated communities can be arduous due to travel on uneven dirt roads that were carved by gold mining and lumber companies years back.',
Description3: 'The bank has been set up to focus initially on vital local infrastructure',
Images: ['bonsaaso-ghana-feature.jpg', 'http://millenniumvillages.org/wp-content/uploads/2013/02/bonsaaso-ghana-feature.jpg'],
Starting: '$100',
Current: '$550' },

{ Name: 'Mbola Village Bank',
Country: 'Tanzania',
Description1: 'The Mbola cluster is located in the Uyui district in mid-western Tanzania.',
Description2: 'Mbola faces a high rate of environmental degradation resulting from poor crop management practices, declining agricultural production and destruction of the Miombo woodlands for fuel wood used in the tobacco industry.',
Description3: 'Mbola Village Bank woul like to work on restoring the local environment and moving to a more sustainable economy.',
Images: ['mbola-tanzania-feature.jpg', 'http://millenniumvillages.org/wp-content/uploads/2013/02/mbola-tanzania-feature.jpg'],
Starting: '$600',
Current: '$1350' },

{ Name: 'Ruhiira Bank',
Country: 'Uganda',
Description1: 'The Ruhiira cluster lies in southwestern Uganda and is 40km from the nearest city, Mbarara.',
Description2: 'High population density and continued growth rates have contributed to land shortages and degradation. The area is also well known for having the highest tuberculosis prevalence in southwestern Uganda.',
Description3: 'We want to provide housing and reliable medical resources to the local community',
Images: ['ruhiira-uganda-feature.jpg', 'http://millenniumvillages.org/wp-content/uploads/2013/02/ruhiira-uganda-feature.jpg'],
Starting: '$175',
Current: '$960' },
],
};

*/
