// Cotação de moedas do dia
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

//Obtendo os elementos do formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");

//Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Captando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

//Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    //Aplica a classe que exibe o footer mostrando o resultado
    footer.classList.add("show-result");
  } catch (error) {
    // remove a classe removendo ele da tela
    footer.classList.remove("show-result");
    
    console.log(error);
    alert("Não foi possível converter.Tente novamente mais tarde.");
  }
}
