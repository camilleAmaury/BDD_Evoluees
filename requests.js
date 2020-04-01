/* ################################################ Request 1 ################################################ */
var res = db.getCollection("US_Accidents_Dec19").aggregate([{$group: { _id: "$State", countA: { $sum: 1}}},{$sort:{'countA':-1}}]);
var resultat = "req1 = [";
keys = Object.keys(res["_batch"]);
for(var i = 0; i < keys.length; i++){
    resultat += "['" + res["_batch"][keys[i]]["_id"] + "', " + res["_batch"][keys[i]]["countA"] + "]" + ((i != keys.length - 1) ? ", " : "]");
}
print(resultat);

/*
Results :
req1 = [['SD', 3], ['ND', 7], ['MT', 7], ['ME', 35], ['ID', 54], ['WY', 108], ['WV', 147], ['VT', 167], ['AR', 232], ['DC', 1932], ['DE', 1981], ['NH', 2074], ['KS', 2092], ['NM', 2201], ['MS', 2459], ['NV', 3710], ['RI', 4979], ['IA', 5525], ['WI', 6999], ['OR', 8699], ['KY', 9154], ['CT', 10038], ['IN', 10580], ['MO', 11859], ['UT', 12034], ['NE', 15372], ['CO', 15903], ['MA', 20722], ['NJ', 22516], ['MD', 22531], ['AL', 25092], ['LA', 25701], ['MN', 25823], ['WA', 27869], ['OK', 28537], ['TN', 29216], ['OH', 30371], ['AZ', 30514], ['IL', 38891], ['VA', 40770], ['GA', 45583], ['MI', 48721], ['PA', 58596], ['NC', 64248], ['NY', 76196], ['SC', 82325], ['FL', 122282], ['TX', 184453], ['CA', 327692]]
*/

/* ################################################ Request 2 ################################################ */

use admin;

use admin;
var res = db.getCollection("US_Accidents_Dec19").aggregate([{ $match : { $and : [{ "Wind_Speed" : {$ne : null} }, { "Wind_Direction" : {$ne : null}}]}},
{$group:{_id: "$Wind_Direction", count: { $sum:1}, avg: { $avg: {$convert: { input: "$Wind_Speed", to: "double"}}}}},{$sort:{'count':-1}}
]);
var resultat = "req2 = [";
keys = Object.keys(res["_batch"]);
for(var i = 0; i < keys.length; i++){
    resultat += "['" + res["_batch"][keys[i]]["_id"] + "', " + res["_batch"][keys[i]]["count"] + "', " + res["_batch"][keys[i]]["avg"] + "]" + ((i != keys.length - 1) ? ", " : "]");
}
print(resultat);

/* ################################################ Request 3 ################################################ */
use admin;
var res = db.getCollection("US_Accidents_Dec19").aggregate([{$group: {_id: "$Weather_Condition", count: { $sum: 1}}},{ $sort:{'count':-1}}]);
var resultat = "req3 = [";
keys = Object.keys(res["_batch"]);
for(var i = 0; i < keys.length; i++){
    resultat += "['" + res["_batch"][keys[i]]["_id"] + "', " + res["_batch"][keys[i]]["count"] + "]" + ((i != keys.length - 1) ? ", " : "]");
}
print(resultat);

