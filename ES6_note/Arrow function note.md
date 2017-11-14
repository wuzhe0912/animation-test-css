# Arrow function note

**(參數列表)=>(回傳值)
e.g.**
```
    //傳統函數宣告
    
    let add=function(n1, n2){
     return n1+n2;
    };
```
```
    //arrow function 寫法
    
    let add=(n1, n2)=>(n1+n2);
```

**(參數列表)=>(函數內部程式)
e.g.**
```
    //傳統函數宣告
    
    let add=function(n1, n2){
     return n1+n2;
    };
```
```
    //arrow function 寫法2
    
    let add=(n1, n2)=>{
     return n1+n2;
    };
```

**匿名函數
e.g.**
```
    //在時間排程中使用匿名函數(傳統寫法)
    
    setTimeout(function(){
        console.log(過了一秒);
    },1000);
```
```
    //同樣時間排程改用arrow function寫法
    
    setTimeOut(()=>{
        console.log(過了一秒);
    },1000);
```
    
**參數預設值**
```
    //傳統寫法
    function show(message){
        //未給予message資料的條件下
        if(typeof message==="undefined"){
            messsage="預設值";
        }
        alert(message);
    }
    show("Hello"); //給定message值故顯示Hello
    show(); //未給定值，顯示預設值
```
    
**參數預設值ES6寫法**
```
    function show(message="預設值"){
        alert(message);
    }
    show("Hello"); //給定message值故顯示Hello
    show(); //未給定值，顯示預設值
```
上述寫法即是，給定show這個函數一個基底預設值，未回傳任何值的條件下，觸發預設值。反之，若給定任何值，則觸發該值。

**參數預設值ES6 Arrow function寫法**
```
    let show=(message="預設值")=>{
        alert(message);
    };
    show("Hello"); //給定message值故顯示Hello
    show(); //未給定值，顯示預設值
```
    
**ex.**

```
    //non arrow
    function multiply(n1, n2=1){
        return n1*n2;
    }
    multiply(3, 5);    //回傳15
    multiply(4);   //回傳4，指定n1為4，n2未指定故採用預設值1
```
```
    //arrow 寫法
    let multiply=(n1 ,n2)=>(n1*n2);
    multiply(3, 5);    //回傳15
    multiply(4);   //回傳4
```
**ex.2**
```
    //後方的參數可以使用前方的參數名稱
    //combine用於結合
    function combine(first="Zhe", last="Wu", name=first+" "+last){
        console.log(name);
    }
    combine("Pitt", "Li"); //display:Pitt Li
    combine("Pitt"); //display:Pitt Wu
    combine(); //display:Zhe Wu
```