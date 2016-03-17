db.atckdf.find({}).map(function(x){
    x.newdestination=x.secInfo.destination.map(function($this){
        return $this.substring(0,$this.indexOf(":"));
    });
    db.atckdf.save(x);
})
