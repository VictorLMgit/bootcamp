function changeColor(){
const colors = ["red", "yellow", "blue","pink","black","white","browm","aqua","blueviolet","firebrick","cornflowerblue","coral","green"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    $('span').css("color",randomColor);
}