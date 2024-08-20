
console.log(`1. =====Constructor function for Bank=====`);

function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}

console.log(`2. =====Create bank =====`);

const yesBank = new Bank("Yes Bank", "Mumbai", "YESB0MUM123", "BR123");
const sbiBank = new Bank("SBI Bank", "Delhi", "SBIN0DEL456", "BR456");
const mahBank = new Bank("Mah Bank", "Chennai", "MAHB0CHE789", "BR789");
const axisBank = new Bank("Axis Bank", "Bangalore", "AXIS0BAN001", "BR001");

console.log(`2. =====Log bank details=====`);

console.log(`Bank Details: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);
console.log(`Bank Details: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);
console.log(`Bank Details: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}`);
console.log(`Bank Details: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);


console.log(`3 and 4. =====Add data members to the prototype object=====`);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";



console.log(`5. =====Log openTime and closeTime for sbiBank=====`);

console.log(`sbiBank openTime: ${sbiBank.openTime}, closeTime: ${sbiBank.closeTime}`);

console.log(`6. ==========Log bankName and closeTime for axisBank==========`);

console.log(`axisBank bankName: ${axisBank.bankName}, closeTime: ${axisBank.closeTime}`);

console.log(`7. =====Log bankName, branchCode, and openTime for yesBank=====`);

console.log(`yesBank bankName: ${yesBank.bankName}, branchCode: ${yesBank.branchCode}, openTime: ${yesBank.openTime}`);