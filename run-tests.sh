#!/bin/bash

source start-docker.sh
export KAFKA_TEST_HOST=$DOCKER_VM_IP
echo "KAFKA_TEST_HOST: $KAFKA_TEST_HOST"
npm run lint && npm run cov