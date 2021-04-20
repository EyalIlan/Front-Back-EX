
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'findMyRestaurant'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{

    if(error){
       return  console.log('Unable to connect')
    }

   const db =  client.db(database)

    //1
    db.collection('resturant').find().toArray((error,users) =>{
        console.log(users)
    })

    

    //2
    // db.collection('resturant').find({cuisine:'asian'}).toArray((error,users) =>{
    //     console.log(users)
    // })

    //3
    // db.collection('resturant').find({kosher:true}).toArray((error,users) =>{
    //     console.log(users)
    // })


    //4
    // db.collection('resturant').find({"address.city":'Holon'}).toArray((error,users) =>{
    //     console.log(users)
    // })


    //5
    // Write a MongoDb query to display a specific restaurants address
    // db.collection('resturant').find({"address.street":'Histradrut 85'}).toArray((error,users) =>{
    //          console.log(users)
    //  })

    //1.6 - Write a MongoDb query to display a specific restaurants coordinates
    //  db.collection('resturant').find({"address.coordinates":10.6774}).toArray((error,users) =>{
    //     console.log(users)
    // })

    //1.7. - Write a MongoDb query that should display all restaurants in ascending order by restaurant name
    // db.collection('resturant').find().sort({name:1}).toArray((error,users) =>{
    //     console.log(users)
    // })

    //1.8 - Write a MongoDb query that should display all restaurants in ascending order by city names.
    // db.collection('resturant').find().sort({"address.city":1}).toArray((error,users) =>{
    //     console.log(users)
    // })

    // 1.9 - Update a specific restaurant's name
    // db.collection('resturant').updateOne({
    //     name:"falafel 5 shekels"
    // }, {
    //     $set:{
    //        name:'Dima Resturant' 
    //     }
    // })
    
    //1.10 - Update a specific restaurant by adding a new review
    // db.collection('resturant').updateOne({
    //     name:"asian delight"
    // }, {
    //     $push:{
    //         reviews:{date:new Date("2016-01-01"),score:77}
    //     }
    // })

    // 1.11 - Update all restaurants to be kosher
    // db.collection('resturant').updateMany({
    //     kosher:false
    // },{
    //     $set:{
    //         kosher:true
    //     }
    // })

    //1.12 - Delete a specific restaurant
    // db.collection('resturant').deleteOne({_id:new mongodb.ObjectID('607d60d54821ab42d081f20e')})



    // 1.13 - Delete all restaurants
    // db.collection('resturant').deleteMany().then(result =>{
    //     console.log(result)
    // }).catch(err =>{
    //     console.log(err)
    // })

   // 1.14 – Increment a specific restaurants score by 2
//    db.collection('resturant').updateOne({
//         name:"coconut jam"
//     }, {
//         $inc:{
//             "reviews.0.score":200 
//         }
//     })

   //1.15 – Decrement a specific restaurants score by 1 
    // db.collection('resturant').updateOne({
    //     name:"coconut jam"
    // }, {
    //     $inc:{
    //         "reviews.0.score":-200 
    //     }
    // })


  //2.2 - Write a MongoDb query to print all restaurant cities
    //  db.collection('resturant').find({}).toArray((error,users) =>{
    //     users.forEach(p =>{
    //         console.log(p.address.city)
    //     })
    
    // })
 
  // 3.1 - Query for restaurant names that start with a specific alphabet
    // db.collection('resturant').find({}).toArray((err,result) =>{

    //     result =  result.filter(p =>{
    //             return p.name[0] === 'a'
    //     })
    //     console.log(result)
    // })

    //3.2 - Query how many documents you have from the restaurant collection.
        // db.collection('resturant').find({}).count((error,result) =>{
        //     console.log(result)
        // })

   //3.3 - Write a MongoDb query to get restaurants that include reviews from a specific date.
    //  db.collection('resturant').find({}).toArray((error,result) =>{
            
    //         result =   result.map(p =>{
    //             return p.reviews.filter(p =>{
                       
    //                 let d = new Date(p.date)
    //                 return  d.getFullYear() > 2017 ? p : null 

    //             })
    //         })
    //         console.log(result)
    //    })
        
//    db.collection('resturant').insertMany([
//     {
//       name: "bombay",
//       address: {
//         city: "Holon",
//         street: "Herzel 15",
//         coordinates: [-77.46574, 40.6774],
//       },
//       cuisine: "indian",
//       kosher: true,
//       reviews: [
//         {
//           date: new Date("2016-01-01"),
//           score: 7,
//         },
//         {
//           date: new Date("2019-01-01"),
//           score: 3,
//         },
//         {
//           date: new Date("2018-01-01"),
//           score: 8,
//         },
//       ],
//     },
//     {
//       name: "falafel 5 shekels",
//       address: {
//         city: "Bat-Yam",
//         street: "Histradrut 85",
//         coordinates: [-70.46574, 10.6774],
//       },
//       cuisine: "street food",
//       kosher: false,
//       reviews: [
//         {
//           date: new Date("2019-01-01"),
//           score: 3,
//         },
//         {
//           date: new Date("2016-01-01"),
//           score: 8,
//         },
//         {
//           date: new Date("2020-01-01"),
//           score: 4,
//         },
//       ],
//     },
//     {
//       name: "asian delight",
//       address: {
//         city: "Tel Aviv",
//         street: "Balfur 15",
//         coordinates: [-10.46574, 30.6774],
//       },
//       cuisine: "asian",
//       kosher: true,
//       reviews: [
//         {
//           date: new Date("2020-01-01"),
//           score: 3,
//         },
//         {
//           date: new Date("2018-01-01"),
//           score: 8,
//         },
//         {
//           date: new Date("2016-01-01"),
//           score: 9,
//         },
//       ],
//     },
//     {
//       name: "coconut jam",
//       address: {
//         city: "Tel Aviv",
//         street: "Stam Adress 15",
//         coordinates: [20.46574, -40.6774],
//       },
//       cuisine: "african",
//       kosher: true,
//       reviews: [
//         {
//           date: new Date("2017-01-01"),
//           score: 10,
//         },
//         {
//           date: new Date("2016-01-01"),
//           score: 8,
//         },
//         {
//           date: new Date("2019-01-01"),
//           score: 6,
//         },
//       ],
//     },
//     {
//       name: "rice and noodles",
//       address: {
//         city: "Holon",
//         street: "Bla Bla 15",
//         coordinates: [20.46574, 10.6774],
//       },
//       cuisine: "asian",
//       kosher: false,
//       reviews: [
//         {
//           date: new Date("2016-01-01"),
//           score: 1,
//         },
//         {
//           date: new Date("2019-01-01"),
//           score: 6,
//         },
//         {
//           date: new Date("2019-01-01"),
//           score: 2,
//         },
//       ],
//     },
//     {
//       name: "thailand paradise",
//       address: {
//         city: "Holon",
//         street: "Bla 13",
//         coordinates: [-77.46574, 40.6774],
//       },
//       cuisine: "asian",
//       kosher: false,
//       reviews: [
//         {
//           date: new Date("2020-01-01"),
//           score: 7,
//         },
//         {
//           date: new Date("2019-01-01"),
//           score: 6,
//         },
//         {
//           date: new Date("2020-01-01"),
//           score: 2,
//         },
//       ],
//     },
//   ])

// 3.1 Advanced Queries
// db.collection("restaurants").find({ name: {$in: [/^b/]} }).toArray((err,res)=>{
//     console.log("start with a specific alphabet",res);
// });

// 3.2 
// db.collection("restaurants").countDocuments({}, ((err, res)=>{
//     console.log("count",res);
// }));

//3.3 
// db.collection('restaurants').find({reviews: {$elemMatch : {date: new Date("2020-01-01 00:00:00.000Z") }}}).toArray((err,res)=>{
//     console.log("date",res);
// })


})