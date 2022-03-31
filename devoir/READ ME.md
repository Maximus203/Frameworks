# Hello 😊 
# Mongo DB
#
# Before using the app, you may create the database and these collections
# You can do that with these commands after connexion in MongoDB:

use looney_tunes
db.createCollection("fans")
db.createCollection("actor")

db.actor.insertMany([{fname:"Daffy", lname: "Duck", age: 19, sex: "M"},{fname: "Bugs", lname: "Bunny", age: 23, sex: "M"},{fname: "Titi", lname: "oiseau", age: 7, sex: "F"},{fname: "Bip bip", lname: "Rapid", age: 20, sex: "F"},{fname: "Charlie", lname: "Le coq", age: 17, sex: "F"},{fname: "Marvin", lname: "Martien", age: 50, sex: "M"},{fname: "Speedy", lname: "Gonzales",age: 25, sex: "M"},{fname: "Lola", lname: "Bunny", age: 27, sex: "F"},{fname: "Donnald", lname: "Duck", age: 35, sex: "M"}])

db.fans.insertMany([{name: "Cherif Diouf", email: "printf0cherif@gmail.com"},{name: "Bigue Ciss", email: "cissbigue6@gmail.com"},{name: "Abdoul Khoudoss Diop", email: "douha649@gmail.com"} ])

# Express
# After the mongo step you have to initialize the express app by doing
npm init
# Now you have to install all dependencies 
# You can do that with this command
npm install --save express ejs mongoose http-status-codes mongodb express-ejs-layouts
