function verificadorEra(){
    let era = document.getElementById("era")
    if(isNaN(era.value)){
        alert("Por favor selecciona una era")
    }else{
        let div = document.getElementById("e")
        div.innerText = "" + era.value
        
        document.getElementById("es").style.display="block"
        document.getElementById("photo").style.display="block"

    }

    if(era.value == 19){
        era19();
        alert("¡Regresemos a la era 19!")
        document.getElementById("btn2").disabled=false;
        document.getElementById("era").disabled=true;
    } else if(era.value == 21){
        alert("¡Regresemos a la era 21!")
        era21();
        document.getElementById("btn2").disabled=false;
        document.getElementById("era").disabled=true;
    } else if(era.value == 25){
        alert("¡Regresemos a la era 25!")
        era25();
        document.getElementById("btn2").disabled=false;
        document.getElementById("era").disabled=true;
    } else if(era.value ==30){
        alert("¡En buena hora por el regreso de Adele!")
        era30();
        document.getElementById("btn2").disabled=false;
        document.getElementById("era").disabled=true;
    }

    if(era.value == 19 || era.value == 21 || era.value ==25 || era.value ==30){
        document.getElementById("eras").innerText="Ahora presiona el botón para obtenerlo"
        document.getElementById("img1").src="https://c.tenor.com/jUXN63Je45cAAAAM/vloletsforoses-adele-smiling.gif";
    }
}

function era19(){
    let div = document.getElementById("des")
        div.innerText = "Álbum debut de Adele"
    let fr = document.getElementById("frase")
        fr.innerText = "Should I give up, or should I just keep chasing pavements?"

    document.getElementById("img").src="https://cutt.ly/QL1FMiR";
    let bo = document.getElementById("e")
        bo.style.color="#D5951C"
    let bc = document.getElementById("btn1")
        bc.style.backgroundColor="#D5951C"
    let bt = document.getElementById("e")
        bt.style.fontFamily="'Edu TAS Beginner', cursive"

}

function era21(){
    let div = document.getElementById("des")
        div.innerText = "Segundo álbum de Adele, un éxito en ventas"

    let fr = document.getElementById("frase")
        fr.innerText = "We could've had it all, rolling in the deep"
    document.getElementById("img").src="https://cutt.ly/CL1FnBv";
    let bo = document.getElementById("e")
        bo.style.color="#81BD00"
    let bc = document.getElementById("btn1")
        bc.style.backgroundColor="#81BD00"
    let bt = document.getElementById("e")
        bt.style.fontFamily="'Barlow', sans-serif"
}

function era25(){
    let div = document.getElementById("des")
        div.innerText = "Tercer álbum de Adele, un éxito en ventas"
    let fr = document.getElementById("frase")
        fr.innerText = "Hello from the other side"
    document.getElementById("img").src="https://cutt.ly/JL1FOmi";
    let bo = document.getElementById("e")
        bo.style.color="#BC0000"
    let bc = document.getElementById("btn1")
        bc.style.backgroundColor="#BC0000"
    let bt = document.getElementById("e")
        bt.style.fontFamily="'Teko', sans-serif"
}

function era30(){
    let div = document.getElementById("des")
        div.innerText = "Cuarto álbum de Adele, un éxito en ventas a pesar de la era del streaming"
    let fr = document.getElementById("frase")
        fr.innerText = "Go easy on me, baby"
    document.getElementById("img").src="https://cutt.ly/6L1FJID";
    let bo = document.getElementById("e")
        bo.style.color="#B2A200"
    let bc = document.getElementById("btn1")
        bc.style.backgroundColor="#B2A200"
    let bt = document.getElementById("e")
        bt.style.fontFamily="'Didact Gothic', sans-serif"
}

