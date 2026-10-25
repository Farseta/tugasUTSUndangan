var scrollable = document.querySelectorAll('.scroll');

document.onscroll = function(){
    scrollable.forEach(scrollable =>{
        var posstionScroll = scrollable.getBoundingClientRect();
        var topScroll = posstionScroll.top;

        if(topScroll <900){
            scrollable.classList.add('scroll--show');
        }
    })
}