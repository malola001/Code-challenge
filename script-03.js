// Function to calculate PAYE (income tax)
function calculatePAYE(grossSalary) {
    let personalRelief = 2400;
    let paye = 0;

    // Progressive tax rates (effective July 2023)
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        paye = (24000 * 0.10) + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        paye = (24000 * 0.10) + (8333 * 0.25) + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
        paye = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (grossSalary - 500000) * 0.325;
    } else {
        paye = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + (grossSalary - 800000) * 0.35;
    }

    // Subtract personal relief
    paye = Math.max(paye - personalRelief, 0);
    return paye;
}

// Function to calculate NHIF deduction
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
}

// Function to calculate NSSF deduction
function calculateNSSF(grossSalary) {
    let tier1 = Math.min(grossSalary, 6000) * 0.06;
    let tier2 = Math.max(0, Math.min(grossSalary - 6000, 12000)) * 0.06;
    return tier1 + tier2;
}

// Main function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;

    // Calculate deductions
    let paye = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);

    // Calculate net salary
    let netSalary = grossSalary - (paye + nhif + nssf);

    // Output the results
    console.log('Gross Salary: Ksh ${grossSalary.toFixed(2)}');
    console.log('PAYE (Tax): Ksh ${paye.toFixed(2)}');
    console.log('NHIF Deduction: Ksh ${nhif.toFixed(2)}');
    console.log('NSSF Deduction: Ksh ${nssf.toFixed(2)}');
    console.log('Net Salary: Ksh ${netSalary.toFixed(2)}');
}

// Example usage
let basicSalary = parseFloat(prompt("Enter basic salary (Ksh): "));
let benefits = parseFloat(prompt("Enter benefits (Ksh): "));

calculateNetSalary(basicSalary, benefits)