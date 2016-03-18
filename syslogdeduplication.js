db.atckdf.find({}).map(function(x){
    x.newdestination=x.newdestination.filter(function(v,i,a){
        return a.indexOf(v)==i
    });
    db.atckdf.save(x);
})
