function render(props, state) {
  console.log("libq render", props, state);
  $("main").html("");
  console.log("libq main is cleared");

  for (let i = 0; i < props.cnt; i++) {
    const oprand = i + 1;
    const row = $("<p>");
    row.text(`${oprand} x ${oprand} = ${multiply(oprand, oprand)}`);
    console.log("libq row", row[0], row);
    $("main").append(row);
    console.log("libq inserted", oprand);
  }
}

render({ cnt: 10 });
