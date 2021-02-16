const stripe = require("stripe")(process.env.NODE_ENV == 'development' ? process.env.STRIPE_SECRET_KEY : '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');
//const stripe = require('stripe')('sk_test_51HozZiCyTyS27rnaH65w5gwXbOv2OPjmoCrqE4Wm41bWcSkDVsxorj55h47HZqPQNBfz3oSSZstRV9DvJARnxKhq00BZ7oatGD');

exports.init = async(req, res) => {
      const paymentIntent = await stripe.paymentIntents.create({
      amount: 1500,
      currency: "myr",
      description: "Online Doctor Consultation",
      // Verify your integration in this guide by including this parameter
      metadata: {integration_check: 'accept_a_payment'},
    });
    if(paymentIntent){
        res.send( {secret_key : paymentIntent.client_secret})
    }
  }

  exports.makePayment = async(req, res) => {

    let clientSecret = req.body.clientSecret
    let paymentMethod = req.body.paymentMethod

    const payload = await stripe.confirmCardPayment(clientSecret,  paymentMethod   )
    
    if (payload.error) {
      console.log("[error]", payload.error);
    } else {
       console.log("[PaymentIntent]", payload.paymentIntent);
    }
  }
    
  

    // const payload = await stripe.confirmCardPayment(clientSecret, {
    //   payment_method: {
    //     card: elements.getElement(CardElement),
    //     billing_details: {
    //       name: ev.target.name.value,
    //     },
    //   },
    // });
  
  
