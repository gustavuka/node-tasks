require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5eab2a5da689953fbca8c8e1').then(() => {
//     return Task.countDocuments({ completed: false })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id, status) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: status })
    return count
}

deleteTaskAndCount('5eae14fe1f00ad0124d429b4', false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
