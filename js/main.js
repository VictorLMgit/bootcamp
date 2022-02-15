function changeColor(){
const colors = ["yellow", "blue","pink","black","white","browm","aqua","blueviolet","firebrick","cornflowerblue","coral","green", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    $('span').css("color",randomColor);
}