function cadastrarUsuario() {
    const nome = document.querySelector('input[type="text"]').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (nome && email && password) {

        alert(`Usuário cadastrado com sucesso!\nNome: ${nome}\nEmail: ${email}`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function mostrarInfo() {
    alert("Aqui estão mais informações sobre o projeto.") }