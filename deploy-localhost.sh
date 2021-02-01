docker build --build-arg configuration=production-localhost -t go-arena-web .

docker run --name go-arena-web -d -p 4200:80 go-arena-web
