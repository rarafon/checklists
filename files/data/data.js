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
}

Data.prototype._getDataWrapper = function(type) {
   switch(type) {
      case "click": return clickData;
      case "date": return dateData;
   }
};