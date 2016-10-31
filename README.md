# private-ethereum

Playing around with deploying and calling a smart contract to my private ethereum node running on Docker

### Environment
1. MacBook Pro running with OS X El Capitan
2. iterm + zsh 
3. Docker for Mac
4. node.js + web3 JS library

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
    
  - start the private node... DAG generation might take up to 10 minutes. After it's done, run 'miner.start()'
    ```
    root@bf1fa159da06:/# ./startPrivateGeth-console.sh
    ```

- deploy contract ... from the local machine, go to the js folder. record the address for the contract after the js file is completed
  ```
  node deployGreeter.js
  ```

- run the contract... update the js file below with the address and then invoke it
  ```
  node callGreeter.js
  ```
