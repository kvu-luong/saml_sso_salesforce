var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
var samlp = require('samlp');

var fakeUser = {
  // id: 'nhatnguyen1994nt@gmail.com',
  id: 'luongkhanhvu',
  // displayName: 'Nguyen Ngo',
  name: { familyName: 'ss', givenName: 'sdfdf' },
  emails: [ { type: 'work', value: 'nhatnguyen1994nt@gmail.com' } ]
};

var options = {
  issuer:     'https://dev-demo.cloudpbx.vn:8089/khanhvu/salesfore/saml_salesforce/demo1',
  cert:       fs.readFileSync(path.join(__dirname, '/cert/certscert.pem')),
  key:        fs.readFileSync(path.join(__dirname, '/cert/certskey.pem')),
  signatureAlgorithm: 'rsa-sha1',
  digestAlgorithm:'sha1',
  RelayState: 'lightning',
  audience: 'https://saml.salesforce.com',
  recipient: 'https://dongnhat-dev-ed.my.salesforce.com/services/oauth2/token',
  getPostURL: function (wtrealm, wreply, req, cb) { 
    return cb( null, 'https://dongnhat-dev-ed.my.salesforce.com')
  },
  getUserFromRequest: function(req){ 
    return fakeUser 
  }
};

app.get('/samlp', samlp.auth(options));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});