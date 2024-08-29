const { ethers, Contract, BigNumber } = require('ethers');

const sdk = require('@defillama/sdk');
const WETH_TOKEN = '0x4200000000000000000000000000000000000006';
const Super_OETH_TOKEN = '0xdbfefd2e8460a6ee4955a68582f85708baea60a3';

const utils = require('../utils');
const vaultABI = {
@@ -31,17 +34,14 @@ const poolsFunction = async () => {
const tvlUsd = (totalValueEth / 1e18) * ethPrice;
const superoethbdata = {

pool: '0x6446021F4E396dA3df4235C62537431372195D38',
pool: Super_OETH_TOKEN,
chain: 'Base',
project: 'super-origin-ether',
symbol: 'superOETHb',
tvlUsd,
apy: Number(apyData.apy),
underlyingTokens: [
WETH_TOKEN,
],
};

@@ -51,5 +51,5 @@ const poolsFunction = async () => {

module.exports = {
timetravel: false,
apy: poolsFunction,

url: 'https://oeth.com',
url: 'https://www.originprotocol.com/super-oeth',
};