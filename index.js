// Arrays to keep track of each task's state


// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = function(title, description) {
  const newTaskObj = {
    title: title,
    description: description,
    complete: false,
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function() {
      this.complete = true;
    }
  };
  return newTaskObj;
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// Print the state of a task to the console in a nice readable way


// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Scoop out waste and add fresh litter"); // task 0
const task2 = newTask("Do Laundry", "Separate colours, wash, dry and fold"); // task 1
// const taskList = [task1, task2];
// console.log(taskList);
task1.logState();
task1.markCompleted();// console.log(taskList);
task1.logState();
