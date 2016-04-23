$(function() {

  // variables
    var $list, $newItemForm, $newItemButton, $newTitle, $newTitleForm, $title, $change, $dlist;
    var numDel = 0;                              // Number of items that are in the deleted section
    $list = $('ol');                               // Cache the ordered list
    $dlist = $('ul');                            // Cache the unordered list
    $title = $('#title');                        // Cache the title
    $newItemForm = $('#newItemForm');              // Cache form to add new items
    $newItemButton = $('#newItemButton');          // Cache button to show form
    $change = $('#change');                        
    
    $newTitle = $('#newTitle');
    $newTitleForm = $('#newTitleForm');
    
    $('#newTitleForm').hide();                     //hides the form to enter the new title


  // SETUP FORM FOR NEW ITEMS
  $newItemButton.show();                         // Show the button
  $newItemForm.hide();                           // Hide the form
  $('#showForm').on('click', function() {        // When click on add item button
    $newItemButton.hide();                       // Hide the button
    $newItemForm.show();                         // Show the form
  });
    
    $('#change').hide();                         //Hides the change button
    //SETTING THE TITLE
    $('#showF').on('click', function( ){
        $newTitle.hide();                       //Hides the new title button
        $newTitleForm.show();                   //Shows the form
        $change.show();                         //Shows the change button
    });

    //CHANGING THE TITLE
    $change.on('click', function(e) {
        e.preventDefault();
        var txt = $('input:text').val();        //sets the variable txt to the text to be the new title
        $('#tempTitle').remove();               //Removes the old title
        $('#listName').append('<h2 id = "tempTitle">' + '    ' + txt + '</h2>');//Puts the new title
        //Puts all the buttons back
        $newTitle.show();
        $newTitleForm.hide();
        $change.hide();
        $('input:text').val(''); 
    });
    
  // ADDING A NEW LIST ITEM
  $('#add').on('click', function(e) {       // When a new item is submitted
    var text = $('#itemDescription').val();      // Get value of text input
    $list.append('<li>' + text + '</li>');      // Add item to end of the list
    $('input:text').val('');                    // Empty the text input
  });

    //Removes all of the items in the completed section
    $('#clearList').on('click', function(){ //When the button is clicked
        for(i = 0; i < numDel; ++i) //goes through and deletes all the items
        {
        $('#deleted').remove();
        }
        numDel = 0;
    });
   
        
  // Click to remove
  $list.on('click', 'li', function() {
    var $this = $(this);               // Cache the element in a jQuery object
    $dlist.append('<li id = "deleted">' + $this.text() + '</li>'); //Puts the element in the Completed secion
      
    $this.remove(); //removes item from the list
      numDel = numDel + 1;
    
  });                                  
    
    // Click to remove
    $dlist.on('click', 'li', function() {
    var $this = $(this);               // Cache the element in a jQuery object
    $list.append('<li>' + $this.text() + '</li>'); //Puts the item back into the list
    $this.remove(); //Removes item from completed
    numDel = numDel - 1;
  }); 
           


});