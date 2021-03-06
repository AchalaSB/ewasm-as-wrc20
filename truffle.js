/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  compilers: {
    external: {
      command: "node_modules/.bin/ewasmc assembly/index.ts -b build/untouched.wasm -t build/untouched.wat --sourceMap --validate",
      targets: [{
	properties: {
	  contractName: "ewasm-as-wrc20"
	},
	fileProperties: {
	  bytecode: "build/untouched.wasm",
          sourceMap: "build/untouched.wasm.map",
          source: "build/untouched.wat"
	}
      }]
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      from: 'efadf166849f06eee4b44ddb78e4162580f436b1',
      network_id: '*',
      verbose: 1
    },
  }
};

