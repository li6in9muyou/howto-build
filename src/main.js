import "./main.css";
import $ from "./vendor/jquery.js";
import { multiply } from "./lib/calc.js";

function MultiplyTable(props, state) {
  console.log("libq render", props, state);
  $("main").html("");

  for (let i = 0; i < props.cnt; i++) {
    const oprand = i + 1;
    const row = $("<p>");
    row.text(`${oprand} x ${oprand} = ${multiply(oprand, oprand)}`);
    $("main").append(row);
  }
}

MultiplyTable({ cnt: 10 });
