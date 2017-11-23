const {Builder, By, Key, until} = require('selenium-webdriver');

let driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://localhost:3000/');
driver.sleep(10000)


// driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();