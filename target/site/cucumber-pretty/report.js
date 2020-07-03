$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "verify user can search product",
  "description": "",
  "id": "login;verify-user-can-search-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@dibya"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "launch url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter XPS in search field",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "click on Search link",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition_created.launch_url()"
});
formatter.result({
  "duration": 12066567400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_created.enter_XPS_in_search_field()"
});
formatter.result({
  "duration": 10326922000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_created.click_on_Search_link()"
});
formatter.result({
  "duration": 2879158500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 10,
  "name": "verify Laptop page display",
  "description": "",
  "id": "login;verify-laptop-page-display",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "launch url",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "click on Laptop link",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "verify Laptop page display",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition_created.launch_url()"
});
formatter.result({
  "duration": 8622872600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_created.click_on_Laptop_link()"
});
formatter.result({
  "duration": 20146379400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h3[text()\u003d\u0027Laptops\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-TJD64CLT\u0027, ip: \u0027192.168.1.2\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\dibya\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53173}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: da53ec59ba8cc2b50999802cedbd2288\n*** Element info: {Using\u003dxpath, value\u003d//h3[text()\u003d\u0027Laptops\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat StepDef.StepDefinition_created.click_on_Laptop_link(StepDefinition_created.java:41)\r\n\tat ✽.Then click on Laptop link(Login.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition_created.verify_Laptop_page_display()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});