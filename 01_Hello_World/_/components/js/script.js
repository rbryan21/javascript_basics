"use strict";
document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('tiffany').addEventListener('click', function(event) {
		$('#tiffany').popover('toggle');
	});

	document.getElementById('story-group').className = 'ready';

	var headerClass = 'story-header',
		contentClass = 'story-content';

	document.getElementById('story-group').addEventListener('click', function(event) {

		var myHeader = event.target;

		if (myHeader.className !== headerClass) {

      if (myHeader.className === headerClass + ' active') {
        deactivateAllTabs();
        return;
      }
      return;
    }
    else if (myHeader.className === headerClass) {

  		var myID = myHeader.id, // e.g. story-header-1
  			contentID = myID.replace('header', 'content'); // result: story-content-1

  		deactivateAllTabs();

  		myHeader.className = headerClass + ' active';
  		document.getElementById(contentID).className = contentClass + ' active';
    }
	});

	function deactivateAllTabs() {
		var storyHeaders = document.getElementsByClassName(headerClass),
			storyContents = document.getElementsByClassName(contentClass);

		for (var i = 0; i < storyHeaders.length; i++) {
			storyHeaders[i].className = headerClass;
			storyContents[i].className = contentClass;
		}
	}
});
