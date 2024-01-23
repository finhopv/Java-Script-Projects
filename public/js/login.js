

function logar(){
    var nome = document.getElementById('nomes').value
    var senha = document.getElementById('senha').value

    console.log(JSON.stringify({
        nome:nome,
        senha:senha
    }));

    fetch("login",{
        method:'POST',
        body:JSON.stringify({
            nome:nome,
            senha:senha
        }),
        headers:{"content-type" : "application/json"}
    })

    .then(async (resp) => {
        var status =await resp.text();
        console.log(status)
        if(status == 'conectado'){
            location.href = '/acesso-restrito/acesso.html'
        }else{
            alert('nome ou senha invalidos')
        }
    })
}