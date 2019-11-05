(function(global) {
	if (global.popupPromo) {
		console.log("popupPromo is already defined!");
		return;
	}

	global.popupPromo = function() {
		var _module = {};

		return _module;
	};
})(window);
