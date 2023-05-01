export async function postEstimatedExpenses(concepto, monto) {
  let expense = {
    concepto: concepto,
    monto: monto,
    ID_solicitud_viatico: 1,
  };
  const url = "http://localhost:3001/viaticos/";
  const options = {
    method: "POST",
    body: JSON.stringify(expense),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  const rawResponse = await fetch(url, options);
  const response = await rawResponse.json();
  console.log(JSON.stringify(response));
} 
