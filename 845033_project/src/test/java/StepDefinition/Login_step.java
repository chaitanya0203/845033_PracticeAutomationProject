package StepDefinition;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import Pages.Login;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_step {
	WebDriver driver;
	Login lg = new Login(driver); // Creating instance of the Logout class using the constructor

	@Given("^open the url$")
	public void open_the_url() {

	}

	@When("^url is launched login to the application$")
	public void url_is_launched_login_to_the_application() throws IOException {

		for (int i = 1; i <= 4; i++) {// Using for loop to run all the testcases from the excel sheet
			lg.url("chrome"); // Calling the url method
			lg.loginpage(); // Calling the login method
			lg.MyAccount(); // Calling the MyAccount method
			lg.logindetails(i); // Calling the logindetails method
			lg.login(); // Calling the login method
			lg.screenshot("Screenshots//login" + i + ".png"); // Taking the screenshot for all the testcases
			lg.quit(); // Calling the quit method
		}

	}

	@When("^enters the email and password and click on login$")
	public void enters_the_email_and_password_and_click_on_login() {

	}

	@Then("^click on logout$")
	public void click_on_logout() throws IOException {

	}

}
