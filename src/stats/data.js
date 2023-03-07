
const days = [
  {
    date: new Date(),
    dateId: 1,
    isOpen: false,
    tasks: [
      {
        taskId: 1,
        managerId: 1,
        workerId: 2,
        title: 'string',
        isComplete: false,
        isWorking: false,
        feedBackText: 'string',
        feedBackRange: 10,
      },

      {

      }
    ],
    dayFeedBack: []
  },
  {

  }
]


// export function getData() {
//   return days
// }
// export function addDayFeedBackj(dayId, dayFeedBackOb) {
//   // check if dayobj is obj with specific keys
//   const days = getData()
//   days.forEach(day => {
//     if (day.dateId === dayId) {
//       day.dayFeedBack.push(dayFeedBackOb)
//     }
//   })
// }
// addDayFeedBackj(1, { text: '', grade: 0 })

// export function addTask(dayId, taskObj) {
//   const days = getData()
//   days.forEach(day => {
//     if (day.dateId === dayId) {
//       day.tasks.push(taskObj)
//     }
//   })
// }

// export function getTaskByWorkerId(workerId) {
//   const workerTasks = []
//   const days = getData()
//   days.forEach(day => {
//     day.tasks.forEach(task => {
//       if (task.workerId === workerId) {
//         workerTasks.push(task)
//       }
//     })
//   })
//   return workerTasks
// }

// export function makeTaskActive(taskId) {
//   const days = getData()
//   // loop
// }