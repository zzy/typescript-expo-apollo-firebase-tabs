# hadoop 2.8.0 on Ubuntu 16.04
# docker build -t ouds/bigdata:0.1 .

FROM daocloud.io/library/ubuntu:16.04
MAINTAINER budshome.com <zzy@budshome.com>

USER root

# install dev tools
RUN apt-get update
RUN apt-get install -y curl tar sudo openssh-server openssh-client rsync

# passwordless ssh
RUN rm -f /etc/ssh/ssh_host_dsa_key /etc/ssh/ssh_host_rsa_key /root/.ssh/id_rsa
RUN ssh-keygen -q -N "" -t dsa -f /etc/ssh/ssh_host_dsa_key
RUN ssh-keygen -q -N "" -t rsa -f /etc/ssh/ssh_host_rsa_key
RUN ssh-keygen -q -N "" -t rsa -f /root/.ssh/id_rsa
RUN cp /root/.ssh/id_rsa.pub /root/.ssh/authorized_keys

# java
ADD jdk-8u112-linux-x64.tar.gz /usr/local/
RUN mv /usr/local/jdk1.8.0_112 /usr/local/jdk1.8

ENV JAVA_HOME /usr/local/jdk1.8
ENV PATH $PATH:$JAVA_HOME/bin

# hadoop
ADD hadoop-2.8.0.tar.gz /usr/local/