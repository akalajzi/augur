webpackJsonp([7,11],{1005:function(e,t,a){"use strict";var n=a(14),l=a.n(n),r=a(563),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(e){return l.a.createElement("section",{id:"login_message_view"},l.a.createElement("div",{className:"page-content"},l.a.createElement("h1",null,"Welcome to the Augur beta test!"),l.a.createElement("p",null,"This is a beta test in advance of Augur's live release. There are bugs. There are features being\n\t\t\t\tadded, improved, and re-designed. There are a few hundred enhancements scheduled to be added in the next few\n\t\t\t\tmonths. Your thoughtful feedback now is essential. Please use the feedback button at the bottom left of\n\t\t\t\tevery page to submit your feedback, or feel free to send an email to ",l.a.createElement("a",{className:"link",href:"mailto:hugs@augur.net?subject=Beta Testing feedback"},"hugs@augur.net"),". From your submissions, the development team will coordinate fixes and new features. Changes and fixes will be\n\t\t\t\tdisplayed when you log in again."),l.a.createElement("h2",null,"Important information:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Because Augur is a ",l.a.createElement("b",null,"completely decentralized")," system, if you lose your login credentials it is impossible to recover them. Please ",l.a.createElement("a",{className:"link",href:"http://blog.augur.net/faq/how-do-i-savebackup-my-wallet/",target:"_blank",rel:"noopener noreferrer"},"take appropriate measures")," to protect the safety of your password, and create a way to recover your credentials if you forget them."),l.a.createElement("li",null,"Do not send real Ether (ETH) to your Augur account while we are testing! Each account will be given 10,000 testnet ETH tokens for beta testing. Please note that testnet ETH has no value except for testing: it is merely an on-contract IOU (a token) for testnet Ether."),l.a.createElement("li",null,"Reputation (REP) is a unique and important part of the Augur trading platform. If you own REP tokens, you must visit\n\t\t\t\t\tthe site periodically to fulfill your reporting obligations. During beta testing, each new account will\n\t\t\t\t\treceive 47 testnet REP (they have no value except for testing). Each reporting cycle will last 2 days. Every\n\t\t\t\t\ttwo-day cycle will consist of a commit phase, a reveal phase, and a challenge phase. Because the test\n\t\t\t\t\tcycle is dramatically compressed (the main net cycle will be 60 days long) it is recommended that\n\t\t\t\t\tusers visit the site at least every 2 days to maintain your REP and simulate “real money” trading,\n\t\t\t\t\tresolution, and reporting conditions. Learn ",l.a.createElement("a",{className:"link",href:"https://www.youtube.com/watch?v=sCms-snzHk4",target:"_blank",rel:"noopener noreferrer"},"how Augur's Reputation tokens work"),"."),l.a.createElement("li",null,'A note on price/time priority on the blockchain.  The site is only as fast as Ethereum blocks are mined.  Augur\'s matching engine sorts order books by price, then by block number, then by transaction index. Within a single block, transactions are ordered by the miner who mines the block.  When constructing a block, miners typically order transactions first by gasprice (highest to lowest), and then by the order received (oldest to newest).  So, Augur\'s "price/blocknumber/transaction index priority" ordering is generally equivalent to price/time priority, if there are differing gasprices within the block, the transaction index is not guaranteed to be time-ordered.  (Presently, Augur does not attempt to adjust gasprices in response to other pending transactions, although, if desired, gasprice can be adjusted manually using the API, by changing the "gasPrice" field attached to every sendTransaction payload.)')),l.a.createElement("h2",null,"Technical updates:"),l.a.createElement("h3",null,"January 3, 2017"),l.a.createElement("ol",null,l.a.createElement("li",null,"The front-end orderbook data store is now properly updated by the trade (log_fill_tx) and bid/ask (log_add_tx) filters."),l.a.createElement("li",null,"Only show balances in payout transaction display once the transaction has completed."),l.a.createElement("li",null,"Fixed winning outcome shares selection for categorical markets.")),l.a.createElement("h3",null,"January 2, 2017"),l.a.createElement("ol",null,l.a.createElement("li",null,"Streamlined the conditional fund-new-account and registration timestamp actions during login and registration."),l.a.createElement("li",null,"Moved the in-progress display logic for new account funding and timestamping to the transaction relayer."),l.a.createElement("li",null,"Verify that user has a winning position with greater than zero shares before calling the trading payout functions in augur.js."),l.a.createElement("li",null,"Moved the branch synchronization sequence specific to reporters to a separate action, and added a check for non-zero REP balance prior to dispatching this action."),l.a.createElement("li",null,'Logging in to an existing account now triggers free account funding if any balances are zero, instead of only checking if the account\'s "ether" balance is zero.'),l.a.createElement("li",null,"Importing an account from file now (conditionally) triggers funding and registration timestmap actions."),l.a.createElement("li",null,"Reordered loadLoginAccountDependents actions: registration timestamp lookup now happens before updateAssets."),l.a.createElement("li",null,"Added allAssetsLoaded method to the balances selector."),l.a.createElement("li",null,"Added fundNewAccount the transaction relayer."),l.a.createElement("li",null,"The default transaction constructor now allows custom message and description fields."),l.a.createElement("li",null,"The updateAssets callback now only fires once, after all assets are loaded."),l.a.createElement("li",null,'The FUND_ACCOUNT header text in the transactions display is now "Fund Account".')),l.a.createElement("h3",null,"January 1, 2017"),l.a.createElement("ol",null,l.a.createElement("li",null,"Moved the in-progress display logic for market creation, trading payouts (claim-proceeds), registration, and REP transfers and approvals to the transaction relayer."),l.a.createElement("li",null,"All messaging callbacks have been removed from claimMarketsProceeds in augur.js."),l.a.createElement("li",null,"Trading payout receipts in augur.js are now parsed using the filters event message parser."),l.a.createElement("li",null,"Updates to the ",l.a.createElement("a",{className:"link",href:"http://blog.augur.net/faq/how-do-i-savebackup-my-wallet/",target:"_blank",rel:"noopener noreferrer"},"augur-abi")," middleware module: added negative number support to the format_int256 method, and added an unfix_signed method to unfix and wrap to negative if needed."),l.a.createElement("li",null,"Added status parameter to constructRelayTransaction; assign in-progress/success status depending on if blockHash is set."),l.a.createElement("li",null,"Gas fees and timestamps now display properly for all relayed transaction types."),l.a.createElement("li",null,"Fixed gasFees formatting for transactions that are manually updated by the front-end."),l.a.createElement("li",null,"Removed deprecated messaging callbacks from checkPeriod."),l.a.createElement("li",null,'Added a "closedMarket" log to the CloseMarket contract that includes the market ID, branch ID, and sender account address for the market being closed.  The old closeMarket_logReturn filter in the front-end has been replaced with the new closedMarket filter.'),l.a.createElement("li",null,"Changed the initial report value for scalar events to an empty string to fix an uncontrolled-to-controlled input warning generated by React."),l.a.createElement("li",null,"Removed register from no-relay list."),l.a.createElement("li",null,"Removed manual Reveal Report transaction messaging code."),l.a.createElement("li",null,'Replaced "in progress" transaction status text with "submitted".'),l.a.createElement("li",null,"Your account positions are now reloaded after claiming trading payouts.")),l.a.createElement("h3",null,"December 31, 2016"),l.a.createElement("ol",null,l.a.createElement("li",null,'Fixed the "isUnethical" calculation in constructSubmittedReportTransaction and constructSubmittedReportHashTransaction.'),l.a.createElement("li",null,"Added missing dispatch arguments to constructReportingTransaction cases."),l.a.createElement("li",null,'Added report styling and unethical report "thumbs-down" icon to the Transaction component.'),l.a.createElement("li",null,"The buildDescription function inside the Transaction component has been replaced with a new TransactionDescription component."),l.a.createElement("li",null,"Moved report ethicality display into separate ReportEthics component, and replaced ethics displays in My Report and Transaction with ReportEthics component.  Removed report ethicality display logic from formatReportedOutcome."),l.a.createElement("li",null,"Attached id (market ID), minValue, amd maxValue properties to the market info objects fetched by getMarketInfo, getMarketsInfo, and batchGetMarketInfo in augur.js."),l.a.createElement("li",null,"Fixed two React warnings: 1) Added a new hidePrefix property to the ValueDenomination component and used it instead of conditionally displaying the freeze prefix value. 2) Changed the default null state values in the ReportForm component to undefined."),l.a.createElement("li",null,"In the branch synchronization sequence, getPenalizedUpTo and getCollectedFees are now only called if the user is logged in."),l.a.createElement("li",null,'Added a long dash (—) display in the "end date" column of My Reports if the end date is not available.'),l.a.createElement("li",null,"Outcomes reported as both Indeterminate and Unethical are now displayed correctly in relayed Commit Report transactions."),l.a.createElement("li",null,"All manual commitReport transaction create/update/delete actions have been replaced by the transaction relay."),l.a.createElement("li",null,"Added a report encryption wrapper to the front-end."),l.a.createElement("li",null,"Indeterminate reports are now correctly converted to hexadecimal strings in augur.js fixReport method."),l.a.createElement("li",null,"Converted main trade logged-transaction loop to async.forEachOfSeries for proper getMarketInfo callback closure."),l.a.createElement("li",null,'Added initial check if "from" field matches login account address before processing relayed transactions.'),l.a.createElement("li",null,"Fixed a reassignment error in place-trade."),l.a.createElement("li",null,"Filled in collectFees front-end transaction relayer."),l.a.createElement("li",null,"Added a check for the second half of the reporting period to the collectFees block of the composite reporting synchronization / updating methods in augur.js."),l.a.createElement("li",null,"The relayed transaction gasFees field now is included in filtered/converted transactions, if it is available (in-memory).")),l.a.createElement("h3",null,"December 30, 2016"),l.a.createElement("ol",null,l.a.createElement("li",null,"Moved collectFees logic to augur.js: fee collection now handled automatically by augur.checkPeriod."),l.a.createElement("li",null,"The UI sync-branch-with-blockchain logic now looks up the last report cycle penalized and and the fee collection status of the cycle being checked for penalties.  Both of these fields are now attached to the branch data store and available in the front-end."),l.a.createElement("li",null,"Filled in switch cases for submitReport, submitReportHash, penalizeWrong, and penalizationCatchup in the front-end part of the transaction relayer.")),l.a.createElement("h3",null,"December 29, 2016"),l.a.createElement("ol",null,l.a.createElement("li",null,"Fixed/updated all downstream actions from or calling to bid, ask, and short ask.")),l.a.createElement("h3",null,"December 28, 2016"),l.a.createElement("ol",null,l.a.createElement("li",null,"Replaced deprecated bid, ask, and short ask transaction-related code with simple calls to augur.js.  All transaction display updating and messaging is now handled automatically by the transation relay and filters."),l.a.createElement("li",null,"Added possible events that can be logged by a method call to API maker script."),l.a.createElement("li",null,"Added error / null return checks to load-then-retry-conversion callbacks."),l.a.createElement("li",null,"Refactored trading log-to-transaction conversions.")),e.marketsLink&&l.a.createElement(r.a,o({className:"lets-do-this-button"},e.marketsLink),"Let's do this!")))};i.propTypes={marketsLink:n.PropTypes.object},t.default=i}});