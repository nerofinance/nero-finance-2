function aa(){
    for(a=0;a<12;a++){
     
     WALLET.getBalanceLP(a); 
     WALLET.getPendingReward(a); 
     WALLET.getWalletLpBalance(a);
     
    }
}


setInterval(aa
,10000);
aa();


 








