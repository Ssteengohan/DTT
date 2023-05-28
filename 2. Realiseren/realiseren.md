##User stories
***
 
   **User story 1:** *As a user, I want to be able to see a fixed navigation header, so that I can easily navigate through the app.*
   
 - As a user I want to be able to navigate to the Houses page.

 - As a user I want to be able to see what page is currently active.
 
  **Approach**

  1. **HTML Structure:** I will create a basic HTML structure for the navigation header, which will include a container for the navigation links and an indicator to display the    active page.

 2. **Vue.js Routing Setup:** I will set up Vue.js routing using Vue Router. This will allow me to define routes for different pages of the application.

 3. **Navigation Component:** I will create a Vue component for the navigation header. This component will include the navigation links and the logic to highlight the active page.

 4. **CSS Styling:** I will apply CSS styles to the navigation component to make it visually appealing and ensure it remains fixed at the top of the page.

 5. **Implement Navigation Logic:** Inside the navigation component, I will add the logic to highlight the active page. This can be achieved by comparing the current route with the navigation links and applying a CSS class to indicate the active page.

 **Time Taken:** It took approximately 2 hours to complete the implementation of the navigation header, 04 -1 -2023. 
 
 ###### By following this approach, users will have a fixed navigation header that allows them to easily navigate through the app and see which page is currently active.

  **User story 2:** *As a user, I want to be able to see an overview of all available houses as the homepage of the web app, so that I can see what the app has to offer.*
    
 -  As a user I want to be able to see the address, postal code and city of the listing.
    
 -  As a user I want to be able to see the image, size and the number of bedrooms and
    bathrooms of the listing.

**Approach:**

To fulfill the user story of providing an overview of all available houses on the homepage, displaying their address, postal code, city, image, size, number of bedrooms, and number of bathrooms, I will use Vue.js 3, Pinia (state management), HTML, CSS, and connect to the API.

1. **API Integration:** I will connect to the API that provides the house data. This may involve setting up API endpoints and handling data retrieval.

2. **Pinia State Management:** I will set up a Pinia store to manage the house data. This store will contain the necessary state, getters, and actions to fetch the house data from the API.

3. **Homepage Component:** I will create a Vue component for the homepage that will display the overview of available houses. This component will use the Pinia store to fetch the house data and display it in the desired format.

4. **HTML and CSS Styling:** I will create the HTML structure for the homepage component, including appropriate tags to display the house data. I will also apply CSS styles to make the homepage visually appealing and user-friendly.

5. **Testing and Refinement:** I will test the functionality and appearance of the homepage component to ensure it is working as expected. I will make any necessary refinements to improve the user experience.

**Time Taken:** It took approximately 4 hours to complete the implementation of the homepage component and its integration with the API using Pinia, 14-1-2023.

###### By following this approach, users will be able to see an overview of all available houses on the homepage, including their address, postal code, city, image, size, number of bedrooms, and number of bathrooms. The implementation involved Vue.js 3, Pinia, HTML, CSS, and integration with the API.

   
**User story 3:** *As a user, I want to be able to search through the available houses by at least one of the house listing properties, so that I can find specific houses based on search criteria.*
    
 -   As a user I want to be able to clear my search input, after I start typing.
    
 -   As a user I want to be able to see a result indication, informing me about the number of
    results that are found or If my search input did not match any results.

**Approach:**


1. **Search Functionality:** I dedicated approximately 2 hours to implementing the search functionality in Vue.js. This involved setting up a search input field and binding it to a data property. I used computed properties or watch functions to filter the house data based on the search input. Whenever the search input changed, the house data would be filtered accordingly.

2. **Clearing Search Input:** I implemented the functionality to clear the search input. This involved adding a "Clear" button or an "X" icon next to the search input field. When clicked, it would clear the search input and reset the filtered house data to the original dataset.

3. **Result Indication:** I provided a result indication to the user. This included displaying the number of results found or showing a message when the search input didn't match any results. I used conditional rendering techniques in Vue.js to display the appropriate result indication based on the search outcome.

4. **HTML and CSS Styling:** styling the search functionality and result indication using HTML and CSS. I made sure the search input field, the "Clear" button or "X" icon, and the result indication were visually appealing and responsive. I applied appropriate CSS styles to match the overall design of the web app.
5. **Testing and Refinement:** I thoroughly tested the search functionality, including clearing the input and checking the result indications for various scenarios. I made necessary refinements to ensure a smooth user experience and fixed any issues or bugs encountered during testing.

