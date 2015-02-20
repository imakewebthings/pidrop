var fs = require('fs');
var path = require('path');
var ncp = require('ncp');
var rimraf = require('rimraf');
var disks = require('nodejs-disks');
var _ = require('lodash');
var swapFolder = path.resolve('./swap');
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
    diff.forEach(checkForAdminFolder);
  });
}

function checkForAdminFolder(drive) {
  disks.driveDetail(drive, function(err, disk) {
    if (err) {
      return console.log(err);
    }
    var folderPath = path.resolve(disk.mountpoint, 'pidrop-admin');
    fs.readdir(folderPath, function(err) {
      if (err) {
        return console.log('No admin folder found');
      }
      copyAdminFolder(folderPath);
    });
  });
}

function copyAdminFolder(folderPath) {
  rimraf(swapFolder, function(err) {
    if (err) {
      return console.log(err);
    }
    ncp(folderPath, swapFolder, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log('Admin folder found, files uploaded');
    });
  });
}
