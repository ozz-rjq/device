;(function(){

	function Popup(buttonOpen, buttonClose, el){
		buttonOpen.addEventListener("click", function(event){
			event.preventDefault();
			if(!el.classList.contains("js-show")){
				el.classList.add("js-show");
			}
		});

		buttonClose.addEventListener("click", function(event){
			event.preventDefault();
			if(el.classList.contains("js-show")){
				el.classList.remove("js-show");
			}
		});
	}

	var openFeedback = document.querySelector(".js-open-modal");
	var openMap = document.querySelector(".js-open-map");

	var closeFeedback = document.querySelector(
		".modal-content__close--popup"
	);
	var closeMap = document.querySelector(
		".modal-content__close--map"
	);

	var feedbackWindow = document.querySelector(".modal-content");
	var mapWindow = document.querySelector(".modal-map");
	var overlay = document.querySelector(".modal-overlay");

	new Popup(openFeedback, closeFeedback, feedbackWindow);
	new Popup(openMap, closeMap, mapWindow);
	new Popup(openFeedback, closeFeedback, overlay);
	new Popup(openMap, closeMap, overlay);

	overlay.addEventListener("click", function(event){
		event.preventDefault();
		overlay.classList.remove("js-show");

		if(feedbackWindow.classList.contains("js-show"))
			feedbackWindow.classList.remove("js-show");

		if(mapWindow.classList.contains("js-show"))
			mapWindow.classList.remove("js-show");
	});

	window.addEventListener("keydown", function(event){
		if(event.keyCode === 27){
			event.preventDefault();

			if(feedbackWindow.classList.contains("js-show")){
				feedbackWindow.classList.remove("js-show");
				overlay.classList.remove("js-show");
			}

			if(mapWindow.classList.contains("js-show")){
				mapWindow.classList.remove("js-show");
				overlay.classList.remove("js-show");
			}
		}
	});

}());