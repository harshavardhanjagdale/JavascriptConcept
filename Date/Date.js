function getPrevious() {
    this.minDate = new Date();
    console.log(minDate);
    var date = new Date();
    console.log(date);
    date.setDate(date.getDate() - 14);
    this.minDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
console.log(minDate)
    var d = new Date(this.minDate),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    this.prevDate = [year, month, day].join("-");
    console.log(d)
    console.log( this.prevDate);
  }   // o/p 130;