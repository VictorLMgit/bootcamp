$('.showcase-text').hide(0).show(1000)
function changeColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const randomColor = "rgb("+r+","+g+","+b+")";
    $('span').css("color",randomColor);
}
