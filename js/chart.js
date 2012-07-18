String.prototype.commafy = function () {
  return this.replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
    return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
  });
}

Number.prototype.commafy = function () {
  return String(this).commafy();
}

var chart = new Highcharts.Chart({
    chart: {
      marginLeft: 40,
      marginTop: 5,
      spacingLeft: 0,
      spacingRight: 0,
      renderTo: 'texas-drought',
      type: 'area'
    },
    colors: [
      '#f3d56a',
      '#efc635',
      '#e28d2b',
      '#d9482b',
      '#a33622'
    ],
    credits: {
      enabled: false
    },
    legend: {
        enabled: false,
        align: 'left',
        verticalAlign: 'top',
        layout: 'horizontal',
        floating: false,
        borderWidth: 0,
        margin: 0,
        symbolPadding: 3,
        symbolWidth: 10,
        itemStyle: {
          color: '#555'
        },
        itemHoverStyle: {
          color: '#555'
        }
    },
    plotOptions: {
      area: {
        lineWidth: 0,
        marker: {
          enabled: false
        },
        stacking: 'normal',
        fillOpacity: 1
      }
    },
    title: {
      text: null
    },
    tooltip: {
        shared: true,
        borderWidth: 0,
        borderRadius: 0,
        crosshairs: [{
          width: 1,
          color: '#444',
          zIndex: 10
        },false],
        valueDecimals: 1,
        formatter: function() {
            var s = '<strong>'+ this.x +'</strong>';

            $.each(this.points, function(i, point) {
                s += '<br/><span style="font-weight: bold; color:' + point.series.color + ';">' + point.series.name +':</span> '+
                Math.round(point.y) +'%';
            });

            return s;
        }
    },
    xAxis: {
      minPadding: 0,
      maxPadding: 0,
      startOnTick: true,
      tickInterval: 1,
      tickLength: 0,
      tickmarkPlacement: 'on',
      lineColor: '#ccc',
      labels: {
        y: 15,
        align: 'left',
        formatter: function() {
          var d;
          switch(this.value)
          {
            case "January 4, 2000":
              d = "2000";
              break;
            case "January 2, 2001":
              d = "2001";
              break;
            case "January 1, 2002":
              d = "2002";
              break;
            case "January 7, 2003":
              d = "2003";
              break;
            case "January 6, 2004":
              d = "2004";
              break;
            case "January 4, 2005":
              d = "2005";
              break;
            case "January 3, 2006":
              d = "2006";
              break;
            case "January 2, 2007":
              d = "2007";
              break;
            case "January 1, 2008":
              d = "2008";
              break;
            case "January 6, 2009":
              d = "2009";
              break;
            case "January 5, 2010":
              d = "2010";
              break;
            case "January 4, 2011":
              d = "2011";
              break;
            case "January 3, 2012":
              d = "2012";
              break;
            default:
              d = "";
          }
          return d;
        }
      },
      categories: ["January 4, 2000","January 11, 2000","January 18, 2000","January 25, 2000","February 1, 2000","February 8, 2000","February 15, 2000","February 22, 2000","February 29, 2000","March 7, 2000","March 14, 2000","March 21, 2000","March 28, 2000","April 4, 2000","April 11, 2000","April 18, 2000","April 25, 2000","May 2, 2000","May 9, 2000","May 16, 2000","May 23, 2000","May 30, 2000","June 6, 2000","June 13, 2000","June 20, 2000","June 27, 2000","July 4, 2000","July 11, 2000","July 18, 2000","July 25, 2000","August 1, 2000","August 8, 2000","August 15, 2000","August 22, 2000","August 29, 2000","September 5, 2000","September 12, 2000","September 19, 2000","September 26, 2000","October 3, 2000","October 10, 2000","October 17, 2000","October 24, 2000","October 31, 2000","November 7, 2000","November 14, 2000","November 21, 2000","November 28, 2000","December 5, 2000","December 12, 2000","December 19, 2000","December 26, 2000","January 2, 2001","January 9, 2001","January 16, 2001","January 23, 2001","January 30, 2001","February 6, 2001","February 13, 2001","February 20, 2001","February 27, 2001","March 6, 2001","March 13, 2001","March 20, 2001","March 27, 2001","April 3, 2001","April 10, 2001","April 17, 2001","April 24, 2001","May 1, 2001","May 8, 2001","May 15, 2001","May 22, 2001","May 29, 2001","June 5, 2001","June 12, 2001","June 19, 2001","June 26, 2001","July 3, 2001","July 10, 2001","July 17, 2001","July 24, 2001","July 31, 2001","August 7, 2001","August 14, 2001","August 21, 2001","August 28, 2001","September 4, 2001","September 11, 2001","September 18, 2001","September 25, 2001","October 2, 2001","October 9, 2001","October 16, 2001","October 23, 2001","October 30, 2001","November 6, 2001","November 13, 2001","November 20, 2001","November 27, 2001","December 4, 2001","December 11, 2001","December 18, 2001","December 25, 2001","January 1, 2002","January 8, 2002","January 15, 2002","January 22, 2002","January 29, 2002","February 5, 2002","February 12, 2002","February 19, 2002","February 26, 2002","March 5, 2002","March 12, 2002","March 19, 2002","March 26, 2002","April 2, 2002","April 9, 2002","April 16, 2002","April 23, 2002","April 30, 2002","May 7, 2002","May 14, 2002","May 21, 2002","May 28, 2002","June 4, 2002","June 11, 2002","June 18, 2002","June 25, 2002","July 2, 2002","July 9, 2002","July 16, 2002","July 23, 2002","July 30, 2002","August 6, 2002","August 13, 2002","August 20, 2002","August 27, 2002","September 3, 2002","September 10, 2002","September 17, 2002","September 24, 2002","October 1, 2002","October 8, 2002","October 15, 2002","October 22, 2002","October 29, 2002","November 5, 2002","November 12, 2002","November 19, 2002","November 26, 2002","December 3, 2002","December 10, 2002","December 17, 2002","December 24, 2002","December 31, 2002","January 7, 2003","January 14, 2003","January 21, 2003","January 28, 2003","February 4, 2003","February 11, 2003","February 18, 2003","February 25, 2003","March 4, 2003","March 11, 2003","March 18, 2003","March 25, 2003","April 1, 2003","April 8, 2003","April 15, 2003","April 22, 2003","April 29, 2003","May 6, 2003","May 13, 2003","May 20, 2003","May 27, 2003","June 3, 2003","June 10, 2003","June 17, 2003","June 24, 2003","July 1, 2003","July 8, 2003","July 15, 2003","July 22, 2003","July 29, 2003","August 5, 2003","August 12, 2003","August 19, 2003","August 26, 2003","September 2, 2003","September 9, 2003","September 16, 2003","September 23, 2003","September 30, 2003","October 7, 2003","October 14, 2003","October 21, 2003","October 28, 2003","November 4, 2003","November 11, 2003","November 18, 2003","November 25, 2003","December 2, 2003","December 9, 2003","December 16, 2003","December 23, 2003","December 30, 2003","January 6, 2004","January 13, 2004","January 20, 2004","January 27, 2004","February 3, 2004","February 10, 2004","February 17, 2004","February 24, 2004","March 2, 2004","March 9, 2004","March 16, 2004","March 23, 2004","March 30, 2004","April 6, 2004","April 13, 2004","April 20, 2004","April 27, 2004","May 4, 2004","May 11, 2004","May 18, 2004","May 25, 2004","June 1, 2004","June 8, 2004","June 15, 2004","June 22, 2004","June 29, 2004","July 6, 2004","July 13, 2004","July 20, 2004","July 27, 2004","August 3, 2004","August 10, 2004","August 17, 2004","August 24, 2004","August 31, 2004","September 7, 2004","September 14, 2004","September 21, 2004","September 28, 2004","October 5, 2004","October 12, 2004","October 19, 2004","October 26, 2004","November 2, 2004","November 9, 2004","November 16, 2004","November 23, 2004","November 30, 2004","December 7, 2004","December 14, 2004","December 21, 2004","December 28, 2004","January 4, 2005","January 11, 2005","January 18, 2005","January 25, 2005","February 1, 2005","February 8, 2005","February 15, 2005","February 22, 2005","March 1, 2005","March 8, 2005","March 15, 2005","March 22, 2005","March 29, 2005","April 5, 2005","April 12, 2005","April 19, 2005","April 26, 2005","May 3, 2005","May 10, 2005","May 17, 2005","May 24, 2005","May 31, 2005","June 7, 2005","June 14, 2005","June 21, 2005","June 28, 2005","July 5, 2005","July 12, 2005","July 19, 2005","July 26, 2005","August 2, 2005","August 9, 2005","August 16, 2005","August 23, 2005","August 30, 2005","September 6, 2005","September 13, 2005","September 20, 2005","September 27, 2005","October 4, 2005","October 11, 2005","October 18, 2005","October 25, 2005","November 1, 2005","November 8, 2005","November 15, 2005","November 22, 2005","November 29, 2005","December 6, 2005","December 13, 2005","December 20, 2005","December 27, 2005","January 3, 2006","January 10, 2006","January 17, 2006","January 24, 2006","January 31, 2006","February 7, 2006","February 14, 2006","February 21, 2006","February 28, 2006","March 7, 2006","March 14, 2006","March 21, 2006","March 28, 2006","April 4, 2006","April 11, 2006","April 18, 2006","April 25, 2006","May 2, 2006","May 9, 2006","May 16, 2006","May 23, 2006","May 30, 2006","June 6, 2006","June 13, 2006","June 20, 2006","June 27, 2006","July 4, 2006","July 11, 2006","July 18, 2006","July 25, 2006","August 1, 2006","August 8, 2006","August 15, 2006","August 22, 2006","August 29, 2006","September 5, 2006","September 12, 2006","September 19, 2006","September 26, 2006","October 3, 2006","October 10, 2006","October 17, 2006","October 24, 2006","October 31, 2006","November 7, 2006","November 14, 2006","November 21, 2006","November 28, 2006","December 5, 2006","December 12, 2006","December 19, 2006","December 26, 2006","January 2, 2007","January 9, 2007","January 16, 2007","January 23, 2007","January 30, 2007","February 6, 2007","February 13, 2007","February 20, 2007","February 27, 2007","March 6, 2007","March 13, 2007","March 20, 2007","March 27, 2007","April 3, 2007","April 10, 2007","April 17, 2007","April 24, 2007","May 1, 2007","May 8, 2007","May 15, 2007","May 22, 2007","May 29, 2007","June 5, 2007","June 12, 2007","June 19, 2007","June 26, 2007","July 3, 2007","July 10, 2007","July 17, 2007","July 24, 2007","July 31, 2007","August 7, 2007","August 14, 2007","August 21, 2007","August 28, 2007","September 4, 2007","September 11, 2007","September 18, 2007","September 25, 2007","October 2, 2007","October 9, 2007","October 16, 2007","October 23, 2007","October 30, 2007","November 6, 2007","November 13, 2007","November 20, 2007","November 27, 2007","December 4, 2007","December 11, 2007","December 18, 2007","December 25, 2007","January 1, 2008","January 8, 2008","January 15, 2008","January 22, 2008","January 29, 2008","February 5, 2008","February 12, 2008","February 19, 2008","February 26, 2008","March 4, 2008","March 11, 2008","March 18, 2008","March 25, 2008","April 1, 2008","April 8, 2008","April 15, 2008","April 22, 2008","April 29, 2008","May 6, 2008","May 13, 2008","May 20, 2008","May 27, 2008","June 3, 2008","June 10, 2008","June 17, 2008","June 24, 2008","July 1, 2008","July 8, 2008","July 15, 2008","July 22, 2008","July 29, 2008","August 5, 2008","August 12, 2008","August 19, 2008","August 26, 2008","September 2, 2008","September 9, 2008","September 16, 2008","September 23, 2008","September 30, 2008","October 7, 2008","October 14, 2008","October 21, 2008","October 28, 2008","November 4, 2008","November 11, 2008","November 18, 2008","November 25, 2008","December 2, 2008","December 9, 2008","December 16, 2008","December 23, 2008","December 30, 2008","January 6, 2009","January 13, 2009","January 20, 2009","January 27, 2009","February 3, 2009","February 10, 2009","February 17, 2009","February 24, 2009","March 3, 2009","March 10, 2009","March 17, 2009","March 24, 2009","March 31, 2009","April 7, 2009","April 14, 2009","April 21, 2009","April 28, 2009","May 5, 2009","May 12, 2009","May 19, 2009","May 26, 2009","June 2, 2009","June 9, 2009","June 16, 2009","June 23, 2009","June 30, 2009","July 7, 2009","July 14, 2009","July 21, 2009","July 28, 2009","August 4, 2009","August 11, 2009","August 18, 2009","August 25, 2009","September 1, 2009","September 8, 2009","September 15, 2009","September 22, 2009","September 29, 2009","October 6, 2009","October 13, 2009","October 20, 2009","October 27, 2009","November 3, 2009","November 10, 2009","November 17, 2009","November 24, 2009","December 1, 2009","December 8, 2009","December 15, 2009","December 22, 2009","December 29, 2009","January 5, 2010","January 12, 2010","January 19, 2010","January 26, 2010","February 2, 2010","February 9, 2010","February 16, 2010","February 23, 2010","March 2, 2010","March 9, 2010","March 16, 2010","March 23, 2010","March 30, 2010","April 6, 2010","April 13, 2010","April 20, 2010","April 27, 2010","May 4, 2010","May 11, 2010","May 18, 2010","May 25, 2010","June 1, 2010","June 8, 2010","June 15, 2010","June 22, 2010","June 29, 2010","July 6, 2010","July 13, 2010","July 20, 2010","July 27, 2010","August 3, 2010","August 10, 2010","August 17, 2010","August 24, 2010","August 31, 2010","September 7, 2010","September 14, 2010","September 21, 2010","September 28, 2010","October 5, 2010","October 12, 2010","October 19, 2010","October 26, 2010","November 2, 2010","November 9, 2010","November 16, 2010","November 23, 2010","November 30, 2010","December 7, 2010","December 14, 2010","December 21, 2010","December 28, 2010","January 4, 2011","January 11, 2011","January 18, 2011","January 25, 2011","February 1, 2011","February 8, 2011","February 15, 2011","February 22, 2011","March 1, 2011","March 8, 2011","March 15, 2011","March 22, 2011","March 29, 2011","April 5, 2011","April 12, 2011","April 19, 2011","April 26, 2011","May 3, 2011","May 10, 2011","May 17, 2011","May 24, 2011","May 31, 2011","June 7, 2011","June 14, 2011","June 21, 2011","June 28, 2011","July 5, 2011","July 12, 2011","July 19, 2011","July 26, 2011","August 2, 2011","August 9, 2011","August 16, 2011","August 23, 2011","August 30, 2011","September 6, 2011","September 13, 2011","September 20, 2011","September 27, 2011","October 4, 2011","October 11, 2011","October 18, 2011","October 25, 2011","November 1, 2011","November 8, 2011","November 15, 2011","November 22, 2011","November 29, 2011","December 6, 2011","December 13, 2011","December 20, 2011","December 27, 2011","January 3, 2012","January 10, 2012","January 17, 2012","January 24, 2012","January 31, 2012","February 7, 2012","February 14, 2012","February 21, 2012","February 28, 2012","March 6, 2012","March 13, 2012","March 20, 2012","March 27, 2012","April 3, 2012","April 10, 2012","April 17, 2012","April 24, 2012","May 1, 2012","May 8, 2012","May 15, 2012","May 22, 2012","May 29, 2012","June 5, 2012","June 12, 2012","June 19, 2012","June 26, 2012","July 3, 2012","July 10, 2012"]
    },
    yAxis: {
      gridLineColor: '#eee',
      minorGridLineColor: '#eee',
      labels: {
          enabled: true,
          formatter: function() {
              return this.value +'%';
          },
          align: 'right'
      },
      max: 100,
      tickWidth: 0,
      tickInterval: 20,
      minorTickInterval: 10,
      title: {
         text: null
      }
    },
    series: [{
      name: 'Abnormally Dry',
      data: [42.71,51.73,56.74,57.96,54.4,53.5,52.83,47.41,45.65,45.27,40.56,40.26,38.03,40.65,37.84,39.36,36.8,37.39,37.13,39.79,35.37,31.85,31.4,36.99,35.76,38.88,42.2,43.68,44.36,43.19,39.66,42.89,43.3,42,47.15,47.94,47.14,48.9,48.42,50.63,49.81,50.08,53.76,50.01,37.93,30.89,29.95,29.79,28.39,27.79,24.61,23.28,24.47,26.65,25.29,36.49,32.67,32.41,31.25,28.96,29.22,27.95,28.55,28.62,31.55,31.95,29.74,29.35,29.48,30.92,39.74,40.65,38.72,37.58,33.25,31.65,35.89,37.99,40.35,36.14,41.41,44.62,44.2,43.06,40.95,38.51,39.78,42.09,42.57,40.54,36.65,37,39.7,38.69,43.49,46.36,48.54,51.25,51.07,47.21,46.77,45.46,44.52,44.61,44.72,45.54,47.07,47.19,47.87,48.18,49.02,50.71,53.39,53.15,58.8,57.45,57.49,55.8,54.71,54.09,54.87,53.84,55.72,53.91,52.41,54.01,60.01,59.07,57.3,58.32,59.06,59.62,59.99,65.07,65.86,65.89,65.6,60.86,59.04,60.93,59.38,59.68,56.9,59.27,59.53,56.57,54.04,50.96,50.86,49.46,49.29,49.04,49.32,51.39,48.36,47.41,46.12,48.38,48.52,50.37,51.3,52.06,53.25,51.89,52.39,52.79,54.54,56.85,55.59,55.31,53.3,54.78,53.29,57.61,54.21,49.95,48.86,48.25,51.03,49.98,49.72,49.73,46.07,42.81,48.71,46.95,46.58,48.36,49.79,54.67,56.48,54.2,54.55,52.7,53.12,51.93,49.91,50.67,52.27,53.73,52.72,53.78,52.5,51.4,50.7,51.22,49.19,49.46,49.17,51.65,50.34,48.62,48.02,48.02,49.21,49.18,48.24,47.47,44.68,44.4,47.57,48.31,48.9,50.02,52.03,50.14,48.87,49.26,48.23,51.16,49.01,46.15,43.34,40.99,42.08,42.67,43.35,45.26,46.28,47.42,46,43.5,41.86,40.86,39.6,40.66,41.31,39.25,43.38,40.16,38.19,38.18,36.61,36.46,37.02,36.44,34.09,33.57,32.87,34.21,32.4,30.91,33.34,32.59,32.72,32.66,32.37,32.77,33.16,32.08,33.51,33.72,33.36,31.29,30.62,27.42,29.87,29.82,37.09,39.72,33.69,37.36,37.79,37.57,33.77,33.98,41.07,39.98,37.93,40.27,43.12,43.78,43.49,41.43,38.51,37.61,39.51,42.51,42.71,40.43,40.09,36.09,35.69,38.93,45,45.14,45.04,43.17,41.11,39.37,40.46,40.12,38.64,37.48,39.61,41.66,39.77,39.62,40.27,39.48,39.64,42.75,44.42,42.96,48.61,48.57,49.78,46.86,48.42,47.43,47.33,48.32,43.57,41.46,44.79,44.16,48.45,48.25,47.27,47.33,53.13,53.13,54.05,53.42,54.93,55.25,54.01,53,51.04,48.31,47.51,45.98,46.45,45.82,44.55,42.01,40.2,36.6,37.7,36.37,35.75,38.69,40.01,49.68,48.52,46.44,44.96,42.42,39.37,40.71,43.02,43.3,45.01,42.35,41.51,48.27,49.22,52.81,47.89,48.34,46.03,46.37,46.39,45.55,47.4,47.67,48.9,49.59,47.99,49.63,50.58,50.79,53.61,54.44,57.02,58.34,60.11,59.31,58.84,56.52,56.17,53.84,52.04,52.13,52.62,52.47,51.98,48.83,44.92,47.6,51.33,53.53,50.02,51.91,49.49,47.77,47.77,50.73,52.21,53.27,51.7,52.2,51.82,54.12,51.52,48.57,47.08,46.04,46,45.83,46.85,44.1,43.52,43.51,45.59,45.1,44.08,42.76,37.08,38.36,43.67,40.21,40.47,40.1,40.43,40.42,43.95,42.89,44.63,43.42,42.93,44.59,43.67,40.41,40.82,41.35,42.87,42.34,39.52,40.9,38.24,40.05,38.83,39.69,40.76,43.37,43.49,43.15,42.1,38.86,39.26,38.83,38.8,41.82,40.77,44.63,42.97,43.18,45.94,45.52,45.33,47.91,42.33,39.01,38.04,37.87,39.1,33.95,31.06,30.11,27.57,30.08,30.83,30.61,28.11,30.64,32.15,33.58,34.78,32.09,30.98,33.55,32.05,30.06,29.17,30.88,29.38,29.46,31.59,29.85,28.4,26.52,23.55,22.14,22.79,21.74,23.66,23.64,23.67,25.73,25.61,28.06,28.06,32.4,32.15,29.8,29.11,29.16,30.22,29.88,29.49,31.11,29.49,28.84,29.22,30.54,33.09,32.83,34.11,32.73,32.19,28.09,26.48,29.33,24.77,25.61,28.68,28.52,27,27.31,28.92,26.53,24.49,25.18,27.09,25.76,29.6,27.46,29.43,33.65,38.08,35.08,36.48,38.07,34.82,36.76,37.88,39.08,38.26,38.88,38.81,38.56,37.86,37.78,36.57,36.5,37.59,38.5,41.65,40.9,41.72,39.44,38.73,36.88,35.71,35.89,35,34.39,34.29,33.69,31.68,31,31.02,29.77,29.22,28.99,31.28,31.89,31.6,34.79,34.69,33.25,33.95,37.03,39.97,39.95,39.84,40.12,40.74,36.95,37.92,35.91,36.55,37.65,35.4,34.15,34.46,36.12,37.05,36.82,36.09,34.42,34.14,35.93,35.82,41.12,41.53,44.97,47.67,48.78,48.75,47.8,48.06,47.98,48.17,47.88,48.76,46.95,47.25,50.33,50.96,49.77,49.75,49.67,46.99,45.88,52.17,53.6,53.6,52.38,60.58,67.1,70.7,71.7],
      zIndex: 1
      
    },{
      name: 'Moderate Drought',
      data: [19.61,20.93,21.74,21.39,24.29,24.65,26.76,25.74,27.28,26.97,25.6,25.01,22.27,21.5,22.19,22.35,20.42,21.59,20.76,23.81,19.99,20.32,17.97,19.72,19.13,19.95,14.98,17.11,18.87,19.25,18.28,20.61,23.12,24.45,27.02,29.07,32.28,33.37,32.08,34.31,34.34,34.29,32.84,29.05,16.67,15.81,14.81,13.58,14.02,14.26,12.83,12.05,11.65,11.96,12.07,10.87,9.92,10.15,18.67,18.26,18.22,17.88,17.7,18.05,17.76,17.26,17.79,17.9,18.55,20.9,23.89,26.7,26.73,25.26,22.62,21.28,20.52,21.86,22.56,21.62,21.95,23.17,25.95,26,25.88,25.92,25.47,23.89,25.15,24.78,23.78,23.64,24.41,23.97,26.29,29.86,31.16,32.73,32.76,31.75,32.33,31.03,30.88,30.39,30.62,29.01,28.13,27.55,27.05,26.82,28.25,29.58,30.26,30.53,36.7,34.07,34.66,34.43,35.58,36.1,36.06,35.84,36.73,39.07,37.04,38.02,37.22,37.76,39.23,39.94,40.22,39.92,40.54,43,42.15,41.84,42.19,40.98,41.19,41.73,45.64,44.7,44.04,40.59,41.94,41.61,40.47,39.1,40.23,35.81,34.99,34.65,35.12,36.59,35.57,35.19,34.46,35.58,36.79,37.02,37.12,37.11,37.9,37.05,36.35,37.46,37.45,40.56,40.11,37.28,35.89,36.31,35.84,36.55,35.82,35.07,35.7,35.12,35.12,32.89,29.71,29.33,25.75,24.76,26.73,32.12,39.44,40.24,40.91,41.46,45.87,43.88,45.44,42.08,42.09,40.51,40.48,38.95,39.04,40.81,40.11,40.9,40.54,40.15,39.96,40.07,39.77,39.77,38.33,38.4,37.09,36.62,35.55,34.98,34.36,34.49,34.22,32.73,32.14,31.5,32.05,31.21,30.09,30.42,31.99,32.45,33.16,32.67,31.18,33.36,32.87,32.21,31.4,30.14,28.19,28.19,27.96,28.73,28.05,28.37,29.05,30.78,30.1,29.74,27.22,25.86,25.58,25.49,27.01,26.47,25.76,24.88,23.89,23.85,23.88,23.76,22.55,22.57,22.45,22.66,22.64,21.42,20.35,20.26,20.59,23.76,23.33,22.76,22.7,22.31,22.36,22.41,22.41,21.66,21.03,19.58,18.52,18.5,18.2,18.81,17.83,18.7,19.91,22.58,20.23,19.18,21.06,22.5,22.09,23.69,24.08,24.47,23.18,21.19,19.59,18.32,18.53,20.46,21.75,19.82,20.91,15.81,15.5,16.89,18.35,20.02,19.49,18.72,17.78,18.45,18.88,19.05,18.9,17.8,18.58,21.31,21.1,22.76,23.81,23.54,23.87,25.15,26.36,26.14,25.01,26.23,26.06,26.4,27.39,27.05,25.08,21.79,20.93,22.7,24.55,26.13,29.38,28.34,29.36,31.78,33.88,40.49,41.73,40.46,41.24,41.07,40.08,36.72,34.48,33.54,30.74,27.52,28.82,29.33,27.63,26.37,25.05,22.8,23.01,21.8,21.84,20.99,21.43,22.15,21.33,21.41,21.6,20.86,20.87,21.39,21.07,21.84,22.63,21.09,19.69,22.11,22.53,27.56,25.59,26.59,26.25,26.49,27.16,26.41,27.44,28.31,28.34,28.29,28.11,28.58,28.79,28.96,32.88,35.46,36.65,38.62,39.31,40.33,40.81,38.29,38.07,37.21,36.68,36.8,36.63,36.63,36.76,32.53,29.37,29.77,30.19,30.91,31.28,30.37,29.71,28.97,28.85,29.21,29.58,29.81,28.8,26.37,26.1,25.04,24.82,24.38,23.77,22.72,24.76,23.61,23.69,22.25,22.37,22.49,22.8,21.4,20.52,21.05,18.01,19.31,19.83,25.29,24.55,23.5,23.07,22.75,23.05,23.63,23.7,22.9,21.17,19.47,20.1,19.07,18.4,19.22,19.82,19.48,17.78,18.87,18.17,18.24,17.77,17.61,18.01,18.2,18.33,17.55,17.12,16.16,16.14,16.34,16.22,17.71,18.27,18.43,17.71,20.14,21.55,21.57,20.54,22.3,20.73,18.8,17.45,16.23,15.35,14.48,14.37,14.37,12.52,12.33,12.48,11.89,11.35,11.84,12.36,13.26,12.75,11.93,11.18,10.73,10.82,11.9,11.94,12.62,12.32,12.83,12.61,12.27,11.95,10.79,10.06,10.7,10.94,10.65,11.08,11.05,10.86,10.61,10.54,10.46,11.16,11.62,11.5,7.75,7.21,6.64,7.5,7.69,7.52,8.13,7.88,7.97,7.63,7.69,7.72,8.54,9,9.17,9.56,8.72,8.14,8.59,8,7.62,7.86,7.51,6.6,6.67,7.03,7.61,6.96,7.08,7.19,6.82,8.1,7.79,8.73,10.33,11.13,9.93,10.58,12.53,12.87,13.28,13.89,13.89,14.38,14.02,14.97,16.62,19.57,19.91,18.23,19.4,19.23,20.14,20.2,20.34,20.9,23.64,23.44,23.07,21.77,22.95,23.6,24.11,23.88,22.98,22.29,22.13,22.14,22.09,21.34,21.41,22.42,22.69,22.83,23.49,24.49,24,23.76,24.67,27.06,27.52,25.97,25.93,27.51,25.14,25.85,25.52,24.42,25.14,25.54,25.04,25.39,27.32,27.8,26.74,26.15,24.61,23.63,23.52,23.09,23.89,26.73,27.28,27.25,30.34,31.73,31.73,31.69,31.78,32.38,32.68,33.3,32.09,30.09,30.79,32.11,30.94,31.05,31.98,30.06,28.19,29.58,31.31,32.33,33.24,39.12,42.8,46.84,50.92],
      zIndex: 2
    },{
      name: 'Severe Drought',
      data: [7.9,8.27,8.67,8.45,8.53,9.21,9.13,9.14,11.75,12.59,13.43,13.06,10.42,12.08,11.43,12.2,10.91,11.05,10.73,13.02,11.84,11.48,10.71,11.91,11.87,10.53,6.91,6.88,7.43,7.88,6.73,9.08,10.96,11.69,13.24,16.22,20.28,21.9,20.06,21.89,20.33,18.59,14.42,14.21,10.4,9.97,8.95,7.55,7.57,7.77,6.29,6.28,5.14,5.46,5.13,4.78,4.19,4.58,4.73,4.76,4.77,4.62,7.91,8.34,8.34,8.48,8.49,8.53,8.63,8.74,11.03,12.83,11.18,11.36,10.98,10.63,12.13,13.7,14.89,14.04,14.81,14.23,14.86,15.44,15.55,16.05,16.68,15.81,16.66,16.66,16.54,15.84,15.84,16.01,16.48,17.47,18.65,19.34,20.55,19.98,19.79,18.3,19.24,18.88,18.97,16.94,15.26,14.84,13.95,13.8,13.85,14.01,15.13,15.17,18.01,16.78,19.52,20.42,21.52,22.91,24.9,25.89,26.46,26.18,25.4,25.83,25.07,25.35,26.55,27.96,28.95,27.68,28.43,30,28.95,29.89,29.53,29.33,29.47,30.18,31.78,30.98,29.82,27.89,27.04,26.1,25.38,24.79,25.19,22.2,21.96,21.91,22.22,25.7,25.7,25.61,25.33,26.07,26.88,27.34,27.48,26.74,27.41,26.67,27.13,27.18,27.03,26.47,25.75,24.45,22.71,22.76,22.73,23.63,19.59,17.73,21.29,20.53,20.56,19.99,18.44,18.5,18.21,18.65,19.91,21.82,24.2,25.19,27.19,28.55,31.15,28.79,31.53,28.83,28.31,27.73,28.14,28.57,28.93,29.35,28.36,28.55,28.21,28.1,28.1,28.19,28.36,28.32,28.22,27.18,26.51,26.12,25.87,25.75,25.62,25.69,25.69,23.61,22.99,22.61,22.71,22.67,21.15,21.07,21.71,21.65,22.31,22.53,21.25,21.63,21.5,21.58,21.26,20.29,19.66,19.59,20.21,20.19,19.79,20.08,19.9,19.75,19.26,19,18.76,18.53,18.37,18.23,18.03,17.77,17.28,16.08,15.99,15.11,14.83,14.78,13.97,13.78,13.44,13.85,13.79,12.86,11.39,11.19,11.29,11.89,11.78,11.86,12.87,13.58,14.03,14.68,14.68,13.8,13.66,12.89,11.69,11.11,11.01,11.07,8.71,8.92,8.82,7.39,6.41,6.34,8.13,9.55,8.76,9.91,10.06,10.28,9.41,8.17,7.56,7.11,7.94,8.24,7.56,6.01,5.7,4.64,4.27,4.43,4.58,3.81,4.91,5.59,5.58,5.07,5.62,6.18,6.14,6.25,6.77,7.14,9.03,9.42,11.56,11.92,12.75,13.72,15.06,15.2,13.81,13.98,12.56,13.82,15.62,15.5,12.93,10.37,10.84,11.63,12.43,15.13,16.43,16.51,16.06,16.51,14.57,21.64,24.33,23.96,25.83,24.95,24.36,20.55,19.42,18.46,13.78,13.62,13.8,14.04,13.66,13.86,12.98,11.6,11.6,11.28,11.67,10.97,11.29,11.45,10.89,10.54,11.25,10.91,11.16,11.47,11.8,12.23,12.13,11.16,10.12,10.97,11.14,11.71,8.74,9.38,11.1,11.59,12.43,12.17,13.38,14.52,14.76,14.16,15.29,15.93,15.96,15.49,16.22,16.51,20.84,24.03,25.09,27.47,27.83,27.68,27.01,26.83,26.8,25.08,24.76,25.06,25.25,22.04,19.13,19.22,18.81,18.73,18.99,17.28,17.47,17.43,17.36,17.04,15.25,16.03,14.94,13.53,12.86,12.62,12.79,12.58,12.75,12,11.37,10.51,8.12,6.68,8.03,7.64,8.77,7.3,7.2,7.22,6.78,7.16,7.86,10.11,9.89,10.09,9.94,9.06,9.17,10.59,10.9,10.79,9.73,7.72,6.88,6.63,6.34,6.82,7.49,7.6,7.59,7.97,7.91,7.28,7.24,6.87,6.95,6.71,7.28,6.1,5.68,5.25,5.01,5.46,5.82,7.1,7.98,8.08,7.82,7.56,7.32,6.44,6.58,6.8,6.71,7.9,7.85,7.51,6.78,6.21,6.3,6.06,4.78,5.1,5.18,5,4.55,4.65,5.2,5.42,5.76,5.75,5.71,5.4,5.45,5.09,5.03,4.9,4.69,5.22,5.22,4.8,5.81,4.5,3.91,3.84,3.82,4.05,4.47,4.41,4.41,3.76,3.59,3.59,3.59,5.19,4.82,1.4,1.23,1.2,1.31,1.4,1.38,2.02,1.99,1.92,1.75,1.75,1.73,1.92,2.26,2.26,2.26,2.36,2.15,2.79,2.55,1.97,1.78,1.63,1.23,1.19,1.23,1.62,1.72,1.7,1.47,1.28,1.32,1.61,1.94,2.53,2.67,2.34,3.59,4.77,5.02,5.47,5.44,5.06,5.42,5.11,5.88,6.04,7.06,7.6,7.13,6.42,6.67,7.51,8.86,8.08,8.05,9.57,10.43,10.51,10.91,12.47,15.24,15.19,15.31,15.88,15.47,16.1,17.16,17.29,16.93,17.29,17.81,18.21,18.68,19.45,19.7,19.79,19.4,19.93,21.04,20.68,19.58,19.58,20.68,19.55,20.16,19.78,19.61,19.88,19.96,19.82,20.04,20.38,20.08,20.08,19.42,18.33,17.63,17.47,16.24,15.88,15.78,15.78,15.72,15.46,15.44,15.1,15.07,14.54,16.36,16.18,17.49,16.09,16.27,16.47,16.87,16.44,16.73,17.1,16.46,15.42,16.31,15.87,15.85,16.04,20.32,25.72,28.65,31.11],
      zIndex: 3
    },{
      name: 'Extreme Drought',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1.24,1.39,1.39,2.5,3,4.25,4.52,6.13,5.62,3.78,3.61,3.92,4.57,4.36,2.11,3.75,3.69,4.52,5.74,6.76,7.44,7,5.76,5.84,4.91,5.92,6.42,7.6,6.26,4.87,2.21,0.6,0.68,0.92,0.74,0.8,0.8,1.19,1.29,0.81,0.74,0.86,1.35,1.44,1.46,1.39,1.34,1.27,1.23,1.2,1.2,1.29,1.29,1.29,1.66,2.34,2.15,2.06,1.96,1.7,1.61,1.66,3.35,3.17,2.97,2.95,4.37,4.37,4.18,6,7.11,7.42,7.82,7.82,7.84,8.06,8.36,8.36,8.36,8.32,9.53,9.53,9.24,9.13,7.87,7.26,7.22,6.79,7.31,5.27,4.82,4.71,4.43,4.6,4.41,4.71,4.81,4.73,5.65,5.53,5.37,4.37,4.68,5.64,7.82,9.98,9.52,13.73,14.1,14.72,14.08,13.93,14.98,16.64,17.48,17.13,17.81,18.84,18.8,19.4,19.56,19.81,19.63,17.9,17.14,16.64,15.7,14.9,14.09,13.25,12.92,12.62,12.32,11.31,11.34,11.31,11.07,11.41,11.61,11.62,11.91,13.62,15.34,17.16,17.43,17.16,17.26,16.8,16.64,16.63,16.13,16.02,14.29,13.03,12.35,12.09,11.99,10.88,9.08,8.67,8.48,8.56,8.46,8.55,9.13,8.94,9.05,9.57,10.45,12.4,12.62,12.47,12.82,14.52,15.76,14.29,15.09,14.35,14.08,14.1,13.99,14.64,14.43,15.27,15.34,15.41,14.79,14.74,14.43,14.36,14.67,14.74,13.35,13.57,13.3,13.02,12.99,12.5,12.11,12.06,12.29,10.47,10.41,10.31,10.56,10.93,8.6,8.65,9.1,8.82,10.04,10.32,10.15,10.79,10.7,10.58,10.49,9.33,9.22,8.83,8.87,8.87,8.96,9.14,9.48,10.02,9.72,9.64,8.94,8.58,8.11,8.1,7.86,8.05,8.03,6.96,6.97,6.73,6.69,6.59,5.42,5.42,5.23,5.34,5.45,4.94,4.05,4.01,4.18,4.07,4.7,4.82,4.88,4.6,4.64,5.59,5.59,4.87,4.75,4.6,4.82,3.97,3.87,2.75,1.58,1.58,1.58,0.9,0.42,0,0.59,1.37,1.15,1.25,1.62,1.54,1.53,0.83,0.7,0.7,0.95,1.16,0.83,0.62,0.68,0.7,0.67,0.84,0.84,0.75,0.8,0.8,0.88,1.16,1.39,2.34,2.34,2.47,3.06,3.13,3.82,3.63,5.1,5.32,5.5,5.98,6.94,6.74,4.21,3.53,3.41,3.31,4.64,5.67,4.64,5.81,5.71,5.95,5.75,6.91,8.18,7.99,7.51,7.07,4.46,6.13,9.46,9.48,10.1,9.47,9.22,8.32,7.99,8.6,6.28,5.52,5.69,5.58,5.29,5.1,5.05,4.76,4.87,5.34,6.2,5.13,5.2,5.18,4.89,4.95,5.24,5.02,4.43,4.45,4.45,4.69,4.51,3.86,3.23,4.57,4.49,3.91,2.54,2.51,2.88,3.38,3.95,4.28,4.59,5.55,5.76,5.4,5.4,6.3,6.15,5.92,5.29,5.27,5.27,5.66,6.97,8.36,10.44,10.7,10.16,10.29,10.22,9.86,10.02,10.35,10.97,8.85,6.59,6.69,6.31,6.73,6.72,5.14,5.36,5.36,5.35,4.81,3.93,3.71,3.47,3.67,3.4,3.41,3.36,2.8,2.74,2.22,2.21,2.1,2.38,2.19,1.97,2.1,2.08,1.83,1.74,1.3,1.37,1.48,1.96,3.57,3.8,3.65,3.47,2.9,3.34,3.65,3.63,3.7,2.59,1.61,1.32,1.21,1.17,1.28,1.56,1.47,1.47,1.47,1.45,1.57,1.57,1.5,1.74,1.79,1.87,1.33,1.15,1.05,1.02,1.38,1.9,2.06,2.41,2.41,2.36,2.27,1.92,1.79,1.59,1.59,1.82,1.82,1.92,1.79,1.71,1.77,2.21,1.59,1.28,1.22,1.29,1.22,1.14,1.47,1.65,1.83,1.82,1.82,2.14,2.14,2.15,1.95,1.95,1.84,1.17,1.31,1.09,0.63,0.54,0.58,0.4,0.4,0.33,0.33,0.45,0.41,0.34,0.17,0.17,0.17,0.17,0.32,0.32,0.13,0.02,0.02,0.02,0.02,0.03,0.05,0.05,0.05,0.05,0.04,0.04,0.04,0.05,0.05,0.05,0.07,0.2,0.44,0.45,0.45,0.45,0.38,0.26,0.26,0.26,0.29,0.3,0.3,0.18,0.18,0.18,0.24,0.24,0.31,0.31,0.32,0.49,0.95,1.05,1.15,1.17,1.08,0.99,0.68,1.1,1.2,1.64,1.98,2.17,1.99,1.82,1.74,1.35,1.2,1.2,1.73,1.92,2.24,2.8,3.99,5.36,7.31,7.52,8.25,9.07,9.74,10.43,11.01,11.24,12.27,13.15,13.72,15.04,15.35,15.55,15.6,15.06,15.19,15.28,15.44,14.51,14.4,15.26,15.08,15.48,15.02,14.87,15.04,14.3,14.57,14.42,14.82,14.63,14.39,13.8,12.51,11.55,10.75,9.33,8.37,8.51,8.15,8.53,8.19,8.02,7.67,7.79,6.39,6.39,6.06,6.1,5.75,5.63,5.57,5.64,5.5,5.58,5.8,5.67,4.78,4.98,4.38,3.86,3.29,4.35,7.15,8.64,9.71],
      zIndex: 4
    },{
      name: 'Exceptional Drought',
      data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.22,0.25,1.28,1.37,1.39,1.05,1.38,1.77,2.16,0,1.78,1.66,2,2.06,2.18,1.43,1.37,0.62,0.62,0.39,0.87,1.41,2.2,0.83,0.6,0,0,0.11,0.21,0.25,0.3,0.28,0.28,0.28,0.29,0.29,0.28,0.51,0.53,0.61,0.59,0.59,0.57,0.54,0.15,0.17,0.22,0.22,0.22,0.22,0.38,0.41,0.41,0.33,0.08,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.23,0.51,0.54,0.51,2.28,2.26,1.73,2.07,2.93,4.42,4.6,4.61,5,5.1,5.83,6.22,6.56,6.19,5.2,4.18,3.24,2.75,2.62,1.75,1.12,1.12,1.13,1.11,0.93,0.96,0.93,0.91,1.05,1.07,1.07,1.07,1.41,2.15,1.97,2.09,1.88,1.93,1.74,1.74,1.67,1.41,1.41,1.02,0.49,0.22,0.19,0.22,0.22,0.22,0.52,0.5,0.5,0.51,0.85,0.84,0.74,0.63,0.68,0.68,1.39,1.8,1.65,1.63,1.77,1.84,1.61,1.85,1.83,1.73,1.75,1.73,1.71,1.7,2.12,2.18,2.79,2.65,2.75,2.8,2.76,2.82,3.11,2.84,3.1,2.63,2.41,2.52,2.48,2.36,2.36,2.36,1.74,1.61,1.61,1.61,1.61,0.54,0.68,0.7,0.7,0.9,0.91,0.93,0.67,0.67,0.49,1.07,1.02,1.02,1,1,1.19,1.15,1.15,1.05,1.05,1.03,1.01,0.99,0.81,0.78,0.78,0.78,0.83,0.81,0.78,0.78,0.78,0.78,0.78,0.78,0.78,0.75,0.77,0.77,0.64,0.63,0.6,0.6,0.6,0.87,0.87,0.87,1.1,1.11,1.31,1.31,1.26,1.21,1.24,1.28,0.71,0.56,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.45,0.45,0.51,0.55,0.64,0.73,0.45,0.51,0.48,0.53,1.02,1.02,1.14,0.94,0.94,0.94,0.94,1.06,1.03,1.52,1.42,1.13,1.13,1.08,0.99,0.98,0.98,1.05,0.79,0.52,0.84,1.04,1.05,1.59,1.68,1.67,1.45,0.87,1.21,0.25,0.12,0.12,0.2,0.24,0,0,0,0,0.14,0.22,0.15,0.51,0.51,0.4,0.28,0.28,0.26,0.18,0.18,0.18,0.19,0.15,0.15,0.15,0.15,0.15,0,0,0,0,0,0,0,0,0,0,0.31,0.74,1,0.77,0.64,0.43,0.43,0.33,0.55,1.28,1.95,2.39,2.32,2,2.36,1.93,1.9,2.8,2.95,3.61,3.32,1.84,2.06,2.27,2.45,2.41,2.71,3.13,3.13,3.13,1.99,2.09,1.82,1.82,1.91,1.8,1.8,1.72,0.91,0.75,0.32,0.09,0,0,0,0.24,0.24,0.24,0,0,0,0,0,0,0.26,0.35,0.66,0.74,0.7,1.02,0.81,0.81,0.8,0.64,0.12,0.12,0.12,0.12,0.15,0.15,0.15,0.1,0.1,0.1,0.16,0.37,0.37,0.43,0.52,0.64,0.31,0.31,0.31,0.31,0.31,0.31,0.31,0.49,0.56,0.63,0.63,0.71,0.71,0.52,0.52,0.52,0.52,0.85,0.83,0.72,0.72,1.1,0.63,0.5,0.48,0.56,0.56,0.6,0.82,1.04,1.32,1.21,1.38,1.24,1.24,1.33,1.39,1.28,1.18,0.25,0.28,0.23,0.11,0.11,0.11,0.07,0.07,0.07,0.07,0.05,0,0,0,0,0,0,0,0,0,0,0,0,0,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.35,0.78,1.19,1.39,2.6,4.96,5.04,4.69,5.23,6.52,7.54,9.89,9.97,9.83,9.99,9.11,9.23,9.13,9.58,9.05,9.31,9.37,9.36,9.81,9.48,9.5,9.77,8.15,8.28,7.98,7.4,7.33,7.27,6.78,5,4.01,3.83,3.66,2.76,2.77,2.19,2.31,2.29,2.66,2.63,2.69,2.03,2.09,2.04,2.02,1.84,1.8,1.61,1.72,1.58,1.55,1.61,1.34,0.85,0.8,0.55,0.5,0.24,0.24,0.34,0.5,0.62],
      zIndex: 5
    }]
});

