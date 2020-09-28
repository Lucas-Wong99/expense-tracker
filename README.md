## Steps to setup

# Requirements

Nodejs installed [Node](https://nodejs.org/en/download/)
Text editor - Visual Studio Code [VSCode](https://code.visualstudio.com/download)

## Clone app from Github or Download the zip file

Go to github repository [Link](https://github.com/Lucas-Wong99/expense-tracker)

Press the "Code" button and select "Download ZIP"

Unzip the "expense-tracker-master.zip" file, which creates "expense-tracker-master" folder

## Accessing the App

Open a Terminal window and navigate to the "expense-tracker-master" folder.

### Installing Dependancies

Type command `cd client`
Type command `npm install` to install all of the dependancies within the client.

Type command `cd ../api`
Type command `npm install` to install all of the dependancies with the api.

### Install local postgres database (IF POSTGRES IS NOT INSTALLED FOR MAC-OS)

Recommended to use Homebrew for installation on MasOS
In the terminal:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Press return to complete installation.
This step will take several minutes to complete.

Type command `brew update`
Type command `brew install postgresql`.
Type command `postgres --version` and confirm if 12.2 or higher

### Start local postgres database

Type command `brew services start postgresql`

## Setting up Postgres

Login into postgres with `psql postgres`

Create a user and password and give create database acces:

Copy and paste:

```
CREATE ROLE api_user WITH LOGIN PASSWORD 'password';
ALTER ROLE api_user CREATEDB;
```

`\q`

Log out of root user and log into new creatd user:
Type command: `psql -d postgres -U api_user`

Type:

```
CREATE DATABASE expense_api;

\c expense_api
```

## Creating table and seeding

Run this command: `\i src/db/init.sql` to create the one table and place one row in it.

Type command `\q`

## Open VSCode and Expense-tracker-master

Open VS Code
Click "open folder" in the Welcome page under Start or use "CMD + o"

Navigate to folder with expense-tracker-master and open it.

Click on "api"

## Evironment Variables IN VSCODE

Copy the contents of the ".env.example" into its own .env file

Click "New file" icon to the right of "EXPENSE-TRACKER..."

Name the file ".env"

Copy and paste:

```
DB_USER=api_user
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=expense_api
```

Type "CMD + s" to save the file.

# To Start Both The Client On Seperate Tabs

From terminal window

You can run the api/server in api folder typing command: `npm start`
or `npm run start:dev` to take advantage of nodemon.

Type "CMD + t" to open a new terminal tab

In the new tab, navigate your way to the top level of the client folder.

Type command `cd ../client`

```
expense|
       |
        \client <---
        \app
        \README.md
```

To start the React client type command: `npm start`

### Picture of the App

![Main Dash2](https://github.com/Lucas-Wong99/expense-tracker/blob/master/docs/main-dash2.png?raw=true)
