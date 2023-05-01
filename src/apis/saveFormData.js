export async function saveFormData(formData){

    

    const url = 'http://localhost:3001/expense_reports/';
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    const rawResponse = await fetch(url, options)
    const response = await rawResponse.json();
    console.log(JSON.stringify(response))
}
  
export default saveFormData;

  