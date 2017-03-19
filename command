docker run --name mongodb -p 27017:27017 -d mongo
docker exec -it mongodb mongo

docker run -it --name budshome -p 5555:5555 --link mongodb:mongodb -v E:/budshome:/budshome -d ouds/budshome
docker exec -it budshome bash

docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
docker run -it --name budshome -p 5555:5555 --link postgres:postgres -v E:/budshome:/budshome -d budshome/budshome

docker build -t ouds/budshome E:\budshome.com
