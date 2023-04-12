function comentar(){
    const text = document.getElementById('comment');
    console.log(text);
    const dado = {text : text};
    //axios.post("/home", dado); 
    
    //window.location.href = "/index";
}

const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e => {
    textarea.style.height = "63px";
    let scHeight = e.target.scrollHeight;
    console.log(scHeight);
    textarea.style.height = `${scHeight}px`;
    
});