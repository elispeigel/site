class RVC {
    constructor(candidateCount, ballotsMatrix) {
      this.candidateCount = candidateCount;
      this.ballotsMatrix = ballotsMatrix;
      this.winner;
      this.candidateObj = this.getCandidateObj();
      this.votesNeededToWin = Math.ceil(ballotsMatrix.length / 2);
      this.lowestFirstPlaceCount = 0;
      this.perfectTie = false;
    }
  
    runVote() {
      while (this.winner === undefined) {
        this.checkWinner();
        this.narrowField();
        this.checkForTie();
        if (this.perfectTie) {
          break;
        }
        this.runVote();
      }
  
      if (this.perfectTie) {
        return "The election was a tie";
      }
  
      return this.winner;
    }
  
    // O(2n^2*m+nm+n)
    narrowField() {
      for (const candidate in this.candidateObj) {
        const candidateFirstPlaceVotes = this.candidateObj[candidate][1];
  
        if (candidateFirstPlaceVotes <= this.lowestFirstPlaceCount) {
          for (let i = 0; i < this.ballotsMatrix.length; i++) {
            this.ballotsMatrix[i] = this.ballotsMatrix[i].filter(
              (vote) => vote !== +candidate
            );
          }
        }
      }
  
      this.candidateObj = this.getCandidateObj();
  
      this.lowestFirstPlaceCount++;
    }
  
    // O(n^2*m + 2nm + 3n + m)
  
    checkForTie() {
      let numVotes = [];
  
      for (const candidate in this.candidateObj) {
        numVotes.push(this.candidateObj[candidate][1]);
      }
  
      const isTie = numVotes.every((num) => num === numVotes[0]);
  
      if (isTie) {
        this.lowestFirstPlaceCount = 0;
  
        if (numVotes.length === this.ballotsMatrix.flat().length) {
          this.perfectTie = true;
          return;
        }
  
        for (let i = 0; i < this.ballotsMatrix.length; i++) {
          this.ballotsMatrix[i].shift();
        }
  
        this.candidateObj = this.getCandidateObj();
      } else {
        return;
      }
  
      this.checkForTie();
    }
  
    // O(n)
    checkWinner() {
  
      for (const candidate in this.candidateObj) {
        const firstPlaceVotes = this.candidateObj[candidate][1];
  
        if (firstPlaceVotes >= this.votesNeededToWin) {
          this.winner = candidate;
        }
      }
    }
  
    //O(n^2*m+nm)
    getCandidateObj() {
      let candidateObj = this.getEmptyCandidateObj();
  
      for (let ballot of this.ballotsMatrix) {
        for (let n = 0; n < ballot.length; n++) {
          let candidate = ballot[n];
          candidateObj[candidate][n + 1]++;
        }
      }
  
      return candidateObj;
    }
  
    //O(n^2*m)
    getEmptyCandidateObj() {
      let candidateObj = {};
  
      for (let ballot of this.ballotsMatrix) {
        for (let n = 0; n < ballot.length; n++) {
          candidateObj[ballot[n]] = this.getRankObj();
        }
      }
  
      return candidateObj;
    }
  
    // O(n)
    getRankObj() {
      let rankObj = {};
  
      for (let i = 1; i <= this.candidateCount; i++) {
        rankObj[i] = 0;
      }
  
      return rankObj;
    }
  }
  
  const testData1 = [
    [1, 4, 3, 2, 5],
    [2, 1, 3, 5, 4],
    [5, 4, 3, 2, 1],
    [4, 3, 1, 5, 2],
  ];
  
  const testData2 = [
    [2, 1, 3],
    [2, 3, 1],
    [1, 2, 3],
  ];
  
  // Perfect tie
  const testData3 = [
    [4, 3, 2, 1],
    [3, 2, 1, 4],
    [2, 1, 4, 3],
    [1, 4, 3, 2],
  ];
  
  // n-1*m + n tie
  const testData4 = [
    [1, 2, 3, 4],
    [3, 1, 2, 4],
    [2, 3, 1, 4],
  ];
  
  //
  const testData5 = [
    [1, 2, 3, 4],
    [3, 1, 2, 4],
    [2, 3, 4, 1],
  ];
  
  const testData6 = [
    [1, 2, 3, 4],
    [3, 2, 1, 4],
    [4, 2, 1, 3],
  ];
  
  const testData7 = [
    [1, 2, 3, 4, 5],
    [3, 2, 5, 1, 4],
    [4, 2, 1, 5, 3],
  ];
  
  const test1 = new RVC(testData1[0].length, testData1);
  const test2 = new RVC(testData2[0].length, testData2);
  const test3 = new RVC(testData3[0].length, testData3);
  const test4 = new RVC(testData4[0].length, testData4);
  const test5 = new RVC(testData5[0].length, testData5);
  const test6 = new RVC(testData6[0].length, testData6);
  const test7 = new RVC(testData7[0].length, testData7);
  
  console.log(test1.runVote());
  console.log("The winner for test 2 is candidate number: ", test2.runVote());
  console.log(test3.runVote());
  console.log(test4.runVote());
  console.log(test5.runVote());
  console.log("The winner for test 6 is candidate number: ", test6.runVote());
  console.log("The winner for test 7 is candidate number: ", test7.runVote());
  
  
  
  
  
  
  