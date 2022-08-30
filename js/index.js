// a new TaskManager is initialized near the top of the file.
const taskManager = new TaskManager(0);

const newTaskForm = document.querySelector('#newTaskForm');

//  add an event listener to the New Task form, listening to the submit event
newTaskForm.addEventListener('submit', (event) => {
    // Prevent default action of the form!
    event.preventDefault();

    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskNotes = document.querySelector('#newTaskNotes');
    const newTaskRepeat = document.querySelector('#newTaskRepeat');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');

    /*
        Validation code here
    */

    // Get the values of the inputs
    const name = newTaskNameInput.value;
    const notes = newTaskNotes.value;
    const repeat = newTaskRepeat.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;

    // Add the task to the task manager
    taskManager.addTask(name, notes, repeat, assignedTo, dueDate);

    // Clear the form
    newTaskNameInput.value = '';
    newTaskNotes.value = '';
    newTaskRepeat.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';
});



// modal for todo list
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })