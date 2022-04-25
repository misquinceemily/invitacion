var btnConfirm = document.getElementById("modalUsu");
var btnRegis = document.getElementById("cntPerson");
var inputInvitao = document.getElementById("floatingInputValue");

inputInvitao.addEventListener('change',()=>{
    document.getElementById("btnsubmit").disabled=false;
})

btnRegis.addEventListener('click', () =>{
    let data = document.getElementById("cntPersonas").value;

    let padre = document.getElementById("bodyCard");
    let modalUsu = document.getElementById("camposAdd");
    let fragment = document.createDocumentFragment();
    for(let i = 1; i <= data; i++){
        let clone = modalUsu.content.cloneNode(true);
        clone.querySelector("#idInvitado").innerHTML = "Invitado " + (i+1);
        fragment.appendChild(clone);
    }
    padre.appendChild(fragment);
})

btnConfirm.addEventListener('show.bs.modal', ()=>{

})
