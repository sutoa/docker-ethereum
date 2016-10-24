# private-ethereum

Playing around with deploying and calling a smart contract to my private ethereum node running on Docker

### Environment
1. MacBook Pro running with OS X El Capitan
2. iterm + zsh 
3. Docker for Mac

### Steps:
- build a docker image from the docker folder 
  ```
  docker build -f Dockerfile -t mygeth:v2 .
  ```

- start a docker container using the image just built
  ```
  ./start-pri-node.sh node1
  ```

- inside the container console... 
  - init the genesis block && create 2 new accounts
    ```
    root@bf1fa159da06:/# cd /ethereum/private-node/
    root@bf1fa159da06:/# ./initPrivateNode.sh
    ```
    
  - start the private node
    ```
    ./startPrivateGeth-console.sh
    ```

- deploy contract
  ```
  node deployGreeter.js
  ```

- run the contract
  ```
  node callGreeter.js
  ```
