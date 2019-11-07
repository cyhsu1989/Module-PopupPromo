(function(global) {
	if (global.popupPromo) {
		console.log("popupPromo is already defined!");
		return;
	}

	global.popupPromo = (function() {
		var _module = {};

		_module.show = function(promoInfo) {
			var template = `
            <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">
            <link rel="stylesheet" href="/popup-promo/style.css">
            <div class="popup-promo">
                <div class="popup-promo__content">
                    <div class="popup-promo__left">
                        <img src="${promoInfo.image}" class="popup-promo__img">
                    </div>
                    <div class="popup-promo__right">
                        <a href="#" class="popup-promo__close">&times;</a>
                        <h2 class="popup-promo__title">${promoInfo.title}</h2>
                        <h3 class="popup-promo__subtitle">${promoInfo.subtitle}</h3>
                        <p class="popup-promo__description">${promoInfo.description}</p>
                        <a href="${promoInfo.link}" class="popup-promo__link">${promoInfo.linkName} &rarr;</a>
                    </div>
                </div>
            </div>`;

			document.getElementById("popup-promo").innerHTML = template;
		};

		return _module;
	})();
})(window);
