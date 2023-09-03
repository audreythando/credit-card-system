Credit Card System Documentation

The Credit Card System is a mobile responsive web application designed for users to manage , display, and submit credit card details for validation. It allows users to add, view, edit, and delete credit card information. 


![Screenshot (103)](https://github.com/audreythando/credit-card-system/assets/82891759/0af9f27f-0940-47b1-9ac0-2cb8e75fee68)




2. System Overview


The Credit Card System consists of two main components:

Credit Card Entry: This component allows users to enter new credit card details. It includes validation for card number, name, expiration date, CVV, and country. Users can submit new cards, and the data is stored in the local storage.

Credit Card Table: This component displays a table of credit card information, including card number, name, expiration date, CVV, and country. Users can search for specific cards, edit card details, and delete cards. The data is retrieved from local storage.





3. Installation

   
To run the Credit Card System on your local environment, follow these steps:

Clone the repository from GitHub.

Navigate to the project directory in your terminal.

Run the following command to install dependencies:

Copy code
npm install
Start the development server:

Copy code
npm start
Open a web browser and access the application at http://localhost:3000.




4. Usage


The system uses Google authentication enabled by  Firebase to allow users to authenticate before use.



 ![Screenshot (104)](https://github.com/audreythando/credit-card-system/assets/82891759/f9b80b07-dcfd-4d49-adff-5b1f5678ca9f)


   

5.Credit Card Entry 



Access the Credit Card Entry page by clicking on the "Sign In with Google" button which then navigates you to the Credit Card page .

Enter the credit card details, including card number, name, expiration date, CVV, and country.If card is from a credit card blocked country then that card will not be able to be validated or submitted.

Click the "Submit Card" button to add the card. The card data will be stored in local storage after being validated.


![Screenshot (110)](https://github.com/audreythando/credit-card-system/assets/82891759/c44e800a-18b0-4dc9-95f8-672471e8c6bb)





Credit Card Table 


Access the Credit Card Table page after clicking on the "Submit" button on the Credit Card page or the drawer in the Navbar.

Use the search fields to filter cards by card number, name, or country.

The table displays the credit card information, including card number, name, expiration date, CVV, and country.

Editing and Deleting Cards 
To edit a card, click the "Edit" button (pencil icon) next to the card in the table. This will open an edit modal.

In the edit modal, update the card details and click "Save" to save the changes.

To delete a card, click the "Delete" button (trash can icon) next to the card in the table.


![Screenshot (113)](https://github.com/audreythando/credit-card-system/assets/82891759/71a453e2-a9e3-47d8-9617-44a4549cae9b)


6. Technical Details


The application is built using React and Material-UI components.

Credit card details are stored in local storage.

Form validation is implemented using Yup for schema validation.

Icons from Material-UI and react-credit-cards-2 are used for UI elements.



7. Contributing 
Contributions to the Credit Card System project are welcome. If you'd like to contribute code, report issues, or suggest improvements, please follow the guidelines in the CONTRIBUTING.md file in the repository.

8. License 
The Credit Card System is released under the MIT License. You are free to use, modify, and distribute the application as per the terms of the license.

This documentation provides an overview of the Credit Card System, its features, installation instructions, and usage guidelines. If you have any further questions or need assistance, please refer to the GitHub repository for additional resources and support.

Thank you for using the Credit Card System!

Feel free to replace placeholders like your-repo-url with actual URLs or information specific to your project. Additionally, consider adding more detailed sections or screenshots if necessary to provide a comprehensive guide to your users.
