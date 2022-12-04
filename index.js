console.log("Hello world");
Click.addEventListener('click', function(){
    // console.log("Clicked");
    alert("Hello, World! :)");
})
heading.addEventListener('mouseover', function(){
    // document.write("Why your mouse is on heading?");
    // console.log("Get off ur mouse from my heading");
    document.querySelectorAll('.heading')[0].innerHTML = "<h1>CLICK ON BIG PARA</h1>"
})
cont.addEventListener('click', function(){
    document.querySelectorAll('.cont')[0].innerHTML = "<b>CLICK ON SUBMIT BUTTON</b>"
    // alert("hi");
})