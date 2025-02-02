## About me
<br>
Hi there!
<br>
I’m a Data Scientist III at Teladoc Health, driving workflow migrations from AWS + Jenkins to Azure Databricks + CloudBees and delivering actionable insights on enrollment trends and product usage. With expertise spanning HealthTech and Retail, I excel at leveraging data to solve complex problems, enhance decision-making, and transform customer experiences.
<br>
As an experienced full-stack data scientist, I’m proficient in Python, SQL, Databricks, Tableau, AWS, and Azure, with a proven track record of performing impactful analytics, visual story-telling and building predictive insights. Data storytelling is my superpower—turning insights into compelling narratives that drive results.
<br><br>
When I’m not working with data, you’ll find me behind a camera, capturing stories through photography. Whether it’s data or bird photography, I’m always exploring, creating, innovating, and showing attention to detail.
<br>
Thanks for stopping by! Feel free to connect or dive into my projects.

---

## Personal Projects
---

<details>
  <summary> <b> &nbsp; Data Storytelling of Paris 2024 Olympics - Kaggle (2024) </b> </summary>
  
  Data Story telling on Paris 2024 Olympics. Understand the data around Paris 2024 Olympics and visualize interesting findings.

  Storytelling from few point of Views:<br><br>
  <b>_1. Overall athletes POV_</b> <br>
  Story around Age and Gender<br>

  <img src="images/kaggle_paris_olympics_results/violin_chart_athletes_age_per_gender.png?raw=true" width="1000" height="350" />
  <p style="text-align: center; font-size: smaller; font-style: italic;">fig: Violin chart depicting vriance of Age per Gender.</p>
  <br>
  Story on athletes from select few countries, color codes on Discpline. Most athletes from each country seem to be part of Athletics discline. Athletics combines all track and field events like running, long jump and more.<br>
  
  <br>
  <img src="images/kaggle_paris_olympics_results/athletes_per_discipline_per_country.png?raw=true" width="1000" height="350" />
  <p style="text-align: center; font-size: smaller; font-style: italic;">fig: Histogram of top countries based on # of athletes representing it.</p>

  <b>_2. An athlete's POV - Novak Djokovic_</b> <br>
  I am a fan of Novak, and his first Olympic gold was a long time coming. <br>

  <img src="images/kaggle_paris_olympics_results/novak_djokovic_journey.png?raw=true" width="1000" height="350" />
  <p style="text-align: center; font-size: smaller; font-style: italic;">fig: Scatterplot to plot Djokovic's journey to his Olympic Gold medal.</p>
  

  <b>_3. Medalists POV_</b> <br>
  Plotted histogram for Gold medalists on Country and Discpline level to understand the ranking. USA won the most Gold olympics medals. <br>

  <img src="images/kaggle_paris_olympics_results/gold_medalists_summary.png?raw=true" width="1000" height="350" />
  <p style="text-align: center; font-size: smaller; font-style: italic;">fig: Histogram for Gold Medalists.</p>
  <br>
  
  _Used <a href='https://plotly.com/'>plotly</a>  for visualization because of it's very interactive and ease of use. Check out my Kaggle notebook to view the interactive plots._<br>
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
  Used Kaggle dataset on House Prices to predict the prices given multitude of features like area, bedrooms, and more.<br>
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

  _<b>Confusion Matrix:</b>_<br>

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
_These initiatives are in progress_ <br>
<b>_1. Movie Recommender RAG using LLM_</b> <br>
Building personalized movie recommender and review system using open source LLM models. Using Ollama to locally run open source LLM models and connect to my webapp.
<br><br>
Tech Stack: Python, Streamlit, Ollama

---




