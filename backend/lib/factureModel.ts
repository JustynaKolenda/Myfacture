const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Facture = new Schema({
  name: {
    type: String
  },
  surName: {
    type: String
  },
  netto: {
    type: Number
  },
  date: {
    type: Date
  },
  title: {
    type: String
  }
},{
    collection: 'facturs'
});

export default Facture;