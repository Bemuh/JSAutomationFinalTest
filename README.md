# Task Description

## Launch URL:
[https://www.saucedemo.com/](https://www.saucedemo.com/)

### UC-1: Test Login Form with Empty Credentials

1. Type any credentials into the "Username" and "Password" fields.
2. Clear the inputs.
3. Hit the "Login" button.
4. Check for the error message: **"Username is required"**.

### UC-2: Test Login Form with Credentials by Passing Username

1. Type any credentials in the "Username" field.
2. Enter a password.
3. Clear the "Password" input.
4. Hit the "Login" button.
5. Check for the error message: **"Password is required"**.

### UC-3: Test Login Form with Valid Credentials

1. Type credentials in the "Username" field from the **Accepted username area**.
2. Enter the password as **"secret_sauce"**.
3. Click on the "Login" button.
4. Validate the dashboard title as **"Swag Labs"**.

## Requirements

- **Parallel Execution**: Ensure that all tasks can be executed in parallel.
- **Logging**: Add logging for each test.
- **Data Provider**: Parametrize tests using a Data Provider.
- All tasks should meet the requirements of the above test cases (UC-1, UC-2, UC-3).

## Additional Options

- **Test Automation Tool**: WebDriverIO
- **Supported Browsers**:
  1. Chrome
  2. Edge
- **Locators**: XPath
- **Design Patterns**: Page Object
- **Assertions**: Use assertions from the selected test framework
- **[Optional] Loggers**: Use from the selected framework.

---

Please ensure this task description is included as a `README.md` in your solution!
