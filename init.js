require(['dojo/_base/kernel', 'dojo/ready'], function  (dojo, ready) {
	ready(function () {
		window.addEventListener("focus", function() {
			App.findAll("video").forEach((vid) => {
				if (vid.getAttribute("autoplay") == 1 && vid.paused)
					vid.play();
			})
		});

		window.addEventListener("blur", function() {
			App.findAll("video").forEach((vid) => {
				if (vid.getAttribute("autoplay") == 1 && !vid.paused)
					vid.pause();
			})
		});
	});
});
