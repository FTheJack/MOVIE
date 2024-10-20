// Variáveis categorias

let campoAventura

let campoFantasia

let campoDrama

let campoSuspense

let campoRomance

let campoTerror



let campoIdade



function setup() {

  createCanvas(800, 400);

  createElement("h2", "Recomendador de Filmes");

  createSpan("Sua idade: ");

  campoIdade = createInput("15");

  campoAventura = createCheckbox("Gosta de aventura? ");     

  campoFantasia = createCheckbox("Gosta de fantasia? ");

  campoDrama = createCheckbox("Gosta de drama? ");

  campoSuspense = createCheckbox("Gosta de suspense? ");

  campoRomance = createCheckbox("Gosta de romance? ");

  campoTerror = createCheckbox("Gosta de Terror? ");

}



function draw() {

  background(202,210,197);

  let idade = campoIdade.value();

  let gostaAventura = campoAventura.checked();

  let gostaFantasia = campoFantasia.checked();

  let gostaDrama = campoDrama.checked();

  let gostaSuspense = campoSuspense.checked();

  let gostaRomance = campoRomance.checked();

  let gostaTerror = campoTerror.checked();

  let recomendacao = geraRecomendacao(idade, gostaAventura, gostaFantasia, gostaDrama, gostaSuspense, gostaRomance, gostaTerror);

  fill(color(82, 121, 111));

  textAlign(CENTER, CENTER);

  textSize(38);

  text(recomendacao, width / 2, height / 2);  

}



function geraRecomendacao(idade, gostaAventura, gostaFantasia, gostaDrama, gostaSuspense, gostaRomance, gostaTerror) {

  if(idade >= 10) {

    if(idade >= 12) {

      if(idade >= 14) {

        if(idade >= 16) {

          if(idade >= 18) {

            if(gostaDrama && gostaTerror || gostaDrama) {

              return "A orfã";

            } if(gostaSuspense && gostaTerror || gostaSuspense) {

              return "A Freira";

            }

            

          } else {

            if(gostaDrama || gostaTerror) {

              return "Perfect Blue";

            } if(gostaAventura || gostaSuspense) {

              return "Mad Max";

            }

          }

          

        } else {

          if(gostaDrama && gostaRomance) {

            return "Memórias de uma Gueixa";

          } if(gostaRomance) {

            return "Amélie Poulain";

          } else if(gostaDrama || gostaFantasia || gostaSuspense || gostaTerror) {

            return "Jovens Bruxas";

          }

        }

        

      } else {

        if(gostaAventura && gostaFantasia || gostaFantasia) {

          return "Jumanji";

        } if(gostaDrama && gostaRomance || gostaRomance) {

          return "Your name";

        } else if(gostaDrama) {

          return "O pijama do menino listrado";

        } else if(gostaAventura) {

          return "O Espetacular Homem-Aranha 2: A ameaça de Electro";

        }

      }

      

    } else {

      if(gostaAventura && gostaDrama) {

        return "Interestelar";

      } if(gostaDrama) {

        return "Divertida Mente 2";

      } else if(gostaAventura) {

        return "Um Gato de Sorte";

      }

    }

    

  } else {

    if(gostaAventura || gostaFantasia) {

      return "A Viagem de Gulliver";

    } if(gostaSuspense) {

      return "Jurassic Park";

    } else if(gostaDrama || gostaRomance ) {

      return "Titanic";

    }

  }

}





