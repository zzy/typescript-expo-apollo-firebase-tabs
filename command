docker run --name mongodb -p 27017:27017 -d mongo
docker exec -it mongodb mongo

docker run -it --name budshome -p 8888:8888 --link mongodb:mongodb -v E:/budshome:/budshome -d budshome/budshome
docker exec -it budshome bash
