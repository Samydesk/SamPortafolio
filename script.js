let menuVisible = false;

//Funcion que pculta o muestra el menu, Auxilio :'(

function mostrarOcultarMenu(){
    if(menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculta el menu una vez que selecciono la opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}

//Funcion para las animaciones de habilidades
function efectoHabilidades(){
    let skills = document.getElementById("habilidades");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("nodejs");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("git");
        habilidades[5].classList.add("firebase");
        habilidades[6].classList.add("tailwind");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("resultados");
        habilidades[12].classList.add("gestion");
    } 
}


window.onscroll = function(){
    efectoHabilidades();
}