let myform = document.getElementById('myform');
let targetimage = document.getElementById('targetimage');
let inputrange = document.querySelectorAll('.slider')
myform.addEventListener('submit',function(e){
    let urlmage = document.getElementById('onlineurl');
    let urlimageval = urlmage.value;
    targetimage.setAttribute('src',urlimageval) ;
    if (urlimageval<=0 ){
        alert('Image cannot be blank ');
    }
    e.preventDefault() ;
}
);

for(let i=0;i<=inputrange.length-1;i++)
{
    inputrange[i].addEventListener('input', editimage);
}

function editimage(){
    
    let gs = document.getElementById('gs');
    let blur = document.getElementById('blur');
    let huerotate = document.getElementById('hue-rotate');
    let sepia = document.getElementById('sepia');
    
    
    let gsval = gs.value;
    let blurval = blur.value;
    let huerotateval = huerotate.value;
    let sepiaval = sepia.value;

    targetimage.style.filter = 'grayscale('+gsval+'%) blur('+blurval+'px) hue-rotate('+huerotateval+'deg) sepia('+sepiaval+'%) ' ;
    
}
let sliderform = document.getElementById('slider-form');
sliderform.addEventListener('reset',function(){
    sliderform.reset();
    setTimeout(function() {
        editimage();
    }, 0);
})