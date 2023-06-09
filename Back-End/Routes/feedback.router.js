const express = require("express");
const { feedmodel } = require("../Models/feedback.model");

const feedbackRouter = express.Router();
feedbackRouter.use(express.json());

feedbackRouter.post("/savefeedback", async (req, res) => {
  console.log(req.body);
  try {
    const newQuery = new feedmodel(req.body);
    await newQuery.save();

    console.log(newQuery);
    res.send({ok:true});
  } catch (err) {
    console.log(err);
    res.send({ mes: err.message });
  }
});

feedbackRouter.get("/getdata",async(req,res)=>{
  try {
    let feedback=await feedmodel.find()
    res.status(200).send({"msg":feedback})
  } catch (error) {
    res.send(error)
  }
})

module.exports = { feedbackRouter };