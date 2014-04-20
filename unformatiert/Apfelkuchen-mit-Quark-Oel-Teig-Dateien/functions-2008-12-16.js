//+------------------------+//
// GLOBALE SKRIPT VARIABLEN //
//+------------------------+//

	var contentWidth = 804;		// Breite des Seiteninhaltes in px


//+------------------------+//
// DIREKTE FUNKTIONSAUFRUFE //
//+------------------------+//

	moveLayer('SkyScraper');


//+---------------------+//
// ALLGEMEINE FUNKTIONEN //
//+---------------------+//

	/**
	 *
	 * Pruefung ob eine Variable gesetzt ist
	 * Liefert true oder false zurueck  
	 *
	 * @author  Dominik Hanke
	 * @date    15.06.2007
	 * 
	 * @param   string    variable   Name der Variablen (im Aufruf in '' zu schreiben)    
	 */  
	variableIsDefined = function(variable){ 
		return this[variable] === undefined ? false : true;
	};


	// FUNKTION: POPUPFENSTER
	function go(makierung)
		 {   var auswahl = makierung.options[makierung.selectedIndex].value;
	         if (auswahl != "")  { window.open( auswahl,'_top') } }
	
		var new_open = '';
		function go_now(){ 	if(new_open != '') 	{ if(!(new_open.closed)) { 	new_open.close(); }}}
		function open_window(page,winname,option){	
			if (!(new_open)){ new_open = window.open(page,winname,option); 	new_open.focus();}
			else{ if (new_open.closed){	new_open = window.open(page,winname,option);new_open.focus();}
			else{ new_open.focus();	}}}
	
	function toggle(target)
		{
		obj=document.getElementById(target);
		obj.style.display=( (obj.style.display=='none') ? '' : 'none');
		}
	
	
	function IE(){
		var detect = navigator.userAgent.toLowerCase();
		Ergebnis = detect.match('msie');
		if(Ergebnis){
			return true;
		}
		else {
			return false;
		}
	}
	
	function getPosition(element)
	{
		if (elem)
		{
		  var elem=element,tagname="",x=0,y=0;
		  div_count=0;
		  while ((typeof(elem)=="object")&&(typeof(elem.tagName)!="undefined"))
		  { 
		  
		  tagname=elem.tagName.toUpperCase();
		
		    y+=elem.offsetTop;
		    x+=elem.offsetLeft;
			//alert(tagname+"  "+elem.offsetLeft+" "+elem.offsetTop)
		
		    if (tagname=="BODY")
		      elem=0;
		
		    if (typeof(elem)=="object")
		      if (typeof(elem.offsetParent)=="object")
		        elem=elem.offsetParent;
		  }
		
		  position=new Object();
		  position.x=x;
		  position.y=y;
		  return position;
		}
		else
		{
			return 0;
		}
	}
	
	
	/*
	 * Beim Click auf eine Zeile der Rezeptausgabe (Rezeptsuche, Profil, etc.)
	 * nur dann ein Fenster öffnen, wenn nicht [strg] oder [shift] gedrückt ist  
	 */ 
	function rowClick(clickEvent,Link)
	{
		var browser = navigator.userAgent;
		if ( browser.indexOf("Gecko")>=0 )
		{ var ns = true; var ie = false; }
		else
		{ var ie = true; var ns = false; };
	
		var openAllowed = false;
	
		if (ns)
		{
			if (clickEvent.target == '[object HTMLTableCellElement]' && (clickEvent.shiftKey == true || clickEvent.ctrlKey == true))
			{ window.open(Link,'neu'); }
			else if (clickEvent.target == '[object HTMLTableCellElement]')
			{ openAllowed = true; }
			// clickEvent.metaKey => Apple bzw WindowsTaste !!!
			else if (clickEvent.shiftKey == true || clickEvent.ctrlKey == true || clickEvent.metaKey == true)
			{ openAllowed = false; }
			else
			{ openAllowed = true; }
		}
		else
		{
			if (clickEvent.srcElement.nodeName == 'TD' && (clickEvent.shiftKey == true || clickEvent.ctrlKey == true))
			{ window.open(Link,'neu','dependent=no,hotkeys=yes,location=yes,menubar=yes,resizable=yes,scrollbars=yes,status=yes,toolbar=yes'); }
			else if (clickEvent.srcElement.nodeName == 'TD')
			{ openAllowed = true; }
			else if (clickEvent.shiftKey == true || clickEvent.ctrlKey == true)
			{ openAllowed = false; }
			else
			{ openAllowed = true; }
		}
	
		if (openAllowed == true)
		{	window.location.href=Link; }
	}
	
