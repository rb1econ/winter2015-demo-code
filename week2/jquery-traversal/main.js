$(document).on('ready', function() {
  
  // Listen for clicks on our purchase buttons
  $('.btn-purchase').on('click', function(){

    // Explorations into parent()
    /*var currentAction = $(this);
    var actionParent = currentAction.parent();
    var actionContainerParent = actionParent.parent();
    console.log(actionContainerParent);*/

    /*var product = $(this).parent().parent();
    var h2 = product.find('h2');

    console.log( h2.text() );*/

    // Closest doesn't require as many tight restraints
    // or couplings to our html as parent would.
    var product = $(this).closest('.product');
    var h2 = product.find('h2');
    console.log( h2.text() );

    // console.log( product.children('p') );
    // console.log( $(this).siblings() );
    // console.log( $(this).parent().parent('.featured') );
  });

  // Each will loop over all the returned results
  // from the selector and invoke the given callback
  // on each one
  $('button').each(function(ind){
    console.log(this);
    $(this).prepend(ind);
  });

});


//////////////////////////////
// Common traversal methods //
//////////////////////////////

/*
  
  In many of these methods, the selector is optional. Given
  no selector, these methods will return all items (such as all
  children or siblings).

  .find(selector)     -> search all children of the object for matches
  .children(selector) -> get only direct descendents of the elements
  .siblings(selector) -> get siblings of this element of the same parent
  .parent(selector)   -> get the direct parent of the given elements
  .closest(selector)  -> check self and parents until a match for the 
                          selector is found (or it hits the document)

  Each: Loop over each item found by selector by invoking the
        given callback on each item.
  
    $(selector).each(function(index, element) {...})
*/
