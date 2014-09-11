
//------------------------//
// Default Sprach-Strings //
//------------------------//	

var lang = new Array();

// BB-Code User-Input
lang['bb']        = new Array();
lang['bb']['img'] = "Please paste the link to your image here:\n[IMG]xxx[/IMG]";

// MailTo-Link User-Input
lang['mail']             = new Array();
lang['mail']['linkname'] = "Please type in the linktext - example: \"Max Mustermann\" (optional)";
lang['mail']['email']    = "Please type in the email address:";

// Link (URL) User-Input
lang['link']             = new Array();
lang['link']['linkname'] = "Please type in the linktext - example: \"My Cookbook\" (optional)";
lang['link']['url']      = "Please type in the address:";


//+---------------+//
//                 //
//  INSTANZIERUNG  //
//                 //
//+---------------+//

/*
 * Instanzierung der 'Klasse' BB_Code
 */
function BB_Code ( form, field ) {
	
	// Formular und Eingabefeld
	this.form  = form;
	this.field = field;
	this.lang  = lang;

}


//+------------------+//
//                    //
//  TEXT HINZUFUEGEN  //
//                    //
//+------------------+//

/*
 * Smilie- & Link-Funktion
 *
 * Setzt einen Smilie / Link / Text in ein Textfeld ein und ergaenzt den Text davor und / oder danach
 * um ein Leerzeichen, falls notwendig, damit der Code von der BB-Code klasse sauber
 * umgesetzt wird.
 */
BB_Code.prototype.addText = function ( add_text ) {

	// Zugriff auf das Input-Feld vereinfachen
	this.input = eval('document.'+this.form+'.'+this.field);
	
	// Focus auf das Eingabefeld setzen
	this.input.focus();
	
	//-------------------//
	// Internet Explorer //
	//-------------------//	
	if ( typeof document.selection != 'undefined' ) {
		
		// Cursorposition ermitteln
		var range = document.selection.createRange();		

		// Smilie-Code an dieser Position einfuegen
		range.text += ' '+add_text+' ';
				
	}
	//-------------------------------------//
	// Other Browsers (Correct JavaScript) //
	//-------------------------------------//
	else {
		
		// Position des Cursors festlegen
		var start = this.input.selectionStart;
  	var end   = this.input.selectionEnd;
  	
  	// Wenn das Zeichen vor dem Cursor kein Leerzeichen ist, den
  	// Smilie-Code um ein fuehrendes Leerzeichen ergaenzen
  	if ( this.input.value.substr(start-1, 1) != ' ' ) {
  		add_text = ' '+add_text;
  	}

  	// Wenn das Zeichen nach dem Cursor kein Leerzeichen ist, den
  	// Smilie-Code um ein nachfolgendes Leerzeichen ergaenzen
  	if ( this.input.value.substr(end, 1) != ' ' ) {
  		add_text += ' ';
  	}
  	 	
  	// Smilie-Code an der Cursor-Position einfuegen  	
  	this.input.value = this.input.value.substr(0, start) + add_text + this.input.value.substr(end);
  	
  	// Cursor-Position hinter den eingefuegten Code setzen
  	var new_pos = start + add_text.length;
  	this.input.setSelectionRange(new_pos, new_pos);
		
	}
	
	// Fokus erneut setzen
	this.input.focus();

}


//+----------+//
//            //
//  BB-CODES  //
//            //
//+----------+//

/*
 * BB-Codes (bold, italic, underline, etc.)
 *
 * Setzt einen Markierten Textausschnitt in BB-Tags.
 */