**Time Taken:** It took approximately 4 hours to complete 24-1-2023.

###### By following this approach, users will be able to search through the available houses based on their listing properties. They will have the ability to clear the search input and receive result indications, informing them about the number of results found or indicating when the search input didn't match any results. The implementation utilized Vue.js 3, HTML, and CSS to achieve the desired functionality.




**User story 4:** *As a user, I want to be able to sort the available houses shown on the Homepage by at least one option (price or size), so that I can sort based on my preference.*

**Approach:**


1. **Sorting Functionality:** Implement the sorting functionality in Vue.js. Add sorting options (e.g., price or size) to the user interface and bind them to data properties. Use computed properties or watch functions to sort the house data based on the selected sorting option. Update the sorted house data whenever the sorting option changes.

2. **HTML and CSS Styling:** Style the sorting options to be visually appealing and intuitive for the user. Add dropdown menus or radio buttons to select the sorting option. Apply appropriate CSS styles to match the overall design of the web app.

3. **Testing and Refinement:** Thoroughly test the sorting functionality, ensuring that the house data is correctly sorted based on the selected option. Make necessary refinements to handle any edge cases or unexpected behavior, ensuring a smooth user experience.

4. **Result Indication:** Provide a result indication to the user after sorting the houses. Display the number of results found or show a message when the sorting option doesn't match any results. Use conditional rendering techniques in Vue.js to display the appropriate result indication based on the sorting outcome.

**Time Taken:** 3 hours 31-1-2023.

###### By following these approaches, users will be able to search through the available houses based on their listing properties and sort the houses based on their preferences. The implementation will utilize Vue.js 3, HTML, and CSS to achieve the desired functionality.

**User story 5:** *As a user, I want to be able to access the details of a house, so that I can read more in-depth information about my selected house.*

 - As a user I want to be able to see the address, postal code and city of the
   listing.

 - As a user I want to be able to see the description, image, number of bedrooms
   and bathrooms, the size, construction and if the listing has a garage
   or not.

 - As a user I want to be able to delete and edit the listing, in case it is my
   listing.

**Approach:**

1. **Detail Page with Vue Router:** Implement a detail page for displaying the details of a selected house using Vue Router. Set up routes and navigation to navigate to the detail page when a house is clicked. Pass the necessary data (e.g., house ID or unique identifier) to the detail page to fetch and display the corresponding house details.

2. **Display House Details:** On the detail page, display the following information about the house:
   - Address, postal code, and city of the listing.
   - Description, image, number of bedrooms, and bathrooms.
   - Size, construction details, and whether the listing has a garage or not.

3. **Delete and Edit Functionality:** If the user is the owner of the listing, provide options to delete and edit the listing. Implement appropriate buttons or links to perform these actions. When the delete button is clicked, prompt for confirmation before deleting the listing. When the edit button is clicked, navigate to an edit page or display a form to update the listing information.

4. **HTML and CSS Styling:** Style the detail page to present the house details in an organized and visually appealing manner. Apply appropriate CSS styles to enhance the user experience and match the overall design of the web app.

5. **Testing and Refinement:** Thoroughly test the detail page functionality, including displaying the house details, deleting a listing, and editing a listing. Verify that the correct information is displayed, deletion is successful with confirmation, and editing updates the listing appropriately. Make necessary refinements to handle any edge cases or unexpected behavior encountered during testing.

**Time Taken:**  3 hours 21-2-2023.

###### By following this approach, users will be able to access the details of a selected house on the detail page. The page will display comprehensive information about the house, including address, postal code, city, description, images, bedrooms, bathrooms, size, construction details, and garage availability. If the user owns the listing, they will have the option to delete and edit the listing. The implementation will utilize Vue Router, HTML, and CSS to achieve the desired functionality.


**User story 6:** *As a user, I want to be able to create my listing(s), by completing all the required fields in a form.*

 -  As a user I want to be able to add the address (street name, House number, Addition, Postal Code and City) of my listing.

 -   As a user I want to be able to set an image, a description, a price, the size, the amount of bedrooms and bathrooms, the construction date whether my listing has a garage or not.
 -   As a user if I have not completed all the required fields or there is a validation error in the form, I should see an appropriate error message.
 -   As a user after completing the form and creating the listing, I should be redirected to the newly created listing detail page.
    
**Approach:**

