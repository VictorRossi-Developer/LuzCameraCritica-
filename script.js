function searchFilme() {
  const searchInput = document.getElementById('search-input').value.trim().toLowerCase();

  // Mapeamento dos filmes e páginas correspondentes
  const filmes = {
    "chico bento": "pesquisachicobento.html",
    "cidade de deus": "pesquisacidade.html",
    "o auto da compadecida": "pesquisaauto.html",
    "tropa de elite": "pesquisatropa.html"
  };

  // Armazena os resultados que contêm a palavra pesquisada
  let resultados = [];
  for (let titulo in filmes) {
    if (titulo.includes(searchInput)) {
      resultados.push(filmes[titulo]);
    }
  }

  // Se houver apenas um resultado, redireciona
  if (resultados.length === 1) {
    window.location.href = resultados[0];
  } else if (resultados.length > 1) {
    alert("Múltiplos filmes encontrados! Adicione mais palavras-chave para refinar a pesquisa.");
  } else {
    alert("Filme não encontrado!");
  }
}

// Permite enviar a pesquisa ao pressionar Enter
document.getElementById('search-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchFilme();
  }
});

function searchFilme() {
  const searchInput = document.getElementById('search-input').value.trim().toLowerCase();

  // Mapeamento de filmes e páginas dentro da pasta ./filmes
  const filmes = {
    "chico bento": "./filmes/cb.html",
    "tropa de elite": "./filmes/tpe.html",
    "o auto da compadecida": "./filmes/adc.html",
    "cidade de deus": "./filmes/CDD.html"
  };

  // Encontrar filmes que contenham a palavra pesquisada
  let resultados = [];
  for (let titulo in filmes) {
    if (titulo.includes(searchInput)) {
      resultados.push(filmes[titulo]);
    }
  }

  if (resultados.length === 1) {
    window.location.href = resultados[0]; // Redireciona diretamente se houver um único resultado
  } else if (resultados.length > 1) {
    alert("Múltiplos filmes encontrados! Adicione mais palavras-chave para refinar sua busca.");
  } else {
    alert("Filme não encontrado!");
  }
}

// Permite enviar a pesquisa ao pressionar Enter
document.getElementById('search-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    searchFilme();
  }
});
