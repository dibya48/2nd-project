package TestRunner_created;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions (features="src/test/resources_Cre/Features_created", format= {"html:target/site/cucumber-pretty"},
glue = "StepDef")
//tags = {"@dibya"})
public class TestRunner_created extends AbstractTestNGCucumberTests {

}
