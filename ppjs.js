##################################################################################################################
      Papier Kamień Norzyce
##################################################################################################################


let tablica = ['papier', 'kamien', 'nozyce'];
let win = 0;
let lose = 0;
let draw = 0;
function graj(){
    let wybor = document.querySelector('input[name="pkn"]:checked').value; //
    let staty = document.getElementById('staty'); // div ze statystykami
    let wynik = document.getElementById('wynik'); // div z wynikiem 
    let output1 = document.querySelector('.user1'); // div z botem
    let output2 = document.querySelector('.user2'); //div z graczem
    let los = Math.floor(Math.random() *3 ); // losowanie 
    
    wyniklosowania = tablica[los];
    output1.innerHTML = "<p>" + wyniklosowania + "</p>";
    output2.innerHTML = "<p>" + wybor + "</p>";
    if(wyniklosowania == wybor){
        draw += 1;
        wynik.innerHTML = 'Remis';
    }else if((wyniklosowania == 'papier' && wybor == 'kamien') || (wyniklosowania == 'kamien' && wybor == 'nozyce')|| (wyniklosowania == 'nozyce' && wybor == 'papier')){
        lose +=1;
        wynik.innerHTML = 'Przegrana';
    }else if((wyniklosowania == 'kamien' && wybor == 'papier') || (wyniklosowania == 'papier' && wybor == 'nozyce') || (wyniklosowania == 'nozyce'&& wybor == 'kamien')){
        wynik.innerHTML = 'Wygrana';
        win += 1;
    }
    staty.innerHTML = '<p>Wygranych: '+ win +'</p> <p>Remisów: '+ draw +'</p> <p>Przegranych: '+ lose +'</p>';
}


##################################################################################################################
    chat (dodwanie elementów do strony)
##################################################################################################################

let chat = document.getElementById("chat");
    let tablica = new Array  ("Świetnie!", "Kto gra główną rolę?", 
        "Lubisz filmy Tego reżysera?", "Będę 10 minut wcześniej",
        "Może kupimy sobie popcorn?",
        "Ja wolę Colę",
        "Zaproszę jeszcze Grześka",
        "Tydzień temu też byłem w kinie na Diunie",
        "Ja funduję bilety");

function wyslij(){
    let message = document.getElementById("text").value;
    let div = document.createElement("div");
    div.classList.add("message-jolka");
    div.innerHTML = '<img src="Jolka.jpg" alt="Jolanta Nowak">' + '<p>' + message + "</p>";
    chat.appendChild(div);
    div.scrollIntoView();
}
function randomowa(){
    let randomumber = Math.floor(Math.random()* 9);
    let div = document.createElement("div");
    div.classList.add("message-krzysiek");
    div.innerHTML = '<img src="Krzysiek.jpg" alt="Krzysztof">' + '<p>' + tablica[randomumber] + '</p>';
    chat.appendChild(div);
    div.scrollIntoView();

}

##################################################################################################################
      losowanie liczby i jej kasowanie 
##################################################################################################################

  //html ---------

 <div id="wynik"></div>
    <div class="btn">
        <input type="button" value="Klik" onclick="los()">
        <input type="button" value="Drop" onclick="kas()">
    </div>


 let i = 0;
        function los(){
            let wynik = document.getElementById('wynik');
            i++;
            if(i<7){
                let liczbaLosowa = Math.round(Math.random()*49 + 1);
                console.log(liczbaLosowa);
                wynik.innerHTML += '<div class=\"bol\">' + liczbaLosowa + "</div>";
                console.log(i);
            }else{
                console.log("wylosowałes wszystkie iczby");
            }
            
        }
        function kas(){
            i = 0;
            let wynik = document.getElementById('wynik');
            wynik.innerHTML = "";

        }

##################################################################################################################
           karuzela v2 + wyświetlanie obrazka po kliknięciu na niego 
##################################################################################################################

// let tumbs = document.getElementById('zdjecia');
// let tabela = new Array ('img/grzyb1.jpg', 'img/grzyb2.jpg', 'img/grzyb3.jpg', 'img/grzyb4.jpg', 'img/grzyb5.jpg', 'img/grzyb6.jpg', 'img/grzyb7.jpg');

//#### tworzenie obrazków ####

// tabela.forEach( Element =>{
//     let i = 0
//     let obrazek = document.createElement('img');
//     obrazek.setAttribute('src', Element);
//     obrazek.setAttribute('alt', `tekst alternatywny ${Element}`);
//     tumbs.appendChild(obrazek);
// })

  // kazuela
let temp = 0;
let obraz = document.querySelectorAll('.galeria img');
function forw(){
    obraz.forEach(e =>{
        e.classList.add('hidden');
    });
    if(temp < obraz.length -1){
        obraz[++temp].classList.remove('hidden');
    }else{
        obraz[0].classList.remove('hidden');
        temp = 0;
    } 
}
 // wyświetlanie obrazka po kliknięciu 
