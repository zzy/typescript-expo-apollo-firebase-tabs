docker run --name mongodb -p 27017:27017 -d mongo
docker exec -it mongodb mongo

docker run -it --name bh-b -p 5555:5555 --link mongodb:mongodb -v E:/budshome:/budshome -d ouds/bhback
docker exec -it bh-b bash

docker run -it --name bh-f -p 5000:5000 -v E:\budshome\budshome.com-frontend\build\:/bh-frontend -d daocloud.io/library/node:slim

docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
docker run -it --name bh-b -p 5555:5555 --link postgres:postgres -v E:/budshome:/budshome -d ouds/bhback

docker build -t ouds/bhback E:\budshome\budshome.com-backend
docker build -t ouds/bhfront E:\budshome\budshome.com-frontend

