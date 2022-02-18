var myButton = document.querySelector('button')

myButton.addEventListener('click', dataPrompt)

function dataPrompt() {
    
    var hourlyPay = prompt('Enter your hourly pay', 'Hourly Pay')
    var hoursWorked = prompt('Amount of hours worked', 'Hours worked this week')
    var taxRate = prompt('Enter Tax Rate', 'Tax Rate')
    var grossPay = Number(hourlyPay) * Number(hoursWorked)
    var uncleSams = Number(grossPay) * Number(taxRate)
    var netPay = Number(grossPay) - Number(uncleSams)
    
    document.querySelector('span').innerHTML = `GROSS PAY: $${grossPay} Taxes: $${uncleSams} Net Pay: $${netPay}`
    
    console.log(`GROSS PAY: $${grossPay} Taxes: $${uncleSams} Net Pay: $${netPay}`)

}