# SSO with salesforce ( service provider )
## Install library
```
npm install samlp express
```
## Explaination
issuer: on saml configure of salesforce
cert: link to public key
key: link to private key
signatureAlgorithm: 'rsa-sha1' default
digetstAlgorithm: 'sha1' compatible with rsa-sha1 digetstAlgorithm
RelayState: version of salesforce
audience: default of salesforce - https://saml.salesforce.com 
reciption: link to authorize - we get it after create saml on saleforce 

fakeUser: is information contain federate id of this account in user -> edit -> federate id
it must contain those property.

## References
* [explaination example](https://www.jitendrazaa.com/blog/salesforce/step-by-step-guide-to-setup-federated-authentication-saml-based-sso-in-salesforce/)
* [Node samlp](https://github.com/auth0/node-samlp)
* [code inherit](https://stackoverflow.com/questions/31687910/issue-validating-xml-signature-generated-by-xml-crypto-node-module)
* [samlp attributes](https://auth0.com/docs/protocols/saml-protocol/customize-saml-assertions)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)