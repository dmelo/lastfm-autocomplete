(function ($) {
    'use strict';

    function handleAutocompleteChoice(e, ui) {
        var d = ui.item;

        if (null !== d) {
            $('#value').html(d.value);
            $('#category').html(d.category);
            $('#artist').html(d.artist);
            $('#musicTitle').html(d.musicTitle);
            $('#label').html('<pre>' + d.label + '</pre>');
            $('#data').html(d.data);
            $('#lastfm').html(JSON.stringify(d.lastfm));
        }
    }

    $(document).ready(function() {
        var acOptions = {
            callback: handleAutocompleteChoice,
            modules: ['artist', 'album', 'track'],
            apiKey: 'KEY'
        };

        $('#search').lfmComplete(acOptions);
    });
}(jQuery));
