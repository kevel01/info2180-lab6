window.onload =function() {
	button =document.getElementsByTagName('input')[1];
	button.onclick =function() {
		connector(); 
		searchMeaning();
	}
function connector() {
	if (window.XMLHttpRequest) 
		httprequest =new XMLHttpRequest();
	else 
		httprequest =new ActiveXObject('Microsoft.XMLHTTP');
}
function searchMeaning() {
	var url = "request.php?q=definition";
	httprequest.onreadystatechange = search;
	httprequest.open("GET", url);
	httprequest.send();
}
function search() {
	if (httprequest.readyState === XMLHttpRequest.DONE) {
		if (httprequest.status === 200) {
		 	meaning = httprequest.responseText;
		 	alert(meaning);
		}
		else 
			meaning ='There was a problem with the request, could not get definition';
	}
}
}