/**
 * Gibt die Hoehe des HTML-Dokumentes, oder wenn diese kleiner ist, des Browser-Innenraumes
 * zurueck. Damit ist es moeglich Overlay-Effekte (wie z.B. die Abdunklung der Seite mittels
 * PNG-Layer) so anzulegen, dass sie ohne Scroll-Effekte (Flackern) sind.
 * 
 * @return  int  document height / client height
 */
function getDocHeight() {
	
    var D = document;
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
}

//+-------------------------------+//
// LOGIN - FUNKTIONEN //
//+-------------------------------+//

// Blendet das Login-Formular ein
function showLoginForm(){
	if (document.getElementById("login_form")) {
		var displayStatus = document.getElementById("login_form").style.display;
		
		if (displayStatus == '' || displayStatus == 'none'){
			document.getElementById("login_form").style.display = 'block';
			document.loginform.username.focus();
		}
		else{
			document.getElementById("login_form").style.display = 'none';
		}
	}
}

// Blendet das Login-Formular aus
function hideLoginForm( event ) {

	// Browser-Erkennung
	var browser = navigator.userAgent;
	if ( browser.indexOf("Gecko")>=0 || browser.indexOf("Opera")>=0 ){ var ns = true; var ie = false; }
	else{ var ie = true; var ns = false; };
	
	var ids = new Array('mychefkoch_login', 'login_form', 'login_username', 'login_password', 'login_alltime', 'alltimelogin');
	
	// Netscape und Gecko-basierte Browser
	if ( ns ) {
		var check_values = new Array(event.target.id, event.target.name, event.target.parentNode.id, event.target.parentNode.name);
	}
	// Internet Explorer
	else {
		var check_values = new Array(event.srcElement.attributes.id.value);
	}
	    
	var match = 0;
	
	for ( var i = 0; i < check_values.length; i++ ) {
		
		this_check_value = check_values[i];
		
		for ( var x = 0; x < ids.length; x++ ) {
			
			if ( ids[x] == this_check_value ) {
				match = 1;
			}
			
		}
		
	}

	if ( match == 0 && document.getElementById("login_form") ) {
		document.getElementById("login_form").style.display = 'none';
	}
	
}


//+---------------------+//
// WERBUNGS - FUNKTIONEN //
//+---------------------+//

	/*
	 * Skyscraper-Banner mit der Seite scrollen
	 */ 
	var refreshTime  = 50;
	var topPosition  = -1;
	var scrollMemory = 0;
	
	function moveLayer(layer_id){
		if (document.getElementById(layer_id)){
			if (topPosition == -1){
				var layer_top = document.getElementById(layer_id).offsetTop;
				topPosition = layer_top;
			}
		
			var windowWidth  = window.innerWidth;
			var windowHeight = window.innerHeight;
	
			if(document.body.scrollTop){ var scrollTop = document.body.scrollTop; }
			else{ var scrollTop = window.pageYOffset; }
			
			if (scrollTop == null || scrollTop == 'undefined'){ var scrollTop = 0; }
	
			if (scrollMemory < scrollTop && scrollTop > 108)
			{
				var positionNew = scrollTop+topPosition-108;				
				document.getElementById(layer_id).style.top = positionNew;
				scrollMemory = scrollTop;
			}		
			else if (scrollMemory > scrollTop)
			{
				var positionNew = scrollTop+topPosition-108;
				if (positionNew < 108)
				{ positionNew = 108; }				
				document.getElementById(layer_id).style.top = positionNew;
				scrollMemory = scrollTop;
			}
		}
		window.setTimeout("moveLayer('"+layer_id+"');",refreshTime);
	}


