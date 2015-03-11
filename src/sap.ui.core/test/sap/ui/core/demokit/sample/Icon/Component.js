sap.ui.define(['jquery.sap.global', 'sap/ui/core/UIComponent'],
	function(jQuery, UIComponent) {
	"use strict";

	
	var Component = UIComponent.extend("sap.ui.core.sample.Icon.Component", {

		metadata : {
			rootView : "sap.ui.core.sample.Icon.IconGroup",
			includes : [ "Icon/style.css" ],
			dependencies : {
				libs : [
					"sap.m"
				]
			},
			config : {
				sample : {
					files : [
						"style.css",
						"IconGroup.controller.js",
						"IconGroup.view.xml"
					]
				}
			}
		}
	});

	return Component;

});
