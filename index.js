// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
}
function destructivelyPrependKitten(name){
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
function appendKitten(name){
  return kittens.concat([name]);
}
function prependKitten(name){
  return [name].concat(kittens);// [name] is the way to put the array in front //of the concat
}
function removeLastKitten(name){
  return kittens.slice(2);
}