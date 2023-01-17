# Satoshiest.github.io
Personal website made with HTML, CSS, and JavaScript, using Bootstrap 5

[![Ruby on Rails CI](https://github.com/dibblycom/tuw-app/actions/workflows/ci-testing.yml/badge.svg)](https://github.com/dibblycom/tuw-app/actions/workflows/ci-testing.yml)

### Configure Git

Use your company email as your git user

edit `.git/config` to add a user block (assuming you don't want to change your global settings)

```shell
[user]
  name = <Full Name>
  email = <email>@theurbanwriters.com
```

<br>

---

### Local Installation

#### Installing Requirements

* **Ruby** '2.5.3' (use RVM or rbenv if you need to install multiple versions of ruby)
(use rbenv for Ubuntu, `https://phoenixnap.com/kb/install-ruby-ubuntu`)
* **MySQL** (homebrew is easiest way - see below)
* **Redis** (homebrew is easiest way - see below)
* **LibreOffice** (homebrew is easiest way - see below)
* **Lefthook** (homebrew - build from source)

###### MySQL
The easiest way to install MySQL is with homebrew (on Mac):
* `brew install mysql`
* `mysql.server start` to start the db server in background.

On Ubuntu
* `sudo apt install mysql-server`
* `sudo service mysql restart`

You will have to restart the MySQL server whenever you turn on your computer (unless you configured it to start automatically). You can stop it (to save resources with `mysql.server stop`).
You can see info about your install with `brew info mysql`.

If you use homebrew to install mysql, it may be necessary to specify the /opt dir and ldflags when installing the 
gem:

`gem install mysql2 -- --with-opt-dir=$(brew --prefix openssl) --with-ldflags=-L/opt/homebrew/Cellar/zstd/1.5.2/lib`

(the above assumes your zstd version: run `brew reinstall zstd` to reinstall and check version and path to lib)

###### Redis
Redis can also be installed with homebrew:
* `brew install redis`
* `redis-server` to start redis (in a terminal window).

Redis can be set as background service — info is available with `brew info redis`.

###### Libreoffice
This is required for document manipulation by the _libreconv_ gem.

* `brew install libreoffice --cask`

No setup should be required after install.

###### Lefthook
This starts actions when you run a git command—for example, running tests before you
are allowed to push. On ARM-based macs, it's necessary to brew from source.

* `brew install --build-from-source lefthook`

<br>

---

#### Configuring / Installing Rails
Create the database with Rails:

`rails db:create`

Populate that database with sample data (requires _staging-bu.sql_ file not included here)

`rails db < ~/staging-bu.sql` (requires full path to wherever _staging-bu.sql_ is located)

Run latest migrations

`rails db:migrate`

Install webpacker

`rails webpacker:install`

Start server as normal (first load will be slow while assets are compiled)

`rails s`

---


## Possible Errors: 


### Error: "warning: Insecure world writable dir /mnt/c in PATH, mode 040777" (Windows Installation)
`sudo nano /etc/wsl.conf`<br>
add following to script: <br>
>[automount]<br>options="metadata,umask=000"

\*Make sure `wsl` is up to date v2(on Windows side):
* To check version(cmd): `wsl.exe -l -v`
* To Update: <br>
  1. Enable WSL:<br>
  `dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`<br>
  2. Enable 'Virual Machine Platform': <br>
  `dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`
  3. Restart system
  4. set the new version as the default: <br>
  `wsl --set-default-version 2`
<br>

### Error: "Mysql2::Error::ConnectionError: Can't Connect to local mySQL server through socket '/tmp/mysql.sock'"
1. Check UNIX socket: <br>
`sudo service mysql status`
2. Compare the Unix socket to the one in `config/database.yml`
3. If different, create a symlink between the files <br>
    `ls -s <current socket path> /tmp/mysql.sock`

<br>

### Error: "Access denied for user 'root'@'localhost"
1. `sudo mysql --user=root`
2. `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';`
3. `flush privileges;`

### Error: "DataTables warning: table id-datatable. Ajax error"
1. Check view definer in mySql console: <br>
`show create view active_team_views` <br>
* if output is the following, the definer must be changed to `root`@`localhost`:
```shell
 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`%` SQL SECURITY DEFINER VIEW 
 ``` 

### Error: "Mysql2::Error: View 'tuw_development.searchable_employees' references invalid table(s) or column(s) or function(s) or definer/invoker of view lack rights to use them
1. mysql drop that view
  `DROP VIEW searchable_employees;`
  - **Option A.**
  recreate that view from the latest version
    - find the view in db/views/(latest version of the view)
    - create an sql script file
      `touch script.sql`
    - edit the file
      `nano script.sql`
      `CREATE VIEW searchable_employees AS
        (copy paste the view query in here from the latest version)
    - save and exit nani
    - run the file as source from mysql
      `use tuw_development`
      `source script.sql`
  - **Option B.**
  using mysqlWorkbench
    - execute query below
    ```
    DROP VIEW <name_of_the_sql_view>;
    CREATE VIEW <name_of_the_sql_view> AS
    <copy paste last version of the view from db/views/>
    ```
  - Do the same for each these views:
    ```
    active_team_active_orders_views
    active_team_scheduled_orders_views
    active_team_views
    admin_users_views
    searchable_employees
    ```



#### Changing the View Definer: 
1. Run the following SQL query to generate the necessary ALTER statements
```shell
SELECT CONCAT("ALTER DEFINER=`root`@`localhost` VIEW ", table_name, " AS ", view_definition, ";") 
FROM information_schema.views 
WHERE table_schema='tuw_development';
```
2. Copy and run the ALTER statements

### Error connecting to DB

If you see errors when connecting to the DB such as 
```ruby
ActiveRecord::StatementInvalid (Mysql2::Error::ConnectionError: Malformed packet: SELECT  `users`.* FROM `users` ORDER BY `users`.`id` ASC LIMIT 1)
```
Then it is possible you are attempting to connect to the DB with a text-encoding that doesn't match what is set on 
the DB (this can occur with `rails c -e staging` if the encoding is set to utf8mb4, but the database is not set). 
Disable the encoding in `database.yml` to connect.

---

### Install yarn if needed when installing webpacker (Ubuntu)
1. `curl --compressed -o- -L https://yarnpkg.com/install.sh | bash`
2. Reset Ubuntu
3. yarn --version

### Install nodejs if needed
1. `sudo apt install nodejs`

### Logging in / Dummy Users
The dummy data from _staging-bu.sql_ will create a variety of user types. To login as (for example) an admin (marco@theurbanwriters.com),
* enter `marco@theurbanwriters.com` as the email for a forgotten password.
This should generate a forgotten-password email (that will not be sent).

Check the rails console for the link that would be sent in that email. Visiting it directly should allow you to create a password for any given dummy account.

* alternative method
  - login
    - as admin@theurbanwriters.com
    - password tuwtest
  - add member, fill in the new user information then submit;
  - logout
  - click signup, replace customers with users in the url, enter
  - with email address used to the new member
  - choose password and confirm password
  - submit, it will ask to login
  - use the same email and password to login
  - now you are in the new user account

<br>

---

### Developing Locally

#### Running Server

Rather than running `rails s` to start the server, use the `foreman` gem to run multiple processes with one command.

`bundle exec foreman start` will run all the tasks in `procfile.dev`:
- rails server
- webpack server (rebuilds JS when that changes)
- guard (runs associated specs when you change something)


#### Email

Email is configured to be caught my the `mailcatcher` gem, which provides a web UI to view sent emails at 
http://localhost:1080. Install and run the mailcatcher service with `gem install mailcatcher && mailcatcher`.

#### Managing Secrets

Use Rails credentials to store sensitive passwords and access keys. Rails credentials uses two files:

- config/credentials.yml.enc
- config/master.key

To decode credentials.yml.enc, you must have the same master.key as originally encoded the credentials.

The credentials file is formatted like Yaml, including nested keys:
```yaml
some_secret: <secret-thing>

aws:
  access_key_id: <some_access_key_id>
  secret_access_key: <some_access_key_secret>
```

Credentials can be accessed in several ways:
```ruby
Rails.application.credentials.some_secret
Rails.application.credentials.fetch(:some_secret) { raise "raised if not found" }
Rails.application.credentials[:some_secret] || "someDefaultValue"
# for nested:
Rails.application.credentials.dig(:aws_s3, :access_key_id)
```


To edit credentials run `rails credentials:edit`. If you have a different master.key it will raise
```ruby
ActiveSupport::MessageEncryptor::InvalidMessage
```

#### Webhooks

To set up your local development environment to receive webhooks, you must have a publicly-accessible URL that can 
be posted to.
install **Localtunnel** or **Ngrok** to create an externally-accessible url:

```bash
sudo yarn global add localtunnel --prefix /usr/local

lt --port 3000

> your url is: https://brave-liger-99.loca.lt
```
Running lt will give you an externally-accessible URL that can be used by external services (or visited in the 
browser). To have Rails use this URL in generated links and as the target webhook for all Conversations, change the 
`url_options[:host]` in development.rb, for example: 
```ruby
url_options = { 
  host: 'https://brave-liger-99.loca.lt', 
  port: 3000 
}
```
(If the protocol is ommitted from _host_, it will default to **__https__**)

Note that the `lt` command only runs while that window is open, and once a tunnel is stopped, that URL will be lost 
forever (and a new one generated the next time `lt` is run.)


#### Deploying

Overcommit will run actions around committing:
- rubocop (warnings only)
- rspec (on commit)


Check the
[TUW Development Process](https://docs.google.com/document/d/13UKAnePrI-ArO1FhXxkT2-L_2tiGOdxfpZPlJwKEbW8/edit#). Deployment requires that you have SSH access to the
target server (whether stating or production) and have set your SSH key in BitBucket.

Deployments happen via Capistrano, for example:

`bundle exec cap <environment> deploy BRANCH=<branch>`

**Sentry** reads configuration from a .sentryclirc file. This file _should not_ be added to git. The Capistrano
deploy script should keep your local file in sync with the target host (staging or production). Tokens are
from [Sentry](https://sentry.io/settings/account/api/auth-tokens/)


---

#### Troubleshooting

Please document any cases where the steps above don't easily succeed

###### Build

* **Node-gyp fails** (Yarn install)
    * are you using the long-term support (LTS) version of Node (v.14 as of 2021-06-01). It will currently fail if you
      are using Node v.16 (you can use NVM to have multiple versions of Node).


* **Yarn fails**
    * what version of webpack is being installed? Any version less than `5.2.2` requires node-sass, which is deprecated, and requires python2
    * Run `RAILS_ENV=development node -e 'console.dir(require("./config/webpack/development"), { depth: null })'` to
      see your full webpack config.

###### Database

* **Connecting to MySQL fails (timezone error)**
    * The DB timezone is set to SYSTEM — `SELECT @@global.time_zone, @@session.time_zone;`, so it may be necessary to
      manually set _serverTimezone_ to use your current timezone.

* **Collation in Schema changes**
    * check the collation rails is using:
      ```ruby
      ActiveRecord::Base.connection.collation
      ```
    * check the collation set in your database
        ```sql
         mysql> use tuw_development
         mysql> show variables like 'collation%';
        ```
      If the collation in the DB is wrong, it can be changed with:
    ```sql
        mysql> ALTER DATABASE db_name
                  COLLATE collation_name
    ```
    To check the collation of individual tables, use:
    ```sql
        mysql> show table status;
    ```
    If only one table is wrong, alter the individual table:
    ```sql
        mysql> ALTER TABLE table_name
        COLLATE utf8mb4_0900_ai_ci;
    ```

    Collation can also apply at the field level, which can be changed with a query like

    ```sql
  ALTER TABLE <db_name.table_name> MODIFY <field_name> <type> COLLATE utf8mb4_0900_ai_ci NULL;
  ```
  you can find out the type of a column with a query like 

    ```sql
  select TABLE_NAME, COLUMN_NAME, DATA_TYPE from information_schema.columns <db_name>;
  ```


###### Credentials

- **Editor not saving credentials**
    - If you run into a (known) issue with your editor not saving, you can specify an editor:
      `EDITOR=nano rails credentials:edit`

###### Deploy

- **SSH permissions issues**:
    - ensure your ssh agent is using your key:`ssh-add ~/.ssh/id_rsa`


- **Capistrano Errors**:
    - > DEBUG [2dea2fe5]    fatal: Not a valid object name DEBUG [2dea2fe5]    tar: This does not look like a tar archive
        - are you using correct branch name for deploy?
    - > Don't know how to build task 'start' (See the list of available tasks with `cap --tasks`)
        - Did you update `capistrano3-puma`? the `:start` task was removed from v >= 5.


- **Bundle Issues**
    - > DEBUG [d6adcbcf]    Your bundle only supports platforms ["x86_64-darwin-18"] but your local is x86_64-linux. Add the current platform to the lockfile with `bundle lock --add-platform x86_64-linux` and try again.
        - easier to downgrade your version of bundler (see what version is running on your target) and bundle again with
          that version


- **RVM out-of-date error**
    - allow rvm to auto-update
    - ``echo rvm_autoupdate_flag=2 >> ~/.rvmrc``
      ```rvm reload```


- **Files not Reloading**
    - if files are not being changed on the server when you save:
      > use FileUpdateChecker rather than EventedFileUpdateChecker in development.rb


- **ImageMagick / Delegates**
    - the current version of imagemagick installed on DigitalOcean servers for staging & production (as of Oct 06
    2021) was `Version: ImageMagick 6.9.7-4 Q16 x86_64 20170114 http://www.imagemagick.org`
    This appears to depend on `graphicsmagick-imagemagick-compat`
    - if you run into an error `convert-im6.q16: no decode delegate for this image format  HEIC' ...`, you should
      install the HEIF delegate (lib) and rebuild imagemagick.

<br>

- **Unmodified Files showing in Unstaged Section of SourceTree**
    - Since different OS's will have different lind ending defaults, this causes a problem in Git
    - The .gitattributes file can be used to configure the line endings for the project.  

    - for windows: navigate to the .gitattributes file and uncomment the following line.
    <br>```* text=auto``` ->  this will enable conversion in a cross-platform project

    - for Mac: keep the line commented out





#### TUW Development Process
  Guide for our tools:
  - Asana: manaing our tickets and workflow
  - Bitbucket: our remote repository
  - Staging URL: https://app.staging.theurbanwriters.com/

  - **Asana**
    # Ticket
      - Type
        > The type of ticket this is:
          * Project
          * Bug
          * Enhancement
          * Performance Optimization

      - Priority
        > How Urgent the ticket
          * Critical, Work must stop to get this ticket into production asap
          * Urgent, when choosing a ticket, These take the next priority
          * Important
          * Standard

      - Description
        > Current state of the application and desired state are usually supplied here
        > More information like screenshots, videos or other information may be referenced here as well

    # Sprint
      - Our sprints last 2 weeks
      - We push to production at the end of the 2 weeks on the Monday
        
    # Workflow
      - To Be Reviewed (Stage)
        > This section is handled by Alexandra, we discuss these tickets on weekly bases and move them to Tickets
        > These are tickets that will be in upcoming sprints

      - Tickets (Stage)
        > These tickets should be place into the current sprint by Alexandra
        > This is the queue of tickets we pull from

      - In Development (Stage)
        > This section is handled by the developer
        > The developer places their own ticket here when they begin work on a new ticket
        > The developer should assign themselves to the ticket

      - Waiting on Review (Stage)
        > The developer places their ticket here when they have completed their ticket and have made 
          a pull request

      - Queued For Testing (Stage)
        > The developer places their ticket here when their ticket has been approved and are waiting 
          to push to staging

      - In Testing (Stage)
        > The developer places their ticket here when their PR has been approved and the branch has 
          been pushed into staging
        > The developer needs to create subtasks in the ticket for Alexandra to test
        > Make sure that staging is up to date before Alexandra begins testing

      - Ready for Deployment (Stage)
        > The developer places their tickets here after testing has been complete
        > This is a placeholder so we are aware of what tickets will be in the next push to production

      - Monitoring (Stage)
        > We move the tickets to this queue after we push to production
        > This is a placeholder so we are aware of what tickets have been pushed to production, we can 
          use this as a quick reference if something is not working as intended in production


  - **BitBucket**
    # Branches
      - Master
        > This branch is the branch we push to production from
        > We do not merge directly to master unless otherwise specified
        > Master is updated through staging after testing is complete

      - Staging
        > This branch is the branch we push to staging from
        > We create all branches off of the staging branch
        > We merge all branches into master


  - **Development WorkFlow**  
    These steps are a guide for when you are working on a new feature, fixing a bug or cleaning up existing code.

    # Working a Ticket
      - Move the ticket into developement stage on Asana
      - checkout into staging branch in the terminal with the command
        `git checkout staging`
      - pull latest staging
        `git pull origin staging`
      - branch out to a new branch to add a feature or fix a bug
        `git checkout -b new_branch_name`
      - make the changes to get the feature or bug fixed
      - test locally to confirm the ticket requirements are met
      - run the automated tests to make sure existing features are not broken
        `rails run_tests` 
          <note: if your test are not setup go to  - **Automated Testing** section below>
          > You should be seeing
            * yellow for skipeed tests
            * green for passed tests
          > if you see Red:
            * run `rails run_tests` again incase there was an issue with the seed
            * if you getting red, This means some tests are breaking and need investigation
              - Typically your code needs to change. Not the tests
              - in some rare cases the tests no longer represent the desired behaviour and in this case
                tests the needs to change. If in dought check with the team
      - To push your changes to Remote repo
        `git add .`
        `git commit -m "your commit message about the changes you made in this commit"`
        `git push origin new_branch_name`
    
    # Pull Request (PR)
      - Go to BitBucket
      - Click on the “Pull Request” tab on the left
      - Click on the “Create Pull Request” button at the top right of the screen
      - Select the branch you are making a PR for
      - Select the branch you are merging into (usually staging)
      - Add reviewers to the PR
      - Check off “Close branch-name after the pull request is merged”
      - Click on “Create pull request”

    # Testing
      - After the PR has been reviewed and approved
      - Update your staging
      - Merge staging into your branch
      - If there are conflicts resolve them
      - Check if someone else is testing their tickets in ASANA 
      - If not push your branch your branch to staging
        `ssh-add`
        `bundle exec cap staging deploy BRANCH=new_branch_name`
        > If Tests pass move to the next step (Merging)
          * If Tests failed
            - Since this is a approved branch, You need to branch out from it into another branch
            `git checkout new_branch_name`
            `git checkout -b new_branch_name_with_changes`
            - Make the changes need in this branch and follow the above (Pull Request) steps but this
              time, point the PR to your original branch `new_branch_name`
            - When approved, Folllowing the above (Testing) steps again
            - If Tests pass, Merge it into new_branch_name and then merge it to staging, following below
              steps.

    # Merging(After above Testing passed)
      - go to Bitbucket 
      - Confirm the PR is pointing to the right branch (usually staging)
      - Resolve any merge conflicts
      - Click “Merge” at the top right of the screen
      - BitBucket will merge the PR into the branch that it is point at

  - **Automated Testing**
    This section explains how to get testing setup

    # Setup
      - run in the console
        > rails db:reset RAILS_ENV=test
        > rails webpacker:install RAILS_ENV=test
      
      # Trouble shooting test db
        - run in console
          > rake db:test:clone	Recreate the test database from the current environment's database schema
          > rake db:test:clone_structure	Recreate the test database from the development structure
          > rake db:test:load	Recreate the test database from the current schema.rb
          > rake db:test:prepare	Check for pending migrations and load the test schema
          > rake db:test:purge	Empty the test database.
          > rake db:test:load_structure Recreate the test database from the development structure
          > rake db:migrate RAILS_ENV=test

    # Running tests
      - to run all tests
        > rails run_tests

      - to run rails minitests
        > rails test

      - to run rspec tests
        > rails rspec

      - to run rspec test on specific file or on specific line
        > rspec <test-file-path>:<line-number>
          -> example: rspec ./spec/requests/orders_spec.rb:129

      - to a speciric test suite
        > rails test test/controllers/payments_controller_test.rb
          -> that is rails test <test-suite-file-path>

#### Text Coverage
  - run the tests and make sure they pass
    > rails run_tests

  - It will generate a folder locally, its added to gitignore so dont commit it
    /coverage
  - open index.html with browser of your choice and bookmark it


## Setting up a Server

Spinning up a new Environment requires configuring:

- Certbot (SSL)
- Nginx (listens on port 80, sends most requests on to Puma)
- Puma (Rails server, multiple forks/workers)
- Redis
- Mailcatcher (staging)


#### Certbot
If Nginx is running with the default `rails` in `/etc/nginx/sites-enabled`, it should
include a block for certbot (listening for `location ~ /.well-known { allow all;` ). 
This should allow for `sudo certbot certonly --nginx` to create a certificate and key.
Check the certbot output for the names of the certificate and key.

#### Nginx
Nginx should run as a system service, so it will restart on reboot.
This is controlled by `systemctl restart nginx.service`. The service file itself
should not need to be modified, only server configs. The `/etc/nginx/sites-enabled` 
directory is where the nginx config for the rails app should be placed. When a new 
config is placed in here, the nginx service should be restarted.

The `rails` file in sites-enabled is only needed for certbot (notwithstanding the 
naming). The `tuw-app` (or `tuw-app-staging`) is where the config for connecting
Nginx to Puma should exist. Before uploading, check that the path(s) to the certbot
files in the nginx config match what Certbot printed above:

```nginx configuration
ssl_certificate /etc/letsencrypt/live/<some-server-name>/fullchain.pem; # managed by Certbo
ssl_certificate_key /etc/letsencrypt/live/<some-server-name>/privkey.pem; # managed by Certbot
```
#### Redis (redis-server)
There should be a redis-server service already set up and running. The defaults should be OK. 
Check `systemctl status redis.service` if there are issues with the local redis.

#### Puma
The puma config should be placed in `/apps/tuw-app/shared`. There is a capistrano command that
will copy the default config to that location: `cap <stage> puma:config`

#### Mailcatcher
In staging, there is also a mailcatcher server running to receive email. Follow the direction
in the `mailcatcher.service` file to add the service, enable it, and start it.

To access the mailcatcher server, an additional config must be added to the nginx sites-enabled. 
This will listen for traffic on port 1080, and forward to 1088 (where Mailcatcher is actually
running). 

To allow Nginx to accept traffic through on a non-standard port (1080), it is necessary to open
that port in the firewall with `sudo ufw enable 1080`



---
#### Server Management

What is listening on server ports: `sudo netstat -tunlp`

Open port in firewall `sudo ufw enable <port>`

Check firewall status `sudo ufw status`

Stop/start Nginx `sudo systemctl [stop/start] nginx`

Nginx logs located at `/var/log/nginx`
Nginx configs located at `/etc/nginx`

To start an auto-restarting service on a server, check the example of the mailcatcher.service in
`config/environments/staging`


#### adding new niches
  # Add niche to the platform
    - create a migration with rails db:migrate and add the new niche as a column to employee_niches table
    - add the niche to EmployeeNiches::NICHES
    - if freelancer is restricted from adding the niche and only admin is allowed to add it for them
      - add the niche to EmployeeNiches::RESTRICTED_NICHES 
    - if niche is dependent on freelancer having FICTION niches as a prerequisite
      - add the niche to EmployeeNiches::FICTION_DEPENDENT_NICHES

  # Add rules related to the niches
    - list_workable_packages method in app/models/employee.rb
    - available_for_employee method in app/models/order.rb


----

### Notifications

Notifications are sent to to the app from the javascript/controller/notifications_controller.js.

- regular POST to notifications/get_latest (10s timeout?) goes to `notifications_controller#get_latest` 
  - posts userID (but is ignored: use currentUser for security)
  - POST comes from `app/javascript/controllers/notifications_controller.js`
- Settings for js notificationsController in the HTML that requires the controller:

```
<div id="kt_header" class="header header-fixed"
     data-controller="interactions notifications"
     data-target="notifications.user"
     data-userid="<%= current_user.id %>"
     data-last-notif-time="<%= current_user.last_notification_time %>"
     data-notif-sort-newest="<%= current_user.notification_settings&.sort_newest? %>">
```
references a User's `NotificationSubscriberSetting` model