1. **Create Listing Form:** Implement a form using HTML, CSS, and Vue.js to allow users to create their listing. Include all the required fields for the listing, such as address (street name, house number, addition, postal code, and city), image upload, description, price, size, number of bedrooms and bathrooms, construction date, and garage availability.

2. **Validation and Error Handling:** Set up validation for the form fields to ensure that all the required fields are completed and that appropriate data formats are entered (e.g., valid postal code format). Display error messages when there are validation errors or missing fields. Use Vue.js form validation techniques or libraries to handle validation and display error messages dynamically.

3. **Form Submission and Redirect:** Implement the functionality to submit the form and create the listing. When the user clicks the submit button, validate the form fields and handle any validation errors. If the form submission is successful, redirect the user to the newly created listing's detail page using Vue Router.

4. **HTML and CSS Styling:** Style the form to be visually appealing and intuitive for the user. Apply appropriate CSS styles to enhance the form's usability and match the overall design of the web app.

5. **Testing and Refinement:** Thoroughly test the form by completing all the required fields, checking validation errors, and submitting the form to create a listing. Verify that error messages are displayed correctly for validation errors and that the user is redirected to the newly created listing's detail page upon successful submission. Make necessary refinements to handle any edge cases or unexpected behavior encountered during testing.

**Time Taken:** 4 hours 22-2-2023.

###### By following this approach, users will be able to create their listings by completing all the required fields in a form. The form will include address fields, image upload, description, price, size, bedrooms, bathrooms, construction date, and garage availability. Validation will be performed to ensure all required fields are completed and appropriate data formats are entered. Users will receive appropriate error messages for validation errors, and upon successful submission, they will be redirected to the newly created listing's detail page. The implementation will utilize HTML, CSS, and Vue.js to achieve the desired functionality.


**User story 7:** *As the owner of a listing, I want to be able to have an edit and delete button on the detail page of a house that I own, so that I can navigate to the edit page of my listing or delete the listing.*

  **Aproach**

1. **Edit Button:** Add an "Edit" button to the listing detail page for the owner of the listing. The button should be displayed only if the user is the owner of the listing. When clicked, the user should be navigated to the edit page of their listing using Vue Router.

2. **Delete Button:** Add a "Delete" button to the listing detail page for the owner of the listing. The button should also be displayed only if the user is the owner of the listing. When clicked, prompt the user for confirmation before deleting the listing. If the user confirms the deletion, proceed to delete the listing and navigate them back to an appropriate page, such as the homepage or a confirmation page.

3. **HTML and CSS Styling:** Style the edit and delete buttons to be visually distinguishable and intuitive for the user. Apply appropriate CSS styles to enhance the user experience and match the overall design of the web app.

4. **Testing and Refinement:** Thoroughly test the functionality of the edit and delete buttons on the listing detail page. Verify that the buttons are displayed correctly for the owner of the listing and that they navigate to the appropriate pages or perform the necessary actions (confirmation for deletion). Make necessary refinements to handle any edge cases or unexpected behavior encountered during testing.

**Time Taken:**  2 hours 22-2-2023.

###### By following this approach, the owner of a listing will have the ability to edit and delete their listing from the detail page. The edit button will navigate them to the edit page for their listing, where they can update the information. The delete button will prompt for confirmation and, upon confirmation, delete the listing. The implementation will utilize HTML, CSS, and Vue Router to achieve the desired functionality.

**User story 8:** *As the owner of a listing, I want to be able to edit my listing(s).*

 -   As a user I want to be able to edit the address (street name, House number, Addition, Postal Code and City) of my listing.
    
 -   As a user I want to be able to edit the image, description, price, size, amount of bedrooms and bathrooms, the construction date and whether my listing has a garage or not.
    
 -   As a user If I have not completed all the required fields or there is a validation error in the form, I want to be able to see an appropriate error message.

    
  **Aproach**

1. **Edit Listing Form:** Implement an edit form using HTML, CSS, and Vue.js to allow the owner of a listing to edit their listing details. Include all the required fields for editing the listing, such as address (street name, house number, addition, postal code, and city), image update, description, price, size, number of bedrooms and bathrooms, construction date, and garage availability.

2. **Populate Form with Existing Data:** Pre-populate the edit form with the existing data of the listing. Retrieve the current listing details from the database or storage and populate the corresponding form fields with the existing values. This allows the owner to see the current information and make necessary edits.

