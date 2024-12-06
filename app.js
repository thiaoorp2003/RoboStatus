const puppeteer = require('puppeteer');

async function acessarSite() {
  const browser = await puppeteer.launch({ headless: false }); // Abre o navegador visivelmente para depuração
  const page = await browser.newPage();

  try {
    // Acessa a URL de login
    await page.goto('https://autenticacao.bancomaster.com.br/login', { waitUntil: 'networkidle2' });

    // Preenche os campos de usuário e senha
    console.log('Preenchendo usuário...');
    await page.waitForSelector('#mat-input-0', { visible: true });
    await page.type('#mat-input-0', 'matheusmelo374');

    console.log('Preenchendo senha...');
    await page.waitForSelector('#mat-input-1', { visible: true });
    await page.type('#mat-input-1', '62Zky0I#');

    // Clica no botão de login
    console.log('Clicando no botão de login...');
    await page.waitForSelector('button[type="submit"][color="primary"]', { visible: true });
    await page.click('button[type="submit"][color="primary"]');

    // Aguarda um elemento específico da próxima página
    console.log('Aguardando próximo carregamento...');
    await page.waitForSelector('.classe-especifica-da-proxima-pagina', { visible: true, timeout: 60000 });

    console.log('Login realizado com sucesso!');

  } catch (error) {
    console.error('Erro durante o processo de login:', error);
  } finally {
    await browser.close(); // Fecha o navegador
  }
}

acessarSite();
