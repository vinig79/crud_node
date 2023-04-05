async function login(){
    const val =  document.querySelectorAll("input");
    dado = {};
    val.forEach((val) =>{
        dado[val.name] = val.value;
       
    });
    axios.post("/login", dado).then(res => window.location.href = res.data.redirect ).catch(err => console.log(err));
    
};