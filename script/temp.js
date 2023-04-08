function changeBg(){
    var navbar=document.getElementById('navbar');
    var scrollVal=window.scrollY;
    if(scrollVal<80){
        navbar.classList.remove('bgColor');
    }
    else{
        navbar.classList.add('bgColor')
    }
}
window.addEventListener('scroll',changeBg);

function sendEmail() {
    const inputField = document.getElementById("message");
      const emailLink = "mailto:visalmunasinghe@gmail.com" +
      "?subject=" + encodeURIComponent("Quick Message") +
      "&body=" + encodeURIComponent(inputField.value);
    window.location.href = emailLink;
  }
