var num = 1;

function addHash(obj) {
  var index = obj.parentElement.children[0].value;
  var timestamp = obj.parentElement.children[3].value;
  var data = obj.parentElement.children[7].value;

  if (obj.parentElement.parentElement.id == "BlockChain_1") {
    var kimcoinBlock = new Block(index, timestamp, data);
    obj.parentElement.parentElement.children[2].innerHTML = kimcoinBlock.hash;
  }

  else {
    var previousHash = obj.parentElement.parentElement.children[1].innerHTML;
    var kimcoinBlock = new Block(index, timestamp, data, previousHash);
    obj.parentElement.parentElement.children[2].innerHTML = kimcoinBlock.hash;
  }
}


document.getElementById('newBlockButton').addEventListener('click', function(event){

  var createNewBlock = new BlockChain();
  createNewBlock.addBlock();

});

document.getElementById('isChainValid').addEventListener('click', function(event){
  var isChainValid = new BlockChain();
  isChainValid.isChainValid();
});
