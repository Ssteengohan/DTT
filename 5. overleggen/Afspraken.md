# Recap 


## Introduction
During the retrospective meeting, the Project Manager (PM) emphasized the importance of active participation and discussing relevant topics. It was agreed that listening to feedback and identifying areas for improvement is crucial.

## Effective Communication and Collaboration
The PM highlighted the need for regular and timely progress updates and communication with the project team or client. We acknowledged the importance of addressing problems promptly and fostering effective collaboration.

## Clear Agreements
To ensure efficient teamwork, we agreed that all agreements should be documented clearly. This includes action items, timelines, responsible parties, follow-up, and stakeholders.

## Specific Points
We discussed specific points mentioned in the feedback and agreed to prioritize and address them in future sprints.

### UI Problems
We acknowledged the feedback regarding UI issues, such as design and functional bugs. It was agreed that thorough testing is needed to resolve these bugs. We specifically discussed improving the layout of the Details page and adding a dark overlay behind the delete-modal.

### Design Improvements
We recognized the need for general design improvements to enhance the workflow. It was agreed that we should strive for a consistent and intuitive user experience through appropriate design adjustments throughout the system.

### Responsiveness Problems
The feedback mentioned responsiveness issues, particularly styling errors in the responsive mode. We took responsibility for addressing these issues, ensuring proper button display and a balanced distribution of space on different screen sizes.

### Code Quality and Structure
We acknowledged the feedback regarding code quality and structure. It was agreed that consistent code formatting, improved readability, and removal of unnecessary code fragments are essential. I'm committed to implementing a consistent indentation of 2 spaces and removing unnecessary spaces for better code quality.

### Logic and Functionality Issues
We discussed the logic and functionality problems mentioned in the feedback. I agreed to make adjustments to display "yes" or "no" instead of "true" or "false" for the garage attribute. Additionally, I'm committed to resolving sorting option display issues and improving validation and navigation during house creation and editing.

### Delete-modal and Recommendations
Feedback was provided on the delete-modal and recommendation functionality. It was agreed that I should implement the delete-modal as a component for better structure. I'm committed to providing relevant house recommendations based on the attributes of the current house, excluding the current house itself to prevent duplication.

## Summary
As a team member, I appreciated the input and actively engaged in discussing the feedback points. We agreed to prioritize these points and systematically address them in future sprints. We committed to transparent communication regarding progress and any obstacles we encounter.

## Conclusion
The retrospective meeting concluded, and we proceeded with planning for the next sprint. I appreciated the Project Manager's guidance and look forward to collaborating and implementing these improvements.


| Area of Improvement        | Action Items                                                  | Estimated Time |
|---------------------------|---------------------------------------------------------------|----------------|
| UI Problems              | Thoroughly test and resolve design and functional bugs         | 4 hours        |
| Design Improvements      | Make general design adjustments to enhance workflow            | 6 hours        |
| Responsiveness Problems  | Fix styling errors and ensure proper display on different devices | 4 hours        |
| Code Quality and Structure | Implement consistent code formatting and improve readability   | 8 hours        |
| Logic and Functionality   | Adjust display and functionality to address identified issues  | 6 hours        |
| Delete-modal and Recommendations | Refactor delete-modal as a component; provide relevant recommendations | 4 hours |

## Feedback from DTT

##### Feedback
App is not really tested properly. Various design and functional bugs. Editing is not working.

#####  UI
Details page: listing should take up all the extra space for an improved layout
Delete modal: A dark overlay should appear behind the delete modal. https://gyazo.com/4e7caad72fb77acb35511969181a3b49

General design improvements need to be made throughout all site to further replicate the workflow.
Responsiveness: Various styling issues in responsive mode. Edit/Delete buttons are overflowing out of card. On the left side there is more space than the right side https://gyazo.com/33f09968b801d5c9027d27ae51a65b8c

Responsiveness: Last item in house listings and house recommendation is hidden by the navigation.
Responsiveness: Edit/delete icons are not visible in house details
Responsiveness: Most page layouts are not centred correctly. More space on the left side than right.

##### Format
Indentation is inconsistent. Vue is more readable with an indentation of 2 spaces.
There are some extra spaces. Codebase must be readable.
Unused code such as console logs should be removed

##### Logic
House details: Garage should be yes or no, not true or false
House details: Street name of house is missing
Sorting: Although sorting works, the selected sorting option does not show.
Create/edit: The button should be disabled till all validation demands are met.
Create/edit: A custom layer of validation using javascript should be implemented rather than relying on HTML validation. Alternatively you can also try using VeeValidate
Create/edit: I can type text in fields which require numbers only.
Create/edit: After I create or edit a house I should be redirected to the details page of that house. Instead the page is simply refreshing using location.reload, which is also not optimal.
Edit: Edit page doesn’t seem to work properly. The input fields should contain the values of the house we’re trying to edit. The fields are all empty. If I fill in all the fields and try to edit anyway, I keep getting a validation error on the street name.
Delete: The way the delete modal is handled is very unconventional. The modal can simply be a component instead of displaying it using DOM manipulation as a function in the store. There are much better ways to implement this. Try come up with a better way of handling the modal.
House recommendations: House recommendations should display houses where an attribute is related to the current house. Right now we just show the first 3 items in the house list.
House recommendations: The recommended houses shouldn’t include the house I’m currently viewing.
House recommendations: When I click on a house from the house recommendation, a blank page appears.
 

### PS

I also added proof of the email DTT send me with the feedback its inside this folder