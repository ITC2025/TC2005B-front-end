export default function getApiData(){
    fetch('http://localhost:3001/product', { mode: 'cors' })
   .then(response => response.text())
   .then(text => console.log(text))
}