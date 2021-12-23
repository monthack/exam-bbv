
    let url = "https://api.datos.gob.mx/v1/calidadAire";
    axios.get(url)
    .then(function(response){
        let data = [];
        data = response.data.results;
        let body = '';
        for(let i = 0; i < data.length; i++){
            let measurements  = data[i].stations[0].measurements;
            
            for(let j = 0; j < measurements.length; j++){
                let indexes = data[i].stations[0].indexes;
                
                for(let r = 0; r < indexes.length; r++){
                        body += `<tr>
                        <td>${data[i].stations[0].name}</td>
                        <td>${data[i].stations[0].source_id}</td>
                        <td>${data[i].stations[0].indexes[r].scale}</td>
                        <td>${data[i].stations[0].indexes[r].value}</td>
                        <td>${data[i].stations[0].measurements[j].pollutant}</td>
                        <td>${data[i].stations[0].location.lat}</td>
                        <td>${data[i].stations[0].location.lon}</td>
                    </tr>`;
                }
            
            }
        }
        document.getElementById('table').innerHTML = body;
    })
    .catch(function (error){
        console.log(error);
    });



