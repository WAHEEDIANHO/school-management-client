$(document).ready(function() {
    console.log($("#toggle_btn"))
    $("#toggle_btn").on("click", function(e){
        e.preventDefault();
        alert("I was clicked")
    })

    // document.getElementById("toggle_btn").addEventListener("click", function(e){
    //     e.preventDefault();
    //     alert("I was clicked")
    // })
})