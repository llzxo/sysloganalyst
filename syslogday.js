var MongoClient=require('mongodb').MongoClient;
var assert=require('assert');
var ObjectId=require('mongodb').ObjectID;
var url='mongodb://localhost:27017/dbsyslog';
var aggregatesyslog=function(db,callback){
    db.collection('atckdf').aggregate(
        [
            {
                $group:{
                    _id:{month:"$month",day:"$date"},
                    count:{$sum:1}
                }
            }
        ]
    ).toArray(function(err,result){
        assert.equal(err,null);
        console.log(result);
        callback(result);
    });
};
MongoClient.connect(url,function(err,db){
    assert.equal(null,err);
    aggregatesyslog(db,function(){
    db.close();
    });
});
