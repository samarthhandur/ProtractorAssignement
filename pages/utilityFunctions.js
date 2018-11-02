

var UtilityFunctions = function() {
 this.randomString= function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

this.randomInteger= function() {
    return Math.floor(Math.random() * 10);
}
}
module.exports = new UtilityFunctions();

