async function getCep(cep) {
  if (cep.length !== 8) {
      alert('CEP deve conter 8 caracteres.');
      return;
  } 

  try {
      const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);
      const data = await response.json();

      if (response.status !== 200) {
          throw new Error();
      }

      const resultadoDiv = document.querySelector('.resultado');
      resultadoDiv.innerHTML = '';
      resultadoDiv.innerHTML = `
          <ul>
              <li><strong>CEP:</strong> ${data.cep}</li>
              <li><strong>Estado:</strong> ${data.state}</li>
              <li><strong>Cidade:</strong> ${data.city}</li>
              <li><strong>Bairro:</strong> ${data.neighborhood}</li>
              <li><strong>Rua:</strong> ${data.street}</li>
          </ul>
          <p style="color: green;" >Consulta realizada com sucesso!</p>
      `;
  } catch (error) {
      const resultadoDiv = document.querySelector('.resultado');
      resultadoDiv.innerHTML = `
          <p style="color: red;">Cep inválido.</p>
      `;
  }
}

const btnConsultar = document.querySelector('.btnConsultar');

btnConsultar.addEventListener('click', () => {
  const cep = document.querySelector('#idCep');
  const valorCep = cep.value;

  getCep(valorCep);
});
