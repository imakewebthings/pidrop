# Step 5

**Use a config file.**

Right now we're using hardcoded values for the folder names. "pidrop-admin", "pidrop-user", "swap". While "security" in the broad sense is not a huge concern for this project, it would be silly if every Pidrop used the same name for the admin folder. Let's move these hardcoded values to a configuration file at `config.json`.

There are several good modules for reading and writing configuration files in Node. My favorite is [nconf](https://github.com/flatiron/nconf).

In a case like Pidrop where the end user would be installing the project using `npm install`, it's good practice to `.gitignore` the config.json file itself so that you or anyone else does not check their config into git. Instead, you would check in a "config.example.json" file with dummy config settings and include instructions to copy this file to "config.json" and replace any necessary values.
