Plotly.d3.csv('Flights.csv', function(err, rows){
  function unpack(rows, key) {
      return rows.map(function(row) { return row[key]; });}

  function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
  }

  var data = [];
  // var count = unpack(rows, 'cnt');
  var startLongitude = unpack(rows, 'LongOrig');
  var endLongitude = unpack(rows, 'LongDest');
  var startLat = unpack(rows, 'LatOrig');
  var endLat = unpack(rows, 'LatDest');

  for ( var i = 0 ; i < startLongitude.length; i++ ) {
      // var opacityValue = count[i]/getMaxOfArray(count);

      var result = {
          type: 'scattergeo',
          locationmode: 'USA-states',
          lon: [ startLongitude[i] , endLongitude[i] ],
          lat: [ startLat[i] , endLat[i] ],
          mode: 'lines',
          line: {
              width: 1,
              color: 'red'
          },
          opacity: 1
      };
      // console.log(result)
      data.push(result);
  };

  console.log(data)

  var layout = {
      title: 'Linhas Aéreas Internacionais em 2016',
      showlegend: false,
      geo:{
          scope: 'world',
          projection: {
              type: 'equal area'
          },
          showland: true,
          landcolor: 'rgb(243,243,243)',
          countrycolor: 'rgb(204,204,204)'
      }
  };

  Plotly.plot(myDiv, data, layout, {showLink: false});

});