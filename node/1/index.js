var disks = require('nodejs-disks');
var _ = require('lodash');
var lastDriveList, timer;

function setDriveList(callback) {
  disks.drives(function(err, drives) {
    lastDriveList = drives;
    callback();
  });
}

function checkForNewDrives() {
  disks.drives(function(err, drives) {
    var diff = _.difference(drives, lastDriveList);

    console.log('Checking for new drives');
    if (!diff.length) {
      timer = setTimeout(checkForNewDrives, 500);
      return;
    }

    console.log('New drive found');
    lastDriveList = drives;
  })
}

setDriveList(checkForNewDrives);