//+-----------------------+//
// AJAX / USER-INTERAKTION //
//+-----------------------+//

	/**
	 * 
	 * Verdunkelt den Hintergrund und generiert eine vertikal zentrierte Box
	 * die horizontal innerhalb der Seitenbreite des CK zentriert ist
	 * 
	 * Der Inhalt kann wahlweise über eine Variable übergeben werden oder
	 * direkt im DIV-Container stehen
	 *
	 * @author	Dominik Hanke
	 * @date		27.03.2007
	 * 
	 * @param   int     $timeout     Zeit in Sekunden, nach der die Box ausgeblendet werden soll (0 = nie) 
	 * @param		str			$content     Inhalt der in die Box geschrieben werden soll
	 */
	function overlayBox(width,height,timeout,content)
	{
		//------------------------------//
		// Check der globalen Variablen //
		//------------------------------//
		
		if ( contentWidth == null || contentWidth == 0 ) {
			window.alert("Die globale Variable 'contentWidth' ist nicht gesetzt oder enthält einen ungültigen Wert !"); 
		} else {
	
			//---------------//
			// Browser-Check //
			//---------------//
			
			var browser = navigator.userAgent;
			if ( browser.indexOf("Gecko")>=0 || browser.indexOf("Opera")>=0 ){ var ns = true; var ie = false; }
			else{ var ie = true; var ns = false; };
		
			//-------------------------------------------//
			// innere Höhe des Browserfensters ermitteln //
			//-------------------------------------------//
			
		  var browserHeight = 0;
		  if( typeof( window.innerWidth ) == 'number' ) {
		    //Non-IE
		    browserHeight = window.innerHeight;
		  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		    //IE 6+ in 'standards compliant mode'
		    browserHeight = document.documentElement.clientHeight;
		  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		    //IE 4 compatible
		    browserHeight = document.body.clientHeight;
		  }
		  
			//---------------------------------------//
			// Scrollposition des Browsers ermitteln //
			//---------------------------------------//
			
			var scrollTop;
		
			if (self.pageYOffset) {
				scrollTop = self.pageYOffset;
			} else if (document.documentElement && document.documentElement.scrollTop){	 // Explorer 6 Strict
				scrollTop = document.documentElement.scrollTop;
			} else if (document.body) {// all other Explorers
				scrollTop = document.body.scrollTop;
			}
		
			//-----------------------------------------------//
			// Ggf. Abdunklungs-Layer in die Seite schreiben //
			//-----------------------------------------------//
		
			if ( !document.getElementById("overlayBoxDarken") ) {
			
				var objBody        = document.getElementsByTagName("body").item(0);
				var documentHeight = getDocHeight();
				var overlayDarken  = document.createElement("div");
						overlayDarken.setAttribute('id',    'overlayBoxDarken');
				    overlayDarken.style.position    = 'absolute';
				    overlayDarken.style.top         = '0';
				    overlayDarken.style.left        = '0';
				    overlayDarken.style.zIndex      = '390';
			 	    overlayDarken.style.width       = '100%';
			 	    overlayDarken.style.height      = documentHeight;
			 	    overlayDarken.style.fontSize    = '12px';
			 	    overlayDarken.style.zIndex      = 11000;
			 	    
				if ( ns ) {
					overlayDarken.style.backgroundImage  = 'url(/img/overlay_darken.png)';
			 	}
			 	    
				objBody.insertBefore(overlayDarken, objBody.firstChild);	
			} else {
				document.getElementById("overlayBoxDarken").style.display = 'block';
			}
		
			//------------------------------------------------//
			// Ggf. Inhalt der Box aus der Variable schreiben //
			//------------------------------------------------//
			
			if ( content != null && content != 'undefined' && content != '') {
				document.getElementById("overlayBox").innerHTML = content;
			}
		
			//-----------------------------------//
			// Position der overlayBox berechnen //
			//-----------------------------------//
			
			var positionTop  = (browserHeight/2)-(height/2)+(scrollTop);
			var positionLeft = (contentWidth/2)-(width/2);			
		
			//------------------------------------//
			// Positionierung und Ausgabe der Box //
			//------------------------------------//
			
			var overlayBox = document.getElementById("overlayBox");
			
			overlayBox.style.width      = width;
			overlayBox.style.height     = height;
			overlayBox.style.top        = positionTop;
			overlayBox.style.left       = positionLeft;
			overlayBox.style.display    = 'block';
			overlayBox.style.zIndex     = 11001;
			
			//--------------------------------//
			// Timeout prüfen und ggf. setzen //
			//--------------------------------//
			
			if ( timeout != null && timeout != 0 ) {
				var timeoutSec = timeout*1000;
				window.setTimeout("overlayBoxClose();", timeoutSec);
			}
		}
	}
	
	/**
	 * 
	 * Blendet die über die Funktion overlayBox() generierte Box wieder
	 * aus und gibt den Seiteninhalt wieder frei
	 *
	 * @author	Dominik Hanke
	 * @date		27.03.2007
	 */
	function overlayBoxClose()
	{
		if ( document.getElementById("overlayBoxDarken") ) {
			document.getElementById("overlayBoxDarken").style.display = 'none';
		}
	
		if ( document.getElementById("overlayBox") ) {
			document.getElementById("overlayBox").style.display = 'none';
		}
	}

	function ad_banner_show( element_source, element_target ) {
		
		if ( document.getElementById ) {
			
			var tmpBannerVar = document.getElementById(element_source);
			var destBanner   = document.getElementById(element_target);
			
			if ( tmpBannerVar && destBanner ) {
				
				while ((tmpBannerChild = tmpBannerVar.firstChild)) {
					
					if ((navigator.userAgent.toLowerCase().indexOf("msie") != -1) && (navigator.userAgent.toLowerCase().indexOf("mac") != -1)) {
						// do nothing
					} else {
						
						if (tmpBannerChild.tagName && tmpBannerChild.tagName.toLowerCase() == "script") {
							
							tmpBannerVar.removeChild(tmpBannerChild);
							
						} else {
							
							destBanner.appendChild(tmpBannerChild);
						}
					}
				}
			}
		}
	}
