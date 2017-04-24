module.exports = {
 "parser": "babel-eslint",
 "extends": [
   "standard"

 ],  "plugins": [
   "babel",
   "promise"
 ],
 "env": {
   "browser" : true
 },
 "globals": {
   "__DEV__"      : false,
   "__TEST__"     : false,
   "__PROD__"     : false,
   "__COVERAGE__" : false
 },
 "globals": {
  "angular": 1
},
 "rules": {
   "key-spacing"          : 0,
   "jsx-quotes"           : [2, "prefer-single"],
   "max-len"              : [2, 120, 2],
   "object-curly-spacing" : [2, "always"]
},
 "extends": "plugin:angular/johnpapa"
};
