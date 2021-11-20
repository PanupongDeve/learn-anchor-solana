
# Learn Achor Framwork
## Resource

1. [The Complete Guide to Full Stack Solana Development](https://dev.to/dabit3/the-complete-guide-to-full-stack-solana-development-with-react-anchor-rust-and-phantom-3291)

## install tools

1. [install rust](https://www.rust-lang.org/tools/install)<br />
2. [install solana cli](https://docs.solana.com/cli/install-solana-cli-tools)<br />
3. install anchor framwork 
    - npm i -g @project-serum/anchor-cli <br />

4. Create Project
    - anchor init mysolanaapp --javascript <br />

## Start Local Server

1. solana config set --url localhost
2. solana-test-validator

## How to Develop Smart Contract

1. generate address
    - solana address -k target/deploy/mysolanaapp-keypair.json
    - file src/lib.rs -> declare_id!("your-program-id");
    - fileAnchor.toml <br/>
        <code>[programs.localnet]<br />
        mysolanaapp = "your-program-id"</code>

2. implement smart cotract in src/lib.rs
3. test smart contract
    - anchor test
    - [fix command error](https://github.com/project-serum/anchor/issues/1044)
4. build program
    - ancho build
5. deploy program
    - ancho deploy

