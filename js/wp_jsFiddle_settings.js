jQuery(function(){	$=jQuery;	$("#tabSettings tbody").sortable();	$("input:radio[name=fiddle_theme]").on('change', function(){		var settings=$("div#jsf").find('iframe').attr('src').split('embedded');		if($(this).val()=='light')			$("div#jsf").find('iframe')			.attr('src', 'http://jsfiddle.net/heera/VStJ5/9/embedded'+settings[1].replace('presentation', 'light'));		else			$("div#jsf").find('iframe')			.attr('src', 'http://jsfiddle.net/heera/VStJ5/9/embedded'+settings[1].replace('light', 'presentation'));	});});