# Pi Drop

The goal of this project is to turn a Raspberry Pi into a device similar to a [dead drop](http://en.wikipedia.org/wiki/Dead_drop). Ultimately, the following interactions should be possible:

- The owner of the Pi goes through a setup procedure that sets up this process and creates the necessary folders on their USB stick.
- When a person inserts a USB stick into the Pi, if that stick contains a special folder (determined during setup above) then the contents of that folder are uploaded to a drop folder on the Pi.
- When a person inserts a USB stick into the Pi and **do not** have that special folder, they are a receiver. The contents of the drop folder are copied to a folder on the receiver's USB stick.

The target use case for this is slightly less shady than the spy origins of "dead drop" suggest. We have a teacher in a classroom with a Raspberry Pi who has issued USB sticks to their students. They want to be able to disseminate class material to students by having them plug in their sticks as they come into lecture.

## Roadmap

These are rough, speculative steps we can take to get to our final destination.

### Step 1

Print a message to the console whenever a USB device is plugged in.

### Step 2

Check for the existence of some folder (hardcoded name) on that USB device and print something to the console.

### Step 3

Grab all files from that folder and copy them to a folder (hardcoded name) on the Pi.

### Step 4

If the folder doesn't exist, create a different folder (hardcoded name) and copy the contents of the local Pi folder to this new folder on the USB device.

### Step 5

Take hardcoded values for folder names and move those to a config file.

### Step 6

Write a setup script to generate this config file.

### Step 7

Write an [upstart](http://upstart.ubuntu.com/) script.
