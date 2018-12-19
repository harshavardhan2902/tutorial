// alert("welcome");
$(document).ready(function(){
   
    // toggle
    $("#togglebtn").click(function(){
        $("#togglecontent").toggle();

    });

    // hide content
    $("#showbtn").click(function(){
        $("#showcontent").show();
    });

    // fade in
    $("#fadebtn").click(function(){
        $("#fadeincontent").fadeIn();
    });

    // fade out
     $("#fadeoutbtn").click(function(){
        $("#fadeoutcontent").fadeOut(); 
     });

    //  fade toggle
    $("#fadetogglebtn").click(function(){
        $("#fadetogglecontent").fadeToggle();
    });

    // fade to
    $("#fadetobtn").click(function(){
        $("#fadetocontent").fadeTo("slow", 0.4);
    });

    // slide down
    $("#slidedownbtn").click(function(){
        $("#slidedowncontent").slideDown();
    });


    // slide up
    $("#slideupbtn").click(function(){
        $("#slideupcontent").slideUp();
    });

    // slide toggle
    $("#slidetogglebtn").click(function(){
        $("#slidetogglecontent").slideToggle();
    });

    // single property button
    $("#singlepropertybtn").click(function(){
        $("#singlepropertycontent").css("background-color","red");
        
    });

    // mutilple property 
    $("#multiplepropertybtn").click(function(){
        $("#multiplepropertycontent").css({"background-color":"blue", "color":"white"});
    });





});