function rotateElem(secdeg, mindeg, hourdeg) {
    var secrotation = 'rotate(' + secdeg + 'deg)';
    console.log(secrotation);
    var minrotation = 'rotate(' + mindeg + 'deg)';
    console.log(minrotation);
    var hourrotation = 'rotate(' + hourdeg + 'deg)';
    console.log(hourrotation);
    document.getElementById('spointer').style.transform = secrotation;
    document.getElementById('mpointer').style.transform = minrotation;
    document.getElementById('hpointer').style.transform = hourrotation;
    
  }
  
  function colorClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hourstring = '' + hours;
    var minstring = '' + minutes;
    var secstring = '' + seconds;
    if (hours < 10) {
      hourstring = '0' + hours;
    }
    if (minutes < 10) {
      minstring = '0' + minutes;
    }
    if (seconds < 10) {
      secstring = '0' + seconds;
    }
    
    var alpha = 0.2;
    if (seconds < 30) {
      alpha = alpha + 0.6/30*seconds;
    }
    if (seconds > 29) {
      alpha = alpha + (0.6/30)*(60-seconds);
    }
    
    var clockFace = hourstring + ':' + minstring + ':' + secstring;
    
    var hexColor = 'hsla(' + minutes*6 + ',100%,50%,' + alpha + ')';
   
    document.getElementById('digital').innerHTML = clockFace;
    
    /*var bottomspercent = -65+seconds/2;*/
    /*var bottompos = bottomspercent + '%';*/
    /*console.log(bottompos);*/
    
    /*document.getElementById('digiclock').style.bottom = bottompos;*/
    /*document.body.style.background = hexColor;*/
    document.getElementById('digital').style.color = hexColor;
    
    var secdeg = 6 * (date.getSeconds()+1);
    var mindeg = 6 * (date.getMinutes());
    var hrs = date.getHours();
    if (hrs > 12) {
      hrs = hrs - 12;
    }
    var hourdeg = 30 * hrs + 30/60 * date.getMinutes();
    
    setTimeout(function() {
    colorClock();
    rotateElem(secdeg, mindeg, hourdeg);
    }, 1000);
    
  }
  
  colorClock();
  