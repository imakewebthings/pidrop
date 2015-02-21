# Step 3

**Copy admin files to a swap folder.**

Instead of printing to the console when we detect the "pidrop-admin" folder, let's copy the contents of that folder to a "swap" folder on the computer. We also want to clear out anything that may already be in the swap folder. Once the admin folder is detected, here are the basic steps we want to go through:

1. Delete the contents of the local folder. [rimraf](https://github.com/isaacs/rimraf) is a useful module for recursively deleting files.
2. Recursively copy the contents of the admin folder to the swap folder. It's possible to write your own code using `fs` and `path` to copy all files and folders under a given directory, but it's already been done and published by several people. [ncp](https://github.com/AvianFlu/ncp) is a good module for this.
3. Print a message when all files have been copied successfully.
