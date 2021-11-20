const assert = require("assert");
const anchor = require('@project-serum/anchor');
const { SystemProgram } = anchor.web3;

describe('mysolanaapp', () => {

  /* create and set a Provider */
  const provider = anchor.Provider.env();
  const program = anchor.workspace.Mysolanaapp;
  anchor.setProvider(provider);



  it('Creates a counter', async () => {
    /* Call the create function via RPC */
    const baseAccount = anchor.web3.Keypair.generate();
    await program.rpc.create({
      accounts: {
        baseAccount: baseAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId
      },
      signers: [baseAccount]
    });

    const account = await program.account.baseAccount.fetch(baseAccount.publicKey);
    console.log('Count 0: ', account.count.toString());
    assert.ok(account.count.toString() == 0);
    _baseAccount = baseAccount;

  });
});
