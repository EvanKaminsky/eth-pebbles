function stats() {
    console.log("Reads:\t\t"     + debug.metrics(true).eth.db.chaindata.user.readscount.Overall);
    console.log("Writes:\t\t"    + debug.metrics(true).eth.db.chaindata.user.writescount.Overall);
    console.log("Pending:\t"     + eth.pendingTransactions.length);
    console.log("Pending-Str:\t" + eth.getBlock("pending").transactions.length);
    console.log("Peers:\t\t"     + admin.peers.length);
    console.log("Block #:\t"     + eth.blockNumber);
    console.log("Enode: "        + admin.nodeInfo.enode);
    console.log("")
}

function pendingTransactions() {
    return eth.getBlock("pending").transactions.length > 0;
}

function lookForTransactions() {
    if (pendingTransactions()) {
        console.log("Already have pending transactions! Terminating.");
        return;
    }

    console.log("Looking for transactions...");
    miner.start(1);

    while (!pendingTransactions() && !kill) {}

    console.log("Found pending transactions! Terminating.");
    miner.stop();
}

function mineWhilePending() {
    console.log("Starting to mine...");
    miner.start(1);

    while (pendingTransactions() && !kill) {}

    console.log("No more transactions! Terminating.");
    miner.stop();
}

function sendTransactions(quantity) {
    if (quantity < 1 || quantity > 100000) {
        console.log("Can't send " + quantity + " transactions. Terminating.");
        return;
    }

    eth.defaultAccount = eth.accounts[0];
    personal.unlockAccount(eth.accounts[0], "1234");

    console.log("Sending " + quantity + " transactions!");
    for (i = 0; i < quantity; i++) {
        eth.sendTransaction({from: eth.accounts[0], to: eth.accounts[1], value: 0x1})
    }

    console.log("Finished sending the transactions. Terminating.");
}

function checkBlocks(index) {
    for (i = 0 ; i < index; i++) {
        if (eth.getBlock(i).transactions.length > 0) {
            console.log(i);
        }
    }
}
