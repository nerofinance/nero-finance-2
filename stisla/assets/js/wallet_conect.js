
 var serverbnb = "https://bsc-dataseed1.defibit.io";

  

 var WALLET = {
       walletConect : function(){
        if (typeof window.ethereum !== 'undefined') return true;else return false;
       },
       checkMetamask :  function(){

        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            HANDLE.Metamask(true);
            return true;
          } else 
            {
            console.log("Need metamask to run this application");
            HANDLE.Metamask(false);
            return false;
            }


     }, logout :   function(){

        
        HANDLE.Logout("0");

     },

         getAccount : async function(){
          if(WALLET.walletConect()){} else return;
       
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        
        HANDLE.Account(account);

     },

       reqApprove : async function (pid){
        let con = "0x8189ab0982af93a5f130b7D5d1fC03377df101b5";
        let con2 = "0x64c27c3714872d6055bD9855814718BcE88FDb00";
        var contract    =  con;  //
        const web3 = new Web3(ethereum);
         
          var abi   =[{
            "inputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }],
            "name": "allowance",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function"
        }];
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        var fr = accounts[0];
        var  contract4 = new web3.eth.Contract(abi, contract);

         
        await   contract4.methods.allowance(fr,con2).call().then(function(resp) {
            
            if(resp>999999999)  {
                HANDLE.Allowance(pid,999999999);
                  //  HANDLE.Approve(pid,pid); 
                return  true; }
            else
            {
            var co    = con;  //liq
            var to    = con2;  //mc
            var abi =[
            {"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
            ]; 
            const web3 = new Web3(ethereum);
            //const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            //const account = accounts[0];
            var  contract = new web3.eth.Contract(abi, co);
            var amn="115792089237316195423570985008687907853269984665640564039457584007913129639935";
            contract.methods.approve(to, amn).send({from:  fr}, 
            function(err, transactionHash) {
            //console.log(transactionHash);
            HANDLE.Approve(pid,transactionHash);
            return true;
            });
            }
        });

        
        },
        

        
       
        reqDeposit : async function (pid,am){
            var co    = "0x64c27c3714872d6055bD9855814718BcE88FDb00";  
            var digit = 18;
            const web3 = new Web3(ethereum);
          // check decimal before deposit
            var abid = [{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}];
            var  contract = new web3.eth.Contract(abid, "0x8189ab0982af93a5f130b7D5d1fC03377df101b5");
            await  contract.methods.decimals().call().then(function(resp) {
             
            WALLET.Deposit(pid,am*(10**resp))
             

            });
            },
           
       
        reqWitdraw : async function (pid,am){
            var co    = "0x64c27c3714872d6055bD9855814718BcE88FDb00";  
            var digit = 18;
            const web3 = new Web3(ethereum);
          // check decimal before deposit
            var abid = [{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}];
            var  contract = new web3.eth.Contract(abid, setting.pid[pid].contract);
            await  contract.methods.decimals().call().then(function(resp) {
                
            WALLET.Withdraw(pid,am*(10**resp))
             

            });
            } 
          ,
              
         
       
        Deposit : async function (pid,am){
           
          var co    = "0x64c27c3714872d6055bD9855814718BcE88FDb00";  
          var digit = 18;
          const web3 = new Web3(ethereum);
        
            var abi =[  {
              "inputs": [{
                  "internalType": "uint256",
                  "name": "_pid",
                  "type": "uint256"
              }, {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
              }],
              "name": "deposit",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
          } ];
             
             
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            var fr = accounts[0];
            var  contract = new web3.eth.Contract(abi, co);
            var amn =  BigInt(am )  ; amn+="";
          
            var tx = {
                from: fr,
                to: co,
                data: contract.methods.deposit(pid, amn).encodeABI() 
                
            };
            web3.eth.sendTransaction(tx).then(res => {
              hideLoader();
                HANDLE.Deposit(pid,res);
                WALLET.getWalletLpBalance(pid);
                //console.log("res",res);
            }).catch(err => {
                //onsole.log("err",err)
            });

           

         
          },

            addContract : async function (token){

              var co    = "0x64c27c3714872d6055bD9855814718BcE88FDb00";  
              const web3 = new Web3(ethereum);
              
                var abi =[ {
                  "inputs": [
                    {
                      "internalType": "contract IERC20",
                      "name": "_lpToken",
                      "type": "address"
                    }
                  ],
                  "name": "add",
                  "outputs": [],
                  "stateMutability": "nonpayable",
                  "type": "function"
                } ];
                 
                 
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                var fr = accounts[0];
                var  contract = new web3.eth.Contract(abi, co);
              
                var tx = {
                    from: fr,
                    to: co,
                    data: contract.methods.add(token).encodeABI() 
                    
                };
                web3.eth.sendTransaction(tx).then(res => {
                    HANDLE.AddContract(res);
                    //console.log("res",res);
                }).catch(err => {
                    //console.log("err",err)
                });
               
              },

            Withdraw : async function  (pid,am){
                var co    = "0x64c27c3714872d6055bD9855814718BcE88FDb00";   
                var digit = 18;
                  
                  const web3 = new Web3(ethereum);
                
                  var abi =[{
                    "inputs": [{
                        "internalType": "uint256",
                        "name": "_pid",
                        "type": "uint256"
                    }, {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }],
                    "name": "withdraw",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                }];
                   
                   
                  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                  var fr = accounts[0];
                  var  contract = new web3.eth.Contract(abi, co);
                  var amn =  BigInt(am)  ; amn+="";
                  var tx = {
                      from: fr,
                      to: co,
                      data: contract.methods.withdraw(pid, amn).encodeABI() 
                      
                  };
                  web3.eth.sendTransaction(tx).then(res => {
                      //console.log("res",res);
                      hideLoader();
                      HANDLE.Withdraw(pid,res);
                      WALLET.getBalanceLP(pid);
                  }).catch(err => {
                     // console.log("err",err)
                  });
                 
                },

               
            getPendingReward : async function(pid){
              if(WALLET.walletConect()){} else return;
                var co    = "0x64c27c3714872d6055bD9855814718BcE88FDb00";  //
                var digit = 0 ;
                const web3 = new Web3(ethereum);
                 
                  var abi   =[{
                    "inputs": [{
                        "internalType": "uint256",
                        "name": "_pid",
                        "type": "uint256"
                    }, {
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    }],
                    "name": "pendingReward",
                    "outputs": [{
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }],
                    "stateMutability": "view",
                    "type": "function"
                }];

                  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                  var fr = accounts[0];
                  var  contract = new web3.eth.Contract(abi, co);
                   
                  await  contract.methods.pendingReward(pid,fr).call().then(function(resp) {
                   
                 //  console.log(resp); // This will output "OK Computer"
                    //return (resp / Math.pow(10,digit));
                    HANDLE.PendingReward(pid,resp / Math.pow(10,digit));
                });
            },
            getBalanceLP : async function(pid){
               if(WALLET.walletConect()){} else return;
                var co    = "0x64c27c3714872d6055bD9855814718BcE88FDb00";  //
                var digit = 18 ;
                const web3 = new Web3(ethereum);
                 
                  var abi   =[{
                    "inputs": [{
                        "internalType": "uint256",
                        "name": "_pid",
                        "type": "uint256"
                    }, {
                        "internalType": "address",
                        "name": "_user",
                        "type": "address"
                    }],
                    "name": "balanceLP",
                    "outputs": [{
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }],
                    "stateMutability": "view",
                    "type": "function"
                }];

                try {
                  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                  var fr = accounts[0];
                  var  contract = new web3.eth.Contract(abi, co);
                await contract.methods.balanceLP(pid,fr).call().then(function(resp) {
                 HANDLE.BalanceLP(pid,resp / Math.pow(10,digit));
                });
              } catch (error) {
              
              }
            },
            getWalletLpBalance : async function(pid){
              if(WALLET.walletConect()){} else return;
              var co    = "0x8189ab0982af93a5f130b7D5d1fC03377df101b5";  //
              var digit = 18 ;
              const web3 = new Web3(ethereum);
               
                var abi   =[{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

                try {
              const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
              var fr = accounts[0];
              var  contract = new web3.eth.Contract(abi, co);
                 
              await contract.methods.balanceOf(fr).call().then(function(resp) {
              HANDLE.BalanceWallet(pid,resp / Math.pow(10,digit));
              });
            } catch (error) {
              
            }


          }
        ,
            getAllowance : async function(pid){
              if(WALLET.walletConect()){} else return;
                var contract    =  "0x8189ab0982af93a5f130b7D5d1fC03377df101b5";  //
                const web3 = new Web3(ethereum);
                 
                  var abi   =[{
                    "inputs": [{
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }, {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    }],
                    "name": "allowance",
                    "outputs": [{
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }],
                    "stateMutability": "view",
                    "type": "function"
                }];
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                var fr = accounts[0];
                var  contract4 = new web3.eth.Contract(abi, contract);

                 
                await   contract4.methods.allowance(fr,MasterContract).call().then(function(resp) {
                      HANDLE.Allowance(pid,resp);
                });
            
            },
            getPoolLength : async function(){
              if(WALLET.walletConect()){} else return;
                var co    = "0x64c27c3714872d6055bD9855814718BcE88FDb00";  //
                // var digit = setting.pid[pid].digits ;
                const web3 = new Web3(ethereum);
                 
                  var abi   =[{
                    "inputs": [],
                    "name": "poolLength",
                    "outputs": [
                      {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  }];

                  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                  var fr = accounts[0];
                  var  contract = new web3.eth.Contract(abi, co);
                   
                await contract.methods.poolLength().call().then(function(resp) {
                   
               HANDLE.poolLength(resp);
                });
            }
             
          
 }




 if(WALLET.walletConect()) 
 window.ethereum.on('accountsChanged', function (accounts) {
    var wallet = getCookie("current-wallet");
    if(wallet=="0") return;
    console.log(accounts);
    WALLET.logout();
    WALLET.getAccount();
  })

  