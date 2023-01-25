function rectangle (input) {

  let n = Number(input[0]);

  for (let i = 0; i < n; i++) {
      let h = "";
      for (let b = 0; b < n; b++) {
        h += "* ";
      }
      console.log(h);
    }
}
rectangle(["2"]);