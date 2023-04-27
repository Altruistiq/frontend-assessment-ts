# Frontend - carbon footprint chart task

👋 Welcome to the Altruistiq front-end hiring task!

**Objective**

Create a chart animating carbon footprint per country throughout the years. The below chart is an example for world population (see for animated version. The provided Figma file shows the one-page app that you should build for this task.

![https://miro.medium.com/max/1600/1*37uCN6y1WyLukxwCadhWRw.gif](https://miro.medium.com/max/1600/1*37uCN6y1WyLukxwCadhWRw.gif)

**Requirements**

1. Implement the provided Figma file as a Vue app
2. Use data from the [Footprint network](https://data.footprintnetwork.org/#/api)
3. Create the chart
4. Calculate and show world total footprint on the page

**Stretch goals**

1. animate the sorting and bar length of the chart as per the provided example.
2. chart should be responsive, test by changing the window size (dragging)
3. cache data with timeout of 5 minutes, making sure upon reload the app conditionally uses stored data

**Get started**

1. [Get this Figma file](https://www.figma.com/file/WJ1BvQzvFchIFxo67iIywi/Altruistiq-frontend-hiring-task). The ... in the chart is a placeholder. The idea is that you show all the countries from the API response in the chart.

2. Clone this repo, then `npm i` and `npm run dev` to start a development app (uses Vite, Vue 3 and Pinia)

3. Use the 2 API calls provided in the store to get a list of countries and to get emission data per country per year. Do this for all countries. To chart the carbon footprint for a specific year, you need the `carbon` attribute from the response. Note that for some countries data for a specific year is missing.

**Suggestions**

- Consider first defining the data structure that you intend to use to create the chart.
- Use the types defined in `src/typings/Country.ts` to help you
- Talk about your approach.
