const berandaLink = document.querySelectorAll('nav li a')[0];
const fiturLink = document.querySelectorAll('nav li a')[1];
const produkLink = document.querySelectorAll('nav li a')[2];
const kontakLink = document.querySelectorAll('nav li a')[3];

berandaLink.addEventListener("click", function(){
    const beranda = document.getElementById('home');
    beranda.scrollIntoView({behavior: "smooth"});
    document.getElementById('check').checked = false;
  
});

fiturLink.addEventListener("click", function(){
    const fitur = document.getElementById('about');
    fitur.scrollIntoView({behavior: "smooth"});
    document.getElementById('check').checked = false;
});

produkLink.addEventListener("click", function(){
    const produk = document.getElementById('portfolio');
    produk.scrollIntoView({behavior: "smooth"});
    document.getElementById('check').checked = false;
});

kontakLink.addEventListener("click", function (){
    const kontak = document.getElementById('contact');
    kontak.scrollIntoView({behavior: "smooth"});
    document.getElementById('check').checked = false;
});


const card = document.querySelectorAll('.card');
for ( let i = 0; i < card.length; i++){

    card[i].addEventListener("mouseenter", function(e){
        e.currentTarget.style.transform = "scale(1.1)";
    })
    card[i].addEventListener("mouseleave", function(e){
        e.currentTarget.style.transform = "scale(1)";
    })
}