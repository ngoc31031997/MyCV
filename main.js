$(document).ready(function(){
    $('#profile-ripple').ripples({
        resolution: 512,
        dropRadius:10
    });

    const bars = document.querySelectorAll('.progress__bar');
    bars.forEach(function(bar){
        let percentage =bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width =percentage +'%';
        
    });
    //counter
    const counters = document.querySelectorAll('.counter');
    console.log(counters);

    function runCounter () {
        
        counters.forEach(counter =>{
            counter.innerText = 0;
            let target = +counter.dataset.count;
            
            console.log(target);
            let step = target/100;
            
            let countIt = function(){
                let displayedCount =  +counter.innerText;
                if(displayedCount < target){
                    counter.innerText = Math.ceil(displayedCount + step);   
                    setTimeout(countIt,100);
                }else{
                    counter.innerText = target;
                } 
            }
            countIt();
        })       
    }
    runCounter(); 
    let options = {
        rootMargin : '0px 0px -200px 0px'
    }
    let done = 0;
    let couneterSection = document.querySelector('.counter__section');
    const sectionObserver = new  IntersectionObserver(function(entries){
        if(entries[0].isIntersecting && done !== 1){
            done = 1;
            runCounter();
        }
    },options)
    sectionObserver.observe(couneterSection);



    //work section
    var $wrapper = $('.portfolio__wrapper');
    $wrapper.isotope({
        filter : '*',
        layoutMode : 'masonry',
        animationOptions: {
            duration:750,
            easing:'linear'
        }
    });
    let links = document.querySelectorAll('.tabs a');
    links.forEach(link =>{

        let selector =link.dataset.filter;
        link.addEventListener('click',function(e){
            e.preventDefault();
            $wrapper.isotope({
                filter : selector,
                layoutMode : 'masonry',
                animationOptions: {
                    duration:750,
                    easing:'linear'
                }
            });
            links.forEach(link=>{
                link.classList.remove('active');
            })
            e.target.classList.add('active');
        });
    })

    //manific popup
    $('.magnify').magnificPopup({
        type:'image',
        gallery:{
            enabled : true
        },
        zoom:{
            enable : true
        }
    });

    //Slider
    setTimeout(function() {
        $('.slider').slick({
            arrows:false,
            autoplay:true      
        });
    }, 1);
    //print cv
    
        
    
});