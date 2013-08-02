This is a working application in its own right, but some of the functions are only partially implemented and need to 
be finished. 

For full project information and a setup guide, please see my article on codeproject.com 
at this link >> http://www.codeproject.com/Articles/619031/D-B-Green-Business-Finder


-------------------------------------------------------------------------------------

TODO ITEMS FOR DNBGreenMash ( aka DNBGreenBusinessFinder)


1) BrowseGreenMap.lsml (Client screen) is currently configured as a Tile List. It needs to be modified with client side 
code and callbacks to work with the Bing Custom Map Control (like the screen for Northwind Customers )

2) The Project needs to have security enabled using the authentication method that works best for your deployment environment

3) Wire up Radius search screen. C# code that implements this calcluation is available on github from 
LonelySharp

4) Wire up subquery Browsing screens for BrowseVeterans, BrowseMinority that can key off the currently selected
Green business ( from BrowseGreenBiz ). 

5) Implement code to link ApplicationData objects to the main data source (DNB.Greens entity)

6) Implement code to link EDR data source to DNB data source using Latitude and Longitude. 
The DNB data set uses all strings and the EDR data set uses decimals, so some manipulation will be needed to create 
the subqueries / joins

7) Select a social API to include in the project




