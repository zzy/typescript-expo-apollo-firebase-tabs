docker login -u * -p *

docker run --name mongodb -p 27017:27017 -d mongo
docker exec -it mongodb mongo

docker run -it --name bh-b -p 5555:5555 --link mongodb:mongodb -v E:/budshome:/budshome -d ouds/bh-b
docker exec -it bh-b bash

docker run -it --name bh-f -p 5000:5000 -v E:\budshome\budshome.com-frontend\build\:/bh-frontend -d ouds/bh-f
docker run -it --name bh-b -p 5555:5555 -v E:\budshome\budshome.com-backend:/bh-backend -d ouds/bh-b
docker run -it --name civ-b -p 5555:5555 -v E:\civ-b:/civ-b  -d ouds/civ-b

docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d daocloud.io/library/postgres
docker run -it --name bh-c -p 5555:5555 --link postgres:postgres -v E:/budshome-cms:/budshome-cms -d ouds/bh-c
docker run -it --name bh-c -p 5555:5555 -v E:/budshome-cms:/budshome-cms -d ouds/bh-c

docker build -t ouds/bh-b E:\budshome.com\budshome.com-backend\extras
docker build -t ouds/bh-f E:\budshome.com\budshome.com-frontend\extras
docker build -t ouds/bh-c E:\budshome-cms\extras
docker build -t ouds/civ-b E:\civ-b\extras

sudo docker run -it --name bh-f -p 81:5000 -v ~/bh-frontend:/bh-frontend -d node
sudo docker run -it --name bhx-f -p 82:5000 -v ~/bhx-frontend:/bhx-frontend -d node
sudo docker run -it --name gd-f -p 83:5000 -v ~/gd-frontend:/gd-frontend -d node
sudo docker run -it --name yashayan -p 84:5555 -v ~/yashayan.com:/yashayan.com -d ouds/yashayan

git config --list
git config --global user.name "Ouds"
git config --global user.email "2558256956@qq.com"
git config --global credential.helper store

sudo docker run --detach \
    --hostname git.budshome.com \
    --publish 84:80 \
    --name gitlab \
    --restart always \
    --volume /srv/gitlab/config:/etc/gitlab:Z \
    --volume /srv/gitlab/logs:/var/log/gitlab:Z \
    --volume /srv/gitlab/data:/var/opt/gitlab:Z \
    gitlab/gitlab-ce

docker run -it --name gitlab -p 84:80 \ 
        --volume E:/gitlab/config:/etc/gitlab  \ 
        --volume E:/gitlab/logs:/var/log/gitlab \ 
         --volume E:/gitlab/data:/var/opt/gitlab \ 
        -d daocloud.io/library/ubuntu


sudo vi /etc/ssh/sshd_config
PermitRootLogin yes
service ssh restart

sudo docker network create -d bridge --subnet=172.25.0.0/16 --gateway=172.25.5.1 bigdata

sudo docker run -itd --name=bdm --hostname=bdm --network=bigdata --ip=172.25.5.2 -p 30022:22 -p 50070:50070 -p 38080-38081:8080-8081 -p 38088:8088 -p 34040-34060:4040-4060 -p 39000-39001:9000-9001 --restart=always zzy/bdm
sudo docker run -itd --name=bds1 --hostname=bds1 --network=bigdata --ip=172.25.5.3 -p 30122:22 --restart=always zzy/bds1

sudo docker inspect bds6|grep IPAddress

sudo docker commit bdm zzy/bdm
sudo docker commit bds1 zzy/bds1

