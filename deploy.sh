docker build --build-arg configuration=production-local -t go-arena-web .

docker run --name go-arena-web -d -p 4200:80 go-arena-web
