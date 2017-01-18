sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("TestApp.controller.main", {
		
		onInit: function () {
			// fare chiamata odata e impostare i parametri per le varie tile (get by id e set property)
			// console.log(this.getView().byId("tile1"));
		},
	    onAfterRendering: function () {
	    }
	    
	});
});