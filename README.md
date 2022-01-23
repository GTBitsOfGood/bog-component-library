# BoG Component Library
A reusable, easily readable, easily integrated, and widely used component library for Bits of Good.

## Project Structure
<img width="394" alt="Screen Shot 2022-01-22 at 7 07 15 PM" src="https://user-images.githubusercontent.com/54591248/150659684-92333bee-5f50-4282-a39c-2dd24d85d565.png">

## Build Instructions

1. Clone the repository

### Instructions to run the component library
1. Run `cd component-library` to navigate to the component library directory.
2. Run `yarn` to install all dependencies. 
3. Run `yarn storybook` to run the application and prompt the Storybook UI.

### Instructions to run the homepage
Optional: If you're still in the component-library directory, run `cd ..` to navigate to the repo's base directory.
1. Run `cd homepage` to navigate to the component library directory.
2. Run `yarn` to install all dependencies. 
3. Run `yarn start` to run the application and prompt the homepage.

Note: You can run both directories simultaneously (as they run on different ports)

## Gitflow
Please do not push to main directly. BoG Component Library only accepts code that has been approved from a Pull Request. In order to make changes to the code, we recommend the following steps:
1. Create a new branch from develop following the naming convention. (e.g. `initials/brief_issue_description` or `sp/add_cool_feature`)
2. Create a pull request. (refer the section below on how to do this)
3. Wait for approval from the EM and another developer.

NOTE: You can create a new branch in command line with `git checkout -b myBranchName`. To check what branch you are on, you can run `git branch`. If you don't see a branch, try `git fetch origin`.

## Steps for creating a PR (Pull Request)
Typically PRs are only created once you're done with all your changes; however, Github allows you to create a draft PR before you've finalized your branch. This is super useful if you need the EM, designers, the PM, or a fellow dev to take a look at your changes before you proceed with your task. 

1. Navigate to the pull requests tab on Github. 

![Screen Shot 2022-01-23 at 2 19 02 AM](https://user-images.githubusercontent.com/54591248/150668620-0787293d-8307-40e8-9fec-04ab46963d8a.png)

2. Click on the `New pull request` button.

![Screen Shot 2022-01-23 at 2 20 36 AM](https://user-images.githubusercontent.com/54591248/150668666-cd74e0aa-8fa9-418c-a248-a8c9667b5129.png)

3. This will prompt you to choose a branch to merge into main, following this prompt, choose your branch that you've committed changes to.

![image](https://user-images.githubusercontent.com/54591248/150668725-9c5d76be-4fbb-4e9d-8383-74a3ed0a22bd.png)

4. This will take you to a page with the summary of the changes you've made. If you want to take a look at your code before you assign reviewers then this is a good way to view all your changes consolidated.

![Screen Shot 2022-01-23 at 2 24 01 AM](https://user-images.githubusercontent.com/54591248/150668747-043be39c-4209-419b-9439-5ef062df3123.png)

5. Once you're done looking at your beautiful, elagant, and hyper-optimised (I'm sorry I ran outta adjectives) code, go ahead and click on the `Create pull request`  button. This should take you to a screen with a standard PR template.

![image](https://user-images.githubusercontent.com/54591248/150668779-d6ac494a-1b2f-4a7a-b031-3483d538a8a7.png)

6. Navigate to Zenhub then click on the ticket you're working on, then click to view the issue on Github and copy the issue's url from your browser. Replace the `<!-- Link to Github issue this PR closes -->` comment on the template with this link.

![Screen Shot 2022-01-23 at 2 26 41 AM](https://user-images.githubusercontent.com/54591248/150668807-a8645859-e104-43bc-b831-5aec544d8288.png)

7. Briefly explain the changes you've made in your branch (please simplify this explanation as much as possible) and replace the `<!-- What does this PR change and why? -->` comment with your explaination.
8. Get rid of the `<!-- Choose one -->` comment and the 3 other options of the type of change that your branch, once merged, is going to make to the main code. Use your best judgement to choose the type of change, and if you cannot choose one, then feel free to slack the EM to get a second opinion.
9. Once you've chosen the type of change, now would be a great time to change the default title of the PR. Format the title of the PR according to the following format: `<Type of change>(<1-2 word discription of change>): <Title of issue>`. An example of this would be something like `feature(Alert): Alert Component`. 

![Screen Shot 2022-01-23 at 2 30 04 AM](https://user-images.githubusercontent.com/54591248/150668882-fa02eb69-eae0-4e31-b0a0-e5fff123e9f5.png)

10. Copy the acceptance criteria from your ticket onto the issue and mark each checkbox if completed. Make sure that you meet all the acceptance criteria before merging the PR. A quick way to do this is to click "Edit" on the issue and copy the markup code for the acceptance criteria (on the issue) on to the PR.

<p align="center"> <img width="1000" src="https://user-images.githubusercontent.com/54591248/150669115-48d57bb3-e324-4d88-9917-bca8643fad28.gif"> </p>


11. Finally assign the EM (always), designers (always) and the PM (only if specified on your ticket) as reviewers.
12. Make sure all the checks are passing (or gets till the "Needs Review" stage in most cases) and none of the automatic checks are failing. (in red) If this is the case then you need to make changes to your code as your current changes may break the build if merged. Slack the EM if you need assistance with this.

![image](https://user-images.githubusercontent.com/54591248/150669235-e4b48673-b7e1-494c-b0b1-8ff46e542cbd.png)

13. Finally, you're all done! (YAY!) Now all you gotta to is wait...

## Merging a PR
1. Once you've opened a PR, wait until **the EM and atleast one designer** has approved your changes. This would also typically mean that all your automated checks are green!
Note: In instances where the PM is also assigned as a reviewer, the please wait from them to also approve your changes.
2. If one (or more) of your reviewers request changes, then please do so. 
3. Once you're fully approved, go ahead and merge your changes! (your EM is automatically pinged so you may or may not choose to Slack them regarding your status)
4. Hooray! You're code is now (hopefully forever) a part of the project! You may not see your changes deployed right away; typically we try to deploy twice during the semster.
