var Model = {
	/* The Model handles our data. */

	// Our model has a single ToDoItem array
	ToDoItemArray: [],

	// ToDoItem Factory
	ToDoItem: function newToDoItem(id, title) {
		return {
			id: id,
			title: title,
			complete: false
		}
	}
};

var View = {
	// The View handles changes to our view (DOM)

	getElementById: function getElementById(id) {
		return document.getElementById(id);
	},

	reloadToDoList: function reloadToDoList() {
		var toDoListElm = View.getElementById('ulToDoList');
		var listHtml = '';
		Model.ToDoItemArray.forEach(function (toDo, index) {
			if (!toDo.complete) {
				var toDoCbId = 'cb_' + index;
				var itemHtml =
					'<li class="topcoat-list__item">\n    ' +
					'<label class="topcoat-checkbox">\n        ' +
					'<input id=' + toDoCbId + ' type="checkbox">\n\n        ' +
					'<div class="topcoat-checkbox__checkmark">\n        ' +
					'</div>\n        ' +
					toDo.title +
					'</label>\n' +
					'</li>';
				listHtml += itemHtml;
			}
		});
		toDoListElm.innerHTML = listHtml;
	},

	getInputText: function getInputText() {
		var inputElem = View.getElementById('titleInput');
		return inputElem.value;
	},

	resetInput: function resetInput() {
		var inputElm = View.getElementById('titleInput');
		inputElm.value = null;
		inputElm.focus();
		var addBtnElm = View.getElementById('addBtn');
		addBtnElm.disabled = true;
	}
};

var Controller = {
	/* The Controller handles the App logic */

// Controller initialization
	init: function init() {
		// Add a click listener to our Add button
		var addBtnElm = View.getElementById('addBtn');
		/*addBtnElm.addEventListener('click',
			Controller.addToDoItem, false);*/
		addBtnElm.onclick = Controller.addToDoItem;
		// Start with the Add button disabled
		addBtnElm.disabled = true;

		// Add a checks for valid input state (non-empty)
		var inputElm = View.getElementById('titleInput');
		inputElm.onkeyup = function () {
			// If the input field has a value, enable the Add button
			addBtnElm.disabled = !inputElm.value;
		};
		inputElm.oninvalid = function () {
			addBtnElm.disabled = true;
		}


	},

	addToDoItem: function addToDoItem() {
		var id = Model.ToDoItemArray.length;
		var title = View.getInputText();
		var newToDo = new Model.ToDoItem(id, title);
		// Add new item to the array
		Model.ToDoItemArray.push(newToDo);
		// Clear the input field
		View.resetInput();
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

	// Act on a Received Events
	receivedEvent: function (id) {
		console.log("Received Event: " + id);
	}
};

App.initialize();

