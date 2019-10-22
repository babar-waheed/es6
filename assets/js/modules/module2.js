
var _ = require('lodash');

var people = [
{
      "id": 1,
      "first_name": "Verne",
      "last_name": "De Clairmont",
      "email": "vdeclairmont0@elegantthemes.com",
      "gender": "Male",
      "ip_address": "2.113.57.57"
    }, {
      "id": 2,
      "first_name": "Stafford",
      "last_name": "Kleinmann",
      "email": "skleinmann1@live.com",
      "gender": "Male",
      "ip_address": "237.47.81.66"
    }, {
      "id": 3,
      "first_name": "Dredi",
      "last_name": "Dutnall",
      "email": "ddutnall2@weebly.com",
      "gender": "Female",
      "ip_address": "74.60.77.58"
    }, {
      "id": 4,
      "first_name": "Damara",
      "last_name": "Van de Castele",
      "email": "dvandecastele3@printfriendly.com",
      "gender": "Female",
      "ip_address": "29.95.216.157"
    }, {
      "id": 5,
      "first_name": "Shermy",
      "last_name": "Perceval",
      "email": "sperceval4@wiley.com",
      "gender": "Male",
      "ip_address": "41.200.61.213"
    }, {
      "id": 6,
      "first_name": "Rouvin",
      "last_name": "Downgate",
      "email": "rdowngate5@about.com",
      "gender": "Male",
      "ip_address": "241.121.13.46"
    }, {
      "id": 7,
      "first_name": "Callie",
      "last_name": "Dix",
      "email": "cdix6@odnoklassniki.ru",
      "gender": "Female",
      "ip_address": "156.69.94.80"
    }, {
      "id": 8,
      "first_name": "Jayson",
      "last_name": "Lorentzen",
      "email": "jlorentzen7@google.de",
      "gender": "Male",
      "ip_address": "91.186.104.74"
    }, {
      "id": 9,
      "first_name": "Giustina",
      "last_name": "Hundy",
      "email": "ghundy8@histats.com",
      "gender": "Female",
      "ip_address": "128.241.244.161"
    }, {
      "id": 10,
      "first_name": "Lewes",
      "last_name": "Yezafovich",
      "email": "lyezafovich9@icio.us",
      "gender": "Male",
      "ip_address": "196.106.39.250"
    }
]

var femaleCount = _.filter(people, {gender: "Female"});

console.log('module2.js', "Female: "+femaleCount.length);

