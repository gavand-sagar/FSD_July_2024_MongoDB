use("lucifer")

// db.getCollection("products").find({
//     $and: [
//         { price: { $gt: 4 } },
//         { price: { $lt: 10 } }
//     ]
// })

// db.getCollection("products").find({
//     $and: [{ "category": { $eq: "beauty" } }, { "rating": { $gt: 3 } }]
// })


// db.getCollection("products").find({
//     $or: [
//         { price: { $gt: 2000 } },
//         { rating: { $gt: 3 } }
//     ]
// })


// db.getCollection("products").find( { $where: function() {
//     return this.price == 9.99
// }});

// db.getCollection("products").find({
//     title: {
//         $regex: '^A'
//     }
// })

// db.getCollection("users").find();

// db.getCollection("users").find( { $where: function() {
//     return (this.username == "Rahul")
// }});




// db.getCollection("products").aggregate([
//     {
//         $sort: {
//             price: -1
//         }
//     },
//     {
//         $limit: 1
//     }
// ])

// db.getCollection("products").find({
//     "price": { $eq: 200 }
// })

// db.getCollection("products").find({
//     "price": { $lt: 200 }
// })

// db.getCollection("products").find({
//     "price": { $gt: 200 }
// })

// db.getCollection("products").find({
//     "price": { $gte: 200 }
// })

// db.getCollection("products").find({
//     "price": { $lte: 200 }
// })

// db.getCollection("products").find({
//     "price": { $ne: 200 }
// })


// db.getCollection("products").find({
//     $and: [{rating:{$gte:2}},{rating:{$lte:3}}]
// })


db.getCollection("products").find({
    $where: function(){
        return this.rating <= 3 && this.rating >= 0
    }
})