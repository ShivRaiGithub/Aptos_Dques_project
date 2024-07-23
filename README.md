## About the program

### Work
This program allows the onwer to set a up a contract ( provided in the contract folder), initialize it, put a question for the frontend and then allows the users to anonymously answer the set question.   

## Contract Deployment :
Contract was deployed to object address 0x3a4785b28d6d0c6832acf8a7ba6a8d0959c2bb0d9e09da2db35c3b6aaacaec13 by account 0xdaf23ad3aa5527ce3a8a570a2199ea72d1c3f1eb2a8e2ceef1e8ef58c3cc7156.   
Transaction submitted: https://explorer.aptoslabs.com/txn/0x784696af57493cc992fac81b09021f2e7eb4f8e674c2c7447d9c4d5362829948?network=devnet



## Demo
The following images mentioned are present in 'public' folder.   
1) On successful run of the project, the home screen will look like "home.png".
2) After connecting wallet, depending on the amount of answers already present, it will look like "Ques.png" where the question is at the top, the reply box present below, and then the replies with the first one being at the top.
3) When writing and sending the reply, it will look like "reply.png".
4) When replied, it will look like "replied.png" with your reply being at the bottom.   


## Future work

1) Allowing owner to reset the answers given.   
2) Allowing other users to also ask questions.
3) Categorizing the questions allowing users for better search and explore options.
4) Allowing users to reply to other users' answers.


# Setting the project

### Reminder
This uses Petra Wallet as the wallet for connection.   
Put the address of your deployed contract in Ques.js for connection to the contract.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Results should match as mentioned in 'Demo' section above with the images provided in public folder.
