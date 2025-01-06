import "./main.css";
import { identity } from "lodash";
import placeholder from "../assets/small-square-pic.png";
import $ from "./vendor/jquery.js";
import { multiply } from "./lib/calc.js";
import { sample } from "./lib/utils.js";

$("main").empty();

function MultiplyTable(props) {
  for (let i = 0; i < props.cnt; i++) {
    const oprand = i + 1;
    const row = $("<p>");
    row.text(`${oprand} x ${oprand} = ${multiply(oprand, oprand)}`);
    $("main").append(identity(row));
  }
}

function Icon(props) {
  console.log("libq icon", props.src);
  $("main").append($("<img />", { src: props.src }));
}

Icon({ src: placeholder });

MultiplyTable({ cnt: 3 });

$("main").append(
  $("<p>").text(`window._ is ${typeof window._}, ${window._.VERSION}`),
);

const alphabet = ["a", "b", "c", "x", "y", "z"];
$("<h2>")
  .text(sample(...alphabet))
  .appendTo($("main"));
