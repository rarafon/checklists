// Handles which functions to run.
var t;

function CPU(name) {
   this.name = name;
   var today = date.today();
   t = this.dataHandler = new DataHandler(name, today.year, today.month, [{name: "Date", type: "date"}]);
   this.tableHandler = new TableHandler(this, name);
   this.load();
}

CPU.prototype.load = function() {
   this.tableHandler.load();
   this.displayDate();
   this.dataIntoTable();
};

CPU.prototype.dataIntoTable = function() {
   var nameNameIndex = this.dataHandler.getNameIndex();
   each(nameNameIndex, function(nameNameIndexElement) {
      var name = nameNameIndexElement.name,
            type = nameNameIndexElement.type;
      var eleArr = this.dataHandler.dataToEle(name, type);
      this.tableHandler.createRow(name, type, eleArr);
   }, this);
};

CPU.prototype.createAddRowMenu = function(name, type) {
   menu.createMenu(this, addRow_menu);
};

CPU.prototype.delRow = function() {
   console.log("Testing");
};

CPU.prototype.getTypes = function() {
   return this.dataHandler.getTypes();
};

CPU.prototype.addRow = function(name, type) {
   this.dataHandler.add(name, type);
   var eleArr = this.dataHandler.dataToEle(name, type);
   this.tableHandler.createRow(name, type, eleArr);
};

CPU.prototype.displayDate = function() {
   var date = this.dataHandler.getDate();
   display.date(date.year, date.month);
};

CPU.prototype.loadData = function() {
   var nameNameIndex = this.dataHandler.getNameIndex();
   console.log(nameNameIndex);
};

CPU.prototype.showData = function() {
   console.log(this.dataHandler.dataSet);
};

CPU.prototype.changeDate = function(year, month) {
   this.dataHandler.changeDate(year, month);
   this.load();
};

CPU.prototype.nextMonth = function(){this.changeDate(1);};
CPU.prototype.prevMonth = function(){this.changeDate(-1);};
CPU.prototype.today = function() {
   var today = date.today();
   this.changeDate(today.year, today.month);
};

CPU.prototype.clicked = function(name, cellNum) {
   var newElement = this.dataHandler.clicked(name, cellNum);
   this.tableHandler.changeCell(name, cellNum, newElement);
   console.log(newElement);
};