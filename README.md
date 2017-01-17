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
after those. 

```html
<script type="text/javascript" src="bower_components/jquery/dist/jquery.js"></script>
<script type="text/javascript" src="bower_components/jquery-ui/jquery-ui.js"></script>
<script type="text/javascript" src="lastfm-autocomplete.js"></script>
```

After that, assembly and object that specifies `callback`, `modules` and
`apiKey` (given by Last.fm). Pass that object to lfmComplete.

```js
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
```

You can also use `lastfm-autocomplete.css` to fix the layout.

Example
-------

Access the [online demo](http://lastfm-autocomplete.amuzi.me/) or
download/clone the project and point your browser to `index.html`. Don't forget
to change the apiKey var inside the `exemple.js` file. Follow the instructions
on [Last.fm/api](http://www.last.fm/api) to get your Last.fm API key.


Sites using
-----------

- [Amuzi](http://amuzi.me).

License
-------

MIT c 2016 [Diogo Oliveira de Melo](http://diogomelo.net).
