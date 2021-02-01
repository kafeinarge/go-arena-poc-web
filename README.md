# Turkcell Go Arena POC

POC project of Türkcell's Go Arena Backoffice .\
\
For the use of Go Arena Sales Management Team and dealer employees. With the Go Arena application, you can easily
monitor and manage your daily operational transactions.

### What you'll need

- [Nodejs](https://nodejs.org/)
- [Docker](https://hub.docker.com/search?q=&type=edition&offering=community&operating_system=linux)

# How To Build and Run

## 1 - On A Docker Container

Just run the given deploy script  \
`./deploy.sh`\
It'll build angular application with production configuration and sends to requests to cloud server.

`./deploy-localhost.sh`\
It'll build angular application with production configuration and sends to requests to localhost.

## 2 - Standalone

Start application with Angular CLI\
`ng serve`  


# Ports

#### Default port is `4200`
