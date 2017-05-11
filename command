docker run --name mongodb -p 27017:27017 -d mongo
docker exec -it mongodb mongo

docker run -it --name bh-b -p 5555:5555 --link mongodb:mongodb -v E:/budshome:/budshome -d ouds/bh-b
docker exec -it bh-b bash

docker run -it --name bh-f -p 5000:5000 -v E:\budshome\budshome.com-frontend\build\:/bh-frontend -d ouds/bh-f
docker run -it --name bh-b -p 5555:5555 -v E:\budshome\budshome.com-backend:/bh-backend -d ouds/bh-b

docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d daocloud.io/library/postgres
docker run -it --name bh-c -p 5555:5555 --link postgres:postgres -v E:/budshome-cms:/budshome-cms -d ouds/bh-c

docker build -t ouds/bh-b E:\budshome.com\budshome.com-backend\extras
docker build -t ouds/bh-f E:\budshome.com\budshome.com-frontend\extras
docker build -t ouds/bh-c E:\budshome-cms\extras

sudo docker run -it --name bh-f -p 81:5000 -v ~/bh-frontend:/bh-frontend -d node
sudo docker run -it --name bhx-f -p 82:5000 -v ~/bhx-frontend:/bhx-frontend -d node
sudo docker run -it --name gd-f -p 83:5000 -v ~/gd-frontend:/gd-frontend -d node

git config --list
git config --global user.name "Ouds"
git config --global user.email "2558256956@qq.com"
git config --global credential.helper store