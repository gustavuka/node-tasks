// CRUD

// /c/Users/gusta/mongodb/bin/mongod.exe --dbpath=/c/Users/gusta/mongodb-data


// const { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5ea9d929dc5ac0324cadfd62")
    // }, {
    //     $inc: {
    //         age: 5
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

//     db.collection('tasks').updateMany({ },
//         {
//             $set: {
//                 completed: true
//             }
//         }).then((result) => {
//             console.log(result.modifiedCount)
//         }).catch((error) => {
//             console.log(error)
//         })
// }) 