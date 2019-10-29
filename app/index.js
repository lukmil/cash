import fileReader from './utils/file-reader';
import commission from './core/commission';
import userTransaction from './core/user-transaction';
import configuration from './core/configuration';

const args = process.argv;
const transactions = fileReader.read(args[2]);

function onConfigLoad(config) {
  transactions.forEach((transaction, index) => {
    const userPastTransactions = userTransaction.getPrevAll(index, transaction, transactions);

    process.stdout.write(`${commission.get(transaction, userPastTransactions, config)}\n`);
  });
}

configuration.onLoad(onConfigLoad);
