function getDownload() {
    const button = document.getElementById('down');
    button.addEventListener('click', (e) =>{
        console.log('Iniciando download....')
        download();
    })
}

function download() {
    axios({
        url: 'https://shareallfiles.net/eiC3yM',
        method: 'GET',
        responseType: 'blob'
    })
    .then((response) => {
        console.log('Fazendo download....')
        const url = window.URL
                    .createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'CurriculumMarcelo.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log('Download concluído...')
    })
}