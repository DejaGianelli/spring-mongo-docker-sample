FROM ashu0183/openjdk-11-rhel7-rhel
WORKDIR /app
COPY target/spring-mongodb-docker.jar app.jar
ENV JVM_OPT $JVM_OPT
EXPOSE 8080
EXPOSE 5005
ENTRYPOINT java $JVM_OPT -jar app.jar