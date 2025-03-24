function count(n){
  if(n===0){
    return 1;
  }
  else{
    return count(n-1)*n;
  }
}
console.log(count(5));
