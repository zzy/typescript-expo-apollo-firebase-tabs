docker run --name mongodb -p 27017:27017 -d mongo
docker exec -it mongodb mongo

docker run -it --name bh-b -p 5555:5555 --link mongodb:mongodb -v E:/budshome:/budshome -d ouds/bh-b
docker exec -it bh-b bash

docker run -it --name bh-f -p 5000:5000 -v E:\budshome\budshome.com-frontend\build\:/bh-frontend -d ouds/bh-f
docker run -it --name bh-b -p 5555:5555 -v E:\budshome\budshome.com-backend:/bh-backend -d ouds/bh-b

docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
docker run -it --name bh-b -p 5555:5555 --link postgres:postgres -v E:/budshome:/budshome -d ouds/bh-b

docker build -t ouds/bh-b E:\budshome\budshome.com-backend\extras
docker build -t ouds/bh-f E:\budshome\budshome.com-frontend\extras

