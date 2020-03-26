$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/testcase.feature");
formatter.feature({
  "line": 1,
  "name": "Practice_Automation3",
  "description": "",
  "id": "practice-automation3",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Demosite registration-Login",
  "description": "",
  "id": "practice-automation3;demosite-registration-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TC_01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "open the url",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "url is launched login to the application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "enters the email and password and click on login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on logout",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_step.open_the_url()"
});
formatter.result({
  "duration": 1013512625,
  "status": "passed"
});
formatter.match({
  "location": "Login_step.url_is_launched_login_to_the_application()"
});
formatter.result({
  "duration": 370925037218,
  "status": "passed"
});
formatter.match({
  "location": "Login_step.enters_the_email_and_password_and_click_on_login()"
});
formatter.result({
  "duration": 88174,
  "status": "passed"
});
formatter.match({
  "location": "Login_step.click_on_logout()"
});
formatter.result({
  "duration": 76044,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Demosite registration-Remove file",
  "description": "",
  "id": "practice-automation3;demosite-registration-remove-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@TC_02"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "the url is opened in the website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the more is mouse overed and click on the File Upload",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "File is Selected",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "remove the uploaded file",
  "keyword": "Then "
});
formatter.match({
  "location": "RemoveFile_step.the_url_is_opened_in_the_website()"
});
formatter.result({
  "duration": 55983701714,
  "status": "passed"
});
formatter.match({
  "location": "RemoveFile_step.the_more_is_mouse_overed_and_click_on_the_File_Upload()"
});
formatter.result({
  "duration": 51969329272,
  "status": "passed"
});
formatter.match({
  "location": "RemoveFile_step.file_is_Selected()"
});
formatter.result({
  "duration": 6024958047,
  "status": "passed"
});
formatter.match({
  "location": "RemoveFile_step.remove_the_uploaded_file()"
});
formatter.result({
  "duration": 518095599,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Demosite registration-Leave mandatory fields",
  "description": "",
  "id": "practice-automation3;demosite-registration-leave-mandatory-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@TC_03"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "the url is open in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "the demosite is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the details are given and leaving the mandatory fields",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "click on submit and take screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "Leavemandatory_step.the_url_is_open_in_the_browser()"
});
formatter.result({
  "duration": 41167501214,
  "status": "passed"
});
formatter.match({
  "location": "Leavemandatory_step.the_demosite_is_clicked()"
});
formatter.result({
  "duration": 11509317338,
  "status": "passed"
});
formatter.match({
  "location": "Leavemandatory_step.the_details_are_given_and_leaving_the_mandatory_fields()"
});
formatter.result({
  "duration": 10582720038,
  "status": "passed"
});
formatter.match({
  "location": "Leavemandatory_step.click_on_submit_and_take_screenshot()"
});
formatter.result({
  "duration": 5788216062,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Demosite registration-Video play",
  "description": "",
  "id": "practice-automation3;demosite-registration-video-play",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@TC_04"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "the url is opened in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "the url is launched click on demosite",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "mouseover to the video and click on vimeo",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "play the video",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "tap on escape key and quit",
  "keyword": "Then "
});
formatter.match({
  "location": "Videoplay_step.the_url_is_opened_in_the_browser()"
});
formatter.result({
  "duration": 53823408882,
  "status": "passed"
});
formatter.match({
  "location": "Videoplay_step.the_url_is_launched_click_on_demosite()"
});
formatter.result({
  "duration": 51623820549,
  "status": "passed"
});
formatter.match({
  "location": "Videoplay_step.mouseover_to_the_video_and_click_on_vimeo()"
});
formatter.result({
  "duration": 973511263,
  "status": "passed"
});
formatter.match({
  "location": "Videoplay_step.play_the_video()"
});
formatter.result({
  "duration": 65781,
  "status": "passed"
});
formatter.match({
  "location": "Videoplay_step.tap_on_escape_key_and_quit()"
});
formatter.result({
  "duration": 411961966,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Demosite registration-Alerts",
  "description": "",
  "id": "practice-automation3;demosite-registration-alerts",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@TC_05"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Opens url in the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "automation site is opens",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "Click on SwitchTo and alerts",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "get the alert text",
  "keyword": "Then "
});
formatter.match({
  "location": "Alerts_Step.opens_url_in_the_browser()"
});
formatter.result({
  "duration": 6581840626,
  "status": "passed"
});
formatter.match({
  "location": "Alerts_Step.automation_site_is_opens()"
});
formatter.result({
  "duration": 34013943700,
  "status": "passed"
});
formatter.match({
  "location": "Alerts_Step.click_on_SwitchTo_and_alerts()"
});
formatter.result({
  "duration": 24987004293,
  "status": "passed"
});
formatter.match({
  "location": "Alerts_Step.get_the_alert_text()"
});
formatter.result({
  "duration": 3367582204,
  "status": "passed"
});
});