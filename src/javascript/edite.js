function editar(val){
    const data = document.querySelector('input[type=text]');
    axios.post("/edite?_method=PATCH",{post: data.value, id:val});
    window.location.href = "/index";
}