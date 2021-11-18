const _sum = require('./taxCalculation.js');

describe('test tax calculate', () => {
    test('120000 to equal Salary = 120000 Tax = exempt Balance = 120000', () => {
        expect(_sum.add(120000)).toBe('Salary = 120000 Tax = exempt Balance = 120000');
    });
    test('160000 to equal Salary = 160000 Tax = 8000 Balance = 152000', () => {
        expect(_sum.add(160000)).toBe('Salary = 160000 Tax = 8000 Balance = 152000');
    });
    test('450000 to equal Salary = 450000 Tax = 45000 Balance = 405000', () => {
        expect(_sum.add(450000)).toBe('Salary = 450000 Tax = 45000 Balance = 405000');
    });
    test('500200 to equal Salary = 500200 Tax = 75030 Balance = 425170', () => {
        expect(_sum.add(500200)).toBe('Salary = 500200 Tax = 75030 Balance = 425170');
    });
    test('999999 to equal Salary = 999999 Tax = 199999.8 Balance = 799999.2', () => {
        expect(_sum.add(999999)).toBe('Salary = 999999 Tax = 199999.8 Balance = 799999.2');
    });
    test('1000890 to equal Salary = 1000890 Tax = 350311.5 Balance = 650578.5', () => {
        expect(_sum.add(1000890)).toBe('Salary = 1000890 Tax = 350311.5 Balance = 650578.5');
    });
    test('4444444 to equal 4444444 Tax = 1333333.2 Balance = 3111110.8', () => {
        expect(_sum.add(4444444)).toBe('Salary = 4444444 Tax = 1333333.2 Balance = 3111110.8');
    });
    test('10000000 to equal Salary = 10000000 Tax = 3500000 Balance = 6500000', () => {
        expect(_sum.add(10000000)).toBe('Salary = 10000000 Tax = 3500000 Balance = 6500000');
    });
});