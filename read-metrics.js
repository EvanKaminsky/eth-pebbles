console.log('Starting to collect metrics');

var checkpoints = [0, 100000, 200000, 300000, 400000, 500000];

checkpoints.forEach(function(checkpoint) {
    while (eth.blockNumber < checkpoint) {    }
    console.log('At block number', eth.blockNumber);
    console.log('Read queries:', debug.metrics(true).eth.db.chaindata.user.readscount['Overall']);
    console.log('Reads (bytes):', debug.metrics(true).eth.db.chaindata.user.reads['Overall']);
    console.log('Write queries:', debug.metrics(true).eth.db.chaindata.user.writescount['Overall']);
    console.log('Writes (bytes):', debug.metrics(true).eth.db.chaindata.user.writes['Overall']);
    console.log('')
});

console.log('Done collecting metrics!');
