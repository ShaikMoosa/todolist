//console.log(module);
 module.exports = getDate;
function getDate(){
var today = new Data();
  var currentDay = today.getDay();
  var day = "";
  // if ( currentDay === 6 || currentDay === 0) {
  //   day = "weekend";
  //   //res.write("yay it is the weekend");
  // }else {
  //   day = "weekend";
  //   //res.writed("it is working day");
  //   //res.send();
  // }
  // switch (currentDay) {
  //   case 0:
  //     day = "sunday";
  //     break;
  //     case 1:
  //     day = "monday";
  //     break;
  //     case 2:
  //     day = "tueday";
  //     break;
  //     case 3:
  //     day = "wednesday";
  //     break;
  //     case 4:
  //     day = "thursday";
  //     break;
  //     case 5:
  //     day = "friday";
  //     break;
  //     case 6:
  //     day = "saturday";
  //     break;
  //   default:
  //     console.log("error: current day is equal to :"+ currentDay);
  // }

  let option ={
    weekend: "long",
    day: "numeric",
    month: "long"
  }
  let day = today.tolocaleDateString ("en-US", options);
return day;
}