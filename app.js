const contractAddress = '0xe8381aa97b3c1c1b1a90b7420e8810122273f39c';
const contractABI = [{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"},{"internalType":"address","name":"_usdcAddress","type":"address"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newRound","type":"uint256"}],"name":"RoundAdvanced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalCost","type":"uint256"}],"name":"TokensBoughtByOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalCost","type":"uint256"}],"name":"TokensPurchased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"staker","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"TokensStaked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"token","type":"address"}],"name":"buyTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"currentRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundsRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hardCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"token","type":"address"}],"name":"ownerBuyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"presaleSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rounds","outputs":[{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"tokensForSale","type":"uint256"},{"internalType":"uint256","name":"tokensSold","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"softCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdcAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]; // Your full ABI here
const IERC20_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];


const conversionRateETHToUSD = 1; // Set your ETH to USD conversion rate here

let web3;
let contract;
let userAccount;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            initContract();
        } catch (error) {
            console.error("User denied account access");
            initContract(); // Initialize the contract even if MetaMask access is denied
        }
    } else {
        console.log('No Ethereum provider detected. Please install MetaMask!');
        initContract(); // Initialize the contract without MetaMask
    }
});

function initContract() {
    contract = new web3.eth.Contract(contractABI, contractAddress);
    updateRoundInfo(); // Initial fetch
    setInterval(updateRoundInfo, 1000); // Update every minute
    getCaps(); // Fetch hard cap and soft cap
}

async function connectWallet() {
    const accounts = await web3.eth.requestAccounts();
    userAccount = accounts[0];
    document.getElementById('wallet-address').innerText = `Wallet: ${userAccount}`;
}

async function updateRoundInfo() {
    try {
        const roundIndex = await contract.methods.currentRound().call();
        const round = await contract.methods.rounds(roundIndex).call();

        document.getElementById('current-round').innerText = roundIndex;
        document.getElementById('token-price').innerText = web3.utils.fromWei(round.price, 'ether');
        document.getElementById('tokens-available').innerText = round.tokensForSale - round.tokensSold;
        document.getElementById('tokens-bought').innerText = round.tokensSold;

        const startTime = parseInt(round.startTime);
        const endTime = parseInt(round.endTime);
        const currentTime = Math.floor(Date.now() / 1000);

        let timeLeft;
        if (currentTime < startTime) {
            timeLeft = `Round hasn't started yet`;
        } else if (currentTime >= startTime && currentTime <= endTime) {
            const remainingSeconds = endTime - currentTime;
            const days = Math.floor(remainingSeconds / (60 * 60 * 24));
            const hours = Math.floor((remainingSeconds % (60 * 60 * 24)) / (60 * 60));
            const minutes = Math.floor((remainingSeconds % (60 * 60)) / 60);
            const seconds = remainingSeconds % 60;
            timeLeft = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds remaining`;
        } else {
            timeLeft = `Round has ended`;
        }

        document.getElementById('round-time-duration').innerText = timeLeft;
    } catch (error) {
        console.error("Error fetching current round info:", error);
    }
}

async function getCaps() {
    try {
        const hardCap = await contract.methods.hardCap().call();
        const softCap = await contract.methods.softCap().call();
        
        document.getElementById('hard-cap').innerText = (web3.utils.fromWei(hardCap, 'ether') * conversionRateETHToUSD).toFixed(2) + ' USD';
        document.getElementById('soft-cap').innerText = (web3.utils.fromWei(softCap, 'ether') * conversionRateETHToUSD).toFixed(2) + ' USD';
    } catch (error) {
        console.error("Error fetching caps:", error);
    }
}

async function buyTokens() {
    try {
        if (!userAccount) {
            alert("Please connect your wallet first!");
            return;
        }

        const amount = document.getElementById('buy-amount').value;
        const paymentToken = document.getElementById('payment-token').value;

        let tokenAddress;
        if (paymentToken === 'ETH') {
            tokenAddress = '0x0000000000000000000000000000000000000000';
        } else if (paymentToken === 'USDT') {
            tokenAddress = await contract.methods.usdtAddress().call();
        } else if (paymentToken === 'USDC') {
            tokenAddress = await contract.methods.usdcAddress().call();
        } else {
            console.error("Unsupported payment token");
            return;
        }

        const amountInWei = web3.utils.toWei(amount, 'ether');

        if (paymentToken === 'ETH') {
            await web3.eth.sendTransaction({
                from: userAccount,
                to: contractAddress,
                value: amountInWei
            });
        } else {
            const tokenContract = new web3.eth.Contract(IERC20_ABI, tokenAddress);

            // Approve the contract to spend tokens
            await tokenContract.methods.approve(contractAddress, amountInWei).send({ from: userAccount });

            // Call the buyTokens function on the contract
            await contract.methods.buyTokens(amountInWei, tokenAddress).send({ from: userAccount });
        }

        alert('Tokens purchased successfully!');
        updateRoundInfo();
    } catch (error) {
        console.error("Error buying tokens:", error);
    }
}

async function stakeTokens() {
    try {
        if (!userAccount) {
            alert("Please connect your wallet first!");
            return;
        }

        const amount = document.getElementById('stake-amount').value;
        await contract.methods.stakeTokens(web3.utils.toWei(amount, 'ether')).send({ from: userAccount });
        alert('Tokens staked successfully!');
        getStakingRewards();
    } catch (error) {
        console.error("Error staking tokens:", error);
    }
}

async function getStakingRewards() {
    try {
        if (!userAccount) {
            alert("Please connect your wallet first!");
            return;
        }

        const rewards = await contract.methods.stakingRewards(userAccount).call();
        document.getElementById('staking-rewards').innerText = web3.utils.fromWei(rewards, 'ether');
    } catch (error) {
        console.error("Error fetching staking rewards:", error);
    }
}

// Function to open the popup modal
function openPopup() {
    var modal = document.getElementById("walletModal");
    modal.style.display = "block";
}

// Function to close the popup modal
function closePopup() {
    var modal = document.getElementById("walletModal");
    modal.style.display = "none";
}

// Reuse your existing wallet connect code
function triggerWalletConnect() {
    // Call your existing connect wallet function
    connectWallet();

    // Close the popup after connecting
    closePopup();
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById("walletModal");
    if (event.target == modal) {
        closePopup();
    }
}

