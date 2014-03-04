'use strict';

/**
 * Get awesome things
 */
exports.create = function(req, res) {
  var reqBody = req.body,
    server  = require('emailjs').server.connect({
      user: "we-need-an-email@lullabot.com",
      password: "*********",
      host: "smtp.gmail.com",
      ssl: true
    });

  // Send the message and get a callback with an error or details of the message that was sent
  server.send({
    text: reqBody.body.text,
    from: reqBody.mailFrom,
    to: reqBody.mailTo,
    subject: reqBody.subject,
    attachment: [
      {
        data: reqBody.body.html,
        alternative: true
      },
      {
        path: 'app/images/yeoman.png',
        type: 'image/png',
        name: 'yeoman.png'
      }
    ]
  }, function(err, message) {
    if (err) {
      console.log(err);
    }
    else {
      res.json({
        body: 'Your email was sent successfully to management.',
        messageId: message['message-id']
      });
    }
  });
};