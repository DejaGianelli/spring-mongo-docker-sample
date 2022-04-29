# Spring Boot + MongoDB Sample

## Running the Application

### Docker

To run the application in your machine, run the following commands in the root folder:

`$ mvn clean install -DskipTests`

This will generate the Spring's fat jar file that will be copied in the build of the container. And then:

`$ docker compose up --build`

This command builds the images and run all required containers.

To stop all containers and remove volumes created by up:

`$ docker-compose down --volumes`

#### *Development Tip:*

If you are using IntelliJ, it is useful to make a Run Configuration to automate steps above, 
like the one below, so with a click of a button in the IDE, you can package the application, build docker 
image and restart the application container:
<p align="center">
    <img src=".docker/images/intellij-docker-compose-config.png" alt="Logo" width="700" height="400">
</p>

### Database (MongoDB)

To connect into local MongoDB using mongo client:

`$ mongo -u [user] -p '[password]' --authenticationDatabase sample_db`

or using the following string connection:

`$ mongodb://[user]:[password]@localhost:27017/?authSource=sample_db`