# hadoop 2.8.1, spark 2.2.0 on Ubuntu 16.04
# docker build -t ouds/bigdata:0.1

FROM daocloud.io/library/ubuntu
MAINTAINER budshome.com <zzy@budshome.com>

# install dev tools
RUN apt-get update
RUN apt-get install -y vim openssh-server inetutils-ping net-tools

USER root
RUN mkdir /var/run/sshd
RUN echo 'root:screencast' | chpasswd

RUN sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

# java
ADD jdk-8u112-linux-x64.tar.gz /usr/local/
RUN mv /usr/local/jdk1.8.0_112 /usr/local/jdk
ENV JAVA_HOME /usr/local/jdk
ENV PATH $JAVA_HOME/bin:$PATH

# scala
ADD scala-2.12.2.tgz /usr/local/
RUN mv /usr/local/scala-2.12.2 /usr/local/scala
ENV SCALA_HOME /usr/local/scala
ENV PATH $SCALA_HOME/bin:$PATH

# hadoop
ADD hadoop-2.8.1.tar.gz /usr/local/
ENV HADOOP_HOME /usr/local/hadoop-2.8.1
ENV HADOOP_MAPRED_HOME $HADOOP_HOME
ENV HADOOP_COMMON_HOME $HADOOP_HOME
ENV HADOOP_HDFS_HOME $HADOOP_HOME
ENV YARN_HOME $HADOOP_HOME
ENV HADOOP_OPTS "-Djava.library.path=$HADOOP_HOME/lib"

# spark
ADD spark-2.2.0-bin-hadoop2.7.tgz /usr/local/
RUN mv /usr/local/spark-2.2.0-bin-hadoop2.7 /usr/local/spark-2.2.0
ENV SPARK_HOME=/usr/local/spark-2.2.0
ENV PATH=$PATH:$SPARK_HOME/bin

# port
EXPOSE 22 80 443 4040 8080 8088 9000 9001 50070

