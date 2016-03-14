function GetDateDiff(startTime,endTime){
    startTime=startTime.replace(/\-/g,"/");
    endTime=endTime.replace(/\-/g,"/");
    var sTime=new Date(startTime);
    var eTime=new Date(endTime);
    var divNum=1000;
    return parseInt((eTime.getTime()-sTime.getTime())/parseInt(divNum));
}

db.atckdf.find({"secInfo.beginTs":{$type:2}}).map(function(x){
    x.duration=GetDateDiff(x.secInfo.beginTs,x.secInfo.endTs);
    db.atckdf.save(x);
})
