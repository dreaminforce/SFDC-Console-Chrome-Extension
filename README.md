
# SFDC Console

SFDC Console is a lightweight Chrome extension designed for Salesforce developers. It streamlines access to the Salesforce Developer Console and Execute Anonymous window directly from your browser. With a single click, you can either open the Developer Console or, if it's already open, launch the Execute Anonymous window.

## Features

- **Quick Access:** Opens the Salesforce Developer Console with one click.
- **Execute Anonymous Window:** If the Developer Console is already open, clicking the extension opens the Execute Anonymous window.
- **Salesforce Specific:** Automatically detects if you're on a Salesforce or Force.com domain and restricts usage to these sites.
- **User-Friendly Alerts:** Informs you when the extension is used on unsupported websites.

## Demo

Check out the extension on the [SFDC Console](https://chromewebstore.google.com/detail/sfdc-console/eeeeobhnlbmdckdncgflimpaianinamf).

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/sfdc-console.git
   ```

2. **Load the extension into Chrome:**
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" by toggling the switch in the top right corner.
   - Click on "Load unpacked" and select the cloned repository folder.

## Usage

1. **Log in to Salesforce:**  
   Ensure you are logged in to your Salesforce instance.

2. **Activate the Extension:**
   - Click the extension icon.
   - **First Click:** If the Developer Console is not already open, a new tab will open with the Developer Console.
   - **Subsequent Click:** If the Developer Console is already open, clicking the icon will open the Execute Anonymous window in a new tab.

3. **Unsupported Domains:**  
   If the extension is activated on a non-Salesforce/Force.com domain, an alert message will notify you that the extension cannot be used on the current website.



## Contributing

Contributions are welcome! If you have any ideas, bug fixes, or improvements, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.