/*
Results :
req3 = [['Light Hail', 1], ['Heavy Rain Showers', 1], ['Thunder / Wintry Mix / Windy', 1], ['Snow Grains', 1], ['Partial Fog / Windy', 1], ['Snow Showers', 1], ['Heavy Snow with Thunder', 2], ['Heavy Ice Pellets', 2], ['Sand / Dust Whirlwinds / Windy', 2], ['Light Snow Grains', 3], ['Light Fog', 3], ['Freezing Rain', 4], ['Drizzle / Windy', 4], ['Low Drifting Snow', 4], ['Light Sleet', 4], ['Squalls / Windy', 4], ['Light Snow and Sleet / Windy', 4], ['Light Freezing Rain / Windy', 4], ['Light Haze', 4], ['Snow and Sleet', 5], ['Heavy Thunderstorms with Small Hail', 5], ['Light Snow Showers', 5], ['Blowing Snow / Windy', 6], ['Light Thunderstorms and Snow', 6], ['Light Snow with Thunder', 6], ['Funnel Cloud', 6], ['Heavy Sleet', 6], ['Rain Shower', 6], ['Light Snow and Sleet', 7], ['Snow and Sleet / Windy', 7], ['Partial Fog', 8], ['Blowing Dust', 11], ['Squalls', 13], ['Heavy Snow / Windy', 14], ['Light Drizzle / Windy', 15], ['Sand', 16], ['Wintry Mix / Windy', 17], ['Volcanic Ash', 17], ['Small Hail', 19], ['Sand / Dust Whirlwinds', 20], ['Snow / Windy', 25], ['Fog / Windy', 29], ['Haze / Windy', 31], ['Light Rain Shower', 38], ['Blowing Dust / Windy', 43], ['Widespread Dust', 47], ['Ice Pellets', 51], ['Drizzle and Fog', 55], ['Thunder / Windy', 62], ['Light Rain Showers', 80], ['Rain Showers', 82], ['Light Ice Pellets', 95], ['T-Storm / Windy', 104], ['Blowing Snow', 107], ['Heavy Rain / Windy', 119], ['Heavy T-Storm / Windy', 119], ['N/A Precipitation', 125], ['Heavy Drizzle', 135], ['Showers in the Vicinity', 151], ['Rain / Windy', 196], ['Light Snow / Windy', 251], ['Light Freezing Fog', 326], ['Light Freezing Drizzle', 391], ['Heavy Snow', 455], ['Wintry Mix', 511], ['Shallow Fog', 676], ['Light Rain / Windy', 729], ['Light Freezing Rain', 874], ['Partly Cloudy / Windy', 881], ['Thunderstorms and Rain', 896], ['Heavy Thunderstorms and Rain', 927], ['Drizzle', 1041], ['Heavy T-Storm', 1088], ['Mist', 1104], ['Patches of Fog', 1253], ['Thunder', 1371], ['Smoke', 1381], ['Cloudy / Windy', 1463], ['Mostly Cloudy / Windy', 1496], ['Light Rain with Thunder', 1582], ['Thunderstorm', 1667], ['Snow', 1746], ['Thunder in the Vicinity', 1773], ['T-Storm', 1786], ['Light Thunderstorms and Rain', 2019], ['Fair / Windy', 2352], ['Light Drizzle', 5601], ['Heavy Rain', 6446], ['Fog', 12622], ['Haze', 17265], ['Rain', 17375], ['Light Snow', 17552], ['null', 27021], ['Light Rain', 73536], ['Cloudy', 81769], ['Scattered Clouds', 86444], ['Partly Cloudy', 149108], ['Overcast', 177659], ['Mostly Cloudy', 209306], ['Fair', 231288], ['Clear', 361998]]
*/

/* ################################################ Request 4 ################################################ */

use admin;
var resultat = "req4 = [";
var properties = [
    "Temperature", "Wind_Chill", "Humidity", "Pressure", "Visibility", "Wind_Speed", "Precipitation"
];
for(var j = 0; j < properties.length; j++){
    var name = "$" + properties[j];
    resultat += "['" + properties[j] + "', ";
    var res = db.getCollection("US_Accidents_Dec19").aggregate({ $group : { _id: null, max: { $max : name }, min: { $min : name }}});
    var min = res["_batch"][0]["min"];
    var max = res["_batch"][0]["max"];
    resultat += min + ", " + max;
    var range = parseFloat(max) - parseFloat(min);
    var rangeInterval = Math.trunc(range/4);
    var reste = (range - 4 * rangeInterval).toFixed(2);
    var tab = [];
    var tab2 = [];
    resultat += ", [";
    for(var i = 0; i < 4; i++){
        if(i <= 2){
            tab.push([(parseFloat(min) + i * rangeInterval).toString(), (parseFloat(min) + (i+1) * rangeInterval).toString()]);
            resultat += "['" + (parseFloat(min) + i * rangeInterval).toString() + ", " + (parseFloat(min) + (i+1) * rangeInterval).toString() + "']";
        }
        else{
            tab.push([(parseFloat(min) + i * rangeInterval).toString(), (parseFloat(min) + (i+1) * rangeInterval+ parseFloat(reste)).toString()]);
            resultat += "['" + (parseFloat(min) + i * rangeInterval).toString() + ", " + (parseFloat(min) + (i+1) * rangeInterval+ parseFloat(reste)).toString() + "']";
        }
    }
    resultat += "], [";
    for(var i = 0; i < tab.length; i++){
        var z = {};
        z[properties[j]] = {$gte:tab[i][0], $lte:tab[i][1]};
        resultat += db.getCollection("US_Accidents_Dec19").find(z).count() + ((i !== tab.length - 1) ? ", " : "]");
    }
    var x = {};
    x[properties[j]] = 1.0;
    var y = {};
    y[properties[j]] = {$ne:null};
    resultat += "]" + ((j !== properties.length - 1) ? ", " : "]");
}
print(resultat);

