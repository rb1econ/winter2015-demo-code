var utils = (function(){


    var postCallback = function(data){
        console.log(data)
        feedItems.push(data.title + ' : ' + data.author)
        render(feedItems)
    }
    var submitCallback = function(event){
        event.preventDefault()
        $.post('/post-data', {title : $('.title-input').val(), author: $('.author-input').val()}, postCallback )
    }
    var feedItems = [];
    var render = function(items){
        $('.feedItems').empty()
        for ( var i=0; i<items.length; i++ ){
            $('.feedItems').append('<p>' + items[i] + '</p>')
        }
    }

    return {
        postCallback   : postCallback,
        submitCallback : submitCallback,
        feedItems      : feedItems,
        // render         : render
    }

})()    