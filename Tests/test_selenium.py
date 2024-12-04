from selenium import webdriver
from selenium.webdriver.edge.service import Service


service = Service(executable_path='../EdgeWebDriver/msedgedriver.exe')
driver = webdriver.Edge(service=service)
driver.get("file:///C:/Users/edisl/OneDrive/Desktop/Proyecto Final/Patitas Felices/index.html")
