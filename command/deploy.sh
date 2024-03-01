#!/bin/bash

if [[ $1 = "prod" || $1 = "dev" ]] && [[ $2 = "up" || $2 = "down" ]]; then
    cd ./docker
    fileEnv="docker-compose.${1}.yml"
    downOrUp=$2
    echo "Running docker-compose -f docker-compose.yml -f $fileEnv $downOrUp" 
    docker-compose -f docker-compose.yml -f $fileEnv $downOrUp
else
    echo "Need to follow format ./deploy.sh [prod|dev] [up|down]"
    echo "ex:  ./deploy.sh dev up"
fi