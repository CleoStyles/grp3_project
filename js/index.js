const ourTaskManager = new taskManager();

ourTaskManager.addTask('Cook Dinner','Take out the trash','Nick','2020-09-20','TODO', );

console.log(ourTaskManager.tasks);

const taskHtml = createTaskHtml();

let tasksHtmlList = ['Go shopping','pay rent','do laundry','get groceries'];


console.log(taskHtml); 
console.log(taskHtml);

ourTaskManager.render();

ourTaskManager.save();
ourTaskManager.load();

















