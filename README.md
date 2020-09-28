## Steps to setup

### Installing Dependancies

From the top level folder use command `cd client` and use command `npm install` to install all of the dependancies within the client.

From the top level folder use command `cd api` and use command `npm install` to install all of the dependancies with the api.

### Setting up the database (IF POSTGRES IS NOT INSTALLED FOR MAC-OS)

Recommended to use Homebrew for installation on MasOS
In the terminal:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Once that finishing downloading use command `brew update` and then `brew install postgresql`. Then check postgres version with `postgres --version` to see if it's around or more than 12.2.

`brew services start postgresql`

## Setting up Postgres

Login into postgres with `psql postgres`

Create a user and password and give create database access with this:

```
CREATE ROLE api_user WITH LOGIN PASSWORD 'password';
ALTER ROLE api_user CREATEDB;
```

`\q`

Log out of root user and log into new creatd user`psql -d postgres -U api_user`

```
CREATE DATABASE expense_api;
```

## Creating table and seeding

Run this command: `\i src/db/init.sql` to create the one table and place one row in it.

## Evironment Variables

Copy the contents of the .env.example into its own .env file

with values:

```
DB_USER=api_user
DB_PASSWORD=password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=expense_api
```

# To Start Both The Client On Seperate Tabs

You can run the api/server in the top level of the api folder using command: `npm start`
or `npm run start:dev` to take advantage of nodemon.

In a seperate tab, navigate your way to the top level of the client folder.

```
expense|
       |
        \client <---
        \app
        \README.md
```

To start the React client run command: `npm start`

### Pictures of the App

![Main Dash](https://github.com/Lucas-Wong99/expense-tracker/blob/master/docs/main-dash.png?raw=true)
![Main Dash2](https://github.com/Lucas-Wong99/expense-tracker/blob/master/docs/main-dash2.png?raw=true)