var fireChart = new Highcharts.Chart({
    chart: {
      marginLeft: 40,
      marginTop: 5,
      spacingLeft: 0,
      spacingRight: 0,
      renderTo: 'fires-chart',
      type: 'column'
    },
    colors: [
      '#d8472b'
    ],
    credits: {
      enabled: false
    },
    legend: {
        enabled: false
    },
    plotOptions: {
      column: {
        borderWidth: 0,
        shadow: false,
        pointPadding: 0
      }
    },
    title: {
      text: null
    },
    series: [{
      name: 'Fires',
      data: [23198,7629,20482,17488,11396,30457]
    }],
    tooltip: {
        borderWidth: 0,
        borderRadius: 0,
        valueDecimals: 1,
        formatter: function() {
                return '<b>'+ this.x +
                    '</b><br />' + this.y.commafy() + ' ' + this.series.name.toLowerCase();
        }
    },
    xAxis: {
      //type: 'datetime',
      minPadding: 0,
      maxPadding: 0,
      tickmarkPlacement: 'on',
      lineColor: '#ccc',
      categories: ["2006","2007","2008","2009","2010","2011"],
      offset: 0
    },
    yAxis: {
      gridLineColor: '#eee',
      minorGridLineColor: '#eee',
      minPadding: 0,
      offset: 0,
      tickWidth: 0,
      title: {
         text: null
      }
    }
});

