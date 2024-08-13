const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	let ans=[]
  for(let i=0;i<arr.length;i++){
	  let sum=0;
	  for(let j=0;j<arr.length;j++){
		  if(arr[i]<=n){
			  ans.push(arr[i])
		  }
		  if(arr[j]+=sum<=n){
			      let t=0;
			       let answ=[]
				  while(j>=0){
					  answ.push(arr[t])
					  ++t;
					  j--;
					  
				  }
			  arr.push(answ)
			  }
		  
	  }
  }
};

//onst n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
