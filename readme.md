# Task-Fragmentation

My Pick - Fragmentation of UI 

## My Reasons for Fragmentating the given gist code

First I observed the code structure closely like how code is structured and nested, for that I used VScode options to see nested div and other tags.

There are mainly 4 top-level components
- DashboardLayoutStyled
- TransactionTableStyled
- ChainSelector
- AppToast

The real messy code is inside the DashboardLayoutStyled component.

### DashboardLayoutStyled
The DashboardLayoutStyled have 1 div tag inside it, 
I've created a seperate component named **BurnpageTopContainer** which is a container and represents the direct nested child(div) of DashboardLayoutStyled, which have children - 1-div tag and BurnStatsContainer component.

The first child of BurnpageTopContainer is a div tag which have 
*h1* , *p* and *BurnButtonBar* as children.

For the BurnButtonBar I have created a seperate component named 
**BurnButtonBarContainer**
reason being *the code is now more segreggated and maintainable and all the required values are passed via props which is more readble.*

The 2nd child of DashboardLayoutStyled is **BurnStatsContainer**
I've created a seperate componet named **BurnStats**.

### Reasons for fragmentation like this
- The fragmentation support **DRY** principal which is Don't Repeat Yourself , so if we want to use the same code at mutiple places the we can use the reusable components.

- Passing data from one component to another via props help us to get the overall structure of what is happeing with the components and we can always manage ,pass and import those things which are  necessory for a particular component.

- The overall code fragmentation reduced the number of code lines in page.tsx return part from **200** to **54** which made overall code more readable, reusable and maintainable.