var areaChart = new Highcharts.Chart({
    chart: {
      marginLeft: 40,
      marginTop: 5,
      spacingLeft: 0,
      spacingRight: 0,
      renderTo: 'area-chart',
      type: 'column'
    },
    colors: [
      '#d8472b'
    ],
    credits: {
      enabled: false
    },
    legend: {
        enabled: false
    },
    plotOptions: {
      column: {
        borderWidth: 0,
        shadow: false,
        pointPadding: 0
      }
    },
    title: {
      text: null
    },
    series: [{
      name: 'Square miles',
      data: [3088,255,2513,1135,458,6240]
    }],
    tooltip: {
        borderWidth: 0,
        borderRadius: 0,
        valueDecimals: 1,
        formatter: function() {
                return '<b>'+ this.x +
                    '</b><br />' + this.y.commafy() + ' ' + this.series.name.toLowerCase();
        }
    },
    xAxis: {
      //type: 'datetime',
      minPadding: 0,
      maxPadding: 0,
      tickmarkPlacement: 'on',
      lineColor: '#ccc',
      categories: ["2006","2007","2008","2009","2010","2011"],
      offset: 0
    },
    yAxis: {
      gridLineColor: '#eee',
      minorGridLineColor: '#eee',
      minPadding: 0,
      offset: 0,
      tickWidth: 0,
      title: {
         text: null
      }
    }
});

