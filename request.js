window.onload =function() {

	word =document.getElementsByTagName('input')[0];
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
	var url = "request.php?q="+word.value;
	httprequest.onreadystatechange = search;
	httprequest.open("GET", url);
	httprequest.send();
}
function search() {
	var output =document.getElementById('result');
	if (httprequest.readyState === XMLHttpRequest.DONE) {
		if (httprequest.status === 200) {
		 	meaning = httprequest.responseText;
		 	if (meaning.length <500) {
		 		output.innerHTML ='<h3> Result </h3>'+meaning;
			}
			else {
				meaning = output.innerHTML = 'word not found';
			}
		}
	}
}
}