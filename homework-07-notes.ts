//STEP 1 — Clone the repository
//Task: Clone the provided GitHub repository for Homework 7.
//- Repository: https://github.com/vladimir-tl/calc-ts-jest-template.git
//- Clone the repository into the WebStormProjects folder.
//- Open the cloned project in WebStorm.

//Terminal command:
//git clone https://github.com/vladimir-tl/calc-ts-jest-template.git

//Expected project location:
//C:\,,,\WebstormProjects\calc-ts-jest-template

//ACTUAL RESULT:
//Repository was cloned successfully.
//The project was opened in WebStorm.
//The cloned repository is currently empty.


//STEP 2 — Install dependencies and run the existing tests
//Task: Install the project dependencies and verify that the existing test suite works.
//- Install all dependencies from package.json.
//- Run the existing Jest test suite.
//- Verify that all existing tests pass.

//Terminal command:
//npm install  - зависимости установлены

//Terminal command:
//npx jest  - исходное состояние тестов

//EXPECTED RESULT:
//All existing test suites pass.

//ACTUAL RESULT:
//277 packages were added.
//0 vulnerabilities were found.
//5 test suites passed.
//32 tests passed.
//The existing project works successfully.

//STEP 3 — Study RiskCalculator and RiskClass
//Task: Understand how RiskCalculator determines the risk class.
//- RiskCalculator uses Application.balance.
//- RiskClass contains three possible values: LOW, MEDIUM and HIGH.
//- calculate() returns a RiskClass value based on the application balance.

//Risk calculation rules:
//- balance < 0 → HIGH
//- balance <= 10000 → LOW
//- balance <= 25000 → MEDIUM
//- balance > 25000 → HIGH

//ACTUAL RESULT:
//RiskCalculator and RiskClass were reviewed.
//The risk calculation boundaries are understood.

//STEP 4 — Review the existing RiskCalculator tests
//Task: Review the existing test file before completing the TODO tests.
//- File: test/risk-calculator/risk-calculator.test.ts
//- The test file already contains test groups for LOW, MEDIUM and HIGH risk.
//- Some tests were already implemented.
//- Several tests contained TODO comments.

//ACTUAL RESULT:
//The existing test structure was reviewed.
//The missing test cases were identified.


//STEP 5 — Complete the LOW risk tests
//Task: Add tests for the LOW risk boundaries.
//- Test balance 0.
//- Test balance exactly 10000.
//- Verify that RiskCalculator returns RiskClass.LOW.

//Code added:
//application.balance = 0
//expect(calculator.calculate(application)).toBe(RiskClass.LOW)

//application.balance = 10000
//expect(calculator.calculate(application)).toBe(RiskClass.LOW)

//ACTUAL RESULT:
//LOW risk boundary tests were completed.


//STEP 6 — Complete the MEDIUM risk tests
//Task: Add tests for the MEDIUM risk boundaries.
//- Test balance 10001.
//- Test balance exactly 25000.
//- Verify that RiskCalculator returns RiskClass.MEDIUM.

//Code added:
//application.balance = 10001
//expect(calculator.calculate(application)).toBe(RiskClass.MEDIUM)

//application.balance = 25000
//expect(calculator.calculate(application)).toBe(RiskClass.MEDIUM)

//ACTUAL RESULT:
//MEDIUM risk boundary tests were completed.


//STEP 7 — Fix an error in the MEDIUM risk test
//Task: Fix the test callback so that it uses the application variable from the describe scope.

//Incorrect code:

//test('returns MEDIUM when the balance is exactly 25000', (application) => {

//Problem:
//The test callback parameter named application was incorrect.
//It shadowed the application variable declared in the describe block.

//Correct code:
//test('returns MEDIUM when the balance is exactly 25000', () => {

//ACTUAL RESULT:
//The incorrect test parameter was removed.
//The test uses the application created in beforeEach().


//STEP 8 — Complete the HIGH risk tests
//Task: Add tests for the HIGH risk boundaries.
//- Test balance 25001.
//- Test balance exactly 50000.
//- Test negative balance -100.
//- Verify that RiskCalculator returns RiskClass.HIGH.

//Code added:
//application.balance = 25001
//expect(calculator.calculate(application)).toBe(RiskClass.HIGH)

//application.balance = 50000
//expect(calculator.calculate(application)).toBe(RiskClass.HIGH)

//application.balance = -100
//expect(calculator.calculate(application)).toBe(RiskClass.HIGH)

//ACTUAL RESULT:
//HIGH risk boundary tests were completed.


//STEP 9 — Run the completed Jest test suite
//Task: Run all tests after completing the RiskCalculator test cases.
//- Verify that the completed tests work together with the existing tests.

//Terminal command:
//npx jest

//EXPECTED RESULT:
//All test suites pass.
//All tests pass.

//ACTUAL RESULT:
//The complete Jest test suite passed successfully.


//STEP 10 — Review the final RiskCalculator test file
//Task: Review the completed test file before submitting the homework.
//- Check LOW tests.
//- Check MEDIUM tests.
//- Check HIGH tests.
//- Check imports.
//- Check describe blocks.
//- Check beforeEach().
//- Check that every TODO test was completed.

