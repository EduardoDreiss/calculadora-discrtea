function fatores(n) {
    if (n < 2) {
      return [];
    }
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        return [i, ...fatores(n / i)];
      }
    }
    return [n];
  }
  
  function mdc(num1, num2) {
    while (num2 !== 0) {
      [num1, num2] = [num2, num1 % num2];
    }
    return num1;
  }
  
  function mmc(num1, num2) {
    return (num1 * num2) / mdc(num1, num2);
  }
  
  function parouimpar(num) {
    if (num % 2 === 1) {
      console.log('impar');
      return 'impar';
    } else {
      console.log('par');
      return 'par';
    }
  }
  
  function multiplos(num1, num2) {
    if (num1 % num2 === 0) {
      console.log(`O número ${num1} é múltiplo de ${num2}`);
      return true;
    } else {
      console.log(`O número ${num1} não é múltiplo de ${num2}`);
      return false;
    }
  }
  
  function divisores(num1, num2) {
    if (num1 % num2 === 0) {
      console.log(`O número ${num1} é divisível por ${num2}`);
      return true;
    } else {
      console.log(`O número ${num1} não é divisível por ${num2}`);
      return false;
    }
  }
  
  function primoounao(num) {
    if (num < 2) {
      console.log('não é primo');
      return false;
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          console.log('não é primo');
          return false;
        }
      }
      console.log('primo');
      return true;
    }
  }
  
  function calcular() {
    let escolha = document.getElementById('escolha').value;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
  
    if (escolha === '1') {
      let fatoresVal = fatores(num1);
      document.getElementById('resultado').innerHTML = `Fatores de ${num1}: ${fatoresVal}`;
    } else if (escolha === '2') {
      let mmcVal = mmc(num1, num2);
      document.getElementById('resultado').innerHTML = `O mmc entre ${num1} e ${num2} é: ${mmcVal}`;
    } else if (escolha === '3') {
      let mdcVal = mdc(num1, num2);
      document.getElementById('resultado').innerHTML = `O mdc entre ${num1} e ${num2} é: ${mdcVal}`;
    } else if (escolha === '4') {
      let parImpar = parouimpar(num1);
      document.getElementById('resultado').innerHTML = `O número ${num1} é ${parImpar}`;
    } else if (escolha === '5') {
      let multiplo = multiplos(num1, num2);
      document.getElementById('resultado').innerHTML = `O número ${num1} é ${multiplo ? 'múltiplo' : 'não múltiplo'} de ${num2}`;
    } else if (escolha === '6') {
      let divisivel = divisores(num1, num2);
      document.getElementById('resultado').innerHTML = `O número ${num1} é ${divisivel ? 'divisível' : 'não divisível'} por ${num2}`;
    } else if (escolha === '7') {
      let primo = primoounao(num1);
      document.getElementById('resultado').innerHTML = `O número ${num1} é ${primo ? 'primo' : 'não primo'}`;
    }
  }
