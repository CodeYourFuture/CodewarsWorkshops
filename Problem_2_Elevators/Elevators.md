
author: Tony Beaumont
summary: Problem Solving: Which Elevator
id: problem-02
categories: coding
environments: Web
status: Published
feedback link: mailto:a.j.beaumont@aston.ac.uk

# Problem Solving: Which Elevator?

## Introduction

This series of problem solving exercises are based on problems found on Codewars [https://www.codewars.com/](https://www.codewars.com/) or Hackerank [https://www.hackerrank.com/dashboard](https://www.hackerrank.com/dashboard).

### What you should already know

You should have attended the previous session on problem solving where we introduced the concepts of abstraction and decomposition.  We will revisit these concepts again today.

### What you'll learn

* How to use **abstraction** to reduce a problem to its important factors
* How to use **decomposition** to break down a problem into smaller, easier problems that can be solved independently

### What you'll need

No specific tools are required, although you will need to make notes so either pencil and paper or a text editor on your laptop.

### What you'll do

You will be presented with a problem.  You will learn how to understand the problem and break the problem down into steps that help you work towards a solution.  

##  Problem Description



Todays problem can be found here: [https://www.codewars.com/kata/5c374b346a5d0f77af500a5a](https://www.codewars.com/kata/5c374b346a5d0f77af500a5a).

After the class finishes, you should submit a solution to the problem using the link above.

### Story

Closest Elevator.  Given the floors of 2 elevators and a calling floor, return the elevator closest to the calling floor.



### Problem

Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function accepting 3 arguments (in order):

* `left` - The current floor of the left elevator
* `right` - The current floor of the right elevator
* `call` - The floor that called an elevator

Your function should `return` the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.

### Examples:
Here are some examples of the input with the result that is returned in each case:
```
left right call   result
  0    1     0    "left"
  0    1     1    "right"
  0    1     2    "right"
  0    0     0    "right"
  0    2     1    "right"
```

### Code Template

```
function elevator(left, right, call){
  // Your code will go here
}
```

## Understanding the problem

The first step in solving any problem is understanding that problem.

We are not solving the problem here, we are just ensuring we understand what the problem is before we think about solving it.

1.  Are there any words or phrases in the problem description that you don't understand?  If so, write them down and find out what they mean.
1.  Do you have any questions about the problem?  If so, make a note of them and ask a volunteer.


## Identify what is important

1.  Make a list of all the aspects of this problem that are important.  Ignore anything that is not essential to solving the problem.

**Discuss your solution to this step as a group**.  Does everyone have the same list of important elements or are there differences?  Resolve your differences so everyone agrees what is important.

## Important characteristics of the problem

In this problem, there are really only three pieces of information that are important:
* the floor number of the left hand lift
* the floor number of the right hand lift
* the floor number calling the lift.  

These three numbers correspond to our **input**.

The **return** value will be one of two different strings; `"left"` or `"right"`.

Reducing the problem to our three input values, which are all numbers in the range 0 to 2, is an example of **abstraction**.  We can "forget" the stuff about elevators and floors, we are reducing the problem to a comparison of three numbers.  

How we do that comparison is something we will look at in the next steps.


## Understand the examples

The instructions provide us with no less than five examples.  Here they are again:
```
left right call   result
  0    1     0    "left"
  0    1     1    "right"
  0    1     2    "right"
  0    0     0    "right"
  0    2     1    "right"
```
  
  
1.  Look at the examples that are provided.  Can you explain how and/or why the output was generated from the input?
1.  Make a new example that has different input and provide the output that should result from that input.

## Explanation of the examples.

### Example one

```
left right call   result
  0    1     0    "left"
```

In this example, `left` and `call` are equal, `right` is larger than `call`, so `"left"` is returned because the left lift is closest (in this case the same as) the calling floor.  

This example is important because it allows us to see three example input numbers and we should have noticed that we need to find whether `call` is closer to `left` or closer to `right`.  We can perform the following two calculations that will help us:
```
call - left = 0
call - right = -1
```
We should make a note that if the result of either calculation is 0, it means the lift is being called from the same floor. Therefore, we return `"left"` in this case because the value of `call` and `left` are identical.

### Example two

```
left right call   result
  0    1     1    "right"
```
Lets do the same calculations:
```
call - left = 1
call - right = 0
```
We get a value of 0 from the second calculation so, the returned value is `"right"`.
### Example three

```
left right call   result
  0    1     2    "right"
```

The calculations this time give us:
```
call - left = 2
call - right = 1
```

The values show that the right hand lift is closest so we return `"right"`.

### Example four

```
left right call   result
  0    0     0    "right"
```

The calculations this time are:
```
call - left = 0
call - right = 0
```

Both calculations give us the same value, `0`.  In this case, a condition of the problem comes into play.  The problem description says:
```console
In the case where both elevators are equally distant from the called floor, choose the elevator to the right.
```
so for this case, we should return `"right"`.

### Example five

```
left right call   result
  0    2     1    "right"
```

Our calculations this time give us the following values:
```
call - left = 1
call - right = -1
```

In terms of "how far away", `1` and `-1` are actually identical.  A value of `1` means "one floor down" and a value of `-1` means "one floor up.

This example is important.  It tells us TWO things:

<ol  type="I">
<li>The minus value isn't really important, we need the <strong>absolute value</strong> of the difference between the calling floor and the lift floor.  The absolute value of -1 is 1.<br/>Can you find a Javascript function that, given a number, will return its <string>absolute value</strong>? We might need that later.</li>
<li>This is just another case of the previous example when we compare the two absolute values because comparing absolute values gives us <code>1</code> compared with <code>1</code>. The two elevators are equally distant, so the right elevator should be chosen.</li>
</ol>

We should return `"right"` in this example.

## Decomposing the problem

1. Can you decompose this problem into the TWO steps required so deliver the correct return value?<br/>
   Describe your decomposition in English without any reference to programming code of any kind, although you might want to use variable names to refer to certain values. 

## Our decomposition

There are actually two steps to the solution to this problem and these are:
1.  Do the calculations to find the difference between `call`and `left` and `call` and `right`.  This gives us two numbers, and we will refer to them as `differenceLeft` and `differenceRight`.
1.  Make a decision based on comparing `differenceLeft` with `differenceRight` and return either `"left"` or `"right"`.

In step **1** the names we chose to refer the the results of the calculations are not important.  What is important is that we read the name and know immediately what it is referring to.

Breaking down the problem into these TWO steps is important because we can solve each step independently.  Each step is a simpler problem than the whole problem.

## Developing a solution to step 1

1.  Write the Javascript code to find the values of the two variables, `differenceLeft` and `differenceRight`.  Be sure to remember everything we discovered when we looked at the examples.

## A solution to step 1.

Here is the code you should have written:
```javascript
const differenceLeft = Math.abs(call - left);
const differenceRight = Math.abs(call - right);
```

We might add a `console.log` statement to print out the values of the two variables so we can check they look correct.

## More on developing a solution: Step 2

After a few minutes to allow everyone to come to their own conclusions, go around the class and get answers to the following:

1.  Can you describe the decision based on `differenceLeft` and `differenceRight` that needs to be made in order to determine whether the returned result should be `"left"` or `"right"`?
	* If you can't describe in English what the decision is, you can't write it in Javascript.
	* In Javascript a decision may be translated into an `if` statement.
	
## A design for step 2

The decision is this.  
``` console
IF the value of differenceRight is less than or equal to the value of differenceLeft THEN
	return "right"
ELSE
	return "left"
```

1.  Translate our design for step 2 into Javascript.

## Implementing step 2

Here is a translation of our design into code:
```javascript
if (differenceRight <= differenceLeft) {
	return "right";
} else {
	return "left";
}
```

## Summary

* We solved this problem by using **abstraction** and **decomposition**
* Using abstraction we reduced the problem description down to a comparison of three numbers and that comparison gave us two values.
* Using decomposion allowed us to identify two steps required to solve the problem:
  * calculate the differences
  * make a decision on what value to return
  
  Each step could be solved separately and then put together to give a working solution.
* Our eventual solution is simpler than the analysis of the five examples might have suggested.  That is a good reason why we didn't write any code until we had completed our problem abstraction and decomposition.

Be sure to submit your solution on codewars.

