# react-chartjs-portlet-world-cup-points-bar-chart
A world cup bar chart application on React with ChartJS, built using a Liferay Portlet

Important. Do a build from Developer Studio. Then go to the node_modules folder. 
Find chartjs-color-string. Get the package.json in there and find the main: attribure. 
Remove the ./ from the path of the main js file. Do a clean and then build again.

There is a bug in Liferay Loader that will cause the charting to fail. There is a ticket for it.
It is in the process of being resolved.
