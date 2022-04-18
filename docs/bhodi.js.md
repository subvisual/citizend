# Running bhodi.js tooling

## Setup repo

```
git clone git@github.com:AcalaNetwork/bhodi.js
cd bhodi.js
git submodule update --init --recursive
rush update
```

## Start EVM

```
cd evm-subql
rush build
docker-compose up
```

## Start RPC

```
cd eth-rpc-adapter
rushx build
LOCAL_MODE=1 rushx dev
```
