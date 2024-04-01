const IdentityManagerAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"_status","type":"bool"},{"indexed":false,"internalType":"string","name":"_msg","type":"string"}],"name":"Result","type":"event"},{"inputs":[{"internalType":"string","name":"_userId","type":"string"},{"internalType":"address","name":"_userAddress","type":"address"},{"internalType":"uint256","name":"_role","type":"uint256"}],"name":"addUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"checkUser","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getUserId","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getIdentityAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getUserRole","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"_userAddress","type":"address"}],"name":"getUserExist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true}];