Feature: Login
@dibya
Scenario: verify user can search product
Given launch url
Then Enter XPS in search field
Then click on Search link
And Close the browser


Scenario: verify Laptop page display
Given launch url
Then click on Laptop link
Then verify Laptop page display
And Close the browser
