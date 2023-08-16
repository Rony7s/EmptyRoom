
document.addEventListener("DOMContentLoaded", function() {
    const roomController = {
      btn1: 1,
      btn2: null,
      btn3: null,
      btn4: null,
      btn12: null,
      btn9: null,
      btn10: null,
      btn11: null,
      btn8: null,
      Saturday: null,
      Sunday: null,
      Monday: null,
      Tuesday: null,
      Wednesday: null,
      Thursday: null,
      R_5001: null,
      R_5002: null,
      L_5003: null,
      startTime: null,
      endTime: null,
      findRoom: null,
      runningClass: null,
      emptyClass: null,
      day: 0,
  
       
      openClose(x) {
        const room = [
          // 8     9     10     11     12     1     2     3     4
          [[1,0,0], [0,1,0], [0,0,1], [1,0,0], [0,1,0], [0,0,1], [1,0,0], [0,1,0], [0,0,1]],
          [[0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0]],
          [[0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0]],
          [[0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0]],
          [[0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0]],
          [[0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0]]
        ];
  
        if (8 <= x && x <= 12) {
          x = x - 8;
        } else {
          x = x + 4;
        }
  
        if (room[this.day][this.hour][0] === 0) {
          this.R_5001.style.backgroundColor = "green";
        } else {
          this.R_5001.style.backgroundColor = "red";
        }
  
        if (room[this.day][this.hour][1] === 0) {
          this.R_5002.style.backgroundColor = "green";
        } else {
          this.R_5002.style.backgroundColor = "red";
        }
  
        if (room[this.day][this.hour][2] === 0) {
            this.L_5003.style.backgroundColor = "green";
        } else {
            this.L_5003.style.backgroundColor = "red";
          }
    
       }
}});