$(document).ready(function(){
    $("#test").click(function(){
        // parent
        // $("#demo").parent().css({"background-color":"red","color":"green","width":"100%","border":"2px solid black"});

        // parents
        // $("#demo").parents().css({"background-color":"red","color":"green","width":"100%","border":"2px solid black"});

        // parentsuntil
        // $("#demo").parentsUntil("#parent").css({"background-color":"red","color":"green","width":"100%","border":"2px solid black"});

        // children
        // $("#parent").children().css({"background-color":"red","color":"green","width":"100%","border":"2px solid black"});

        // find
        // $("#parent").find("p").css({"background-color":"red","color":"green","width":"100%","border":"2px solid black"});

        // siblings
        // $("#parent-child").siblings().css({"background-color":"red","color":"green","width":"100%","border":"2px solid black"});

        // next
        // $("#parent").next().css({"background-color":"red","color":"green","width":"100%","border":"2px solid black"});

        // nextAll
        // $("#parent").nextAll().css({"background-color":"red","color":"green","width":"100%","border":"2px solid black"});

        // nextUntil
        // $("#parent").nextUntil(".container").css({"background-color":"red","color":"green","width":"100%","border":"2px solid black"});

        // prev
        // $("#parent-child").prev().css({"background-color":"red","color":"green","width":"100%","border":"2px solid black"});

        // prevAll
        $("#parent-child").prevAll().css({"background-color":"red","color":"green","width":"100%","border":"2px solid black"})
    
        // prevUntil
        $("#parent").prevUntil().css({"background-color":"red","color":"green","width":"100%","border":"2px solid black"});

    });
});