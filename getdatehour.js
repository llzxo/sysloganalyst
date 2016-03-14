function GetDateHour(inputTime){
    inputTime=inputTime.replace(/\-/g,"/");
    var iTime=new Date(inputTime);
    return parseInt(iTime.getHours());
}


db.atckdf.find({"secInfo.beginTs":{$type:2}}).map(function(x){
    x.hour=GetDateHour(x.secInfo.beginTs);
    db.atckdf.save(x);
})
