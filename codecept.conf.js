const {setHeadlessWhen} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
const server = require('./server/server.js');

exports.config = {
    tests: './steps/Create_User_test.js',
    output: './output',
    helpers: {
      Playwright: {
        url: 'http://automationpractice.pl/',
        show: true,
        browser: 'chromium',
        waitForTimeout: 9000,
        desiredCapabilities: {
          chromeOptions: {
            args: ["--window-size=1920,1200",
              //"--headless" //rodar o teste sem abrir navegador
            ]
          }
        }
      }
    },

    include: {
      I: './steps_file.js',
      home_page: './pages/home_page.js',
      login_page: './pages/login_page.js',
      create_user_page: './pages/create_user_page.js',
      my_account_page: './pages/my_account_page.js',
      login_success_page: './pages/login_success_page.js'
      
    },
    bootstrap: async () => {
      await server.start();
    },

    teardown: async () => {
      await server.stop();
    },

    
  mocha: {},

  Plugins: {
    allure:{
      enabled:false
    },

    mocha: {
      reporterOptions:{

      }
    },
    stepByStepReport: {
      enabled: false,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    },
    retryFailedStep:{
      enabled: true
      },
      screenshotOnFail:{
      enabled: true
  },
   wdio: {
     enabled:true,
   services:['selenium-standalone']
     },
    
    
        }
      }
    

