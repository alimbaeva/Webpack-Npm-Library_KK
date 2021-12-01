import "./styles/main.scss"

window.addEventListener('load', function () {
    const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
    const textColors = ['#ed220d', '#b542e5', '#0d93ed', '#f2770b', '#8affbc', '#f2ff8a', '#ff38c2', '#e37f35'];


    function change() {
        const colorBg = Math.floor(Math.random() * colors.length);
        const textColor = Math.floor(Math.random() * textColors.length);
        let h1 = document.querySelector('h1');
        h1.style.color = `${textColors[textColor]}`;
        let bg = document.querySelector('body');
        bg.style.backgroundColor = `${colors[colorBg]}`
    }
    const button = document.querySelector('button');
    button.addEventListener("click", change);


})