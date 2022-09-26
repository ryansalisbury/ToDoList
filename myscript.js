
/*Main purpoise of this function is to fetch the content of the todo list
Uses the getItem method to retrieve the toDo items within the local storage.
*/ 
function get_todos(){
  var todos = new Array;
  var todos_str = localStorage.getItem('todo');

    /*What the if statement says: if the return value is not null or 
    empty then it must be the stringified data which has been stored.
    */
  if (todos_str !== null){
     /*JSON.parse is used to convert the JSON string back into 
     javascrpt data that the browser can display */
    todos = JSON.parse(todos_str);
  }
    /*This return value will return any data that is within the local 
    storage*/
  return todos;
}

/*Function will be called when the button to add a task is pressed*/
function add(){
  /**
   * The .getElementId will retreive the 'task' which is the input from 
   * the user for their next task
   */
  var task = document.getElementById('task').value;
  /*Calls function above and gets todos*/ 
  var todos = get_todos();

 /**Pushes inputted task to array*/
  todos.push(task);

  /**We then Stringify that method and set it in local storage */
  localStorage.setItem('todo', JSON.stringify(todos));

  /*we will write a function called show()*/
  show();

  return false;
}

/**Will clear input from input box*/
function clearDefault(a){
  if (a.defaultValue == a.value) {a.value=""}
}


/*will remove task from to do list when user clicks a button*/
function remove(){
  /** Refers to the current DOM element when button is clicked */
  var id = this.getAttribute('id');
  var todos = get_todos();
  /**Use push to append and splice to remove */
  todos.splice(id, 1);
  /**Store what's left in local storage */
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
}

/*Will display the current todo list which is stored in local storage*/
function show(){
  var todos = get_todos();

  /** Manually creating a snippet of a html tag from these variables to set the value
   * UI element is an unordered list
   */
  var html = '<ul>';

  for(var i=0; i<todos.length;i++){
    html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">HELLOOOO</button> </li>"';
  };

  html += '</ul>'


/**Will insert the newly generated html snippet in the original document, loaded from the server */
  document.getElementById('todos').innerHTML = html;

  /**Sets up event so when a the remove button is clicked it will call the remove method */
  var buttons = document.getElementsByClassName('remove');
  for(vari=0; i<buttons.length;i++){
    buttons[i].addEventListener('click', remove);
  }

}


document.getElementById('add').addEventListener('click', add);
show();