// function cambioId(){
//     if(era.value == 19){
//         document.getElementById("btn2").id="19"
//     } else if(era.value == 21){
//         document.getElementById("btn2").id="21"
//     } else if(era.value == 25){
//         document.getElementById("btn2").id="25"
//     } else if(era.value == 30){
//         document.getElementById("btn2").id="30"
//     }
//     }

function verificadorA(){

    let era = document.getElementById("era")
    if(era.value == 19){
        
        document.getElementById("btn2").disabled=true;
        document.getElementById("era").disabled=false;
        nueva19();
    }
    if(era.value == 21){
        console.log("Esto será para la era 21")
        document.getElementById("btn2").disabled=true;
        document.getElementById("era").disabled=false;
        nueva21();

    }
    if(era.value == 25){
        console.log("Esto será para la era 25")
        document.getElementById("btn2").disabled=true;
        document.getElementById("era").disabled=false;
        nueva25();
    }
    if(era.value ==30){
        console.log("Esto será para la era 30")
        document.getElementById("btn2").disabled=true;
        document.getElementById("era").disabled=false;
        nueva30();
    }
}

function nueva19(){
    let songs = [
        {'song': 'Daydreamer'},
        {'song': 'Chasing Pavements'},
        {'song': 'Crazy for You'},
        {'song': 'First Love'},
        {'song': 'Make You Feel My Love'},
        {'song': 'Tired'},
        {'song': 'Best For Last'},
        {'song': 'Cold Shoulder'},
        {'song': 'Melt My Heart To Stone'},
        {'song': 'Right as Rain'},
        {'song': 'My Same'},
        {'song': 'Hometown Glory'},
    ];


    let fraseAle = Math.round(Math.random() *13)
    let html = "<p>Tu canción de 19 es " + songs[fraseAle].song + "</p>"
    document.getElementById("eras").innerHTML=html;

    imgAle19();
}

function nueva21(){
    let songs = [
        {'song': 'Rolling In the Deep'},
        {'song': 'Take It All'},
        {'song': 'Don`t you Remember'},
        {'song': 'Someone Like You'},
        {'song': 'Turning Tables'},
        {'song': 'He Won`t Go'},
        {'song': 'Set Fire To The Rain'},
        {'song': 'I`ll Be Waiting'},
        {'song': 'Love Song'},
        {'song': 'Rumour Has It'},
        {'song': 'One and Only'},
    ];
    imgAle21()

    let fraseAle = Math.round(Math.random() *11)
    // let imagenAle = Math.round(Math.random() *3)
    let html = "<p>Tu canción de 21 es " + songs[fraseAle].song +  "</p>"
    document.getElementById("eras").innerHTML=html
    // document.getElementById("img2").src="imagenes19"
   
}

function nueva25(){
    let songs = [
        {'song': 'Hello'},
        {'song': 'Send My Love(To Your New Lover)'},
        {'song': 'I Miss You'},
        {'song': 'Sweetest Devotion'},
        {'song': 'When We Were Young'},
        {'song': 'Water Under The Bridge'},
        {'song': 'All I Ask'},
        {'song': 'Love In The Dark'},
        {'song': 'Remedy'},
        {'song': 'River Lea'},
        {'song': 'Million Years Ago'},
    ];
    imgAle25();

    let fraseAle = Math.round(Math.random() *11)
    // let imagenAle = Math.round(Math.random() *3)
    let html = "<p>Tu canción de 25 es " + songs[fraseAle].song +  "</p>"
    document.getElementById("eras").innerHTML=html
    // document.getElementById("img2").src="imagenes19"
    
}

function nueva30(){
    let songs = [
        {'song': 'Easy On Me'},
        {'song': 'Strangers By Nature'},
        {'song': 'Oh My God'},
        {'song': 'Can I Get It'},
        {'song': 'Cry Your Heart Out'},
        {'song': 'I Drink Wine'},
        {'song': 'Hold On'},
        {'song': 'Woman Like Me'},
        {'song': 'Love Is A Game'},
        {'song': 'All Nigth Parking'},
        {'song': 'To Be Loved'},
    ];
    imgAle30();

    let fraseAle = Math.round(Math.random() *11)
    // let imagenAle = Math.round(Math.random() *3)
    let html = "<p>Tu canción de 30 es " + songs[fraseAle].song +  "</p>"
    document.getElementById("eras").innerHTML=html
    // document.getElementById("img2").src="imagenes19"
    
}

