function mxnFormat(num){
    let USDollar = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
    });
    let numeroConvertido = USDollar.format(num)
    return numeroConvertido
}

module.exports = mxnFormat