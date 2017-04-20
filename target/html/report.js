$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BBCRegister.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Maxwell"
    }
  ],
  "line": 2,
  "name": "BBC Register New User",
  "description": "",
  "id": "bbc-register-new-user",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "As a new user I want to create an account",
  "description": "",
  "id": "bbc-register-new-user;as-a-new-user-i-want-to-create-an-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the BBC HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Register Now",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify that I am above the standard age",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose the option that I am over standard age",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type email \"\u003cemail\u003e\" address",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type password \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I insert postcode \"\u003cpostcode\u003e\" in the postcode field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select No email personalisation",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click Register button",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 16,
      "value": "#Then I verify that I am registered successfully"
    }
  ],
  "line": 19,
  "name": "",
  "description": "",
  "id": "bbc-register-new-user;as-a-new-user-i-want-to-create-an-account;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "postcode"
      ],
      "line": 20,
      "id": "bbc-register-new-user;as-a-new-user-i-want-to-create-an-account;;1"
    },
    {
      "cells": [
        "pete@gmail.com",
        "password123",
        "PE2 6FZ"
      ],
      "line": 21,
      "id": "bbc-register-new-user;as-a-new-user-i-want-to-create-an-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7088135600,
  "status": "passed"
});
formatter.before({
  "duration": 337419,
  "status": "passed"
});
formatter.before({
  "duration": 294225,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "As a new user I want to create an account",
  "description": "",
  "id": "bbc-register-new-user;as-a-new-user-i-want-to-create-an-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the BBC HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click Register Now",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "verify that I am above the standard age",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose the option that I am over standard age",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I type email \"pete@gmail.com\" address",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I type password \"password123\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I insert postcode \"PE2 6FZ\" in the postcode field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select No email personalisation",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "pattern.i_am_on_the_BBC_HomePage()"
});
formatter.result({
  "duration": 15361883216,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_sign_in()"
});
formatter.result({
  "duration": 6058993560,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_Register_Now()"
});
formatter.result({
  "duration": 998223526,
  "status": "passed"
});
formatter.match({
  "location": "Register.verify_that_I_am_above_the_standard_age()"
});
formatter.result({
  "duration": 408816083,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_choose_the_option_that_I_am_over_standard_age()"
});
formatter.result({
  "duration": 782269474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pete@gmail.com",
      "offset": 14
    }
  ],
  "location": "Register.i_type_email_address(String)"
});
formatter.result({
  "duration": 1245116621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 17
    }
  ],
  "location": "Register.i_type_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 1062571739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PE2 6FZ",
      "offset": 19
    }
  ],
  "location": "Register.i_insert_postcode_in_the_postcode_field(String)"
});
formatter.result({
  "duration": 738587203,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_No_email_personalisation()"
});
formatter.result({
  "duration": 336377516,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_Register_button()"
});
formatter.result({
  "duration": 2436630260,
  "status": "passed"
});
formatter.uri("BBCSignin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Maxwell"
    }
  ],
  "line": 2,
  "name": "BBC Sign in",
  "description": "",
  "id": "bbc-sign-in",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "As a Registered user I want to sign in successfully",
  "description": "",
  "id": "bbc-sign-in;as-a-registered-user-i-want-to-sign-in-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Signin"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the BBC HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I type email address \"\u003cemail\u003e\" in the email field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type password account \"\u003cpassword\u003e\" in the password text field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify that I am logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I log out from my account",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "bbc-sign-in;as-a-registered-user-i-want-to-sign-in-successfully;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 15,
      "id": "bbc-sign-in;as-a-registered-user-i-want-to-sign-in-successfully;;1"
    },
    {
      "cells": [
        "maxtest964@gmail.com",
        "today001"
      ],
      "line": 16,
      "id": "bbc-sign-in;as-a-registered-user-i-want-to-sign-in-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 467854,
  "status": "passed"
});
formatter.before({
  "duration": 245046,
  "status": "passed"
});
formatter.before({
  "duration": 223663,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "As a Registered user I want to sign in successfully",
  "description": "",
  "id": "bbc-sign-in;as-a-registered-user-i-want-to-sign-in-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Signin"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the BBC HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click sign in",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I type email address \"maxtest964@gmail.com\" in the email field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I type password account \"today001\" in the password text field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify that I am logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I log out from my account",
  "keyword": "And "
});
formatter.match({
  "location": "pattern.i_am_on_the_BBC_HomePage()"
});
formatter.result({
  "duration": 4773162158,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_sign_in()"
});
formatter.result({
  "duration": 1764172447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "maxtest964@gmail.com",
      "offset": 22
    }
  ],
  "location": "Signin.i_type_email_address_in_the_email_field(String)"
});
formatter.result({
  "duration": 942098240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "today001",
      "offset": 25
    }
  ],
  "location": "Signin.i_type_password_account_in_the_password_text_field(String)"
});
formatter.result({
  "duration": 371114552,
  "status": "passed"
});
formatter.match({
  "location": "Signin.i_click_sign_in_button()"
});
formatter.result({
  "duration": 3670697589,
  "status": "passed"
});
formatter.match({
  "location": "Signin.i_verify_that_I_am_logged_in_successfully()"
});
formatter.result({
  "duration": 13021277059,
  "status": "passed"
});
formatter.match({
  "location": "Signin.i_log_out_from_my_account()"
});
formatter.result({
  "duration": 3382880162,
  "status": "passed"
});
});