function imgAle19(){
    let imgArray = [
        'a1.jpeg', 'a2.jpeg',
        'a3.jpeg', 'a4.jpeg',
        'a5.jpeg', 'a6.jpeg',
        'a7.jpeg', 'a8.jpeg',
        'a9.jpeg', 'a10.jpeg',
        'a11.jpeg','a12.jpeg',
        'a13.jpeg','a14.jpeg',
        'a15.jpeg','a16.jpeg',
        'a17.jpeg','a18.jpeg',
        'a19.jpeg','a20.jpeg'
    ];

    let randomIndex = Math.floor(Math.random()*imgArray.length)
    console.log(randomIndex)

    let selectedImg = imgArray[randomIndex]

    document.getElementById("img1").src = `./imagenes19/${selectedImg}`
    document.getElementById("img1").style.width="150px"

}

function imgAle21(){
    let imgArray = [
        'a1.jpeg', 'a2.jpeg',
        'a3.jpeg', 'a4.jpeg',
        'a5.jpeg', 'a6.jpeg',
        'a7.jpeg', 'a8.jpeg',
        'a9.jpeg', 'a10.jpeg',
        'a11.jpeg','a12.jpeg',
        'a13.jpeg','a14.jpeg',
        'a15.jpeg','a16.jpeg',
        'a17.jpeg','a18.jpeg',
        'a19.jpeg','a20.jpeg'
    ];

    let randomIndex = Math.floor(Math.random()*imgArray.length)
    console.log(randomIndex)

    let selectedImg = imgArray[randomIndex]

    document.getElementById("img1").src = `./imagenes21/${selectedImg}`

}

function imgAle25(){
    let imgArray = [
        'a1.jpeg', 'a2.jpeg',
        'a3.jpeg', 'a4.jpeg',
        'a5.jpeg', 'a6.jpeg',
        'a7.jpeg', 'a8.jpeg',
        'a9.jpeg', 'a10.jpeg',
        'a11.jpeg','a12.jpeg',
        'a13.jpeg','a14.jpeg',
        'a15.jpeg','a16.jpeg',
        'a17.jpeg','a18.jpeg',
        'a19.jpeg','a20.jpeg'
    ];

    let randomIndex = Math.floor(Math.random()*imgArray.length)
    console.log(randomIndex)

    let selectedImg = imgArray[randomIndex]

    document.getElementById("img1").src = `./imagenes25/${selectedImg}`

}

function imgAle30(){
    let imgArray = [
        'a1.jpeg', 'a2.jpeg',
        'a3.jpeg', 'a4.jpeg',
        'a5.jpeg', 'a6.jpeg',
        'a7.jpeg', 'a8.jpeg',
        'a9.jpeg', 'a10.jpeg',
        'a11.jpeg','a12.jpeg',
        'a13.jpeg','a14.jpeg',
        'a15.jpeg','a16.jpeg',
        'a17.jpeg','a18.jpeg',
        'a19.jpeg','a20.jpeg'
    ];

    let randomIndex = Math.floor(Math.random()*imgArray.length)
    console.log(randomIndex)

    let selectedImg = imgArray[randomIndex]

    document.getElementById("img1").src = `./imagenes30/${selectedImg}`

}



// function button(){
//     let button = document.createElement("button")
//         button.type = 'button';
//         button.innerHTML = 'Obtener';
//         button.id = 'btn-styled'
//     let div1 = document.getElementById('es');
//         div1.appendChild(button)

// }