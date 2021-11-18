
class taxCalculation {
    add(salary) {
        
        const result = CalculateTax(salary);
        console.log(result);
        return `${result}`;
        
    }
}
function CalculateTax(salary) {

    let balance; //ยอดคงเหลือ
    let tax; //ภาษีที่ต้องชำระ
    let taxRate;

    if (salary <= 150000) {
        tax = 'exempt';
        balance = salary;
        taxRate = 'exempt';
    }
    else if (salary >= 150001 && salary <= 300000) {
        tax = (salary * 5) / 100;
        balance = salary - tax;
        taxRate = 'Tax rate 5%';
    }
    else if (salary >= 300001 && salary <= 500000) {
        tax = (salary * 10) / 100;
        balance = salary - tax;
        taxRate = 'Tax rate 10%';
    }
    else if (salary >= 500001 && salary <= 750000) {
        tax = (salary * 15) / 100;
        balance = salary - tax;
        taxRate = 'Tax rate 15%';
    }
    else if (salary >= 750001 && salary <= 1000000) {
        tax = (salary * 20) / 100;
        balance = salary - tax;
        taxRate = 'Tax rate 20%';
    }
    else if (salary >= 10000001 && salary <= 2000000) {
        tax = (salary * 25) / 100;
        balance = salary - tax;
        taxRate = 'Tax rate 25%';
    }
    else if (salary >= 2000001 && salary <= 5000000) {
        tax = (salary * 30) / 100;
        balance = salary - tax;
        taxRate = 'Tax rate 30%';
    }
    else {
        tax = (salary * 35) / 100;
        balance = salary - tax;
        taxRate = 'Tax rate 35%';
    }
    console.log(taxRate);
    return `Salary = ${salary} Tax = ${tax} Balance = ${balance}`;
}
module.exports = new taxCalculation;