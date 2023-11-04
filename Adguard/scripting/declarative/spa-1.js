/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: spa-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".ad_block_non_shadowed\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\".ad_block_shadowed\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"div[class^=\\\"block-ads-\\\"]\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".body\",\"action\":[\"style\",\"background-image: none!important;\"]}"],["{\"selector\":\"#colunas\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".ads.ads-block.prebid\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".containerMapAndBanner > .contentMap\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".play\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".main__corpo\",\"action\":[\"style\",\"margin-top: 160px!important;\"]}"],["{\"selector\":\"div[class=\\\"vc_row wpb_row td-pb-row\\\"][style^=\\\"padding-top: 1\\\"]\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#fusion-app\",\"action\":[\"style\",\"margin-top: 0!important;\"]}","{\"selector\":\".navbar-container\",\"action\":[\"style\",\"margin-top: 0!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: visible !important;\"]}"],["{\"selector\":\".is_advertising .site-advertising\",\"action\":[\"style\",\"margin: 5px auto 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; padding-right: 0 !important;\"]}"],["{\"selector\":\".block-wrapper[style*=\\\"url\\\"] > .container > .row\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".block-wrapper[style*=\\\"url\\\"]\",\"action\":[\"style\",\"background: none !important;\"]}","{\"selector\":\"body[style*=\\\"url\\\"] .trending-light[style^=\\\"margin-top:\\\"]\",\"action\":[\"style\",\"margin-top: 20px !important;\"]}","{\"selector\":\"body[style*=\\\"url\\\"]\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"body div[id].ads.adsbox.doubleclick\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body > header\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#banner_b\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"iframe#google_ads_iframe_123_bait\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"iframe#google_ads_iframe_b\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#header-bar.header-bar\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#div-gpt-leaderboard ~ #page\",\"action\":[\"style\",\"margin-top: 30px !important;\"]}"],["{\"selector\":\".alert-message > #informacion\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\".ad-lat2\",\"action\":[\"style\",\"height: 0 !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; visibility: collapse !important;\"]}"],["{\"selector\":\"#NEWS_RELATED\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#ROBAPAGINAS_INLINE_LEFT\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"[id].adsbox.doubleclick.ad-placement\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body .adsbygoogle\",\"action\":[\"style\",\"display: block!important; position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#framed\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".navBar\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".banner\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".ads-300x300\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#framed > #player\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#player\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible!important;\"]}"],["{\"selector\":\"body > #box\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"html.fancybox-lock > body\",\"action\":[\"style\",\"overflow: auto !important;\"]}","{\"selector\":\"html.fancybox-margin\",\"action\":[\"style\",\"margin-right: 0 !important;\"]}"],["{\"selector\":\".col-anu + div.col-cnt > div.columna\",\"action\":[\"style\",\"width: 34% !important;\"]}"],["{\"selector\":\".hasBgApb\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#ablockercheck\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\".content_section > .top\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}","{\"selector\":\".page-container.top\",\"action\":[\"style\",\"margin-top: 60px!important;\"]}","{\"selector\":\".top-home\",\"action\":[\"style\",\"margin-top: 60px!important;\"]}"],["{\"selector\":\"#article-header\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\"div#ad\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#manga-title\",\"action\":[\"style\",\"height: unset !important;\"]}"],["{\"selector\":\".lv-publi-box\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\".megabanner-adv\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".add990x90 div\",\"action\":[\"style\",\"height: 0 !important;\"]}","{\"selector\":\".add990x90\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\".ads.adsbox.ad-placement\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".ads728x90.ads970x90\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"iframe.video\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\".series-indeti\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\"#Publi300600xaa\",\"action\":[\"style\",\"height: 1px!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image:none!important;\"]}"],["{\"selector\":\"#ad\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"#adsdiv\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\".ads.ad.adsbox.ad-placement.carbon-ads\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".container.have-brand\",\"action\":[\"style\",\"margin-top: 0!important;\"]}"],["{\"selector\":\".publicite.text-ad.adsbox\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".sidebar > div.tile-top.tile\",\"action\":[\"style\",\"height: auto!important;\"]}"],["{\"selector\":\"body div.adsbox.doubleclick.ad-placement[id]:not(#style_important)\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".iframeDiv > center > a[target=\\\"_blank\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none!important;\"]}"],["{\"selector\":\"#axds-Top\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\".pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".dat-menu-container\",\"action\":[\"style\",\"cursor: auto !important;\"]}","{\"selector\":\"body[style^=\\\"background\\\"]\",\"action\":[\"style\",\"background: none !important;\"]}"],["{\"selector\":\".footer\",\"action\":[\"style\",\"padding-bottom: 0 !important;\"]}"],["{\"selector\":\".op-body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"aside > div > .goqpfsl\",\"action\":[\"style\",\"visibility: hidden !important; height: 1px !important;\"]}"],["{\"selector\":\"body.modal-open[style=\\\"padding-right: 17px;\\\"]\",\"action\":[\"style\",\"overflow: visible!important; padding-right: 0px!important;\"]}"],["{\"selector\":\"span[data-ez-ph-id]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"body .ads-box\",\"action\":[\"style\",\"display: block !importnat;\"]}"],["{\"selector\":\"#hide\",\"action\":[\"style\",\"display: block!important;\"]}"],["{\"selector\":\".content #src_iframe\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".content > div[id]:has(> center > #src_iframe)\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".content #video\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body #fullbanner-container\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\"[style=\\\"text-align: center; display: none;\\\"]\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".hided\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".player\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto!important;\"]}","{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto!important;\"]}"],["{\"selector\":\"body .adblock_warning:not(#style_important)\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".modal-open\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".pie-pagina\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}"],["{\"selector\":\"#bannerGames\",\"action\":[\"style\",\"height: 2px!important;\"]}","{\"selector\":\".adstopo\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}"],["{\"selector\":\"div[id^=\\\"src_iframe_\\\"]\",\"action\":[\"style\",\"display: block !important;\"]}"]];

const hostnamesMap = new Map([["foros.3dgames.com.ar",0],["lavoz.com.ar",1],["adrenaline.com.br",2],["adrianeboneck.com.br",3],["ldicas.com.br",3],["bolsadevalores.club",3],["androidapktop.com",3],["cheirinhobao.com",3],["dicasfinanceirasbr.com",3],["osmtecnologico.com",3],["receitasdochico.life",3],["decorabolos.net",3],["futlances.net",3],["gastronomiabrasileira.net",3],["receitasdalu.net",3],["dicadesaude.online",3],["receitasdahora.online",3],["legacyfun.site",3],["blog.clarocombomais.com.br",4],["radioagricultura.cl",4],["mantrazscan.com",4],["gamestorrents.one",4],["gamesviatorrent.top",4],["buscalinks.xyz",4],["oplanetatv.clickgratis.com.br",5],["ouniversodatv.com",5],["climaaovivo.com.br",6],["decorardicas.com.br",7],["loucasporcabelos.com.br",7],["diariodepernambuco.com.br",8],["diariodoiguacu.com.br",9],["estadao.com.br",10],["expressodaspraias.com.br",[11,12]],["journaldemontreal.com",11],["hardware.com.br",13],["inforchannel.com.br",14],["anroll.net",14],["mundoconectado.com.br",15],["oceans14.com.br",16],["tudosobrefinancas.com",16],["tudogostoso.com.br",17],["uol.com.br",18],["jc.ne10.uol.com.br",19],["oantagonista.uol.com.br",20],["goovie.co",21],["3djuegos.com",22],["androidayuda.com",[23,24]],["gamerzona.com",23],["hardzone.es",23],["softzone.es",23],["adslzone.tv",[23,24]],["antoniomote.com",25],["asialiveaction.com",26],["bellareceitas.com",27],["diariodecasamento.com",[27,31]],["empregovaga.com",[27,31]],["flashreceitas.com",[27,31]],["grandnoticias.com",27],["modaestiloeafins.com",[27,31]],["portalmundocurioso.com",[27,31]],["receitasabores.com",[27,31]],["resenhasglobais.com",[27,31,54]],["turismoeviagem.com",[27,31]],["vidadeatletas.com",[27,31]],["tecword.info",[27,31,54]],["blotz.me",[27,31]],["belezaedieta.net",[27,31]],["blogdatecnologia.net",[27,31]],["culinariadochef.net",27],["eusaudavel.net",[27,31]],["gameszoom.net",27],["manualdamulher.net",[27,31]],["cardapiodavovo.online",[27,31]],["financashoje.online",[27,31]],["financasnow.online",[27,31]],["globalnoticias.online",27],["noticiasfitness.online",[27,31]],["noticiastecnologica.online",[27,31]],["receitasdamamae.online",[27,31]],["tudoemprego.online",[27,31]],["vivercomsaude.online",[27,31,54]],["muitasreceitas.site",27],["receitasdomundo.site",[27,31]],["tecnologiaonline.site",27],["smartdoing.tech",[27,31,54]],["fazendorendaextra.xyz",27],["manchetehoje.xyz",[27,31,54]],["cienradios.com",28],["clavejuegos.com",29],["depor.com",30],["mundotecnologias.com",31],["dicasgostosas.com",32],["guiafinancas.net",32],["guianoticiario.net",[32,54,69]],["receitasdaora.online",32],["elchapuzasinformatico.com",33],["elperiodico.com",34],["felizemforma.com",35],["folhadoslagos.com",36],["formulatv.com",37],["gamevicio.com",38],["hartico.com",39],["infobae.com",40],["infoescola.com",41],["iptvvall.com",42],["knightnoscanlation.com",43],["lavanguardia.com",44],["lecturas.com",45],["mangahost1.com",46],["mangahost2.com",[46,47]],["mangahost4.com",[46,47]],["mangahostbr.com",46],["mangahosted.com",[46,47]],["yesmangas1.com",[46,47]],["mangahostbr.net",46],["mastercuriosidadesbr.com",48],["navegacom.com",49],["pcbolsa.com",50],["profesionalreview.com",51],["radiotormentamx.com",[52,53]],["televall.website",52],["seodiv.com",55],["seriesretro.com",56],["windowsblogitalia.com",57],["xerifetech.com",58],["zona-leros.com",59],["zonammorpg.com",60],["20minutos.es",61],["canarias7.es",62],["hoy.es",62],["lasprovincias.es",62],["geeknetic.es",63],["informacion.es",64],["netmentor.es",65],["todalamusica.es",66],["visioncloud.ga",67],["geometriaanalitica.info",68],["kshowes.net",70],["sejasaudavel.net",71],["sudoroot.net",72],["tecnoblog.net",73],["comandotorrents.org",74],["investfacil.org",75],["criptoreal.site",75],["mundotec.pro",76],["jornaleconomico.pt",77],["meocloud.pt",78],["visao.sapo.pt",79],["tempo.pt",80],["superanimes.site",81],["clubinvest.top",82]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
