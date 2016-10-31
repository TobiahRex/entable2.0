# Coinbase

## DEVELOPER NOTES:
  Coinbases API is highly diverse.  A Coinbase user can 3 types of wallets.

  1. USD wallet:
    - If Bitcoin is sent to the public address at this wallet, then Coinbase will automatically convert the Bitcoins received into dollars.
  2. BTC wallet:
    - A standard BTC wallet.  BTC from this wallet can be SOLD to USD and stored either Instantly if using a Paypal account _payment_method_ or can be sent to your bank account on file over a series of days.
    - Transfers can be made between a BTC - ETH wallet. BTC - Vault wallet.
  3. VAULT wallet:
    - A highly secure BTC wallet.  only contains BTC. If you decide to NOT allow Coinbase the option of knowing information about it's addresses, and keys, and only the amount, then if you forget the information you will not be able to recover the funds.

  * The purpose of explaining all this is that the folder design has broken up the API keys and methods most applicable for each wallet, into separate files.

  * Most API methods, trigger an optional webhook to receive event notifications from Coinbase.  This too has been separated out into it's own file. _coinbase.hooks.js_.
