var localJSON = '[{"timestamp": 150892000, "headline": "New version of the product announced.", "Link": "http://example.url/new_version","authorName": "Paul Abbot","authorImageUrl": "http://example.url/authors/abbot.jpg" } ,{"timestamp": 150892600, "headline": "Even newer version of the product announced.", "Link": "http://example.url/newer_version","authorName": "Lisa Halliday","authorImageUrl": "http://example.url/authors/halliday.jpg" } ]';

var globalJSON = '[{"timestamp": 150892000, "headline": "New version of the product announced.", "Link": "http://example.url/new_version","authorName": "Paul Abbot","authorImageUrl": "http://example.url/authors/abbot.jpg" } ,{"timestamp": 150892600, "headline": "Even newer version of the product announced.", "Link": "http://example.url/newer_version","authorName": "Lisa Halliday","authorImageUrl": "http://example.url/authors/halliday.jpg" } ]';


var localList = JSON.parse(localJSON);
var globalList = JSON.parse(globalJSON);

var i = 0;
for (i = 0; i < localList.length; i++) { 
    localList [i].source = "local";
}

for (i = 0; i < globalList.length; i++) { 
    globalList [i].source = "global";
}

var list = localList.concat(globalList);

list.sort(function(a, b){return a.timestamp - b.timestamp});
