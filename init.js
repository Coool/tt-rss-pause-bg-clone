require(['dojo/_base/kernel', 'dojo/ready'], function  (dojo, ready) {
	ready(function () {
		Event.observe(window, "focus", function() {
			$$("video").forEach((vid) => {
				if (vid.getAttribute("autoplay") == 1 && vid.paused)
					vid.play();
			})
		});

		Event.observe(window, "blur", function() {
			$$("video").forEach((vid) => {
				if (vid.getAttribute("autoplay") == 1 && !vid.paused)
					vid.pause();
			})
		});
	});
});
