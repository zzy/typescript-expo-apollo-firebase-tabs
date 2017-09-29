#!/bin/bash

echo "================start hadoop==============="
/usr/local/hadoop-2.8.1/sbin/start-all.sh

echo "================start spark==============="
/usr/local/spark-2.2.0/sbin/start-all.sh