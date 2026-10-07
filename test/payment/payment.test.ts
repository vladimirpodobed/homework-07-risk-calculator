import { PaymentService } from '../../src/payment/payment'

//STEP 5 — Write and run PaymentService unit tests
//Task: Create Jest unit tests for PaymentService.
//- Cover valid behaviour.
//- Cover invalid input.
//- Cover boundary values.
//- Test constructor, applyDiscount() and pay().

// Test constructor behaviour
describe('PaymentService constructor', () => {

    // Verify that a valid payment is created with the correct initial state
    test('creates a payment with the correct amount and unpaid status', () => {
        const payment = new PaymentService(100)

        expect(payment.amount).toBe(100)
        expect(payment.isPaid).toBe(false)
    })

    // Verify that zero amount is rejected
    test('throws an error when amount is zero', () => {
        expect(() => new PaymentService(0)).toThrow()
    })

    // Verify that a negative amount is rejected
    test('throws an error when amount is negative', () => {
        expect(() => new PaymentService(-100)).toThrow()
    })
})


// Test applyDiscount() behaviour
describe('PaymentService applyDiscount', () => {

    // Verify that a valid discount changes the payment amount
    test('applies a valid discount', () => {
        const payment = new PaymentService(100)

        payment.applyDiscount(20)

        expect(payment.amount).toBe(80)
    })

    // Verify that each additional discount is applied to the current amount
    test('applies discount to the current amount', () => {
        const payment = new PaymentService(100)

        payment.applyDiscount(20)
        payment.applyDiscount(10)

        expect(payment.amount).toBe(72)
    })

    // Boundary value: 0% discount
    test('accepts 0 percent discount', () => {
        const payment = new PaymentService(100)

        payment.applyDiscount(0)

        expect(payment.amount).toBe(100)
    })

    // Boundary value: 100% discount
    test('accepts 100 percent discount', () => {
        const payment = new PaymentService(100)

        payment.applyDiscount(100)

        expect(payment.amount).toBe(0)
    })

    // Verify that a negative discount does not change the payment
    test('does nothing for a negative discount', () => {
        const payment = new PaymentService(100)

        payment.applyDiscount(-10)

        expect(payment.amount).toBe(100)
        expect(payment.isPaid).toBe(false)
    })

    // Verify that a discount above 100% does not change the payment
    test('does nothing for a discount greater than 100', () => {
        const payment = new PaymentService(100)

        payment.applyDiscount(101)

        expect(payment.amount).toBe(100)
        expect(payment.isPaid).toBe(false)
    })

    // Verify that discount cannot be applied after payment is completed
    test('does not apply discount after payment is completed', () => {
        const payment = new PaymentService(100)

        payment.pay()
        payment.applyDiscount(20)

        expect(payment.amount).toBe(100)
        expect(payment.isPaid).toBe(true)
    })
})


// Test pay() behaviour
describe('PaymentService pay', () => {

    // Verify that the first payment changes the status to paid
    test('marks the payment as paid', () => {
        const payment = new PaymentService(100)

        const result = payment.pay()

        expect(result).toBe(true)
        expect(payment.isPaid).toBe(true)
    })

    // Verify that repeated payment returns false
    test('returns false when payment is already completed', () => {
        const payment = new PaymentService(100)

        payment.pay()
        const result = payment.pay()

        expect(result).toBe(false)
        expect(payment.isPaid).toBe(true)
    })
})

//Terminal command: npx jest test/payment/payment.test.ts

//EXPECTED RESULT: All PaymentService tests pass.

//ACTUAL RESULT:
//1 test suite passed.
//12 tests passed.
//0 snapshots.
//PaymentService unit tests completed successfully.


//STEP 6 — Run tests and check coverage
//Task: Run the complete Jest test suite and check the test coverage report.
//- Verify that all existing test suites pass.
//- Verify the coverage of the new PaymentService implementation.

//Terminal command: npx jest --coverage

//EXPECTED RESULT: All test suites pass.
//The PaymentService implementation has full coverage:
//- Statements: 100%
//- Branches: 100%
//- Functions: 100%
//- Lines: 100%

//The coverage report is generated successfully.

//ACTUAL RESULT:
//6 test suites passed.
//44 tests passed.
//0 snapshots.

//Overall project coverage:
//- Statements: 80.28%
//- Branches: 76.47%
//- Functions: 72.72%
//- Lines: 80.28%

//PaymentService coverage:
//- Statements: 100%
//- Branches: 100%
//- Functions: 100%
//- Lines: 100%

//The PaymentService implementation is fully covered by tests.