//ACTUAL RESULT:
//The RiskCalculator test file was completed.
//All required risk boundary cases were covered.


//STEP 11 — Check Git repository status
//Task: Check which files were changed in the local Git repository.

//Terminal command: git status

//EXPECTED RESULT:
//Git should show the modified or newly created homework files.

//ACTUAL RESULT:
//The local Git repository was checked before creating the final commit.


//STEP 12 — Add the homework changes to staging
//Task: Add the completed homework files to the Git staging area.

//Terminal command: git add .

//ACTUAL RESULT:
//The homework changes were added to the Git staging area.


//STEP 13 — Create the homework commit
//Task: Create a Git commit containing the completed RiskCalculator tests.

//Terminal command: git commit -m "Complete risk calculator tests"

//ACTUAL RESULT:
//The commit was created successfully.


//STEP 14 — Rename the original repository remote
//Task: Keep the original instructor repository as an upstream remote.
//- Rename the existing origin remote to upstream.

//Terminal command: git remote rename origin upstream

//EXPECTED RESULT:
//The original repository is available as upstream.

//ACTUAL RESULT:
//The original remote was renamed to upstream.


//STEP 15 — Add the personal GitHub repository as origin
//Task: Add a personal GitHub repository where the completed homework will be pushed.

//Personal repository:
//https://github.com/vladimirodobed/homework-07-risk-calculator.git

//Terminal command: git remote add origin https://github.com/vladimirodobed/homework-07-risk-calculator.git

//ACTUAL RESULT:
//The personal GitHub repository was added as origin.


//STEP 16 — Verify Git remotes
//Task: Verify that origin and upstream point to the correct repositories.

//Terminal command: git remote -v

//EXPECTED RESULT:
//origin   https://github.com/vladimirodobed/homework-07-risk-calculator.git
//upstream https://github.com/vladimir-tl/calc-ts-jest-template.git

//ACTUAL RESULT:
//Two remotes were configured:
//- origin → personal homework repository.
//- upstream → original instructor repository.


//STEP 17 — Push the homework to GitHub
//Task: Push the main branch to the personal GitHub repository.

//Terminal command: git push -u origin main

//EXPECTED RESULT:
//The local main branch is pushed to the personal GitHub repository.
//The local main branch tracks origin/main.

//ACTUAL RESULT:
//The push was initially rejected with HTTP 403 because GitHub authentication
//was using incorrect credentials.

//The GitHub account was checked in WebStorm:
//Settings → Version Control → GitHub

//The GitHub account vladimiropodobed was already connected.

//After authentication was corrected, the command was executed again: git push -u origin main

//Result:
//branch 'main' set up to track 'origin/main'.
//Everything up-to-date.

//The homework repository was successfully published on GitHub.


//STEP 18 — Verify the GitHub repository
//Task: Open the personal GitHub repository and verify that the homework files are present.

//Repository: https://github.com/vladimiropodobed/homework-07-risk-calculator

//EXPECTED RESULT:
//The repository contains the completed Homework 7 project.

//ACTUAL RESULT:
//The repository was created as a public GitHub repository.
//The main branch is available on GitHub.


//STEP 19 — Add homework-07-notes.ts
//Task: Keep a journal of the Homework 7 steps in the project.

//File: homework-07-notes.ts

//ACTUAL RESULT:
//The notes file was created locally in the project root.
//The file contains the documented steps performed during the homework.


//STEP 20 — Add the notes file to Git
//Task: Add homework-07-notes.ts to the Git staging area.

//Terminal command: git add homework-07-notes.ts

//ACTUAL RESULT:
//homework-07-notes.ts was added to the staging area.


//STEP 21 — Commit the homework notes
//Task: Create a commit containing the homework notes.

//Terminal command: git commit -m "Add homework 07 notes"

//ACTUAL RESULT:
//PENDING — the commit has not been created yet.


//STEP 22 — Push the homework notes to GitHub
//Task: Push the latest commit containing homework-07-notes.ts to GitHub.

//Terminal commands:
//git add homework-07-notes.ts
//git commit -m "Add homework 07 notes"

//EXPECTED RESULT:
//The current version of homework-07-notes.ts is added to the staging area.
//A new Git commit is created containing the latest changes to the notes file.

//ACTUAL RESULT:
//A previous commit containing homework-07-notes.ts already exists.
//After that commit, the notes file was modified again.
//The current changes are not staged yet.

//STEP 23 — Commit the homework notes
//Task: Create a Git commit containing the current version of homework-07-notes.ts.

//Terminal commands:
//git add homework-07-notes.ts
//git commit -m "Update homework 07 notes"

//EXPECTED RESULT:
//The current version of homework-07-notes.ts is added to the staging area.
//A new Git commit is created containing the latest changes to the notes file.

//ACTUAL RESULT:
//The current changes to homework-07-notes.ts were staged successfully.
//A new commit was created:
//8be13c5 Update homework 07 notes
//The commit contains the latest version of homework-07-notes.ts.
