/**
 * Import script for the HTML5 Security Cheatsheet HTML version
 */
(function(){
    window.onload = function() {
        // sanitize
        var sanitize = function(input){
            output = input.replace(/&/gm, '&amp;')
                .replace(/</gm, '&lt;').replace(/>/gm, '&gt;');              
            return output;
        };
        // rudimentary off-line support
        (function(){
            var offline = function(){
                var store = JSON.parse(localStorage[location.hostname]);
                items = store.items; 
                categories = store.categories;
                payloads = store.payloads;
                $('#offline').show();
            }; 
            if(navigator.onLine || typeof navigator.onLine === 'undefined') {
            	try {
	                localStorage[location.hostname]=JSON.stringify(
	                    {'items':items,'payloads':payloads,'categories':categories}
	                );
	                $(window).bind('offline', offline);
	                $(window).bind('online', function(){$('#offline').hide()})
	                $('#offline').hide();
	            } catch(e){}
            } else {
                offline();
            }   
        })();        
        // categories
        (function() {
            // enumerate categories and build initial lists
            for(var category in categories) {
                // determine cookie or navigator language or set default
                if (/lang=\w{2}/.test(document.cookie)) {
                    var lang = document.cookie.match(/lang=(\w{2})/)[1];
                }
                else {
					var userLang = navigator.language||navigator.browserLanguage;
                    var lang = userLang ? userLang.match(/(\w{2})/)[1] : 'en';
                }
                if(typeof categories[category][lang] === 'undefined' 
                    || !categories[category][lang]) {
                    lang = 'en';
                }
                // check if translated items exist
                if (typeof categories[category][lang] === 'string') {
                    $('#content').append('<li id="' + category + '"><h3>' 
                        + categories[category][lang] + '</h3></li>');
                    $('#sidebar').append('<li><a href="#' + category + '">' 
                        + categories[category][lang] + '</a></li>');
                }
            }
            $('#content li').wrap('<ul/>');
            $('#sidebar li').wrap('<ul/>');
        })();
        // content
        (function() {
            for (var item in items) {
                // replace the payload templates
                for (var payload in payloads) {
                    var regex = new RegExp('%' + payload + '%', 'gm');
                    items[item].data = items[item].data.replace(regex, payloads[payload]);
                    if(items[item].attachment && items[item].attachment.raw) {
                        items[item].attachment.raw = items[item].attachment
                            .raw.replace(regex, payloads[payload]);                        
                    }
                }
                // build markup container for the content
                var li = $('#content li#'+items[item].category+' h3');
                var container = $($('#item_template').html());
                
                // enable direct vector navi by id
                container.prepend('<a name="'+items[item].id+'"></a>');
                for(var c in items[item]) {
                    // determine cookie or navigator language or set default
                    if (/lang=\w{2}/.test(document.cookie)) {
                        var lang = document.cookie.match(/lang=(\w{2})/)[1];
                    }
                    else {
                        var userLang = navigator.language||navigator.browserLanguage;
                        var lang = userLang ? userLang.match(/(\w{2})/)[1] : 'en';
                    }
                    if(typeof items[item][c][lang] === 'undefined' 
                        || !items[item][c][lang]) {
                        lang = 'en';
                    }
                    // check if translated items exist
                    if(typeof items[item][c][lang] === 'string') {
                        container.find('.'+c).html(sanitize(items[item][c][lang]));
                        if(c === 'name'){
                            container.find('.'+c).append('<a href="#'+items[item]['id']
                                +'">#'+items[item]['id']+'</a>');
                            container.find('.'+c).append('<a target="_blank" href="test/#'+items[item]['id']
                                +'">test</a>')                                
                        }
                    } else if(typeof items[item][c] === 'string') {
                        container.find('.'+c).html(sanitize(items[item][c]));   
                    }
                }
                // check for attachment data
                if(items[item].attachment) {
                    container.find('.attachment').show()
                        .append(sanitize(items[item].attachment.raw));
                    for(var meta in items[item].attachment) {
                        if(meta !== 'raw' && meta !== 'path' && items[item].attachment[meta]) {
                            container.find('.attachment').append(
                                '<span class="mime">'+meta+': '+sanitize(items[item]
                                    .attachment[meta])+'</span>'
                            );
                        } else if(meta === 'path' && items[item].attachment[meta]) {
                            container.find('.attachment').append(
                                '<span class="mime">'+meta+': <a href="'
                                    + sanitize(items[item].attachment[meta])
                                    + '" target="_blank">'
                                    + sanitize(items[item].attachment[meta])
                                + '</a></span>'
                            );                            
                        }
                    }
                } else {
                    container.find('.attachment').remove();
                }
                // fill browser list
                if(items[item].browsers) {
                    for(var browser in items[item].browsers) {
                         container.find('.browsers').append('<ul class="'+browser+'" />');
                         var versions = items[item].browsers[browser];
                         for(var i in versions) {
                             if(versions[i] == 'end') continue;
                             var short_browser = browser.replace(/^(\w+)\s\w+/, '$1'); 
                             container.find('.browsers .'+short_browser).append(
                                 (versions[+i + 1] == 'end' ? '<li class="end">' : '<li>') 
                                 + browser + ' ' + versions[i] + '</li>'    
                             )
                            
                        }
                    }
                    container.find('.browsers').append('<span class="clear"></span>');
                }   
                // fill tag list
                if(items[item].tags) {
                    for(var tag in items[item].tags) {
                        container.find('.tags')
                            .append('<li>'+items[item].tags[tag]+'</li>');
                    } 
                    container.find('.tags')
                        .append('<span class="clear"></span>');
                }   
                // fill url list
                if(items[item].urls) {
                    for(var url in items[item].urls) {
                        container.find('.urls').append(
                            '<li><a href="'+items[item].urls[url]
                                // internal url in same tab
                                + (items[item].urls[url].charAt(0)=='#'
                                      ?'">'
                                      :'" target="_blank">')
                                + items[item].urls[url]+'</a></li>'
                        );
                    } 
                } 
                li.parent().append(container);
            }
            // enable direct jumps via hash url
            if(location.hash && location.hash.match(/^#\w+$/)) {
                location=location.hash;
            }
        })();
        // search functionality
        (function(){
            $('ul.tags li, ul.browsers li').live('click', function(){
                $('#search').attr('value', $(this).html()).keyup();        
            });
            $('#search').live('keyup', function(){
                var term = $('#search').attr('value');
                term = sanitize(term.replace(/([\[\]\(\\)\{\}\+\-])/gm, '\\$1'));
                if(term) {
                    if(typeof to !== 'undefined') {
                        clearTimeout(to);
                    }
                    to = setTimeout(function(){
                        $('div.item').each(function(){
                            if($(this).html().match(new RegExp(term, 'gim'))) {
                                $(this).show();
                                $(document).scrollTop(
                                    $('div.item:visible').first().attr('scrollHeight')
                                );                            
                            } else {$(this).hide()}
                        });                        
                    }, 500);
                    
                } else {$('div.item').show()}
            });
            $('#search').live('dblclick', function(){
                $(this).attr('value', '').keyup();
            }); 
            $('#sidebar a').live('click', function(){
                $('#search').attr('value', '').keyup();
            }); 
            // enable direct jumps via hash url
            if(location.search) {
                var search = unescape(location.search.replace(/^\?/, ''));
                $('#search').attr('value', search).keyup();
            }
        })();
        // language switch
        (function(){
            $('#languages a').live('click', function(){
                document.cookie='lang='+$(this).attr('rel');
            });
        })();
    };
    /**
     * Export all vectors for brute-force XSS Tests
     */
    window.vectors = function(){
    	for(i in items){
    		i = parseInt(i, 10);
    		var vector = items[i].data;
    		vector = vector.replace(/(?:alert|write)\(1\)/gim, 'alert('+(i+1)+')');
			console.log('<div id="'+(i+1)+'">'+vector+'//["\'`-->]]>]</div>');
    	}
    }
})();
