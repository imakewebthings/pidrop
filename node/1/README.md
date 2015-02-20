# Step 1

**Print to the console when a USB device is plugged in.**

We need to detect when a USB stick is plugged in. More specifically, we need to check when a new **disk is mounted**.

One of the great things about Node is the vast module ecosystem. A module for this probably exists. See if you can find (Google) a module that will give us all the mounted disks for our system.

When you find a suitable module, poll the system occasionally (every one second is fine) and look for changes to the mounted disks. When you see a new disk has been added, print a message to the console. A useful module in this task is [lodash](https://lodash.com/), which contains a method, [difference](https://lodash.com/docs#difference), that returns the elements that are different between two arrays.