var homesChart = new Highcharts.Chart({
    chart: {
      marginLeft: 40,
      marginTop: 5,
      spacingLeft: 0,
      spacingRight: 0,
      renderTo: 'homes-chart',
      type: 'column'
    },
    colors: [
      '#d8472b'
    ],
    credits: {
      enabled: false
    },
    legend: {
        enabled: false
    },
    plotOptions: {
      column: {
        borderWidth: 0,
        shadow: false,
        pointPadding: 0
      }
    },
    title: {
      text: null
    },
    tooltip: {
        borderWidth: 0,
        borderRadius: 0,
        valueDecimals: 1,
        formatter: function() {
                return '<b>'+ this.x +
                    '</b><br />' + this.y.commafy() + ' ' + this.series.name.toLowerCase();
        }
    },
    series: [{
      name: 'Homes',
      data: [413,37,256,436,100,3017]
    }],
    xAxis: {
      //type: 'datetime',
      minPadding: 0,
      maxPadding: 0,
      tickmarkPlacement: 'on',
      lineColor: '#ccc',
      categories: ["2006","2007","2008","2009","2010","2011"],
      offset: 0
    },
    yAxis: {
      gridLineColor: '#eee',
      minorGridLineColor: '#eee',
      minPadding: 0,
      offset: 0,
      tickWidth: 0,
      title: {
         text: null
      }
    }
});

