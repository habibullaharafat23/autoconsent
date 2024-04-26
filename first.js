
 
    //linking to google font

var link=document.createElement("link");
link.rel="stylesheet";
link.href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
document.getElementsByTagName("head")[0].appendChild(link);



//linking to css file

var link=document.createElement("link");
link.type="text/css";
link.rel="stylesheet";
link.href="https://cdn.jsdelivr.net/gh/habibullaharafat23/new@a2bd209a8b74e062991d71d24d7e4cb76c917c30/style.css";
document.getElementsByTagName("head")[0].appendChild(link);


//html elements

var consentdiv = document.createElement("div");

consentdiv.innerHTML = `
<div class=consent-banner-wrapper>
  <div class=consent-content-area>
    <div class="navigation-header">
      <div class="nav-item active-nav consent">
        <h3 class="consent-headlines">Souhlas</h3>
      </div>
      <div class="nav-item details">
        <h3 class="consent-headlines">Podrobnosti</h3>
      </div>
      <div class="nav-item about">
        <h3 class="consent-headlines">O</h3>
      </div>
    </div>
    


    <div class="section-container">
      <div class="section-content active-section-content" id="consentSection">
        <p class="consent-descriptions">Používáme soubory cookie k personalizaci obsahu a reklam, poskytování funkcí sociálních médií a analýze naší návštěvnosti. Dále sdílíme informace o vašem používání našich stránek se sociálními médii, inzercí a analytickými partnery, kteří je mohou kombinovat s dalšími informacemi, které jste jim poskytli nebo které získali z vašeho používání jejich služeb.</p>
      </div>
      <div class="section-content" style="display:none" id="detailsSection">
        <div class="cookie-detail-wrapper necessaryCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Nezbytný</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalNecessaryCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox" checked class="inputDisable" disabled>
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Nezbytné soubory cookie pomáhají učinit webové stránky použitelnými tím, že umožňují základní funkce, jako je navigace na stránce a přístup k zabezpečeným oblastem webové stránky. Bez těchto cookies nemůže web správně fungovat.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper preferencesCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Předvolby</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalPreferencesCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Preferenční soubory cookie umožňují webové stránce zapamatovat si informace, které mění způsob, jakým se stránka chová nebo vypadá, jako je váš preferovaný jazyk nebo region, ve kterém se nacházíte.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper analyticsCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Analýtika</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalAnalyticsCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Statistické soubory cookie pomáhají vlastníkům webových stránek porozumět tomu, jak návštěvníci interagují s webovými stránkami tím, že anonymně shromažďují a hlásí informace.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper marketingCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Marketing</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalMarketingCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Marketingové cookies se používají k sledování návštěvníků přes různé webové stránky. Cílem je zobrazovat reklamy, které jsou relevantní a přitažlivé pro jednotlivé uživatele a tím pádem cennější pro vydavatele a reklamní partnery třetích stran.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
      </div>
      <div class="section-content" style="display:none" id="aboutSection">
        <p class="consent-descriptions">
          <span class="sec3Content" style="margin-top:15px">Cookies jsou malé textové soubory, které mohou webové stránky používat k zefektivnění uživatelské zkušenosti.</span>
          <span class="sec3Content">Zákon stanoví, že můžeme na vašem zařízení ukládat soubory cookie, pokud jsou nezbytně nutné pro provoz těchto stránek. Pro všechny ostatní typy souborů cookie potřebujeme váš souhlas. To znamená, že soubory cookie, které jsou kategorizovány podle potřeby, jsou zpracovávány na základě čl. 6 odst. 1 písm. a) GDPR. F). Všechny ostatní cookies, tedy ty z kategorií preferencí a marketingu, jsou zpracovávány na základě čl. 6 odst. 1 písm. GDPR. a)</span>

          <span class="sec3Content">Tato stránka používá různé typy souborů cookie. Některé soubory cookie jsou umístěny třetími stranami, které se zobrazují na našich stránkách</span>
          
        </p>
      </div>
    </div>
    


  </div>

  <div class=consent-action-footer>
    <div class=action-buttons id=consentActionButtons>
      <button action=accept class="action-btn active" id=acceptConsentButton>Akceptovat</button>
      <button action=reject class=action-btn id=rejectConsentButton> Zamítnout</button>
      <button action=preference class=action-btn id=preferenceConsentButton>Přednost</button>
    </div>
  </div>

</div>

<div class=miniConsentBanner>
  <img alt="" src=https://cdn.jsdelivr.net/gh/alifmahmudashik/marketing@marketing/consent-banner/img/cookie-icon.svg width=100%>
</div>
`

document.body.appendChild(consentdiv);

 
  


