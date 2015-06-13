var Model = {
    /* The Model handles our data. */

    // Our model has a single ToDoItem array
    ToDoItemArray: [],

    // ToDoItem Factory
    ToDoItem: function newToDoItem(id, title) {
        return {
            id: null,
            title: null
        }
    }
};

var View = {
    // The View handles changes to our view (DOM)

    getElementById: function getElementById(id) {
        return document.getElementById(id);
    },

    reloadToDoList: function reloadToDoList() {
        var toDoListElm = View.getElementById()
    }
};

var Controller = {
    /* The Controller handles the App logic */

// Controller initialization
    init: function init() {
        var addBtnElm = View.getElementById("addBtn");
        // Add a click listener to our Add button
        addBtnElm.addEventListener('click',
            function addToDoItem() {
                console.log("Add button clicked.");
                Model.ToDoItemArray.push(new Model.ToDoItem);
                console.log(Model.ToDoItemArray.length + " total ToDo Items.");
            }, false);
        console.log('Click event listener added.');
    },

    addToDoItem: function addToDoItem() {
        var id = Model.ToDoItemArray.length;
        // TODO: Change title to input text
        var title = "Item " + id;
        var newToDo = new Model.ToDoItem(id, title);
        // Add new item to the array
        Model.ToDoItemArray.push(newToDo);
        // Update the view's list
        View.reloadToDoList();
    }
};

var App = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        App.receivedEvent('deviceready');
        // Cordova / PhoneGap platform is ready.
        console.log("Platform ready.");
        // Start the App Logic
        Controller.init();
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        console.log('Received Event: ' + id);
    }
};

App.initialize();

