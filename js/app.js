import lazyLoading from "./lazyLoad.js";
import renderScreen from "./renderMediaQuery.js";


window.addEventListener('load',() =>{
    //Evento rezsize momentaneo
    window.addEventListener('resize',()=>{
        console.log(screen.width)
        renderScreen(screen.width,document.getElementById('nav-menu'),'menu');
        //renderScreen(screen.width,document.querySelector('.select-city-menu'),'selectBackgrund');
    })
    renderScreen(screen.width,document.getElementById('nav-menu'),'menu');
    //renderScreen(screen.width,document.querySelector('.select-city-menu'),'selectBackgrund');
    //Carga lenta de las imagenes
    lazyLoading(document.querySelectorAll('.img'))

    //variables para cambiar background
    const [...backgroundSelect]=document.querySelectorAll('.clickeable-div');
    const handleBackground= document.querySelector('.header-slide');
    const handleJapaneText=document.getElementById('japanTxt');
    const handleTitleText=document.getElementById('titleTxt');
    const imgPat=[
     {spanish:'Tokyo',  japones:'東京都',   coverimage:'./images/Tokyo-Portada.jpeg'},
     {spanish:'kyoto',  japones:'京都市',   coverimage:'./images/Kyoto-Portada.jpg'},
     {spanish:'Osaka',  japones:'大阪市',   coverimage:'./images/santuario_9c627294_1600x1873.jpg'},
     {spanish:'Nara',   japones:'奈良市',   coverimage:'./images/Nara.png'}   
    ]
    //funcion para hacer el cambio
    function changeBackground(numberImage){
        handleBackground.style.backgroundImage=`url("${imgPat[numberImage].coverimage}")`;
        handleBackground.style.backgroundSize='cover';
        handleBackground.style.backgroundPosition='bottom';

        handleTitleText.innerText=imgPat[numberImage].spanish;
        handleJapaneText.innerText=imgPat[numberImage].japones;
    }

    //Slider con Glinder
    new Glider(document.querySelector('.carousel__lista'),{
        slidesToShow: 3,
        slidesToScroll: 5,
        draggable: false,
        dots: '.carousel__indicadores',
        itemWidth: '32%',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        }
    });


    //funcion que cambia la posicion de #line-measurer en #tales__info
    function changeMeasure(tale__id){
        let measureAbout=document.getElementById('line-measurer');
        switch(tale__id){
            case'tales__click__Tokyo':
                measureAbout.style.top="-2px";
                break;
            case'tales__click__Kyoto':
                measureAbout.style.top="25%";
                break;
            case'tales__click__Osaka':
                measureAbout.style.top="50%";
                break;
            case'tales__click__Nara':
                measureAbout.style.top="75%";
                break;
        }
    }

    function disableScroll(){  
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function(){ window.scrollTo(x, y) };
    }
    function enableScroll(){  
        window.onscroll = null;
    }
    function closeMenuSelect(menu){
        menu.style.transform="translateX(100%)"
    }
    //Captura cualquier evento que haga click
    document.addEventListener('click',(e)=>{
        //*************Evento cambio de fondo*************//
        //Tokyo
        if(e.target===backgroundSelect[0]){
           changeBackground(0);
           console.log('click')
           closeMenuSelect(document.querySelector('.select-city-menu'))
        }

        //kyoto
        if(e.target===backgroundSelect[1]){
            changeBackground(1);
            console.log('click')
            closeMenuSelect(document.querySelector('.select-city-menu'))
        }

        //Osaka
        if(e.target===backgroundSelect[2]){
            changeBackground(2);
            console.log('click')
            closeMenuSelect(document.querySelector('.select-city-menu'))
        }

        //Nara
        if(e.target===backgroundSelect[3]){
            changeBackground(3);
            console.log('click')
            closeMenuSelect(document.querySelector('.select-city-menu'))
        }

        //*************Animacio de ABOUT_TALES*************//
        if(e.target.matches('.test')){
            changeMeasure(e.target.id)
        }

        if(e.target.matches('#menuQuery')){
            document.querySelector('.menu-absolute').style.transform="translateX(0rem)"
            disableScroll()
        }
       if(e.target.matches('#close')){
            document.querySelector('.menu-absolute').style.transform="translateX(-60rem)"
            enableScroll()
        } 
        if(e.target.matches('.menu-absolute')){
            document.querySelector('.menu-absolute').style.transform="translateX(-60rem)"
            enableScroll()
        }

        //Abrir menuBackgroundImg 768px>>>>
        if(e.target.matches('.tab')){
            document.querySelector('.select-city-menu').style.transform="translateX(0%)"
        }
        console.log(e.target)
    });

})
