## Prerequisites
- Java SDK v1.8 or higher
- Node v8.10 or higher
- yarn

## Preparations
- Create postgresql database
- Open new terminal and change to project directory
- Run database initialization script
```
PSQL_HOST=<postgresql_host>
PSQL_USER=<postgresql_user>
PSQL_DB=<postgresql_db>
psql -h $PSQL_HOST -U $PSQL_USER $PSQL_DB < releases/initialize-database.sql
```
- Change application.properties to reflect your database host, username, db name
```
spring.datasource.url=jdbc:postgresql://<postgresql_host>:5432/<postgresql_db>
spring.datasource.username=<postgresql_user>
spring.datasource.password=<postgresql_password>
```

## Build Instructions
### Package frontend and backend in one .jar
- Open new terminal and change to project directory
```
cd src/frontend && yarn && yarn build && cd ../..
./mvnw package
java -jar target/pamediakopes-0.0.1.jar
```
- Access website at `localhost:8080`

### Development Build
- Open new terminal and change to project directory
```
cd src/frontend
yarn
yarn start
```
- Open new terminal and change to project directory
```
./mvnw spring-boot:run
```