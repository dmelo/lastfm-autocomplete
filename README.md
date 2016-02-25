Lastfm-Autocomplete
===================

Provides autocomplete/type ahead feature for [Last.fm](https://last.fm)'s music
related data. It includes three categories: artist, album and track.

Install
-------

Clone the repo or use bower:

    bower install lastfm-autocomplete

How to use it
-------------

This projects depends on jQuery and jQuery.ui . Load the lastfm-autocomplete.js,
after those. After that, assembly and object that specifies `callback`,
`modules` and `apiKey` (given by Last.fm). Pass that object to lfmComplete.

    <script type="text/javascript" src="bower_components/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="bower_components/jquery-ui/jquery-ui.js"></script>
    <script type="text/javascript" src="lastfm-autocomplete.js"></script>
    <script type="text/javascript">
    <!--

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

            $('#search').lfmComplete(acOptions); // '#search' is the input element.
        });
       
    -->
    </script>



Example
-------

Download/clone the project and point your browser to example.html and place
your apiKey on 'KEY', inside exemple.js file.

Sites using
-----------

- [Amuzi](http://amuzi.me).