3. **Validation and Error Handling:** Set up validation for the form fields to ensure that all the required fields are completed and that appropriate data formats are entered (e.g., valid postal code format). Display error messages when there are validation errors or missing fields. Use Vue.js form validation techniques or libraries to handle validation and display error messages dynamically.

4. **Update Listing Details:** Implement the functionality to update the listing details when the owner submits the edit form. Validate the form fields and handle any validation errors. If the form submission is successful, update the listing details in the database or storage with the new values.

5. **HTML and CSS Styling:** Style the edit form to be visually appealing and intuitive for the user. Apply appropriate CSS styles to enhance the form's usability and match the overall design of the web app.

6. **Testing and Refinement:** Thoroughly test the edit form by pre-populating it with existing data, making edits to the fields, checking validation errors, and submitting the form to update the listing. Verify that error messages are displayed correctly for validation errors and that the listing details are updated correctly upon successful submission. Make necessary refinements to handle any edge cases or unexpected behavior encountered during testing.

**Time Taken:**  3 hours 22-2-2023.

###### By following this approach, the owner of a listing will have the ability to edit their listing using an edit form. The form will allow them to update the address, image, description, price, size, bedrooms, bathrooms, construction date, and garage availability. Existing data will be pre-populated in the form, and validation will be performed to ensure all required fields are completed and appropriate data formats are entered. Users will receive appropriate error messages for validation errors, and upon successful submission, the listing details will be updated. The implementation will utilize HTML, CSS, and Vue.js to achieve the desired functionality.

**User story 9:** *As the owner of a listing, I want to be able to delete my listing(s).*  

 - As a user I want to be able to see a warning before the successful deletion of
   my listing.

  **Aproach**

1. **Delete Button:** Add a "Delete" button to the listing detail page for the owner of the listing. When clicked, display a confirmation popup or warning before proceeding with the deletion of the listing.

2. **Confirmation Popup:** Implement a popup or modal using HTML, CSS, and Vue.js to display a warning message before deleting the listing. The popup should include a message informing the owner that the deletion is permanent and cannot be undone. Provide options to confirm or cancel the deletion.

3. **Deletion Confirmation:** If the owner confirms the deletion, proceed with deleting the listing from the database or storage. If the owner cancels the deletion, close the popup and do not perform any deletion actions.

4. **HTML and CSS Styling:** Style the confirmation popup to be visually appealing and attention-grabbing. Apply appropriate CSS styles to enhance the user experience and match the overall design of the web app.

5. **Testing and Refinement:** Thoroughly test the functionality of the confirmation popup and deletion process. Verify that the popup is displayed correctly when the delete button is clicked, and the owner receives a warning message. Test both confirmation and cancellation scenarios to ensure the listing is deleted or kept intact as expected. Make necessary refinements to handle any edge cases or unexpected behavior encountered during testing.

**Time Taken:**  2 hours 22-2-2023.

###### By following this approach, the owner of a listing will have the ability to delete their listing with a confirmation popup. The popup will display a warning message about the permanent nature of the deletion and provide options to confirm or cancel the deletion. If the owner confirms the deletion, the listing will be permanently deleted. If the owner cancels the deletion, the listing will be kept intact. The implementation will utilize HTML, CSS, and Vue.js to achieve the desired functionality.

**User story 10:** *As a user, I want to be able to see more information about the company.*

  -  As a developer I will display a confirmation message before deleting the listing.
  -  As a developer I will handle the owner confirmation to delete the listing.
  -  As a developer I will delete the listing from the database.

  **Aproach**

1. **About Page:** Create an About page using HTML and CSS to display more information about the company. This page should provide details such as the company's background, mission, values, team members, and any other relevant information that users might find valuable.

2. **HTML and CSS Styling:** Design and style the About page to be visually appealing and informative. Apply appropriate CSS styles to enhance the presentation of the company information and match the overall design of the web app.

3. **Testing and Refinement:** Thoroughly test the About page to ensure that all the company information is displayed correctly and that the page provides a good user experience. Verify that the content is accurate and up-to-date. Make necessary refinements to improve the layout or address any issues encountered during testing.
**Time Taken:**  2 hours 22-2-2023.

###### By following this approach, users will be able to access an About page that provides more information about the company. The page will be designed using HTML and CSS to present the company's background, mission, values, team members, and other relevant details. The implementation will focus on creating a visually appealing and informative page that aligns with the overall design of the web app.

[Github repository](https://github.com/Ssteengohan/DTT)
