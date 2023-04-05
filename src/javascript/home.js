function comentar(){
    const text = document.querySelector('input[type=text]').value;
    const dado = {text : text};
    axios.post("/home", dado); 
    
    window.location.href = "/index";
}