BB_Code.prototype.bb = function ( bb_code ) {

	// Zugriff auf das Input-Feld vereinfachen
	this.input = eval('document.'+this.form+'.'+this.field);
	
	// Focus auf das Eingabefeld setzen
	this.input.focus();
	
	// Tags definieren
	var sTag = '['+bb_code+']';
	var eTag = '[/'+bb_code+']';

	//~~~~~~~~~~~~~~~~~~~//
	// Internet Explorer //
	//~~~~~~~~~~~~~~~~~~~//
	
  if( typeof document.selection != 'undefined' )
	{
		//----------------//
		// Bild einfuegen //
		//----------------//
		if ( bb_code == 'IMG' ) {
  		
	    var range         = document.selection.createRange();
	    var selected_text = range.text;
	    
	    // Wenn ein Textausschnitt innerhalb des Eingabefeldes selektiert ist,
	    // diesen als Bild-URL verwenden
	    if ( selected_text.length != 0 ) {
	    
	    	// BB-Code einfuegen
	    	range.text  = sTag + selected_text + eTag;
	    	
				// Cursor hinter den eingefuegten Text setzen
				range.select();
	    	
	    }
	    // Andernfalls Bild-URL beim User abfragen
			else {
			
	  		// Abfrage der Bild-URL per Eingabefenster
	  		var img_url = prompt(this.lang['bb']['img'], "http://");	
			
				// Wenn eine Bild-URL uebergeben wurde, den BB-Code einfuegen
				if ( img_url != '' && img_url != 'http://' && img_url != null ) {
				
					// BB-Code einfuegen
					range.text  = sTag + img_url + eTag;

					// Cursor hinter den eingefuegten Text setzen
				  var range = document.selection.createRange();
					range.select();
				
				}
			
	    }
	    
		}
		//----------------------//
		// Code / Tag einfuegen //
		//----------------------//
  	else {
  		
	    var range         = document.selection.createRange();
	    var selected_text = range.text;
	    
	    range.text  = sTag + selected_text + eTag;
			
			// BB-Code einfuegen
			if (selected_text.length == 0)
			{
			  var range = document.selection.createRange();
				range.move('character', -eTag.length);
				range.select();
			}
			
		}
		
  }
  
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	// Gecko-basierte Browser (Firefox & Co.) //
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	
  else if( typeof this.input.selectionStart != 'undefined' )
  {
		//----------------//
		// Bild einfuegen //
		//----------------//
  	if (bb_code == 'IMG') {
  		
	    var posStart      = this.input.selectionStart;
	    var posEnd        = this.input.selectionEnd;
	    var selected_text = this.input.value.substring(posStart, posEnd);
  		
	    // Wenn ein Textausschnitt innerhalb des Eingabefeldes selektiert ist,
	    // diesen als Bild-URL verwenden
	    if ( selected_text.length != 0 ) {
			
			    // BB-Code einfuegen
			    this.input.value = this.input.value.substr(0, posStart) + sTag + selected_text + eTag + this.input.value.substr(posEnd);

	    } else {
	    
				// Abfrage der Bild-URL per Eingabefenster    
	  		var img_url = prompt(this.lang['bb']['img'], "http://");
	  		
				if ( img_url != '' && img_url != "http://" && img_url != null ) {
					
			    // BB-Code einfuegen
			    this.input.value = this.input.value.substr(0, posStart) + sTag + img_url + eTag + this.input.value.substr(posEnd);

				}
	    
	    }
	    
	    // Cursorposition neu setzen
	    if ( selected_text.length != 0 ) {
	    	
				this.input.selectionStart = posStart;
	    	this.input.selectionEnd   = posStart+sTag.length+selected_text.length+eTag.length;
	    	
	    } else {
	    	
				this.input.selectionStart = posStart+sTag.length+img_url.length+eTag.length;
	    	this.input.selectionEnd   = posStart+sTag.length+img_url.length+eTag.length;
    		
	    }

  	}
		//----------------------//
		// Code / Tag einfuegen //
		//----------------------//
  	else {
  		
	    /* Einfuegen des Formatierungscodes */
	    var start        = this.input.selectionStart;
	    var end          = this.input.selectionEnd;
	    var insText      = this.input.value.substring(start, end);
	    this.input.value = this.input.value.substr(0, start) + sTag + insText + eTag + this.input.value.substr(end);
	    
	    /* Anpassen der Cursorposition */
	    if ( insText.length == 0 ) {
	    	
	    	var posStart = start+sTag.length;
	    	var posEnd   = start+sTag.length;
	    	
	    } else {
	    	
				if ( start > 0 ) { var posStart = start; }
	    	else { var posStart = 0; }
	    	
    		var posEnd = posStart+sTag.length+insText.length+eTag.length;
    		
	    }
	    this.input.setSelectionRange(posStart, posEnd);
  	}
  }
	
}


