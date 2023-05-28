# Git Version Control - Project Explanation

In this project, I chose to use Git as the version control system to manage and track the changes made throughout the development process. Git offers several advantages and functionalities that made it a convenient and valuable tool for this project. Here's an explanation of why Git was chosen and how it was utilized:

## Why Git?

1. **Collaboration**: Git facilitates seamless collaboration among team members. It allows multiple developers to work on the project simultaneously, making it easier to merge and manage code changes from different contributors.

2. **Version History**: Git maintains a detailed version history, which is beneficial for tracking changes, reverting to previous versions, and identifying who made specific modifications. This feature provides transparency and accountability within the development team.

3. **Branching and Merging**: Git's branching and merging capabilities enable the creation of separate branches for different features or bug fixes. This allows for independent development and experimentation without affecting the main codebase. Merging branches back into the main branch ensures a smooth integration of new features.

4. **Conflict Resolution**: In collaborative environments, conflicts may arise when two or more developers make conflicting changes to the same file. Git provides tools to resolve these conflicts efficiently, allowing developers to review and reconcile differences before merging.

5. **Remote Repository**: Git allows the creation of a remote repository, which serves as a centralized location to store and backup the project's code. It enables easy sharing of code with other team members and provides a reliable backup in case of data loss or hardware failure.

## How Git Was Used

Throughout the project, I followed a consistent Git workflow to track and manage code changes effectively. Here's an overview of the workflow:

1. **Initializing Git**: I initialized Git in the project's root directory using the `git init` command. This created a new Git repository to track the project's files.

2. **Creating Branches**: For each new feature or bug fix, I created a new branch using the `git branch` command. This allowed me to work on specific tasks independently without affecting the main codebase.

3. **Committing Changes**: After making modifications, I used the `git add` command to stage the changes, followed by the `git commit` command to create a commit. Each commit had a descriptive message explaining the changes made.

4. **Pushing to Git**: To synchronize my local repository with the remote repository, I used the `git push` command. This uploaded the committed changes to the remote repository, making them accessible to other team members.

5. **Branch Merging**: Once a feature or bug fix was completed and tested, I merged the branch back into the main branch using the `git merge` command. This integrated the changes into the main codebase.

6. **Resolving Conflicts**: In case of conflicts during the merge process, I used Git's built-in conflict resolution tools to review and resolve the conflicts. This ensured that the final merged code was cohesive and functional.

By following this Git workflow, I maintained a well-documented version history, collaborated effectively with team members, and managed code changes efficiently throughout the project.

Here a link to my Github project 
https://github.com/Ssteengohan/DTT