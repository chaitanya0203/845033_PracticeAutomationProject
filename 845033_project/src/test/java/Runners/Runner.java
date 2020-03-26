package Runners;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(// Using cucumber options to run the cucumber test case
		features = "src/main/resources/feature/testcase.feature", // giving the address of the feature file
		plugin = { "pretty", "html:reports/cucumber-html-report", "json:reports/cucumber-html-report/jsonreport",
				"com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html" }, // collecting
																											// json,
																											// html and
																											// extent
																											// reports
		tags = { "@TC_01, @TC_02, @TC_03, @TC_04, @TC_05" }, // Tags in the feature file to run the testcases
		glue = { "StepDefinition" }, // Gluing the StepDefiniton class to paste the generated methods
		monochrome = true) // To make the cucumber test cases in console more readable
public class Runner {
	@AfterClass
	public static void extendReport() // Method for generating the extent reports
	{
		Reporter.loadXMLConfig("src/test/resources/extent-config.xml");
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
		Reporter.setSystemInfo("os", "Windows");
		Reporter.setTestRunnerOutput("Sample test runner output message");
	}
}
