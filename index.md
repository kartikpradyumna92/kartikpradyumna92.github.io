## About me

Currently a Data Scientist III at Teladoc Health, I lead data science workflow migrations from AWS+ jenkins to Azure Databricks + Cloudbees Jenkins and deliver insights around enrollment trend and product usage. With a strong background across HealthTech and retail, I’m passionate about problem-solving and using data to elevate business decisions and customer experiences.
<br>
My expertise includes Python, SQL, Databricks, cloud platforms (AWS, Azure), Data storytelling, and machine learning. I’ve developed and deployed predictive models, such as sales forecasts for convenience stores, to drive impactful results.
<br>
Beyond data, I’m an avid photographer with a love for storytelling through images. Whether in data or landscapes, I’m always exploring and creating.
<br><br>
Thanks for visiting my GitHub page. Feel free to reach out or explore my projects!

---

## Personal Projects
---

<details>
  <summary> <b> &nbsp; Data Storytelling of Paris 2024 Olympics - Kaggle (2024) </b> </summary>
  
  Data Story telling on Paris 2024 Olympics. Understand the data around Paris 2024 Olympics and visualize interesting findings.

  Storytelling from few point of Views -<br><br>
  __1. Overall athletes POV__ <br>
  Story around Age and Gender<br>

  <img src="images/kaggle_paris_olympics_results/violin_chart_athletes_age_per_gender.png?raw=true" width="1000" height="350" />
  <p style="text-align: center; font-size: smaller; font-style: italic;">fig: Violin chart depicting vriance of Age per Gender.</p>
  <br>
  Ranking based on most athletes from a Country, color codes on Discpline. Most athletes from each country seem to be part of Athletics discline. Athletics combines all track and field events like running, long jump and more.<br>
  
  <br>
  <img src="images/kaggle_paris_olympics_results/athletes_per_discipline_per_country.png?raw=true" width="1000" height="350" />
  <p style="text-align: center; font-size: smaller; font-style: italic;">fig: Histogram of top countries based on # of athletes representing it.</p>

  __2. An athlete's POV - Novak Djokovic__ <br>
  I am fan of Novak and seeing him win his first Olympics Gold medal was very satisfying. <br>

  <img src="images/kaggle_paris_olympics_results/novak_djokovic_journey.png?raw=true" width="1000" height="350" />
  <p style="text-align: center; font-size: smaller; font-style: italic;">fig: Scatterplot to plot Djokovic's journey to his Olympic Gold medal.</p>
  

  __3. Medalists POV__ <br>
  Plotted histogram for Gold medalists on Country and Discpline level to understand the ranking. We could most medals are won by USA. <br>

  <img src="images/kaggle_paris_olympics_results/gold_medalists_summary.png?raw=true" width="1000" height="350" />
  <p style="text-align: center; font-size: smaller; font-style: italic;">fig: Histogram for Gold Medalists.</p>
  <br>
  
  Used <a href='https://plotly.com/'>plotly</a>  for visualization because of it's very interactive and ease of use. Check out my Kaggle notebook to view the interactive plots.<br>
</details><br>

[GitHub project repo](https://github.com/kartikpradyumna92/Kaggle_Paris2024_Olympics) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[Kaggle notebook](https://www.kaggle.com/code/kartikpradyumna92/data-story-telling-on-paris-2024-olympics) <br>

![Kaggle](https://img.shields.io/badge/Kaggle-20BEFF?style=flat&logo=kaggle&logoColor=white)&nbsp;
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)&nbsp;
[![Plotly](https://img.shields.io/badge/Plotly-brightgreen)](https://plotly.com/)&nbsp;
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white)



---
<details>
  <summary> <b> &nbsp; House Price Prediction - Kaggle (2024) </b> </summary>
  <br>

  Used Kaggle dataset on House Prices to predict the prices given multitude of features  like area, bedrooms, and more.<br>
  Features were correlated to each other and hence suffered with multicollinearity. Below is the correlation matrix showcasing it. <br><br>
  <img src="images/house_price_corr_matrix.png?raw=true"/>
  <p style="text-align: center; font-size: smaller; font-style: italic;">fig: Correlation Matrix of the features.</p>
  <br>
  Used Lasso and Ridge regression since they handle multi-variable data, and multicollinearity well. <br>
  This has improved the accuracy, achieved r2 score = 0.7092047042418796 on the test data. <br><br>

</details><br>

[GitHub project repo](https://github.com/kartikpradyumna92/Kaggle_House_Price_Predictions) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[Kaggle notebook](https://www.kaggle.com/code/kartikpradyumna92/housing-price-prediction/notebook) <br>
<br>
![Kaggle](https://img.shields.io/badge/Kaggle-20BEFF?style=flat&logo=kaggle&logoColor=white)&nbsp;
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)&nbsp;
![Scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat&logo=scikit-learn&logoColor=white)&nbsp;
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white)&nbsp;
![Seaborn](https://img.shields.io/badge/Seaborn-30A9DE?style=flat&logo=seaborn&logoColor=white)&nbsp;
![Matplotlib](https://img.shields.io/badge/Matplotlib-003B57?style=flat&logo=matplotlib&logoColor=white)


---
<details>
  <summary> <b> &nbsp; Classifier to predict Automobile closed deals (2017) </b> </summary>
  <br>
  Built a Random Forest classifier on high-dimensional data for predicting deal closures, while handling missing data values and outliers. used Inter Quartile Range (IQR) to handle the outliers.
  <br>
  Results of the Classifer- <br>
    - Area under curve: 0.91378991803<br>
    - f1_score: 0.905041605482<br>

  __<b>Confusion Matrix:</b>__

      |                | 0 (Closed)          | 1 (Open)            |
      |----------------|---------------------|---------------------|
      | 0 (Closed)     |       71809         |          6          |
      | 1 (Open)       |       770           |          3698       |

</details> <br>


[GitHub project repo](https://github.com/kartikpradyumna92/Data-Science--Analysis-of-automobiles-deals-captured)


![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)&nbsp;
![Scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=flat&logo=scikit-learn&logoColor=white)&nbsp;
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white)

---

## Current Learning

Here is a sneak peak in what I am currently working on and learning.

---




