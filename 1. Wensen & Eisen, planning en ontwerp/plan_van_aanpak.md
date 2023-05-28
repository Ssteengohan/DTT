# FRONT-END DEVELOPMENT
***

This phase consists of a development assessment made with Vue.js and JavaScript.

1.  We have to log the hours we spend on the project in the provided Excel document, provided with a detailed description of our activities.
    

**THE ASSESSMENT**

We challenge you to create a web application for house listings, which allows the user to view a list of houses that are currently available for sale, and create, edit and delete their own listings.

**API information**

The data will be fetched from a remote source, using a existing API. Please, note that the API requires an access key header to obtain, create, edit or delete houses. 

The API is documented in detail and you can find it here.  
**Note that the images are only accessible from localhost:8080**.

**Design overflow**

You can find the design of the web app in the following links.

-   [Desktop workflow](https://overflow.io/s/SQY91U3K/?node=a1b1f199&view=fill)
    
-   [Mobile workflow](https://overflow.io/s/SQY91U3K/?node=08a536d0&view=fill)


##User stories
***
 
   **User story 1:** *As a user, I want to be able to see a fixed navigation header, so that I can easily navigate through the app.* 
 - As a user I want to be able to navigate to the Houses page.

 - As a user I want to be able to see what page is currently active.

 ###### Definition of Done 
   - As a developer I will implement a fixed navigation header visible on all app screens.
   - As a developer I will include a link to the Houses page in the navigation header.
   - As a developer I will provide a visual indication or highlight for the currently active page.
   - As a developer I ensure clicking on the Houses page link navigates the user to the correct page.

   ###### By fulfilling these criteria, the user story "As a user, I want to be able to see a fixed navigation header, so that I can easily navigate through the app" can be considered completed.

   ###### Estimated Time 2 hours (Medium priority)

  **User story 2:** *As a user, I want to be able to see an overview of all available houses as the homepage of the web app, so that I can see what the app has to offer.*
    
 -  As a user I want to be able to see the address, postal code and city of the listing.
    
 -  As a user I want to be able to see the image, size and the number of bedrooms and
    bathrooms of the listing.

  ###### Definition of Done 
  -  As a developer I will design and implement a homepage layout that displays all available houses.
  -  As a developer I will show the address, postal code, and city of each listing.
  -  As a developer I will display the image, size, bedrooms, and bathrooms of each listing.
  -  As a developer I will ensure the homepage is visually appealing and easy to navigate.
  -  As a developer I will test the functionality and appearance of the homepage.

  ###### By fulfilling these five criteria, the user story "As a user, I want to be able to see an overview of all available houses as the homepage of the web app, so that I can see what the app has to offer" can be considered completed.

 ###### Estimated Time 4 hours (High priority)

**User story 3:** *As a user, I want to be able to search through the available houses by at least one of the house listing properties, so that I can find specific houses based on search criteria.*
    
 -   As a user I want to be able to clear my search input, after I start typing.
    
 -   As a user I want to be able to see a result indication, informing me about the number of
    results that are found or If my search input did not match any results.
    
 ###### Definition of Done

  -  As a developer I will implement a search functionality that allows users to search through the available houses.
  -  As a developer I will provide a clear mechanism for users to clear their search input easily.
  -  As a developer I will display a result indication that informs users about the number of results found based on their search criteria.
  -  As a developer I will handle scenarios where the search input does not match any results and provide appropriate feedback to the user.
  -  As a developer I will test the search functionality thoroughly to ensure it works as expected and delivers accurate results.

###### By fulfilling these five criteria, the user story "As a user, I want to be able to search through the available houses by at least one of the house listing properties, so that I can find specific houses based on search criteria" can be considered completed.

###### Estimated Time 4 hours (High priority)


**User story 4:** *As a user, I want to be able to sort the available houses shown on the Homepage by at least one option (price or size), so that I can sort based on my preference.*

 ###### Definition of Done

  -  As a developer I will implement sorting functionality for available houses.
  -  As a developer I will provide options for sorting by price or size.
  -  As a developer I will verify the accuracy of the sorting functionality.
  -  As a developer I will handle any errors or edge cases related to sorting.

###### By fulfilling these four criteria, the user story "As a user, I want to be able to sort the available houses shown on the Homepage by at least one option (price or size), so that I can sort based on my preference" can be considered completed.

###### Estimated Time 3 hours (Medium priority)

**User story 5:** *As a user, I want to be able to access the details of a house, so that I can read more in-depth information about my selected house.*

 - As a user I want to be able to see the address, postal code and city of the
   listing.

 - As a user I want to be able to see the description, image, number of bedrooms
   and bathrooms, the size, construction and if the listing has a garage
   or not.

 - As a user I want to be able to delete and edit the listing, in case it is my
   listing.

  ###### Definition of Done

  -  As a developer I will implement a functionality to display detailed information about a selected house.
  -  As a developer I will display the address, postal code, and city of the listing.
  -  As a developer I will display the description, image, bedrooms and bathrooms, size, construction, and garage availability.
  -  As a developer I will implement the ability to delete and edit the listing if the user is the owner.
  -  As a developer I will verify the accuracy of the displayed information and the functionality to delete and edit the listing.

###### By fulfilling these five criteria, the user story "As a user, I want to be able to access the details of a house, so that I can read more in-depth information about my selected house" can be considered completed.

###### Estimated Time 3 hours (Medium priority)

**User story 6:** *As a user, I want to be able to create my listing(s), by completing all the required fields in a form.*

 -  As a user I want to be able to add the address (street name, House number, Addition, Postal Code and City) of my listing.

 -   As a user I want to be able to set an image, a description, a price, the size, the amount of bedrooms and bathrooms, the construction date whether my listing has a garage or not.
 -   As a user if I have not completed all the required fields or there is a validation error in the form, I should see an appropriate error message.
 -   As a user after completing the form and creating the listing, I should be redirected to the newly created listing detail page.

 ###### Definition of Done 
 
  -  As a developer and user I will complete all required fields in the form.
  -  As a developer I will Add the listing's address, image, description, price, size, bedrooms, bathrooms, construction date, and garage availability.
  -  As a developer I will validate the form and display error messages for any missing or invalid information.
  -  As a developer I will create the listing and save it in the system.
  -  As a developer I will redirect the user to the newly created listing detail page.   

###### By fulfilling these five criteria, the user story "As a user, I want to be able to create my listing(s), by completing all the required fields in a form." can be considered completed.

###### Estimated Time 4 hours (High priority)

**User story 7:** *As the owner of a listing, I want to be able to have an edit and delete button on the detail page of a house that I own, so that I can navigate to the edit page of my listing or delete the listing.*

###### Definition of Done:

  -  As a developer I will display detail page displays "Edit" and "Delete" buttons for the owner of the listing.
  -  As a developer I will make sure when clicking "Edit" redirects to the edit page.
  -  As a developer I will make sure when clicking "Delete" prompts for confirmation and deletes the listing.
  -  As a developer I will make sure when accessing to edit and delete functionality is validated for the listing owner.
  -  As a developer I will make sure that edit and delete operations are securely implemented.

  ###### By fulfilling these five criteria, the user story "As the owner of a listing, I want to be able to have an edit and delete button on the detail page of a house that I own, so that I can navigate to the edit page of my listing or delete the listing." can be considered completed.

###### Estimated Time 2 hours (Medium priority)

**User story 8:** *As the owner of a listing, I want to be able to edit my listing(s).*

 -   As a user I want to be able to edit the address (street name, House number, Addition, Postal Code and City) of my listing.
    
 -   As a user I want to be able to edit the image, description, price, size, amount of bedrooms and bathrooms, the construction date and whether my listing has a garage or not.
    
 -   As a user If I have not completed all the required fields or there is a validation error in the form, I want to be able to see an appropriate error message.

######  Definition of Done:

  -  As a developer I will make sure the edit form displays the current details of the listing for the owner to make changes.
  -  As a developer I will make sure the form allows the owner to edit the address, image, description, price, size, bedrooms, bathrooms, construction date, and garage         information.
  -  As a developer I will make sure the form includes validation to ensure all required fields are completed and provides appropriate error messages if there are validation errors.
  -  As a developer I will make sure after successfully editing the listing, the owner is redirected to the updated listing detail page.
  -  As a developer I will make sure that the access to the edit functionality is validated for the listing owner.

###### By fulfilling these five criteria, the user story "*As the owner of a listing, I want to be able to edit my listing(s)." can be considered completed.

###### Estimated Time 3 hours (Medium priority)

**User story 9:** *As the owner of a listing, I want to be able to delete my listing(s).*  

 - As a user I want to be able to see a warning before the successful deletion of
   my listing.

###### Definition of Done:

  -  As a developer I will display a confirmation message before deleting the listing.
  -  As a developer I will handle the owner confirmation to delete the listing.
  -  As a developer I will delete the listing from the database.

###### By fulfilling these five criteria, the user story "*As the owner of a listing, I want to be able to delete my listing(s)." can be considered completed.

###### Estimated Time 2 hours (Medium)


**User story 10:** *As a user, I want to be able to see more information about the company.*

###### Definition of Done:

  -  As a developer I will develop an "About" page with relevant company information.
  -  As a developer I will include company logo.
  -  As a developer I will ensure the page has a visually appealing design and is easy to read.
  -  As a developer I will update the page as necessary to reflect any changes in company information.

###### By fulfilling these five criteria, the user story "As a user, I want to be able to see more information about the company." can be considered completed.
##Review
***

###### Estimated Time 2 hours (Low priority)


DTT reviews our assessment on different criteria. Functional requirements are graded on their completeness and the chosen method of implementation. The quality and structure of code are graded on (among other factors) consistency, reusability and extensibility. The design requirements are graded on the accuracy. The hour log is graded on its completeness, language, and level of detail.
    
  Among other factors, the following points are essential to us:
    
-   Consistency: naming, structure, format. There is consistent naming, structure and formatting throughout the code.
    
-   Code and component (Vue.js) reusability and structure: The code is reusable and maintainable. There is no unnecessarily repeated and duplicated code. The Vue.js components are reusable and well-structured.
    
-   Accuracy of the design implementation and responsiveness: The design has been implemented accurately and the web app is fully responsive.
    
-   Documented code: Comments are used effectively and consistently to make the code readable, understandable and clear. The comments follow the rules of grammar, are punctuated and are clear/to the point.

