import time
import os
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
import pytest


@pytest.fixture(scope="module")
def driver():
    service = Service('../EdgeWebDriver/msedgedriver.exe')  
    driver = webdriver.Edge(service=service)
    yield driver
    driver.quit()


def test_partial_scroll_view(driver):
    url = "file:///C:/Users/edisl/OneDrive/Desktop/Proyecto Final/Patitas Felices/pages/historial.html"  # Nueva URL
    report_status = "Éxito"
    report_description = "Se realizó un pequeño scroll y se capturó la vista correctamente."

    try:
        driver.get(url)
        driver.maximize_window()
        time.sleep(3)  

        # Realizar un pequeño scroll hacia abajo
        actions = ActionChains(driver)
        actions.send_keys(Keys.PAGE_DOWN).perform()  # Hacer un pequeño scroll con PAGE_DOWN
        time.sleep(2)  # Esperar un poco después del scroll

        # Captura de pantalla
        timestamp = datetime.now().strftime("%Y-%m-%d %H-%M-%S") 
        screenshot_filename = f"PartialScroll_{timestamp}.png"
        screenshots_folder = os.path.join(os.getcwd(), "Screenshots") 
        if not os.path.exists(screenshots_folder):
            os.makedirs(screenshots_folder)

        screenshot_path = os.path.join(screenshots_folder, screenshot_filename)
        driver.save_screenshot(screenshot_path)
        print(f"Captura de pantalla guardada en: {screenshot_path}")

        # Generar el reporte
        report_filename = f"PartialScroll_Report_{timestamp}.html"
        reports_folder = os.path.join(os.getcwd(), "Reports") 
        if not os.path.exists(reports_folder):
            os.makedirs(reports_folder)

        report_path = os.path.join(reports_folder, report_filename)
        report_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        # Crear archivo HTML del reporte
        with open(report_path, "w", encoding="utf-8") as report_file:
            report_file.write(f"""
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Reporte de Prueba Automatizada</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
            </head>
            <body>
                <div class="container mt-5">
                    <h1 class="text-center">Reporte de Prueba Automatizada</h1>
                    <table class="table table-bordered table-striped mt-4">
                        <thead class="table-dark">
                            <tr>
                                <th>Hora</th>
                                <th>Estado</th>
                                <th>Descripción</th>
                                <th>Captura</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{report_time}</td>
                                <td>{report_status}</td>
                                <td>{report_description}</td>
                                <td><img src="../Screenshots/{screenshot_filename}" alt="Captura de Pantalla" width="300"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>
            </html>
            """)

        print(f"Reporte generado en: {report_path}")

    except Exception as e:
        print(f"Error durante la prueba: {e}")
        raise AssertionError("Error durante la prueba. Revisa el reporte para más detalles.")
