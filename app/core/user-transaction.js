function getUserTransactions(transaction, transactions) {
  return transactions.filter(({ user_id: userId }) => userId === transaction.user_id);
}

function getPrevAll(index, transaction, transactions) {
  const prevAll = transactions.slice(0, index);
  return getUserTransactions(transaction, prevAll);
}

module.exports = { getPrevAll };
