(function($){
    $('#tweets').html('loading tweets...');
        
    // Ajax JSON request
    $.getJSON(
        // Use a JSONP (with callback) URL
      'http://twitter.com/status/user_timeline/ozh.json?count=5 & callback=?',
        
        // Function that will handle the JSON response
        function(data) {
            // Put empty <ul> in the placeholder
            $('#tweets').html('<ul></ul>');
            // Read each object in the JSON response
            $(data).each(function(i, tweet) {
                $('#tweets ul').append('<li>'+tweet.text+'</li>');
            });
        }
    );
})(jQuery)