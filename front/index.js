import * as d3 from "d3";
import axios from "axios";

const svgContainer =
  d3
    .select("body")
    .append("svg")
    .attr("width", 2000)
    .attr("height", 2000);

const draw = (data) => {
  let defaultCircleX = 30;
  let currentCircleX = 0;
  console.log(data);
  let circles = svgContainer.selectAll("circle")
    .data(data)
    .enter()
    .append('circle');

    let circleAttrs = circles
      .attr("cx", (d) => {
        currentCircleX += defaultCircleX;
        return currentCircleX;
      })
      .attr("cy", 30)
      .attr("r", 5);
}

axios.get('data.tsv')
  .then(function (response) {
    let data = d3.tsvParse(response.data);
    data = data.filter((d) => d.sexo ==='F')
    draw(data);
  })
  .catch(function (error) {
    console.log(error);
  });

// d3.tsvParse("data.tsv", function(data) {
//   console.log(data)
//   if(data.sexo === 'F'){
//     // let circles = svgContainer.selectAll("circle")
//     //   .data(data)
//     //   .enter()
//     //   .append('circle');

//     // let circleAttrs = circles
//     //   .attr("cx", 30)
//     //   .attr("cy", 30)
//     //   .attr("r", 20);
//   }

// });