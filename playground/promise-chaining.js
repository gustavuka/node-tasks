require('../src/db/mongoose')
const User = require('../src/models/user')

// 5eabbc071561e12de0bff774

// User.findByIdAndUpdate('5eacfe4a0b00711d1ce1f8f3', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5eacfe4a0b00711d1ce1f8f3', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})