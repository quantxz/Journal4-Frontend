class ButtonFunctions {

    async requisitionRender() {
        const url = "https://gf-db-transfer-quantxz.vercel.app";
        const urlPath = document.querySelector(".urlPath").value;
        const resultDiv = document.querySelector(".result");

        resultDiv.textContent = 'carregando'
        try {
            const result = await fetch(`${url}${urlPath}`);

            if (!result.ok) {
                throw new Error('Erro ao realizar a requisição');
            }
            const data = await result.json();
            resultDiv.textContent = ''

            data.forEach(obj => {
                const objDiv = document.createElement('div');
                objDiv.textContent = JSON.stringify(obj, null, 4);
                resultDiv.appendChild(objDiv);
            });

        } catch (error) {
            console.error(error);
            resultDiv.textContent = 'rota invalida'
        }
    }

    async copyText() {
        const url = "https://gf-db-transfer-quantxz.vercel.app";
        const urlPath = document.querySelector(".urlPath").value;
        const requisition = `${url}${urlPath}`

        navigator.clipboard.writeText(requisition)
            .then(() => {
                console.log('Texto copiado com sucesso!');
                alert('Texto copiado com sucesso!');
            })
            .catch(err => {
                console.error('Erro ao copiar texto:', err);
                alert('Erro ao copiar texto. Por favor, copie manualmente.');
            });
    }

}