var deathsChart = new Highcharts.Chart({
    chart: {
      marginLeft: 40,
      marginTop: 5,
      spacingLeft: 0,
      spacingRight: 0,
      renderTo: 'deaths-chart',
      type: 'column'
    },
    colors: [
      '#d8472b'
    ],
    credits: {
      enabled: false
    },
    legend: {
        enabled: false
    },
    plotOptions: {
      column: {
        borderWidth: 0,
        shadow: false,
        pointPadding: 0
      }
    },
    title: {
      text: null
    },
    tooltip: {
        borderWidth: 0,
        borderRadius: 0,
        valueDecimals: 1,
        formatter: function() {
                return '<b>'+ this.x +
                    '</b><br />' + this.y.commafy() + ' ' + this.series.name.toLowerCase();
        }
    },
    series: [{
      name: 'Deaths',
      data: [41,5,41,68,11,117]
    }],
    xAxis: {
      //type: 'datetime',
      minPadding: 0,
      maxPadding: 0,
      tickmarkPlacement: 'on',
      lineColor: '#ccc',
      categories: ["2006","2007","2008","2009","2010","2011"],
      offset: 0
    },
    yAxis: {
      gridLineColor: '#eee',
      minorGridLineColor: '#eee',
      minPadding: 0,
      max: 120,
      offset: 0,
      tickWidth: 0,
      title: {
         text: null
      }
    }
});