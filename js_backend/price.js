
let cont = "0x64c27c3714872d6055bD9855814718BcE88FDb00";
const request = require('request'); 
const Web3 = require('web3'); 
var serverbnb = "https://bsc-dataseed1.defibit.io";



var price1 = {}; 
price1['price']={};
price1['pair']={};
price1['lp']={};
price1['global_lp']={};
price1['token_lp']={};
price1['total_lp']={};
price1['rate_lp']=0;
price1['kind_lp']={};   
price1['sym']={}; 
price1['name']={};
price1['poolinfo']=[];
price1['supply']={};
price1['rewardblock']=0;



price1['token_lp']['busd']={};
price1['token_lp']['nero']={};
 
 

setInterval(function(){
        WALLET.getrate("0x1b96b92314c44b159149f7e0303511fb2fc4774f","BNB_BUSD",18,18);
        WALLET.getrate("0x8189ab0982af93a5f130b7D5d1fC03377df101b5","NERO_BUSD",0,18);
    
        price1['price']["BNB"]   = price1['pair']['BNB_BUSD'];
        price1['price']["NERO"]   = price1['pair']['NERO_BUSD'];
         
},5000);



var  WALLET ={
        getrate : async function(c,p,d1,d2){
        if(c=="eth")return;
        const web3 = new Web3(serverbnb);
         
          var abi   =[{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"}];

          try {
      
        var  contract = new web3.eth.Contract(abi, c);
           
        await contract.methods.getReserves().call().then(function(resp) {
         //console.log(resp[0]);
         price1['pair'][p]=((resp[1]/(10**d2))/(resp[0]/(10**d1))).toFixed(8);
        });
      } catch (error) {
        
      }


    } ,getPoolInfo : async function(pid){
   
        var co    = cont;  //
        if(co=="eth")return;
        //console.log(co);
        const web3 = new Web3(serverbnb);
         
          var abi   =[{"inputs":[{"internalType":"contract IERC20","name":"reward","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"contract IERC20","name":"_tokenStaking","type":"address"},{"internalType":"uint256","name":"_fee_percent_staking","type":"uint256"},{"internalType":"uint256","name":"_lock_deposit","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"balanceLP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"tokenStaking","type":"address"},{"internalType":"uint256","name":"decimal_staking","type":"uint256"},{"internalType":"uint256","name":"fee_percent_s","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"accPerShare","type":"uint256"},{"internalType":"uint256","name":"totalLP","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"lock_deposit_block","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"remainingBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_manyblock","type":"uint256"}],"name":"update_many_block","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"release_block","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
          try {
          var  contract = new web3.eth.Contract(abi, co);
           
          await  contract.methods.poolInfo(pid).call().then(function(resp) {

            price1['poolinfo'][pid]= resp;
          
        });
      } catch (error) {
        price1['lp'][pid] = 0;
      }
    }
    ,rewardBlock : async function(pid){
   
      var co    = cont;  //
      if(co=="eth")return;
      //console.log(co);
      const web3 = new Web3(serverbnb);
       
        var abi   =[{"inputs":[{"internalType":"contract IERC20","name":"reward","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"contract IERC20","name":"_tokenStaking","type":"address"},{"internalType":"uint256","name":"_fee_percent_staking","type":"uint256"},{"internalType":"uint256","name":"_lock_deposit","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"balanceLP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"tokenStaking","type":"address"},{"internalType":"uint256","name":"decimal_staking","type":"uint256"},{"internalType":"uint256","name":"fee_percent_s","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"accPerShare","type":"uint256"},{"internalType":"uint256","name":"totalLP","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"lock_deposit_block","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"remainingBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_manyblock","type":"uint256"}],"name":"update_many_block","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"release_block","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
        try {
        var  contract = new web3.eth.Contract(abi, co);
         
        await  contract.methods.rewardBlock().call().then(function(resp) {

          price1['rewardblock']= resp;
        
      });
    } catch (error) {
      price1['lp'][pid] = 0;
    }
  },
    getWalletLpBalance : async function(con,pid,code,addr,digit){
      // if(setting.pid[pid].type=="staking")addr=setting.master_contract.contract;
      if(con=="eth")return;
      if(addr=="eth")return;
        const web3 = new Web3(serverbnb);
       
        var abi   =[{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

        try {
      
      var  contract = new web3.eth.Contract(abi, con);
         
      await contract.methods.balanceOf(addr).call().then(function(resp) {
       price1['token_lp'][code][pid]=resp/(10**digit);
      });
    } catch (error) {
      
    }


  },
  getBalance : async function(addr,con,res){
    // if(setting.pid[pid].type=="staking")addr=setting.master_contract.contract;
    
      const web3 = new Web3(serverbnb);
     
      var abi   =[{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

     
      try {
    
    var  contract = new web3.eth.Contract(abi, con);
       
    await contract.methods.balanceOf(addr).call().then(function(resp) {
   
      price1['rate_lp']=(resp/res)*0.000000000000000001; 

    });
  } catch (error) {
    console.log(error);
  }


},  getSupply: async function(co){
       
        const web3 = new Web3(serverbnb);
        
        try {
        var abi   =[ {"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
        var  contract = new web3.eth.Contract(abi, co);
        await contract.methods.totalSupply().call().then(function(resp) {
          

            WALLET.getBalance(co,"0xe9e7cea3dedca5984780bafc599bd69add087d56",resp);
            //   price1['global_lp'][pid]=resp/(10**setting.pid[pid].digits);
        });
           } catch (error) {
            
           }
        
  
         
  
    } ,
    getlphere : async function(con,pid,addr,digit){
       //if(setting.pid[pid].type=="staking")addr=setting.master_contract.contract;
      // console.log(con+" --- "+pid);
      if(con=="eth")return;
      if(addr=="eth")return;
        const web3 = new Web3(serverbnb);
       
        var abi   =[{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
        if (typeof price1['lp'][pid] == 'undefined') {
          price1['lp'][pid]=0;
      }
        try {
      
      var  contract = new web3.eth.Contract(abi, con);
         
      await contract.methods.balanceOf(addr).call().then(function(resp) {

        //console.log(resp);
        //console.log(pid);

        price1['lp'][pid]=resp/(10**digit);
        
       // if(setting.pid[pid].type=="staking")
       // price1['global_lp'][pid]=resp/(10**setting.pid[pid].digits);


      });
    } catch (error) {
      console.log(error);
    }


  } ,
  getstaking : async function( pid ){

     var addr=setting.master_contract.contract;
     var con = cont;
     if(con=="eth")return;
      const web3 = new Web3(serverbnb);
     
      var abi   =[{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
      if (typeof price1['lp'][pid] == 'undefined') {
        price1['global_lp'][pid]=0;
    }
      try {
    
    var  contract = new web3.eth.Contract(abi, con);
       
    await contract.methods.balanceOf(addr).call().then(function(resp) {
 

      price1['global_lp'][pid]=resp/(10**setting.pid[pid].digits);
    

    });
  } catch (error) {
    console.log(error);
  }


} ,getSym: async function(c){
        if(c=="eth")return;
        var co    = c;  //
        const web3 = new Web3(serverbnb);
        var abi   =[{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}];
        price1['sym']["eth"] ="BNB";
        try {
        var  contract = new web3.eth.Contract(abi, co);
        await contract.methods.symbol().call().then(function(resp) {
        price1['sym'][c]=resp;
        });
           } catch (error) {
           }

    },getName : async function(c){
      if(c=="eth")return;
        var co    = c;  //
        // var digit = setting.pid[pid].digits ;
        const web3 = new Web3(serverbnb);
         
          var abi   =[{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}
        ];
        price1['name']["eth"] ="BNB";
        try {   
       var  contract = new web3.eth.Contract(abi, co);
        await contract.methods.name().call().then(function(resp) {
         price1['name'][c]=resp;
        });} catch (error) {
          
        }
    }
  
 ,
    getSupply2: async function(c,d){
       
      var co    = c;  //
      if(co=="eth")return;
      const web3 = new Web3(serverbnb);

      
    
      try {
      var abi   =[ {"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];
      var  contract = new web3.eth.Contract(abi, co);
      await contract.methods.totalSupply().call().then(function(resp) {
        price1['supply'][c]=resp/(10**d)
      //HANDLE.Supply(c,resp/(10**d));
      });
         } catch (error) {
         }
      

       

  } ,
            getDigit: async function(c,t){
                try {
                var co    = c;  //
                if(co=="eth")return;
                const web3 = new Web3(serverbnb);
        
                var abid = [{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}];
                var  contract = new web3.eth.Contract(abid, co);
                await  contract.methods.decimals().call().then(function(d) {
                if(t==3)WALLET.burn(co,d);
                if(t==3)WALLET.getSupply2(co,d);
                });
        } catch (error) {
              
        }
        },
        getPoolLength : async function(){
                
                  var co    = cont;  //
                  if(co=="eth")return;
                  // var digit = setting.pid[pid].digits ;
                  const web3 = new Web3(serverbnb);
                   
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
  
                   var  contract = new web3.eth.Contract(abi, co); 
                  await contract.methods.poolLength().call().then(function(resp) {
                     
                   for(var i=0;i<resp;i++){
                       WALLET.getPoolInfo(i);  
                       
                   }
                  });
              } 
                     
                   
                 
}

 /*
function tlp(){
        var pid = setting.pid.length;
        //console.log(pid);
        for(var a=0;a<pid;a++){
                if(setting.pid[a].type=="farm"){
                  price1['total_lp'][a]  = 0;
                        if(price1['token_lp']['busd'][a]>0)
                                price1['total_lp'][a] =  (price1['token_lp']['busd'][a] * 2 ) ;
                                else
                        if(price1['token_lp']['wbnb'][a]>0)
                                price1['total_lp'][a] =  (price1['token_lp']['wbnb'][a] * 2 *price1['price']['BNB'] ) ;
                              
                        
                        }  
         
             
        } 
        }
        setInterval(tlp,10000);
        tlp();


  */
      
  /*

        function ki(){
                WALLET.getRewardPool();
                var pid = setting.pid.length;
                //console.log(pid);
                for(var a=0;a<pid;a++){
               
                
                price1['kind_lp'][a] = price1['rate_lp'][a] * price1['lp'][a] ;
                }
                }
                setInterval(ki,10000);
                ki();

     
                function as(){
                var pid = setting.pid.length;
                //console.log(pid);
                
                for(var a=0;a<pid;a++){
                WALLET.getSym(setting.pid[a].contract);
                WALLET.getSym(setting.pid[a].token1);
                WALLET.getSym(setting.pid[a].token2);
                WALLET.getName(setting.pid[a].contract);
                WALLET.getName(setting.pid[a].token1);
                WALLET.getName(setting.pid[a].token2);

                

                WALLET.getDigit(setting.pid[a].contract,3);
                WALLET.getDigit(setting.pid[a].token1,3);
                WALLET.getDigit(setting.pid[a].token2,3);
                WALLET.totalAloct();

                     
                } 
                WALLET.stakinglenght();
                WALLET.getPoolLength();
                }
                setInterval(as,50000);
                as();
  
                function ratelp(){
                  var pid = setting.pid.length;
                  //console.log(pid);
                  for(var a=0;a<pid;a++){
                  price1['rate_lp'][a]  = 0;
                  if(price1['global_lp'][a]>0)
                  price1['rate_lp'][a] =  price1['total_lp'][a] / price1['global_lp'][a]  ;
                  
                  } 
                  }
                  setInterval(ratelp,10000);
                  ratelp();

                  

                  //0x7d3d79a56893df046aa37ffe7cdfcb1965348fac
                   
                
                
                 
                    WALLET.stakinglenght();
                    //WALLET.stakinginfo(0);
   */

  setInterval(function(){
  WALLET.getSupply("0x8189ab0982af93a5f130b7D5d1fC03377df101b5");
  WALLET.getPoolLength();
  WALLET.rewardBlock();
  },10000);
 
module.exports = price1;