const { response } = require("express");
const express = require("express");
const SubscriberSchema = require("../models/subscriberSchema");
const router = express.Router();

router.get("/", async (req, resp) => {
  try {
    const subscribers = await SubscriberSchema.find();
    resp.json(subscribers);
  } catch (err) {
    resp.status(500).json({ message: err.message });
  }
});

router.get("/:id", getSubscriber, (req, resp) => {
  resp.send(resp.subscriber.name);
});

router.post("/", async (req, resp) => {
  const subscriber = new SubscriberSchema({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    resp.status(201).json(newSubscriber);
  } catch (err) {
    resp.status(400).json({ message: err.message });
  }
});

router.patch("/:id", getSubscriber, async (req, resp) => {
  if (req.body.name != null) {
    resp.subscriber.name = req.body.name;
  }
  if (req.body.subscribedToChannel != null) {
    resp.subscriber.subscribedToChannel = req.body.subscribedToChannel;
  }
  try {
    const updatedSubscriber = await resp.subscriber.save();
    resp.json(updatedSubscriber);
  } catch (err) {
    resp.status(400).json({ message: err.message });
  }
});

router.delete("/:id", getSubscriber, async (req, resp) => {
  try {
    await resp.subscriber.remove();
    resp.json({ message: "Subscriber Deleted" });
  } catch (err) {
    resp.status(500).json({ message: err.message });
  }
});

async function getSubscriber(req, resp, next) {
  let subscriber;
  try {
    subscriber = await SubscriberSchema.findById(req.params.id);
    if (subscriber == null) {
      return resp
        .status(404)
        .json({ message: "cannot find the subscriber with this id" });
    }
  } catch (err) {
    return resp.status(500).json({ message: err.message });
  }

  resp.subscriber = subscriber;
  next();
}

module.exports = router;
