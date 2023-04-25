function getDownload() {
    const button = document.getElementById('down');
    button.addEventListener('click', (e) =>{
        console.log('Iniciando download....')
        download();
    })
}

function download() {
    axios({
        url: 'https://download1493.mediafire.com/9jjza4z6rjaggb6qzxqwtW4G2oWlThNXjc93J1x_ZHbROeg_t45AQJwL_IhbT_B7OytNu6xP0Y7-5DMuRcmr-K8DprtF8Hg/tcuhtk6fdax10qh/Curriculum.pdf',
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