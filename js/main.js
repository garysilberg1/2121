document.addEventListener('DOMContentLoaded', function() {
    // const cryptoApiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,dogecoin,bonk,pepe&vs_currencies=usd';

    // const wifApiUrl = "https://api.coingecko.com/api/v3/simple/token_price/solana?contract_addresses=EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm&vs_currencies=usd";

    const cryptoApiUrl = 'https://www.neverfuckingleaving.com/api/prices';

    fetch (cryptoApiUrl)
        .then (response => response.json ())
        .then (data => {
            console.log (data);
                // Format and update Bitcoin price
                const bitcoinPrice = new Intl.NumberFormat('en-US', { style: 'decimal' }).format(data.bitcoin.usd);
                document.querySelectorAll('.btcPrice').forEach(el => el.innerHTML = bitcoinPrice);
    
                // Format and update Ethereum price
                const ethereumPrice = new Intl.NumberFormat('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }).format(data.ethereum.usd);
    
                document.querySelectorAll('.ethPrice').forEach(el => el.innerHTML = ethereumPrice);
    
                // Format and update Solana price
                const solanaPrice = new Intl.NumberFormat('en-US', {
                    style: 'decimal',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }).format(data.solana.usd);
                
                document.querySelectorAll('.solPrice').forEach(el => el.innerHTML = solanaPrice);
    
                const dogePrice = new Intl.NumberFormat('en-US', { style: 'decimal' }).format(data.dogecoin.usd);
                document.querySelectorAll('.dogePrice').forEach(el => el.innerHTML = dogePrice);
    
                // const bonkPrice = new Intl.NumberFormat('en-US', { style: 'decimal' }).format(data.bonk.usd);
                document.querySelectorAll('.bonkPrice').forEach(el => el.innerHTML = data.bonk.usd);
    
                document.querySelectorAll('.pepePrice').forEach(el => el.innerHTML = data.pepe.usd);

                document.querySelectorAll('.wifPrice').forEach(el => el.innerHTML = data.wif);
        })
        .catch(error => console.error('Error fetching prices:', error));;
});
