var showMoreCaptions = document.getElementsByClassName('show-more');

for (var i = 0; i < showMoreCaptions.length; ++i) {
	showMoreCaptions[i].onclick = function(event) {
  	var eventTarget = event.target;
    eventTarget.style.display = 'none';
    eventTarget.parentElement.querySelector('.service-details').style.display = 'block';
  };
}