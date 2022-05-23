[![Status overview badge](../../blob/badges/.github/badges/autograding/badge.svg)](#results)
## Instructions for students:

### Grid 12 Boxes

#### Task 1:

*   Make the parent element a grid container.
*   Set 4 rows and 4 columns of equal size on the container. Make sure that they take up `ALL available space`.
*   Give all items a border.

#### Task 2:

You NOW have an empty row at the bottom of your container. Select items and span them across columns and rows in order to fill that empty row.

* **Note**: only span 2 columns OR 2 rows at a time.

*   Images for reference:
    ![task1](/images/task1.png)
    ![task2](/images/example_task2.png)

    ### Rules

    -   This is an individual assignment.
    -   Deadline: 1 hour.
    -   Use **Git properly**
    -   Feel free to document your code with comments.

[//]: # (autograding info start)
## Results


### UIB - Grid Layout

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | Index file should contain appropriate meta tags |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | Index file Should contain a title tag that is not empty |
| ![Status](../../blob/badges/.github/badges/autograding/status2.svg) | Parent container should have a display of grid |
| ![Status](../../blob/badges/.github/badges/autograding/status3.svg) | Page should be split into 4 grid rows each 175px |
| ![Status](../../blob/badges/.github/badges/autograding/status4.svg) | Page should be split into 4 grid columns each 193.5px |
| ![Status](../../blob/badges/.github/badges/autograding/status5.svg) | Each item on the page should have border property set |
| ![Status](../../blob/badges/.github/badges/autograding/status6.svg) | Class of '.two' should span to two grid columns |
| ![Status](../../blob/badges/.github/badges/autograding/status7.svg) | Class of '.six' should span to two grid columns |
| ![Status](../../blob/badges/.github/badges/autograding/status8.svg) | Class of '.nine' should span to two grid rows |
| ![Status](../../blob/badges/.github/badges/autograding/status9.svg) | Class of '.ten' should span to two grid rows |



[🔬 Results Details](https://github.com/DigitalCareerInstitute/UIB-layout-grid/actions)

[📢 Give Feedback or Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=UIB-layout-grid&entry.2115011968=https%3A%2F%2Fgithub.com%2FDigitalCareerInstitute%2FUIB-layout-grid)

### Debugging your code
> [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

There are two ways to see why tasks might not be completed:
#### 1. Running tests locally
- Run `npm install`
- Run `npm test` in the terminal. You will see where your solution differs from the expected result.

#### 2. Inspecting the test output on GitHub
- Go to the [Actions tab of your exercise repo](https://github.com/DigitalCareerInstitute/UIB-layout-grid/actions)
- You will see a list of the test runs. Click on the topmost one.
- Click on 'Autograding'
- Expand the item 'Run DCI-EdTech/autograding-action@main'
- Here you see all outputs from the test run

[//]: # (autograding info end)