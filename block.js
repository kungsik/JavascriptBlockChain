var num = 1;
var i = 0;

class Block {
  constructor(index, timestamp, data, previousHash='') {
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return hex_sha256(this.index + this.previousHash + this.timestamp + this.data);
  }

}

class BlockChain {

  addBlock() {
    num++;
    //이전 블록 번호를 구하고 이전의 HASH값을 불러옴.
    var previousBlockNum = num - 1;
    var previousBlockHash = document.getElementById('currentHash_' + previousBlockNum).innerHTML;

    //블럭 복제
    var newBlock = document.getElementById('BlockChain_1');
    var addedBlock = newBlock.cloneNode(true);

    //각 엘리먼트들의 아이디 값을 새롭게 지정해 줌.
    addedBlock.id = 'BlockChain_' + num;
    addedBlock.children[0].id = 'transaction_' + num;
    addedBlock.children[1].id = 'previousHash_' + num;
    addedBlock.children[2].id = 'currentHash_' + num;
    addedBlock.children[0].children[0].id = 'index_' + num;
    addedBlock.children[0].children[3].id = 'timestamp_' + num;
    addedBlock.children[0].children[7].id = 'data_' + num;

    //이전 블록의 해쉬를 저장
    addedBlock.children[1].innerHTML = previousBlockHash;

    //새로운 블록의 해쉬값은 null
    addedBlock.children[2].innerHTML = '';

    //첫번째 블록으로부터 복제된 엘리먼트들의 값을 모두 초기화해 줌.
    addedBlock.children[0].children[0].value = '';
    addedBlock.children[0].children[3].value = '';
    addedBlock.children[0].children[7].value = '';

    addedBlock.className = "d-flex p-2 border border-primary alert alert-secondary";

    document.getElementById('container').appendChild(addedBlock);
  }

  isChainValid() {
    for (i = num; i > 1; i--) {
      var previousBlockNum = i - 1;
      var currentPreviousHash = document.getElementById('previousHash_' + i).innerHTML;
      var previousCurrentHash = document.getElementById('currentHash_' + previousBlockNum).innerHTML;
      if(currentPreviousHash == previousCurrentHash) {
        var previousBlock = document.getElementById('BlockChain_' + previousBlockNum);
        previousBlock.className = "d-flex p-2 border border-primary alert alert-primary";
        // console.log("Block_" + previousBlockNum + " is vailidated.");
      }
      else {
        var previousBlock = document.getElementById('BlockChain_' + previousBlockNum);
        previousBlock.className = "d-flex p-2 border border-primary alert alert-danger";
        // console.log("Block_" + previousBlockNum + " is not vailidated.");
      }
    }
  }
}
