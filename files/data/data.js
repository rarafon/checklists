function Data(name, type) {
   this._name = name;
   this._type = type;
   this._dataWrapper = this._getDataWrapper(type);
   this._data = {};
}

Data.prototype.make = function(year, month) {
   if (this["_data"][year + "_" + month] === undefined) {
      var dataObj = this._dataWrapper;
      var data = dataObj.makeData(year, month, name);
      this["_data"][year + "_" + month] = data;
   }
};

Data.prototype._getDataArray = function(year, month) {
   if (this["_data"][year + "_" + month] === undefined)
      this.addData(year, month);
   return this["_data"][year + "_" + month];
};

Data.prototype._getData = function(year, month, i) {
   if (this["_data"][year + "_" + month] === undefined)
      this.addData(year, month);
   return this["_data"][year + "_" + month][i];
}

Data.prototype._changeData = function(year, month, i, value) {
   this["_data"][year + "_" + month][i] = value;
}

Data.prototype._getDataWrapper = function(type) {
   switch(type) {
      case "click": return clickData;
      case "date": return dateData;
   }
};

Data.prototype._getElement = function(year, month, i) {
   var value = this._getData(year, month, i);
   var dataWrapper = this._dataWrapper;
   var ele = dataWrapper.createInput(value);
   ele.id = name + "_" + i;
   return ele;
};

Data.prototype.getElements = function(year, month) {
   var dataArray = this._getDataArray(year, month);
   var elementArray = [],
      element = undefined;

   each(dataArray, function(dataValue, i) {
      element = this._getElement(year, month, i);
      elementArray.push(element);
   }, this);

   return elementArray;
};
};