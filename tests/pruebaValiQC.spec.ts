import { test, expect } from '@playwright/test';
import { LoginPage } from './pageobjects/LoginPage';
import { waitForDebugger } from 'inspector';

// Login Vali QC //
test('Login ValiQC', async ({ page }) => {
  await page.goto('https://valiqc-frontend-general-pruebas.azurewebsites.net/#/login');

  const Login = new LoginPage(page)
  await Login.LoginWithCredentials('ANNARVALI', 'VALIQCANNAR')
 // Cambiar la sede en LOGIN PAGE
});


//Test de prueba Automatizacion Capacitación

test('Automatizacion completa ValiQC', async ({ page }) => {
  await page.goto('https://valiqc-frontend-general-pruebas.azurewebsites.net/#/login');
  const Login = new LoginPage(page)
  await Login.LoginWithCredentials('ANNARVALI', 'VALIQCANNAR')
  await page.waitForTimeout(10000);
  await page.locator('a').filter({ hasText: 'Control Calidad Interno' }).click();
  await page.locator('a').filter({ hasText: /^Configuración$/ }).nth(1).click();
  await page.getByText('Analítos').first().click();
  await page.getByText('Crear').click();
  await page.locator('#desAnalytes').click();
  await page.locator('#desAnalytes').fill('Automatizacion prueba QA 1');
  await page.getByLabel('Nivel *').click();
  await page.getByLabel('Nivel *').fill('3');
  await page.locator('#mat-input-1').click();
  await page.getByText('Seccion Juan Simulacion').click();
  await page.getByLabel('Tipo resultado *').locator('div').nth(1).click();
  await page.getByText('Cuantitativo', { exact: true }).click();
  await page.locator('#mat-slide-toggle-6 label').first().click();
  await page.pause()
  await page.getByRole('button', { name: 'Aceptar' }).click();
  // Finaliza Crear Analito //

  // Inicia Crear Lote
  await page.getByText('Lotes').first().click();
  await page.getByText('Crear').click();
  await page.getByLabel('N° lote *').click();
  await page.getByLabel('N° lote *').fill('999 Auto');
  await page.getByLabel('Fecha de vencimiento *').click();
  await page.getByLabel('Fecha de vencimiento *').fill('23/10/2023');
  await page.locator('#mat-slide-toggle-12 div').first().click();
  await page.getByRole('button', { name: 'Aceptar' }).click();
  // Termina Crear Lote

  // Iniciar Crear Lote Material Contol
  await page.getByText('Lote Materiales de control').click(); 
  await page.getByText('Crear').click();
  // Setear el Lote que se desea asociar con el material de control //
  await page.locator('.col-sm-6 > div > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').first().click();
  await page.getByRole('option', { name: 'Lotesimulacionjuan99999' }).click();
  await page.locator('div:nth-child(2) > div > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
  await page.getByRole('option', { name: 'Material De Control Juan Simulacion' }).click();
  await page.locator('#mat-slide-toggle-24').click();
  await page.getByText('Crear').click();
});






test('Crear Analito Cuanti CCI', async ({ page }) => {
  await page.goto('https://valiqc-frontend-general-pruebas.azurewebsites.net/#/login');
  const Login = new LoginPage(page)
  await Login.LoginWithCredentials('ANNARVALI', 'VALIQCANNAR')
  // await page.pause()
  // await expect (page.getByRole('img', {name: 'logo IT Healt'})).toBeVisible();
  await page.locator('a').filter({ hasText: 'Control Calidad Interno' }).click();
  await page.locator('a').filter({ hasText: /^Configuración$/ }).nth(1).click();
  await page.getByText('Analítos').first().click();
  await page.getByText('Crear').click();
  await page.locator('#desAnalytes').click();
  await page.locator('#desAnalytes').fill('Analito Cuanti QA Auto');
  await page.getByLabel('Nivel *').click();
  await page.getByLabel('Nivel *').fill('3');
  await page.locator('#mat-input-1').click();
  await page.getByText('Seccion Juan Simulacion').click();
  await page.getByLabel('Tipo resultado *').locator('div').nth(1).click();
  await page.getByText('Cuantitativo', { exact: true }).click();
  await page.locator('#mat-slide-toggle-6 div').first().click();
  await page.getByRole('button', { name: 'Aceptar' }).click();
});



test('Crear Analito Cuali QCI', async ({ page }) => {
  await page.goto('https://valiqc-frontend-general-pruebas.azurewebsites.net/#/login');
  const Login = new LoginPage(page)
  await Login.LoginWithCredentials('ANNARVALI', 'VALIQCANNAR')
  await expect (page.getByRole('img', {name: 'logo IT Healt'})).toBeVisible();
  await page.locator('a').filter({ hasText: 'Control Calidad Interno' }).click();
  await page.locator('a').filter({ hasText: /^Configuración$/ }).nth(1).click();
  await page.getByText('Analítos').first().click();
  await page.getByText('Crear').click();
  await page.locator('#desAnalytes').click();
  await page.locator('#desAnalytes').fill('Analito Cuanti QA Auto');
  await page.getByLabel('Nivel *').click();
  await page.getByLabel('Nivel *').fill('3');
  await page.locator('#mat-input-1').click();
  await page.getByText('Seccion Juan Simulacion').click();
  await page.getByLabel('Tipo resultado *').locator('div').nth(1).click();
  await page.getByText('Cualitativo', { exact: true }).click();
  await page.locator('#mat-slide-toggle-6 div').first().click();
  await page.getByRole('button', { name: 'Aceptar' }).click();
});

test('Crear Lote CCI', async ({ page }) => {
  await page.goto('https://valiqc-frontend-general-pruebas.azurewebsites.net/#/login');
  const Login = new LoginPage(page)
  await Login.LoginWithCredentials('ANNARVALI', 'VALIQCANNAR')
  // Modulo //
  await page.locator('a').filter({ hasText: 'Control Calidad Interno' }).click();
  await page.locator('a').filter({ hasText: /^Configuración$/ }).nth(1).click();
  await page.getByText('Lotes').first().click();
  await page.getByRole('button', { name: 'Crear' }).click();
  await page.pause()
  await page.getByLabel('N° lote *').click();
  await page.getByLabel('N° lote *').fill('999 Auto');
  await page.getByLabel('Fecha de vencimiento *').click();
  await page.getByLabel('Fecha de vencimiento *').fill('23/10/2023');
  await page.locator('#mat-slide-toggle-6 div').first().click();
  await page.pause()
  await page.getByRole('button', { name: 'Aceptar' }).click();
});


test('Lote Materiales de Control QCI', async ({ page }) => {
  // Login //
  await page.goto('https://valiqc-frontend-general-pruebas.azurewebsites.net/#/login');
  const Login = new LoginPage(page)
  await Login.LoginWithCredentials('ANNARVALI', 'VALIQCANNAR')
  // Modulo //
  await page.locator('a').filter({ hasText: 'Control Calidad Interno' }).click();
  await page.locator('a').filter({ hasText: /^Configuración$/ }).nth(1).click();
  await page.getByText('Lote Materiales de control').click(); 
  await page.getByText('Crear').click();
  // Setear el Lote que se desea asociar con el material de control //
  await page.locator('.col-sm-6 > div > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').first().click();
  await page.getByRole('option', { name: 'Lotesimulacionjuan99999' }).click();
  await page.locator('div:nth-child(2) > div > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click();
  await page.getByRole('option', { name: 'Material De Control Juan Simulacion' }).click();
  await page.locator('#mat-slide-toggle-24').click();
  await page.pause();
  await page.getByText('Crear').click();
});



test('Ingreso de Datos y visualizacion de graficas CCI', async ({ page }) => {
  // Login //
  await page.goto('https://valiqc-frontend-general-pruebas.azurewebsites.net/#/login');
  const Login = new LoginPage(page)
  await Login.LoginWithCredentials('ANNARVALI', 'VALIQCANNAR')
  // Modulo //
  await page.locator('a').filter({ hasText: 'Control Calidad Interno' }).click();
  await page.locator('a').filter({ hasText: /^Ingreso de datos$/ }).click();
  await page.getByText('Cuantitativos', { exact: true }).click();
  await page.locator('#mat-input-0').click();
  await page.getByRole('option', { name: 'seccion juan simulacion' }).locator('span').click();
  await page.locator('#mat-input-1').click();
  await page.getByRole('option', { name: 'Material de Control Juan Simulacion' }).locator('span').click();
  await page.locator('#mat-input-2').click();
  await page.getByRole('option', { name: 'LoteSimulacionJuan99999' }).locator('span').click();
  await page.getByLabel('Test *').locator('div').nth(1).click();
  await page.getByText('Analito Cuanti Juan Simulacion | ng/mL | Metodo Juan Simulacion | Reactivos Juan').click();
  await page.getByText('Buscar').click();
  // Ingreso de datos Nivel 1
  await page.waitForTimeout(6000);
  await page.locator('input[type="number"]').first().click();
  await page.locator('input[type="number"]').first().fill('115');
  // Ingreso de datos Nivel 2 
  await page.locator('input[type="number"]').nth(1).click();
  await page.locator('input[type="number"]').nth(1).fill('65');
  // Ingreso de datos Nivel 3
  await page.locator('input[type="number"]').nth(2).click();
  await page.locator('input[type="number"]').nth(2).fill('85');
  await page.pause()
  // Ingreso de Comentarios
  await page.getByLabel('Comentarios').click();
  await page.getByLabel('Comentarios').fill('Automatizacion De prueba 03/12/2023');
  await page.getByText('Aplicar').click();
  await page.getByText('Multi Levey Jennings').click();
});




// EVENTOS DE REGRESION QCE Demo Emisor //

test('Login ValiQC Demo Emisor', async ({ page }) => {
  await page.goto('http://valiqc-demo-emisor.ithealth.co/#/login');
  const Login = new LoginPage(page)
  await Login.LoginWithCredentials('ANNARVALI', 'VALIQCANNAR')

//  await page.pause()
  await page.locator('a').filter({ hasText: 'Control Calidad Externo' }).click();
  await page.locator('a').filter({ hasText: 'Administración' }).nth(1).click();
  await page.getByText('Rondas').click();
  await page.getByLabel('Cliente *').locator('div').nth(1).click();
  await page.getByRole('option', { name: 'demo cliente1' }).locator('span').click();
  await page.getByLabel('Sede*').locator('span').click();
  await page.getByText('Sede Principal', { exact: true }).click();
  await page.getByLabel('Programa *').locator('span').click();
  await page.getByRole('option', { name: 'IT HEALTH - CUANTI' }).locator('span').click();
  await page.getByRole('button', { name: 'Buscar' }).click();
  await expect(page.getByLabel('Change sorting for Nrosample')).toBeVisible();
  await page.waitForTimeout(4000)
  await page.getByRole('button', { name: 'Crear' }).click();
  await page.waitForTimeout(4000)
  await page.getByLabel('Rondas *').click();
  await page.getByLabel('Rondas *').fill('1');
  await page.getByLabel('Muestra *').locator('div').nth(1).click();
  await page.getByRole('option', { name: 'QA-18-10' }).locator('span').click();
  await page.locator('#fechaInicio').press('ArrowRight');
  await page.locator('#fechaInicio').fill('31/10/2023');
  await page.locator('#fechaFin').click();
  await page.locator('#fechaFin').fill('31/10/2044')
  await page.pause()
  // await page.getByRole('button', { name: 'Aceptar' }).click();
 
});

test('Creacion Programa QCE', async ({ page }) => {
  await page.goto('http://valiqc-demo-emisor.ithealth.co/#/login');
  const Login = new LoginPage(page)
  await Login.LoginWithCredentials('ANNARVALI', 'VALIQCANNAR')

//  await page.pause()
  await page.locator('a').filter({ hasText: 'Control Calidad Externo' }).click();
  await page.locator('a').filter({ hasText: /^Configuración$/ }).nth(2).click();
  await page.getByText('Creación Programa').click();
  await page.getByRole('button', { name: 'Crear' }).click();
  await page.getByRole('dialog').getByRole('textbox').click();
  await page.getByRole('dialog').getByRole('textbox').fill('Programa Juan');
  await page.locator('#mat-slide-toggle-6 div').first().click();
  await page.pause()
  // await page.getByRole('button', { name: 'Aceptar' }).click();
});

