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
	var closeFeedback = document.querySelector(".modal-content__close");
	var feedbackWindow = document.querySelector(".modal-content");
	var overlay = document.querySelector(".modal-overlay");

	new Popup(openFeedback, closeFeedback, feedbackWindow);
	new Popup(openFeedback, closeFeedback, overlay);

	overlay.addEventListener("click", function(event){
		event.preventDefault();
		overlay.classList.remove("js-show");
		feedbackWindow.classList.remove("js-show");
	})

	window.addEventListener("keydown", function(event){
		if(event.keyCode === 27){
			event.preventDefault();

			if(feedbackWindow.classList.contains("js-show")){
				feedbackWindow.classList.remove("js-show");
				overlay.classList.remove("js-show");
			}
		}
	});


}());