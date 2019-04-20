
const express = require("express");
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const validator = require("email-validator");

router.get("/", (req, res) => {
  res.render("contact.hbs");
});

router.post('/',  (req, res) => {
  
      if (req.body.email && req.body.emailSubject && req.body.emailText) {

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        if (validator.validate(req.body.email) === true) {
          const msg = {
            to: process.env.NEXUS_DESIGNS_EMAIL,
            from:  req.body.email,
            subject: req.body.emailSubject,
            text: req.body.emailText,
            html: req.body.emailText
          };

          sgMail.send(msg);
        
          res.render("contact.hbs");
        } else {res.send("Error: invalid email");}
        
      } else {
        res.send("Error: form fields cannot be empty");
      }
      
  
});



module.exports = router;
