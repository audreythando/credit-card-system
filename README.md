# 💳 Credit Card System

The **Credit Card System** is a mobile-responsive web application designed for users to manage, display, and submit credit card details for validation. It allows users to add, view, edit, and delete credit card information effortlessly.

## 📸 Screenshot
![Credit Card System Screenshot](screenshot_103.png)

## 📝 System Overview

The Credit Card System consists of two main components:

1. **Credit Card Entry**: This component allows users to enter new credit card details. It includes validation for card number, name, expiration date, CVV, and country. Users can submit new cards, and the data is stored in the local storage.

2. **Credit Card Table**: This component displays a table of credit card information, including card number, name, expiration date, CVV, and country. Users can search for specific cards, edit card details, and delete cards. The data is retrieved from local storage.

## 🔧 Installation

To run the Credit Card System on your local environment, follow these steps:

1. **Clone the repository from GitHub**:
   ```bash
   git clone <your-repo-url>
   ```

2. **Navigate to the project directory in your terminal**:
   ```bash
   cd credit-card-system
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Open a web browser and access the application at** `http://localhost:3000`.

## 🚀 Usage

The system uses Google authentication enabled by Firebase to allow users to authenticate before use.

![Google Authentication Screenshot](screenshot_104.png)

### 1. Credit Card Entry

- **Access the Credit Card Entry page**: Click on the "Sign In with Google" button, which navigates you to the Credit Card page.
- **Enter the credit card details**: Input card number, name, expiration date, CVV, and country. If the card is from a blocked country, it will not be validated or submitted.
- **Submit the card**: Click the "Submit Card" button to add the card. The card data will be stored in local storage after validation.

![Credit Card Entry Screenshot](screenshot_110.png)

### 2. Credit Card Table

- **Access the Credit Card Table page**: This can be done by clicking on the "Submit" button on the Credit Card page or using the drawer in the Navbar.
- **Filter cards**: Use the search fields to filter cards by card number, name, or country.
- **View card details**: The table displays credit card information, including card number, name, expiration date, CVV, and country.

### Editing and Deleting Cards

- **Edit a card**: Click the "Edit" button (pencil icon) next to the card in the table to open an edit modal. Update the card details and click "Save" to save the changes.
- **Delete a card**: Click the "Delete" button (trash can icon) next to the card in the table to remove it.

![Credit Card Table Screenshot](screenshot_113.png)
![Edit and Delete Screenshot](screenshot_115.png)

## ⚙️ Technical Details

- **React** and **Material-UI** components are used to build the application.
- Credit card details are stored in local storage.
- **Yup** is used for form validation.
- Icons from **Material-UI** and **react-credit-cards-2** are used for UI elements.

## 🤝 Contributing

Contributions to the Credit Card System project are welcome. If you'd like to contribute code, report issues, or suggest improvements, please follow the guidelines in the `CONTRIBUTING.md` file in the repository.

## 📄 License

The Credit Card System is released under the MIT License. You are free to use, modify, and distribute the application as per the terms of the license.

---

This documentation provides an overview of the Credit Card System, its features, installation instructions, and usage guidelines. If you have any further questions or need assistance, please refer to the GitHub repository for additional resources and support.

Thank you for using the Credit Card System!
```

