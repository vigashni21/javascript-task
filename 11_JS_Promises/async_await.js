

const url = 'https://restcountries.com/v2/all'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => console.error(error))
  
  
  //  async and await
  
  const fetchData = async () => {
      try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
      } catch (err) {
        console.error(err)
      }
    }
    console.log('===== async and await')
    fetchData()

const square = async function (n) {
    return n * n
  };
  square(2)
  .then(value => console.log(value))
  .catch(error => console.error(error));
