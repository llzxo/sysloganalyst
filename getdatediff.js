function GetDateDiff(startTime,endTime){
    startTime=startTime.replace(/\-/g,"/");
    endTime=endTime.replace(/\-/g,"/");
    var sTime=new Date(startTime);
    var eTime=new Date(endTime);
    var divNum=1000;
    return parseInt((eTime.getTime()-sTime.getTime())/parseInt(divNum));
}
var result=GetDateDiff("2016-01-27 15:54:06","2016-01-27 15:54:59");
console.log(result);
