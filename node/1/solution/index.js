var disks = require('nodejs-disks');
var _ = require('lodash');
var lastDriveList;

disks.drives(function(err, drives) {
  lastDriveList = drives;
  setInterval(checkForNewDrives, 1000);
});

function checkForNewDrives() {
  disks.drives(function(err, drives) {
    var diff = _.difference(drives, lastDriveList);

    lastDriveList = drives;
    console.log('Checking for new drives');
    if (!diff.length) {
      return;
    }
    console.log('New drive found');
  });
}
