// fixed navigation on scroll

const navigation = document.querySelector('.Navigation');

window.addEventListener('scroll', myscroll)

    function myscroll(){
        if(window.scrollY > 20){
            navigation.classList.add('is-active');
        }
        else{
            navigation.classList.remove('is-active');
        }
    }

    // Preloader spinner
    const Preloader = document.querySelector('.preloader');

    const fadeEffect = setInterval(() => {
        // if we don't set opacity 1 in CSS, then   //it will be equaled to "", that's why we   // check it
        if (!Preloader.style.opacity) {
          Preloader.style.opacity = 1;
        }
        if (Preloader.style.opacity > 0) {
          Preloader.style.opacity -= 0.1;
        } else {
          clearInterval(fadeEffect);
        }

        window.addEventListener('load', fadeEffect);

      }, 100);


// Menu bar and btn mobile fonctionalies

const btn_hamburger = document.querySelector('.hamburger-mobile');
const navigation_mobile = document.querySelector('.Links-mobile');
const Overlay_mobile = document.querySelector('.Overlay-body');

btn_hamburger.addEventListener('click', function(){
    navigation_mobile.classList.toggle('is-active');
    btn_hamburger.classList.toggle('is-active');
    Overlay_mobile.classList.toggle('is-active');
    
})

Overlay_mobile.addEventListener('click', function(){
    navigation_mobile.classList.remove('is-active');
    btn_hamburger.classList.remove('is-active');
    Overlay_mobile.classList.remove('is-active');
});

// Btn Experience
const Fongo = document.querySelector('.Fongo');
const Rcm = document.querySelector('.Rcm');
const Upel = document.querySelector('.Upel');

const DescriFonglab = document.querySelector('.FongoExperience');
const DescriRcm = document.querySelector('.RcmExperience');
const DescriUpelois = document.querySelector('.UpeloiExperience');

Fongo.addEventListener('click', function(){
    // border
   Fongo.classList.add('is-active');
   Rcm.classList.remove('is-active');
   Upel.classList.remove('is-active');
//    description
DescriFonglab.classList.add('is-active');
DescriRcm.classList.remove('is-active');
DescriUpelois.classList.remove('is-active');




})

Rcm.addEventListener('click', function(){
    // border
    Rcm.classList.add('is-active');
    Fongo.classList.remove('is-active');
    Upel.classList.remove('is-active');

    // description
    DescriRcm.classList.add('is-active');
    DescriFonglab.classList.remove('is-active');
    DescriUpelois.classList.remove('is-active');

})

Upel.addEventListener('click', function(){
    // border

    Upel.classList.add('is-active');
    Rcm.classList.remove('is-active');
    Fongo.classList.remove('is-active');
    

    // description
    DescriUpelois.classList.add('is-active');
    DescriRcm.classList.remove('is-active');
    DescriFonglab.classList.remove('is-active');

})

// Close btn menu mobile on click

const btnmobile = document.querySelector('.btnMobile');

    btnmobile.addEventListener('click', function(){
        btn_hamburger.classList.remove('is-active');
        navigation_mobile.classList.remove('is-active');
        Overlay_mobile.classList.remove('is-active');
    })

    const btnmobile2 = document.querySelector('.btnMobile2');

    btnmobile2.addEventListener('click', function(){
        btn_hamburger.classList.remove('is-active');
        navigation_mobile.classList.remove('is-active');
        Overlay_mobile.classList.remove('is-active');
    })

    const btnmobile3 = document.querySelector('.btnMobile3');

    btnmobile3.addEventListener('click', function(){
        btn_hamburger.classList.remove('is-active');
        navigation_mobile.classList.remove('is-active');
        Overlay_mobile.classList.remove('is-active');
    })

    const btnmobile4 = document.querySelector('.btnMobile4');

    btnmobile4.addEventListener('click', function(){
        btn_hamburger.classList.remove('is-active');
        navigation_mobile.classList.remove('is-active');
        Overlay_mobile.classList.remove('is-active');
    })