/*
Results :
req4 = [['Temperature', -0.0, 99.9, [['0, 24']['24, 48']['48, 72']['72, 99.9']], [36786, 268534, 646308, 531243]], ['Wind_Chill', -0.1, 99.0, [['-0.1, 23.9']['23.9, 47.9']['47.9, 71.9']['71.9, 99']], [66532, 186789, 211573, 223010]], ['Humidity', 1.0, 99.0, [['1, 25']['25, 49']['49, 73']['73, 99']], [113163, 278681, 491903, 597656]], ['Pressure', 0.0, 9.9, [['0, 2']['2, 4']['4, 6']['6, 9.9']], [8, 1489379, 0, 2]], ['Visibility', 0.0, 90.0, [['0, 22']['22, 44']['44, 66']['66, 90']], [1250753, 49377, 57558, 121790]], ['Wind_Speed', 0.0, 97.8, [['0, 24']['24, 48']['48, 72']['72, 97.8']], [485430, 249732, 341410, 232243]], ['Precipitation', 0.0, 9.99, [['0, 2']['2, 4']['4, 6']['6, 9.99']], [622073, 32, 1, 161]]]
*/

/* ################################################ Request 5 ################################################ */
use admin;
var res = db.getCollection("US_Accidents_Dec19").aggregate([{$group: { _id: "$City", countA: { $sum: 1}}},{$sort:{'countA':-1}}]);
keys = Object.keys(res["_batch"]);
var resultat = "req2 = [";
for(var i = 0; i < keys.length; i++){
    resultat += "['" + res["_batch"][keys[i]]["_id"] + "', ";
    var res2 = db.getCollection("US_Accidents_Dec19").aggregate([{ $match : { "City" : {$eq : res["_batch"][keys[i]]["_id"]}}}, {$group: { _id: "$Astronomical_Twilight", countA: { $sum: 1}}}]);
    keys2 = Object.keys(res2["_batch"]);
    for(var j = 0; j < keys2.length; j++){
        resultat += "['" + res2["_batch"][keys2[j]]["_id"] + "', " + res2["_batch"][keys2[j]]["countA"] + "]" + ((j != keys2.length - 1) ? ", " : "]");
    }
    resultat += "]" + ((i != keys.length - 1) ? ", " : "]");
}
print(resultat);

/* ################################################ Request 7 ################################################ */
var res = db.getCollection("US_Accidents_Dec19").find({}, {"Start_Time":1});
var c = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(var i = 0; i < res.count(); i++){
    var hour = tojson(res[i]['Start_Time']).split(':')[0].split(' ')[1];
    if(/^\d+$/.test(hour)){
        if(hour.split()[0] == '0'){
             hour = hour.split()[1];
        }
        c[parseInt(hour)] = c[parseInt(hour)]+1;
    }
}
print("req7 = ["+c+"]");

/* ################################################ Request 8 ################################################ */
use admin;
var properties = ["$Roundabout", "$Bump", "$Crossing", "$Give_Way", "$Junction", "$No_Exit", "$Railway", "$Station", "$Stop", "$Traffic_Calming", "$Traffic_Signal", "$Turning_Loop"];
resultat = "req8 = [";
for(var j = 0; j < properties.length; j++){
    resultat += "['" +  properties[j].replace("$", "") + "', [";
    var res = db.getCollection("US_Accidents_Dec19").aggregate([{$group:{_id:  properties[j], count: { $sum: 1}}},{$sort:{'count':-1}}]);
    keys = Object.keys(res["_batch"]);
    for(var i = 0; i < keys.length; i++){
        resultat += "['" + res["_batch"][keys[i]]["_id"] + "', " + res["_batch"][keys[i]]["count"] + "]" + ((i != keys.length - 1) ? ", " : "]");
    }
    resultat += "]" + ((j != properties.length - 1) ? ", " : "]");
}
print(resultat);

/*
Results :
req8 = [['Roundabout', [['True', 117], ['False', 1506883]]], ['Bump', [['True', 264], ['False', 1506736]]], ['Crossing', [['True', 120120], ['False', 1386880]]], ['Give_Way', [['True', 4297], ['False', 1502703]]], ['Junction', [['True', 76147], ['False', 1430853]]], ['No_Exit', [['True', 1758], ['False', 1505242]]], ['Railway', [['True', 13503], ['False', 1493497]]], ['Station', [['True', 32527], ['False', 1474473]]], ['Stop', [['True', 23174], ['False', 1483826]]], ['Traffic_Calming', [['True', 647], ['False', 1506353]]], ['Traffic_Signal', [['True', 295166], ['False', 1211834]]], ['Turning_Loop', [['False', 1507000]]]]
*/
