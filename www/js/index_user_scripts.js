(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
function register_event_handlers()
 {

  
        /* button  #setting-btn */
    $(document).on("click", "#setting-btn", function(evt)
    {
         activate_page("#settings-page"); 
    });
    
        /* button  #about-btn */
    $(document).on("click", "#about-btn", function(evt)
    {
         activate_page("#about-page"); 
    });
    
        /* button  #exit-btn */
    
    
        /* button  #dld-exit-btn */
    $(document).on("click", "#dld-exit-btn", function(evt)
    {
        /* your code goes here */ 
		App.exit();
    });
    
        /* button  #dld-settings-btn */
    $(document).on("click", "#dld-settings-btn", function(evt)
    {
         activate_page("#settings-page"); 
    });
    
        /* button  #you-btn */
    $(document).on("click", "#you-btn", function(evt)
    {
        /* your code goes here */
		activate_page("#settings-page"); 
    });
    
        /* button  #search-btn */
    $(document).on("click", "#search-btn", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_13", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_14", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  #exit-btn */
    $(document).on("click", "#exit-btn", function(evt)
    {
         activate_page("#search_page"); 
    });
    
    }
 document.addEventListener("deviceready", register_event_handlers, false);//deviceready
})();
console.log("index_user_script.js");