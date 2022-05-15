function fetchData() {
    fetch('work.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        let output = '<h2 class="cvrubrik">CV</h2>'
        data.forEach(function (item) {
          output += `
          <ul class="cvlist">
            <li>Företag: ${item.company}</li>
            <li>År: ${item.year}</li>
            <li>Roll: ${item.work}</li>
          </ul>
        `
        })
        document.getElementById('cv').innerHTML = output
      })
      .catch((error) => {
        console.log(`Error Fetching data : ${error}`)
        document.getElementById('country').innerHTML = 'Error Loading Data'
      })
  }
  
  fetchData()