function prev(){
    obraz.forEach(e =>{
        e.classList.add('hidden');
    });
    if(temp > 0){
        obraz[--temp].classList.remove('hidden');
    }else{
        obraz[6].classList.remove('hidden');
        temp = 6;
    } 
}

function i1(){
    obraz.forEach(e =>{
        e.classList.add('hidden');
    });
    obraz[0].classList.remove('hidden');
    temp = 0;
}
function i2(){

    obraz.forEach(e =>{
        e.classList.add('hidden');
    });
    obraz[1].classList.remove('hidden');
    temp = 1;
}
function i3(){

    obraz.forEach(e =>{
        e.classList.add('hidden');
    });
    obraz[2].classList.remove('hidden');
    temp = 2;
}
function i4(){
    obraz.forEach(e =>{
        e.classList.add('hidden');
    });
    obraz[3].classList.remove('hidden');
    temp = 3;
}
function i5(){

    obraz.forEach(e =>{
        e.classList.add('hidden');
    });
    obraz[4].classList.remove('hidden');
    temp = 4;
}
function i6(){
    obraz.forEach(e =>{
        e.classList.add('hidden');
    });
    obraz[5].classList.remove('hidden');
    temp = 5;
}
function i7(){
    obraz.forEach(e =>{
        e.classList.add('hidden');
    });
    obraz[6].classList.remove('hidden');
    temp = 6;
}
// html dla obazków które sie klika--------------------------------

        <div id="zdjecia">
            <img src="img/grzyb1.jpg" alt="" class="grzyb" onclick="i1()">
            <img src="img/grzyb2.jpg" alt="" class="grzyb" onclick="i2()">
            <img src="img/grzyb3.jpg" alt="" class="grzyb" onclick="i3()">
            <img src="img/grzyb4.jpg" alt="" class="grzyb" onclick="i4()">
            <img src="img/grzyb5.jpg" alt="" class="grzyb" onclick="i5()">
            <img src="img/grzyb6.jpg" alt="" class="grzyb" onclick="i6()">
            <img src="img/grzyb7.jpg" alt="" class="grzyb" onclick="i7()">
        </div>


//html dla karuzeli  -----------------------------

    <section class="left"><div class="st" onclick="prev()">&lt; </div></section>
    <section class="main">
        <div class="galeria">
            <img src="img/grzyb1.jpg" alt="" class="grzyb" >
            <img src="img/grzyb2.jpg" alt="" class="grzyb hidden">
            <img src="img/grzyb3.jpg" alt="" class="grzyb hidden" >
            <img src="img/grzyb4.jpg" alt="" class="grzyb hidden" >
            <img src="img/grzyb5.jpg" alt="" class="grzyb hidden" >
            <img src="img/grzyb6.jpg" alt="" class="grzyb hidden" >
            <img src="img/grzyb7.jpg" alt="" class="grzyb hidden" >
        </div>
    </section>
    <section class="right"><div class="st" onclick="forw()">&gt; </div></section>

##################################################################################################################
        filtry
##################################################################################################################

function black(){
    let range = document.getElementById("range").value;
    let img = document.getElementById("kura");
    img.style.filter = `grayscale(${range}%)`;

}
function sepia(){
    let range = document.getElementById("range").value;
    let img = document.getElementById("kura");
    img.style.filter = `sepia(${range}%)`;

}
function fblar(){
    let range = document.getElementById("range").value;
    let img = document.getElementById("kura");
    img.style.filter = `blur(${range}px)`;

}
function org(){
    let img = document.getElementById("kura");
    img.style.filter = 'none';

}

##################################################################################################################
          dynamiczne dodawanie obrazków + Karuzela (trudne)
##################################################################################################################

let tumbs = document.getElementById('zdjecia');
let tabela = new Array ('img/grzyb1.jpg', 'img/grzyb2.jpg', 'img/grzyb3.jpg', 'img/grzyb4.jpg', 'img/grzyb5.jpg', 'img/grzyb6.jpg', 'img/grzyb7.jpg');

tabela.forEach( Element =>{
    let obrazek = document.createElement('img');
    obrazek.setAttribute('src', Element);
    obrazek.setAttribute('alt', `tekst alternatywny ${Element}`);
    tumbs.appendChild(obrazek);
})
 // tu się zaczyna kod do karuzeli  <-----------------------------

let temp = 0;
let obraz = document.querySelectorAll('.galeria img');
function forw(){
    obraz.forEach(e =>{
        e.classList.add('hidden');
    });
    if(temp < obraz.length -1){
        obraz[++temp].classList.remove('hidden');
    }else{
        obraz[0].classList.remove('hidden');
        temp = 0;
    }
    
}

