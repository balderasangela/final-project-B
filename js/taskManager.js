// Create a TaskManager class in js/taskManager.js
class taskManager {

    constructor(currentId = 0) {

        // this.tasks property on the class equal to an empty array.
        this.tasks = [];
        this.currentId = currentId;
    }




// add a method to the TaskManager class that will allow us to add tasks to it's tasks property.
 addTask(name, notes, assignedTo, dueDate) {
        const task = {
           
            //id,name,desc,assigned,due,status
            id: this.currentId++,
            name: name,
            notes: notes,
            repeat: repeat,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'inProgress'
        };
        // push a new task into the this.tasks array
        this.tasks.push(task);
    }

}
