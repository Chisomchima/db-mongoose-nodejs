const router = require("express").Router();
// Require the library
var paystack = require('paystack')(proccess.env.PAYSTACK_KEY);
const paystack = new PayStack(proccess.env.PAYSTACK_KEY, environment)

const feesCalculator = new PayStack.Fees();
const feeCharge = feesCalculator.calculateFor(250000) // 2,500 Naira


router.post("/payment", (req, res) => {

  const finalAmount = ( 100 * req.body.ammount  ) + feeCharge


    const initialize = paystack.initializeTransaction({
        reference: "7PVGX8MEk85tgeEpVDtD",
        amount: finalAmount, // 5,000 Naira (remember you have to pass amount in kobo)
        email: "req.body.email",
        subaccount: "ACCT_8f4s1eq7ml6rlzj"
      })
      
      initialize.then(function (response){
        res.status(200).json(response);
      }).catch(function (error){
        res.status(500).json(error);
      })

 const verify = paystack.verifyTransaction({
        reference: "7PVGX8MEk85tgeEpVDtD"
      })
      
      verify.then(function (response){
        res.status(200).json(response.body);
      }).catch(function (error){
        res.status(500).json(error);
      })
})
