 # ✅ Project Descriptions
<p align="justify"> This repository represents a web application for an energy efficiency and heat loss tool to assist UK home owners in creating a sustainable life plan for their property.

## ✅ Technologies and libraries used
| Name  | Brief |
| ------------- | ------------- |
| Numpy  | *Python library for numerical computation*  |
| Pandas | *Python library for data manipulation and analysis* |
| JSON | *Python library using JSON API client library*|
| datetime | *Python library using new date and time classes* |
| XGBoost | *Python library using XGBoost Python Package*|
| Matplotlib | *Python library for creating static, animated, and interactive visualizations*|
| Seabron | *Python library based on matplotlib*|
| Scikit-learn | *Python library for machine learning*|

## ✅ Python Dependencies Installation
To get started, clone the Git repo onto your laptop using this command on your terminal in your preferred directory:
```
git clone https://github.com/King-Remy/Energy-Efficiency-and-Heat-Loss-Tool.git
```

### Folder Structure
| File  | Description |
| ------------- | ------------- |
| /Energy-Efficiency-and-Heat-Loss-Tool  |  *Root directory* |
| /01_import/01_import_data.ipynb  | *This notebook merges all EPCs in 181 local authorities of District council in the UK.*  |
| /02_Preprocessing/01_Sampling.ipynb | *The script creates a dataset of EPC certificates for England, applies some initial cleaning steps and splits the data into a train and test set.* |
| /02_Preprocessing/02_Data_audit.ipynb | *This script takes an audit of the EPC data for England. It looks at how many missing values each feature has, how many unique values the categorical features have then applies preprocessing steps to remove outliers and drop features with too many missing values.*|
| /02_Preprocessing/03_corr_and_chi2.ipynb | *This script finds the correlations between numerical features of the EPC data and performs a chi-squared test on all EPC variables.* |
| /02_Preprocessing/04_Categorical_cleanup.ipynb | *This script performs exploratory data analysis on the dataset.*|
| /02_Preprocessing/05_CHAID.ipynb | *The EPC data contains several categorical variables with a lot of values. In order to find suitable features which will retain the most information, three feature sets were combines: 1) Data driven 2) Domain driven 3) Exhaustive driven.*|
| /03_Baseline_Model/01_Baseline_Model_Logi.ipynb | *This script applies a linear regression model the data and domain driven feature set, given a baseline performance for comparison.*|
| /03_Baseline_Model/01_Baseline_Model_XGB.ipynb | *This script applies an XGBoost model with the data and domain driven feature set, given a baseline performance for comparison.*|
| /04_Machine_Learning /Modelling.ipynb | *Three different supervised learning classification models are assessed to understand how well they could predict energy efficiency. Linear regression is selected as the baseline and the variance score (R2) as the quality measure used to assess the models.*|
| /05_Deep_Learning /ANN.ipynb | *This script prepares the data for modelling and can be used to the neural network.*|
| /06_Web_Application / | *Folder holds all the web application code produced using Python Flask, HTML, CSS and JavaScript.*|
| /config-example.json | *JSON file containing elements for loading files*|
| /config-explanation.md | *Explains what each element of the config JSON file refers to*|

First, read config-example.json and config-explanation.md to understand the loading of files template.

Next, download epc data from [here](https://epc.opendatacommunities.org/).

Next, download the trained data set used for the ML model and keep it for predicting energy efficiency when running main.py file in /06_Web_Application / [here](https://drive.google.com/file/d/14Gw9e4qoAEwvBLm-pEQ7WOtn8Q6eD1Rb/view?usp=drive_link)

To install the python dependencies, create a Python virtual environment for the model:

```
python3 -m venv ~/Energy
```

Run this command whenever you open a new Terminal window/tab to activate the environment.

```
# Unix/MacOs
source Energy/bin/activate
# Windows
.\Energy\Scripts\activate
```

Next, to install the python dependencies run the following:
```
# Install Python dependencies
python3 -m pip install pip --upgrade
python3 -m pip install -r requirements.txt
```

Next, start running from 01_import/01_import_data.ipynb each file from 01_import to /03_Baseline_Model /01_Baseline_Model_XGB.ipynb as shown in the folder structure table above to get energy efficiency XGBoost model predictions.

## ✅ Web Application Usage

This section will cover all the features, including a step-by-step guide of how the web application functions, the frameworks used and its security in developing the web application. Below demonstrates how the web application is used to obtain heat loss and energy efficiency of a building.


Firstly,
``` 
Ensure training data set used for the ML model and keep it for predicting energy efficiency when running main.py file in /06_Web_Application https://drive.google.com/file/d/14Gw9e4qoAEwvBLm-pEQ7WOtn8Q6eD1Rb/view?usp=drive_link
```

Next, 
```
Update file directory of Machine Learning model and training data set for ML model in /06_Web_Application/views/predicitonHelpers.py.
```

Next,
```
Run main.py in /06_Web_Application/main.py to promt local host for web application.
```

**1.	User enters the landing page where they can sign in or register an account.**
![image1](/Assets/image1.png)

**2.	Users enter the dashboard page where they can manage their profile, add a new building to generate the heat loss and energy efficiency or review saved project.**
![image2](/Assets/image2.png)

**3.	In the profile page, users can view and update profile and password details.**
![image3](/Assets/image3.png)

**4.	Once ‘Add New’ is selected, users go to step 1 to enter information about their building.**
![image4](/Assets/image4.png)

**5.	At step 2, users input their building size information based on the property type and extension count input from step 1.**
![image5](/Assets/image5.png)

**6.	At step 3, users input their window and door information based on the property type and extension count of their building.**
![image6](/Assets/image6.png)

**7.	At step 4, users select their roof and floor information and submit their form to get their heat loss and energy efficiency of their building.**
![image7](/Assets/image7.png)

**8.	On the result page, a summary of the building information inputs, heat loss for each section of the building and the energy efficiency band and rating is produced.**
![image8](/Assets/image8.png)

* Building summary based off user inputs shown above with an edit button to make changes and resubmit form.

![image9](/Assets/image9.png)

* Heat loss summary for each section of the building

![image10](/Assets/image10.png)

* Displays building’s energy efficiency rating and band score.
