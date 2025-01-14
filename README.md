# Workshop-1-task
Workshop 1 task

## Plan for this project
Ideas from Minecraft - monsters spawning at night

## Changes made during coding
Set the canvas colour dark grey to simulate night scenes. 

I want the all the shapes inside the canvas, even they are created in a random x and y position. 
- I changed the maximum values for the random x and y position. - changed width to width minus the shape width, height to height minus the shape height.

Added new monsters - Skeleton and Creeper

Added randomness to the number of monsters spawned.
- Use Zombie as an example, I changed the exit condition from x < 5 to x < 5 - random(0, 4). Then the zombies will be spawned with a number between 2~5.

Adjusted the number of monsters spawn by changing the exit conditions - Zombie > Skeleton > Creeper (most of the time)

### Problems met
When I was trying to use the for loop, sometime I forget that it needs to be inside the setup function and I need to use ; between the variable, exit condition and incrementation. 

I noticed that in the for loop, the word colour has to spell as color, otherwise the code will not work. 

The line for creating the background needs to be moved from draw function into setup function. 
- Because the background will be drawn after the shapes create and blocks the shapes if the code was not moved.

If I want to make the monster be able to have a possibility of 0 spawned, the exit condition needs to have a chance to be x < 0. 

* random does not include the maximum
- For example, random(0, 3) - random number from 0 and up to but not including 3.

### Here is the URL to the webpage for this project: https://qzha880.github.io/Workshop-1-task/
