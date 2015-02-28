var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/emma/faq', function(req, res) {
  var faqs = JSON.parse(fs.readFileSync('public/projects/emma/faq/faq.json', 'utf8'));
  res.render('projects/emma/faq', {faqs: faqs});
});

module.exports = router;
