# Generate Random Password Debug

I began this code by defining variables for all the characters that could be selected
for the random password. After defining the variables, the split. method was added so that each character was separated and could be chosen at random.

I then wrote out all the prompts and messages I wanted the user to have to either confirm or deny
so Javascript knew which types of characters to add to the random password.

The conditional statements came afterwards, signaling to Javascript that if the user
confirms a prompt to then take the masterSet's information, which the masterSet is 
a combination of all the characters' arrays. I used the concat method to merge the multiple
arrays.

A for loop was created to initialize randomization. I used the parseInt method to separate
the different character strings in the variables.