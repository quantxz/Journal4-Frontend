const requireButton = document.querySelector(".requireButton");
const resultDiv = document.querySelector(".result");

requireButton.addEventListener("click", async () => {
    const url = "https://gf-db-transfer-quantxz.vercel.app";
    const urlPath = document.querySelector(".urlPath").value;
    resultDiv.textContent = ''
    try {
        const result = await fetch(`${url}${urlPath}`);
        
        if (!result.ok) {
            throw new Error('Erro ao realizar a requisição');
        }
        const data = await result.json();
        resultDiv.innerHTML = '';

        
        data.forEach(obj => {
            const objDiv = document.createElement('div');
            objDiv.textContent = JSON.stringify(obj, null, 4);
            resultDiv.appendChild(objDiv);
        });

    } catch (error) {
        console.error(error);
    }
})
