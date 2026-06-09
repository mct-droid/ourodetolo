document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    const heroSection = document.getElementById('inicio');
    
    // Calcula a altura da seção hero para saber quando começar a mudar o header
    const heroHeight = heroSection ? heroSection.offsetHeight : 500; 

    window.addEventListener('scroll', () => {
        // Se a posição de rolagem for maior que a altura do hero, adiciona uma classe para o fundo ficar sólido
        if (window.scrollY > heroHeight - 100) { 
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Adicione a transição de cor do header no CSS (se não estiver lá)
    /*
    .main-header {
        transition: background-color 0.3s ease;
    }

    .main-header.scrolled {
        background-color: rgba(26, 26, 26, 0.95); // Fundo semi-transparente escuro ao rolar
    }
    */
});
function expandirTrecho() {
    const container = document.getElementById('trecho-container');
    const extra = document.getElementById('conteudo-extra');
    const btnLerMais = document.getElementById('btn-ler-mais');
    const btnCompre = document.getElementById('btn-compre-agora');

    container.classList.remove('fade-effect');
    container.style.maxHeight = "none";
    extra.style.display = "block";
    
    // Esconde um e mostra o outro
    btnLerMais.style.display = 'none';
    btnCompre.style.display = 'inline-block';
}
function mostrarSenha(botao, capitulo) {
    // remove outros campos abertos
    document.querySelectorAll('.senha-inline').forEach(el => el.remove());

    const div = document.createElement('div');
    div.classList.add('senha-inline');

    div.innerHTML = `
        <input type="password" placeholder="Senha do capítulo">
        <button>Entrar</button>
        <p class="erro"></p>
    `;

    botao.parentElement.appendChild(div);

    const input = div.querySelector('input');
    const erro = div.querySelector('.erro');
    const btn = div.querySelector('button');

    btn.onclick = () => {
        if (input.value === senhasCapitulos[capitulo]) {
            erro.style.color = '#8f8';
            erro.innerText = "Capítulo liberado ✨";
        } else {
            erro.innerText = "Senha incorreta";
        }
    };
}

function mostrarSenha(botao, senhaCorreta) {
  const senha = prompt("Digite a senha:");

  if (senha === senhaCorreta) {
    const capitulo = senhaCorreta;

    document
      .querySelector(`.conteudo-capitulo[data-capitulo="${capitulo}"]`)
      .classList.remove("hidden");
  } else {
    alert("Senha incorreta.");
  }
}


function trocarPersonagem(src, thumb) {
    const img = document.getElementById("personagem-grande");

    img.classList.add("trocando");

    setTimeout(() => {
        img.src = src;
        img.classList.remove("trocando");
    }, 200);

    document
        .querySelectorAll(".personagens-miniaturas img")
        .forEach(i => i.classList.remove("ativo"));

    thumb.classList.add("ativo");
}
