//STEP 3 — Create PaymentService file
//Task: Create the PaymentService class in the required project structure.
//Required file: src/payment/payment.ts

//The PaymentService class must contain:
//- amount — payment amount provided through the constructor.
//- isPaid — payment status, initially false.

//Constructor requirement:
//- The initial amount must be greater than 0.
//- If the amount is not greater than 0, the constructor must throw an error.

//Methods to implement:
//- applyDiscount(percent)
//- pay()

//ACTUAL RESULT:
//The PaymentService file is ready to be created.

//STEP 4 — Implement PaymentService
//Task: Implement the PaymentService class according to the homework requirements.

//File: src/payment/payment.ts

//Implemented:
//- amount field
//- isPaid field
//- constructor validation
//- applyDiscount(percent)
//- pay()

//ACTUAL RESULT:
//PaymentService was implemented according to the requirements.

export class PaymentService {
    amount: number
    isPaid: boolean

    // Constructor requirement:
    // - The initial amount must be greater than 0.
    // - If the amount is not greater than 0, the constructor must throw an error.
    constructor(amount: number) {
        if (amount <= 0) {
            throw new Error('Amount must be greater than 0')
        }

        this.amount = amount
        this.isPaid = false
    }
//Methods to implement:
//- applyDiscount(percent)
//- pay()

    // applyDiscount(percent)
    // - Accepts a discount from 0 to 100, inclusive.
    // - Does nothing if the percentage is outside the allowed range.
    // - Does nothing if the payment has already been completed.
    // - Each additional discount applies to the current amount.

    applyDiscount(percent: number): void {
        if (percent < 0 || percent > 100 || this.isPaid) {
            return
        }

        this.amount = this.amount * (1 - percent / 100)
    }

    // pay()
    // - Marks the payment as completed.
    // - Returns true for the first successful payment.
    // - Returns false if the payment has already been completed.
    pay(): boolean {
        if (this.isPaid) {
            return false
        }

        this.isPaid = true
        return true
    }
}