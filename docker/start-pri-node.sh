#!/bin/bash
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 node_folder "
    exit 1
fi
project_root=/Users/suto/Documents/sandbox/ethereum/private-nodes
project_root1=`pwd`
#docker build -f Dockerfile -t mygeth:v2 .

docker run -it --name my-geth-node \
-p 30303:30303 -p 8545:8545 \
-v $project_root1/../$1:/ethereum/private-node \
--rm mygeth:v2
