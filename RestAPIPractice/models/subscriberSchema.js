const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedToChannel: {
    type: String,
    required: true,
  },
  subscribedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Subscribers", subscriberSchema);
