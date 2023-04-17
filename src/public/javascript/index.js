async function del(){
    const checkedBoxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const checkedValues = Array.from(checkedBoxes).map(input => input.value);
    const data = { checkBox : checkedValues };
    console.log(data);

    await axios.post('/index?_method=DELETE', data);
    window.location.href = '/index';
    
}

function edita(val){
    window.location.href = "/edite?id="+val;
};