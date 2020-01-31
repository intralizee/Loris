<?php
use Facebook\WebDriver\WebDriverBy;
require_once __DIR__ . '/LorisIntegrationTest.class.inc';

/**
 * {{@inheritDoc}}
 *
 * @license http://www.gnu.org/licenses/gpl-3.0.txt GPLv3
 */
class LorisLoginTest extends LorisIntegrationTest
{
    /**
     * Ensures that login fails with invalid credentials.
     *
     * @return void
     */
    function testLoginFailure(): void
    {
        $this->webDriver->get($this->url . '/?logout=true');
        $username = $this->safeFindElement(WebDriverBy::Name("username"));
        $this->assertEquals('', $username->getAttribute("value"));

        $password = $this->safeFindElement(WebDriverBy::Name("password"));
        $this->assertEquals('', $password->getAttribute("value"));

        $login = $this->safeFindElement(WebDriverBy::Name("login"));
        $this->assertEquals('submit', $login->getAttribute("type"));

        $username->sendKeys("UnitTester");
        $password->sendKeys("IJUSTMADETHISUP");

        $login->click();
        $bodyText = $this->safeFindElement(
            WebDriverBy::cssSelector(".form-control-static")
        )->getText();
        $this->assertStringContainsString(
            "Incorrect username or password",
            $bodyText
        );
    }

    /**
     * Ensures that login succeeds with valid credentials.
     *
     * @return void
     */
    function testLoginSuccess()
    {
        $this->webDriver->get($this->url . '/?logout=true');
        $username = $this->safeFindElement(WebDriverBy::Name("username"));
        $this->assertEquals('', $username->getAttribute("value"));

        $password = $this->safeFindElement(WebDriverBy::Name("password"));
        $this->assertEquals('', $password->getAttribute("value"));

        $login = $this->safeFindElement(WebDriverBy::Name("login"));
        $this->assertEquals('submit', $login->getAttribute("type"));

        $username->sendKeys("UnitTester");
        $password->sendKeys($this->validPassword);

        $login->click();
        $bodyText = $this->safeFindElement(
            WebDriverBy::cssSelector('h3[class="welcome"]')
        )->getText();
        $this->assertStringContainsString("Welcome", $bodyText);
    }
}