//+--------------------------------------------------+//
//                                                    //
//  TEXT-FORMATIERUNGEN (FARBE, SCHRIFTART, GROESSE)  //
//                                                    //
//+--------------------------------------------------+//

/*
 * Text-Formatierungen (Farbe, Schriftart, Schriftgroesse, etc.)
 *
 * Setzt einen Markierten Textausschnitt in BB-Tags, die einen Wert
 * enthalten ( z.B. [COLOR=green]gruener Text[/COLOR] ).
 */
BB_Code.prototype.format = function ( tag, value ) {

	// Zugriff auf das Input-Feld vereinfachen
	this.input = eval('document.'+this.form+'.'+this.field);
	
	// Focus auf das Eingabefeld setzen
	this.input.focus();
	
	// Tags definieren
	var sTag = '['+tag+'='+value+']';
	var eTag = '[/'+tag+']';

	//~~~~~~~~~~~~~~~~~~~//
	// Internet Explorer //
	//~~~~~~~~~~~~~~~~~~~//
	
  if( typeof document.selection != 'undefined' )
	{
		
    /* Einfuegen des Formatierungscodes */
    var range   = document.selection.createRange();
    var insText = range.text;
    range.text  = sTag + insText + eTag;
		
		if (insText.length == 0)
		{
		  var range = document.selection.createRange();
			range.move('character', -eTag.length);
			range.select();
		}
		
  }
  
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	// Gecko-basierte Browser (Firefox & Co.) //
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	
  else if( typeof this.input.selectionStart != 'undefined' )
  {
  		
    /* Einfuegen des Formatierungscodes */
    var start        = this.input.selectionStart;
    var end          = this.input.selectionEnd;
    var insText      = this.input.value.substring(start, end);
    this.input.value = this.input.value.substr(0, start) + sTag + insText + eTag + this.input.value.substr(end);
    
    /* Anpassen der Cursorposition */
    if ( insText.length == 0 ) {
    	
    	var posStart = start+sTag.length;
    	var posEnd   = start+sTag.length;
    	
    } else {
    	
			if ( start > 0 ) { var posStart = start; }
    	else { var posStart = 0; }
    	
  		var posEnd = posStart+sTag.length+insText.length+eTag.length;
  		
    }
    this.input.selectionStart = posStart;
    this.input.selectionEnd   = posEnd;
    
  }
	
}


//+---------------------------+//
//                             //
//  MailTo-Link (E-MAIL-LINK)  //
//                             //
//+---------------------------+//

BB_Code.prototype.mail = function( tag_name ) {
	
	var linktext = prompt(this.lang['mail']['linkname'], '');
	
	if ( linktext != null ) {
		
		var email    = prompt(this.lang['mail']['email'], '');
		
		if ( linktext == '' ) { linktext = email; }
		
		if ((email != null) && (email != '')) {
		
			add_text = "["+tag_name+"="+email+"]"+linktext+"[/"+tag_name+"] ";
	   	this.addText( add_text );
			
		} else {
		
			// Fokus auf das Eingabefeld zurücksetzen
			this.input = eval('document.'+this.form+'.'+this.field);
			this.input.focus();
			
		}
		
	}
}


//+------------+//
//              //
//  LINK (URL)  //
//              //
//+------------+//

BB_Code.prototype.link = function( tag_name ) {
	
	var linktext = prompt(this.lang['link']['linkname'], '');
	
	if ( linktext != null ) {

		var link     = prompt(this.lang['link']['url'], 'http://');
		
		if ((link != null) && (link != '') && (link != 'http://')) {
		
			if ( linktext == '' ) { linktext = link; }
		
			add_text = "["+tag_name+"="+link+"]"+linktext+"[/"+tag_name+"] ";
	   	this.addText( add_text );
			
		} else {
		
			// Fokus auf das Eingabefeld zurücksetzen
			this.input = eval('document.'+this.form+'.'+this.field);
			this.input.focus();
			
		}
	
	}
	
}