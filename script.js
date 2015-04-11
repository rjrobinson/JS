var utl = (function() {
      var i = 0;

      return {
        nameGen: function() {
          var name = "custname" + i;
          i = i + 1;
          return name;
        }
    }
}());

var name = utl.nameGen(),
    name2 = utl.nameGen();

