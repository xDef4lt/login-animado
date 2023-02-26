const btn = document.querySelectorAll('.logo');
const inptSenha = document.getElementById('inptSenha');
const inptUser = document.getElementById('inptUser');

btn[0].onclick = () => {
    if (inptUser.type === 'email') {
        inptUser.type = 'text';
        inptUser.placeholder = 'Usuário:';
      } else {
        inptUser.type = 'email';
        inptUser.placeholder = 'Email:';
    }
}

btn[1].onclick = () => {
    if (inptSenha.type === 'password') {
        inptSenha.type = 'text';
    } else {
        inptSenha.type = 'password';
    }
};
