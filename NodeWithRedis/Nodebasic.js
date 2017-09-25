var redis = require("redis"),
    client = redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

console.log("todays Schedule:");

client.set("today date", Date(), redis.print);

client.hmset("00:00:00:00", ["name", "Drama_Part_1", "length", "00:10:01:00"], 
    function (err, res) {
        console.log("Response "+res);
});

client.hmset("00:10:01:00", ["name", "Drama_Part_2", "length", "00:05:00:20"], 
    function (err, res) {
        console.log("Response "+res);
});

//client.hset("hash key", "hashtest 1", "some value", redis.print);
//client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
/*
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
*/
client.get("today date", function (err, reply) {
    if (err) throw err;
    console.log("Today : "+reply.toString());
});

client.hkeys("00:00:00:00",function(err,replies){
    replies.forEach(function (reply,i){
        client.hget("00:00:00:00",reply,function(err,res){
            console.log(reply+" : "+res);
        });
    });
});

client.hkeys("00:10:01:00",function(err,replies){
    replies.forEach(function (reply,i){
        client.hget("00:10:01:00",reply,function(err,res){
            console.log(reply+" : "+res);
        });
    });
client.quit();
});


