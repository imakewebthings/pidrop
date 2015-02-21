# Step 2

**Check for a `pidrop-admin` folder.**

Instead of just printing a message to the screen when a new disk is found, let's check that disk for the existence of a folder named "pidrop-admin".

During Step 1 you may have made use of the [nodejs-disks](https://github.com/shaun-h/nodejs-disks) module. This module will give you the location of the root of disks using the `mountpoint` property. Node's core [fs](http://nodejs.org/api/fs.html) and [path](http://nodejs.org/api/path.html) modules will be useful here.
