function Playpause(){
    var vid=document.getElementById('mainvid');
    var scrollVal=window.scrollY;
    if(scrollVal>400){
        vid.pause()
    }
    else{
        vid.play()
    }
}
window.addEventListener('scroll',Playpause);