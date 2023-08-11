import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    // it('should login with valid credentials', async () => {
    //     await LoginPage.open()

    //     await LoginPage.login('tomsmith', 'SuperSecretPassword!')
    //     await expect(SecurePage.flashAlert).toBeExisting()
    //     await expect(SecurePage.flashAlert).toHaveTextContaining(
    //         'You logged into a secure area!')
    // })


    it('Try to find whetrher capturing eVars is possible or not', async () => {
        await browser.url('https://test.rechargenews.com/');
        await browser.pause(10000)

        // Run a JavaScript command in the browser console
        const commandResult = await browser.execute(() => {
          // Place your JavaScript code here to be executed in the browser context
          // For example, let's retrieve the current page title:
          //return window.nhstDataLayer.events;
          // return _satellite.buildInfo.buildDate;
          return s.eVar1;
        });
      
        // Output the result of the JavaScript command
        console.log('Command Result ========================= :', commandResult);
    });




    it('Try to find whether capturing network call is possible or not', async () => {
      
      var output = await browser.mock('**/AppMeasurement.min.js',{method:'get'})
      await browser.url('http://test.rechargenews.com/')
      Object.keys(output.calls).forEach(function(key){
        // console.log("The OUT PUT IS ========= ", output.calls[key].url)
        // console.log("The Method Is ========= ", output.calls[key].method)
        // console.log("The Header Is ========= ", output.calls[key].headers)
        console.log("The Method Is ========= ", output.calls)
      })
      
    });

})