function prev(){
    obraz.forEach(e =>{
        e.classList.add('hidden');
    });
    if(temp > 0){
        obraz[--temp].classList.remove('hidden');
    }else{
        obraz[6].classList.remove('hidden');
        temp = 6;
    }
    
}
 HTML do karuzeli 

    <section class="left"><div class="st" onclick="prev()">&lt; </div></section>
    <section class="main">
        <div class="galeria">
            <img src="img/grzyb1.jpg" alt="" class="grzyb">
            <img src="img/grzyb2.jpg" alt="" class="grzyb hidden">
            <img src="img/grzyb3.jpg" alt="" class="grzyb hidden">
            <img src="img/grzyb4.jpg" alt="" class="grzyb hidden">
            <img src="img/grzyb5.jpg" alt="" class="grzyb hidden">
            <img src="img/grzyb6.jpg" alt="" class="grzyb hidden">
            <img src="img/grzyb7.jpg" alt="" class="grzyb hidden">
        </div>
    </section>
    <section class="right"><div class="st" onclick="forw()">&gt; </div></section>

##################################################################################################################
          wypisanie tekstu po najechaniu na zdjęcie
##################################################################################################################

<img src="grzyb1.jpg" alt="" onmouseenter="funkcja1('grzyb 1')" onmouseleave="funkcja1('wybierz grzyba')">
<script>
  function funkcja1(argument){
      document.getElementById('wyswietlacz').innerHTML = argument;
  }
</script>

##################################################################################################################
          progres bar
##################################################################################################################

let progres = document.getElementById("progres");
let zmienna = 0 ;
function pasek(){ 
    console.log(zmienna);
    zmienna += 20;
    if(zmienna <=100){
        progres.style.width = zmienna + "%";
    }
}

##################################################################################################################
        kalkulator ( radio button)
##################################################################################################################

function obliczenia(){
    let dzialanie = document.querySelector('input[name="oblicz"]:checked').id;
    let wynik = document.querySelector(".wynik");
    let x = parseFloat(document.getElementById("x").value);
    let y = parseFloat(document.getElementById("y").value);
    switch(dzialanie) {
        case '+':  
            console.log("+");
            let w = x + y;
            wynik.innerHTML +=  "<p>" + w + "</p>";
            break;
        case '-':
            console.log("-");
            wynik.innerHTML +=  "<p>" + x - y + "</p>";
            break;
        case '*':
            console.log("*");
            wynik.innerHTML +=  "<p>" + x * y + "</p>";
            break;
        case '/':
            console.log("/");
            if(y == 0){
                wynik.innerHTML += "<p class='error'>ERROR</p>";
            }else{
                wynik.innerHTML += "<p>" + x / y +"</p>";
            }
            break;
    }
    if(isNaN(x) || isNaN(y)){
        wynik.innerHTML = "<span>Wpisz dane</span>";
    }
}
##################################################################################################################
          kalkulator na przyciskach (button)
##################################################################################################################

function suma(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let wynik = document.getElementById("wynik");
    wynik.innerHTML = + a*1 + b*1;
    
}

function roznica(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let wynik = document.getElementById("wynik");
    wynik.innerHTML = + a*1 - b*1;
    
}

function dziel(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let wynik = document.getElementById("wynik");
    wynik.innerHTML = + a*1 / b*1;
    
}

function mnoz(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let wynik = document.getElementById("wynik");
    wynik.innerHTML = + a*1 * b*1;
    
}
function sqr(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let wynik = document.getElementById("wynik");
    wynik.innerHTML = (Math.sqrt(Math.abs(a*1))).toFixed(2);
    
}

##################################################################################################################
            zmina stylu (elementów) na stronie 
##################################################################################################################

let strony = document.getElementsByClassName("s");
console.log(strony);

function b1(){
    strony[1].style.display = "none";
    strony[2].style.display = "none";
    strony[0].style.display = "block";
    strony[0].style.backgroundColor = "red";
}
function b2(){
    strony[0].style.display = "none";
    strony[2].style.display = "none";
    strony[1].style.display = "block";
    strony[1].style.backgroundColor = "blue";
}
function b3(){
    strony[0].style.display = "none";
    strony[1].style.display = "none";
    strony[2].style.display = "block";
    strony[2].style.backgroundColor = "green";
}


##################################################################################################################
        - dodawanie tekstu + zmiana klasy
##################################################################################################################

let wyswietlacz = document.getElementById("wyswietlacz");
function czek(){

    let test = document.getElementById("test").value;
    let test2 = document.getElementById("test2").value;
    console.log("xd" ,  test , test2);
    wyswietlacz.innerHTML = " <hr> YO  " + test + " " + test2 + " !";
    wyswietlacz.classList.add("klasa");
    // wyswietlacz.textContent = "YO  " + test + " " + test2 + " !";
    // wyswietlacz.style.color = "red";
    // wyswietlacz.style.backgroundColor = "#008";
    // wyswietlacz.style.textAlign = "center";
    // wyswietlacz.style.padding = "10px";
}
function klasa(){
    wyswietlacz.classList.toggle("klasa");
}

##################################################################################################################
##################################################################################################################


