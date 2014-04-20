	/**
	 * Die Funktion ueberprueft, ob die Copyright-Meldung beim Upload 
	 * von mehreren Dateien (z.B. im Forum) bestaetigt wurde
	 * 
	 * @param  string   Attribut 'name' des Formular-Tags
	 * @param  string   Attribut 'id'   der Copyright-Checkbox
	 * @param  string   Fehlermeldung, wenn Datei gewaehlt aber Checkbox nicht selektiert
	 * 
	 * @return boolean  true  = Formular wird abgeschickt
	 *                  false = Formular wird nicht abgeschickt
	 */
	function multipleFilesCopyrightChecked( form_name, copyright_element, error_msg ) {
		
		// Variablen initialisieren
		var file_found = false;
		var formular   = document.getElementsByName(form_name)[0];
		
		// Alle Eingabefelder vom Typ 'file' auf ausgewaehlte Dateien pruefen
		for ( i = 0; i < formular.length; i++ ) {
			
			// Wenn im aktuellen Eingabefeld eine Datei gewaehlt wurde, Fileupload-Flag setzen
			if ( (formular.elements[i].type == 'file') && (formular.elements[i].value != '') ) {
				
				file_found = true;
			}
		}
		
		// Check erfolgreich, wenn keine Datei gewaehlt oder Copyright-Checkbox selektiert
		if ( (file_found == false) || (document.getElementById(copyright_element).checked) ) {
			
			return true;
		}
		
		// Fehlermeldung ausgeben
		window.alert( error_msg );
		
		return false;
	}
	
	/**
	 * Die Funktion ueberprueft, ob die Copyright-Meldung bei einer einzelnen Datei bestaetigt wurde
	 * 
	 * @param  string   Attribut 'name' des Formular-Tags
	 * @param  string   Attribut 'id'   der Copyright-Checkbox
	 * @param  string   Fehlermeldung, wenn Datei gewaehlt aber Checkbox nicht selektiert
	 * 
	 * @return boolean  true  = Formular wird abgeschickt
	 *                  false = Formular wird nicht abgeschickt
	 */
	function singleFileCopyrightChecked( file_id, copyright_check_element, error_msg ) {
		
		// Check erfolgreich, wenn keine Datei gewaehlt oder Copyright-Checkbox selektiert
		if ( (document.getElementById(file_id).value == '') || (document.getElementById(copyright_check_element).checked) ) {
			
			return true;
		}
		
		// Fehlermeldung ausgeben
		window.alert( error_msg );
		
		return false;
	}
	