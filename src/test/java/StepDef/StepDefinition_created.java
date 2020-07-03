package StepDef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDefinition_created {
	
	WebDriver driver;
	
	@Given("^launch url$")
	public void launch_url() throws Throwable {       // Name of the class should not have gap so we use _
		System.setProperty("webdriver.chrome.driver", "C:\\Driver\\chromedriver.exe");
		driver = new ChromeDriver();
	   driver.get("https://www.dell.com/en-us");
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().window().maximize(); 
	}
	@Then("^Enter XPS in search field$")
	public void enter_XPS_in_search_field() throws Throwable {
	  driver.findElement(By.xpath("//input[@class='mh-search-input']")).sendKeys("XPS");
	  Thread.sleep(10000);
	}

	@Then("^click on Search link$")
	public void click_on_Search_link() throws Throwable {
		driver.findElement(By.xpath("//span[@class='mh-search-button-label']")).click();
	}
		
		@Then("^click on Laptop link$")
		public void click_on_Laptop_link() throws Throwable {
		driver.findElement(By.xpath("//h3[text()='Laptops']")).click();
		Thread.sleep(10000);
		}

		@Then("^verify Laptop page display$")
		public void verify_Laptop_page_display() throws Throwable {
			Thread.sleep(10000);
		boolean result = driver.findElement(By.xpath("//h1[@class='center']")).isDisplayed();
		Assert.assertTrue(result);
		    
		}
		
		@And("^Close_the_browser$")
		public void Close_the_browser() throws Throwable{
			driver.quit();
		}
		
	@AfterMethod
		public void tearDown() {

		driver.quit();
		}
		
	    
	}
	

