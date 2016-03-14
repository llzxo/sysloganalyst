function GetDateHour(inputTime){
    inputTime=inputTime.replace(/\-/g,"/");
    var iTime=new Date(inputTime);
    return parseInt(iTime.getHours());
}
var result=GetDateHour("2016-01-27 15:54:59");
console.log(result);
