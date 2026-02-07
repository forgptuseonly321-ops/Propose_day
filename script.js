function propose(){

document.body.innerHTML = `
<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background:linear-gradient(135deg,#1f1c2c,#928dab);
color:white;
font-family:Poppins;
text-align:center;
">

<h1 style="font-family:Pacifico;">See Bache U Said YES 😍💍(i Knew it 😉)</h1>

<h2>You Are My Forever ❤️ Baby  </h2>

<p>
Thank you for choosing me 🥺💖 <br>
I promise to love you always and forever 🌸
</p>

<div style="font-size:60px;">
💍💖✨💕🌹
</div>

</div>
`;
}

function moveNo(){

const btn = document.getElementById("noBtn");

const x = Math.random() * (window.innerWidth - 100);
const y = Math.random() * (window.innerHeight - 50);

btn.style.position = "absolute";
btn.style.left = x + "px";
btn.style.top = y + "px";
}



