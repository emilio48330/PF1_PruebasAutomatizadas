import os
import time
from datetime import datetime
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.edge.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


@pytest.fixture(scope="module")
def driver():
    service = Service('../EdgeWebDriver/msedgedriver.exe') 
    driver = webdriver.Edge(service=service)
    yield driver
    driver.quit()


def test_access_adopt_section(driver):
    expected_title = "Patitas Felices"  
    report_status = "Fallo"
    report_description = "No se pudo cargar correctamente la sección 'Adoptar' o no cumple con los criterios."

    try:
        # Cargar la página principal
        driver.get("file:///C:/Users/edisl/OneDrive/Desktop/Proyecto Final/Patitas Felices/index.html")
        driver.maximize_window() 
        time.sleep(2)  

        actual_title = driver.title
        if actual_title == expected_title:
            # Esperar a que el enlace de 'Adoptar' esté disponible y hacer clic
            adopt_link = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, "a.nav-link[href='./pages/adoptar.html']"))
            )
            adopt_link.click()  # Hacer clic en el enlace 'Adoptar'

            # Esperar a que la nueva página cargue
            time.sleep(2)  

            # Hacer un scroll hacia abajo en la página 'Adoptar'
            driver.execute_script("window.scrollBy(0, 500);")  # Desplazar 500px hacia abajo
            time.sleep(2)  # Esperar un momento para asegurarse de que el scroll se ha realizado

            # Guardar la captura de pantalla
            timestamp = time.strftime("%Y%m%d-%H%M%S")
            formatted_timestamp = datetime.now().strftime("%Y-%m-%d %H-%M-%S")
            screenshots_folder = os.path.join(os.getcwd(), "Screenshots")
            reports_folder = os.path.join(os.getcwd(), "Reports")

            if not os.path.exists(screenshots_folder):
                os.makedirs(screenshots_folder)

            if not os.path.exists(reports_folder):
                os.makedirs(reports_folder)

            screenshot_filename = f"SecAdopt_{formatted_timestamp}.png"
            screenshot_path = os.path.join(screenshots_folder, screenshot_filename)
            driver.save_screenshot(screenshot_path)
            print(f"Captura de pantalla guardada en: {screenshot_path}")

            # Generar el reporte
            report_status = "Éxito"
            report_description = "La sección 'Adoptar' carga correctamente."

            report_title = "Reporte de Prueba Automatizada - Sección 'Adoptar'"
            report_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            report_filename = f"SecAdopt_{formatted_timestamp}.html"
            report_html_path = os.path.join(reports_folder, report_filename)

            with open(report_html_path, "w", encoding="utf-8") as report_file:
                report_file.write(f"""
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>{report_title}</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
                </head>
                <body>
                    <div class="container mt-5">
                        <h1 class="text-center">{report_title}</h1>
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
            print(f"Reporte generado en: {report_html_path}")

        else:
            print("El título de la página no coincide con el esperado.")

    except Exception as e:
        print(f"Error durante la prueba: {e}")
