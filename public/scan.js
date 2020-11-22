const securityWarningsChart = document.getElementById('securityWarningsChart');
const warningsChart = () => {
  const securityWarningsCount = document.getElementById('securityWarningsCount')
    .innerText;
  const data = [
    {
      name: `Current ${securityWarningsCount}`,
      value: +securityWarningsCount,
    },
    {
      name: `Previous`,
      value: 2,
    },
  ];

  const width = 580;
  const height = 500;
  const barWidth = 20;
  const x = d3
    .scaleLinear()
    .domain([0, d3.max(data.map(d => d.value))])
    .range([0, width]);
  const y = d3
    .scaleBand()
    .domain(d3.range(data.length))
    .range([0, barWidth * data.length]);

  const svg = d3
    .create('svg')
    .attr('viewbox', [0, 0, width, height])
    .attr('font-family', 'sans-serif')
    .attr('font-size', '10')
    .attr('text-anchor', 'end');

  const bar = svg
    .selectAll('g')
    .data(data)
    .join('g')
    .attr('transform', (d, i) => `translate(0, ${i * y.bandwidth()})`);

  bar
    .append('rect')
    .attr('fill', 'steelblue')
    .attr('width', d => x(d.value))
    .attr('height', y.bandwidth() - 1);

  bar
    .append('text')
    .attr('fill', 'white')
    .attr('x', d => x(d.value) - 3)
    .attr('y', y.bandwidth() / 2)
    .attr('dy', '0.35em')
    .text(d => d.value);
  return svg.node();
};
securityWarningsChart.appendChild(warningsChart());
