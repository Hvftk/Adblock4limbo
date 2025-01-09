/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
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

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#home-section3\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\".MuiBox-root\",\"tasks\":[[\"has-text\",\"Subscribe to our Newsletter\"]]}"],["{\"selector\":\".above-footer-section\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"blocking software\\\")]/../../..\"]]}","{\"selector\":\".advanced.embed-media\",\"tasks\":[[\"has-text\",\"Get a daily look\"]]}"],["{\"selector\":\".align-items-center.py-2\",\"tasks\":[[\"has-text\",\"Sign Up\"]]}"],["{\"selector\":\".article-body > p\",\"tasks\":[[\"has-text\",\"sign up for our newsletters\"]]}"],["{\"selector\":\".article-content-wrapper > p\",\"tasks\":[[\"has-text\",\"into your inbox\"]]}","{\"selector\":\"strong > em\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\".bg-cover\",\"tasks\":[[\"has-text\",\"Sign up\"]]}","{\"selector\":\".bg-dark-brown\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\".bg-fok-gray-500\",\"tasks\":[[\"has-text\",\"Join our mailing list\"]]}"],["{\"selector\":\".bg-gray-100\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".bg-gray-50\",\"tasks\":[[\"has-text\",\"Fake news\"]]}","{\"selector\":\".hidden\",\"tasks\":[[\"has-text\",\"Fake news\"]]}"],["{\"selector\":\".bg-gray-600\",\"tasks\":[[\"has-text\",\"Read the latest business news\"]]}"],["{\"selector\":\".bg-left.bg-cover\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\".bg-primary-dark\",\"tasks\":[[\"has-text\",\"newsletter\"]]}","{\"selector\":\".border-primary-dark\\\\/50\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".bg-purple-50\",\"tasks\":[[\"has-text\",\"Fan of great business\"]]}","{\"selector\":\".md\\\\:px-2.py-10\",\"tasks\":[[\"has-text\",\"Subscribe to the newsletter\"]]}"],["{\"selector\":\".border-gray-175\",\"tasks\":[[\"has-text\",\"BT in your inbox\"]]}"],["{\"selector\":\".border-gray-200\",\"tasks\":[[\"has-text\",\"Get the news\"]]}","{\"selector\":\".border-secondary-900\",\"tasks\":[[\"has-text\",\"Get the news\"]]}"],["{\"selector\":\".callout\",\"tasks\":[[\"has-text\",\"inbox\"]]}"],["{\"selector\":\".card-body\",\"tasks\":[[\"has-text\",\"Daily Newsletter\"]]}"],["{\"selector\":\".col1span3\",\"tasks\":[[\"has-text\",\"Newsletters\"]]}"],["{\"selector\":\".content-panel-container\",\"tasks\":[[\"has-text\",\"Get recipes\"]]}"],["{\"selector\":\".elementor-button-link\",\"tasks\":[[\"has-text\",\"Sign Up\"]]}"],["{\"selector\":\".elementor-shortcode\",\"tasks\":[[\"has-text\",\"Signup Now\"]]}"],["{\"selector\":\".et_pb_row_1_tb_body\",\"tasks\":[[\"has-text\",\"Sign up for our weekly newsletter\"]]}","{\"selector\":\".et_pb_section\",\"tasks\":[[\"has-text\",\"Sign up for our weekly newsletter\"]]}"],["{\"selector\":\".fusion_builder_column_inner_1_1\",\"tasks\":[[\"has-text\",\"BNC Newsletters\"]]}"],["{\"selector\":\".has-background\",\"tasks\":[[\"has-text\",\"Never miss a post\"]]}"],["{\"selector\":\".has-background\",\"tasks\":[[\"has-text\",\"Sign up for Express\"]]}"],["{\"selector\":\".has-border-color.wp-block-columns\",\"tasks\":[[\"has-text\",\"NEWSLETTER\"]]}"],["{\"selector\":\".has-border-color\",\"tasks\":[[\"has-text\",\"Discover more\"]]}"],["{\"selector\":\".has-medium-font-size\",\"tasks\":[[\"has-text\",\"Join our free newsletter\"]]}"],["{\"selector\":\".has-primary-dark-background-color\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\".has-secondary-background-color\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}","{\"selector\":\".wp-block-group\",\"tasks\":[[\"has-text\",\"Subscribe to our Newsletter\"]]}"],["{\"selector\":\".m-detail--body > p\",\"tasks\":[[\"has-text\",\"Sign up for the\"]]}"],["{\"selector\":\".mx-auto.container\",\"tasks\":[[\"has-text\",\"NEWSLETTER\"]]}"],["{\"selector\":\".optin\",\"tasks\":[[\"has-text\",\"Sign Up\"]]}"],["{\"selector\":\".p-4.bg-\\\\[\\\\#F5F5F5\\\\]\",\"tasks\":[[\"has-text\",\"Subscribe to our newsletter\"]]}"],["{\"selector\":\".p1\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".px20.pb32\",\"tasks\":[[\"has-text\",\"Sign up for\"]]}"],["{\"selector\":\".recommendationSection\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\".row > .entry-content > p\",\"tasks\":[[\"has-text\",\"daily newsletter\"]]}"],["{\"selector\":\".sidebar-form\",\"tasks\":[[\"has-text\",\"Sign Up For Our Newsletter\"]]}"],["{\"selector\":\".t-bg-surface-zero.t-p-6\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\".w-embed\",\"tasks\":[[\"has-text\",\"Sign up now\"]]}"],["{\"selector\":\".wp-block-column > .is-layout-flow.wp-block-group\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\".wp-block-cover-is-layout-flow\",\"tasks\":[[\"has-text\",\"Get our newsletter\"]]}"],["{\"selector\":\".wp-block-genesis-blocks-gb-columns\",\"tasks\":[[\"has-text\",\"Subscribe by Email\"]]}","{\"selector\":\".wp-block-genesis-blocks-gb-container\",\"tasks\":[[\"has-text\",\"Free Email Guide\"]]}"],["{\"selector\":\".wp-block-group-is-layout-flow.has-background.has-base-background-color\",\"tasks\":[[\"has-text\",\"Email Me This For Later\"]]}"],["{\"selector\":\".wp-block-group-is-layout-flow\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\".wp-block-group__inner-container\",\"tasks\":[[\"has-text\",\"Discover more\"]]}"],["{\"selector\":\"#custom_html-12\",\"tasks\":[[\"has-text\",\"newsletters\"]]}"],["{\"selector\":\"div.is-style-border\",\"tasks\":[[\"has-text\",\"Daily News\"]]}"],["{\"selector\":\"div.wp-block-cover\",\"tasks\":[[\"has-text\",\"Be the first to know\"]]}"],["{\"selector\":\".bottom-0.fixed\",\"tasks\":[[\"has-text\",\"weekly newsletters\"]]}","{\"selector\":\".lg\\\\:p-\\\\[16px\\\\]\",\"tasks\":[[\"has-text\",\"newsletters\"]]}"],["{\"selector\":\"em > strong\",\"tasks\":[[\"has-text\",\"daily newsletter\"]]}"],["{\"selector\":\".p-6.justify-center\",\"tasks\":[[\"has-text\",\"Daily newsletter\"]]}"],["{\"selector\":\".order-lg-2\",\"tasks\":[[\"has-text\",\"Sign up to our newsletter\"]]}","{\"selector\":\".sidebar-sticky\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".comp > strong\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".pb-1.gap-4\",\"tasks\":[[\"has-text\",\"Sign up for\"]]}","{\"selector\":\".pb-6\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\".td-block-title.block-title\",\"tasks\":[[\"has-text\",\"NEWSLETTER\"]]}"],["{\"selector\":\"form\",\"tasks\":[[\"has-text\",\"Subscribe and thrive\"]]}","{\"selector\":\"form\",\"tasks\":[[\"has-text\",\"Your inbox is ready\"]]}"],["{\"selector\":\".has-senary-background-color\",\"tasks\":[[\"has-text\",\"Email\"]]}","{\"selector\":\".has-tertiary-background-color\",\"tasks\":[[\"has-text\",\"Week\"]]}"],["{\"selector\":\".bg-gray-100\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\".v-card.v-card--flat\",\"tasks\":[[\"has-text\",\"Sign up to receive\"]]}"],["{\"selector\":\".w-full\",\"tasks\":[[\"has-text\",\"Mailing\"]]}"],["{\"selector\":\"h3.section_name\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\".d-lg-block.sp-module\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".pb-6.border-b\",\"tasks\":[[\"has-text\",\"Signup\"]]}"],["{\"selector\":\"p > em\",\"tasks\":[[\"has-text\",\"Sign up for\"]]}"],["{\"selector\":\".p-8.bg-dynamic-primary\",\"tasks\":[[\"has-text\",\"straight to your inbox\"]]}"],["{\"selector\":\".shadow-card.p-8\",\"tasks\":[[\"has-text\",\"Laravel Newsletter\"]]}"],["{\"selector\":\".pt-\\\\[60px\\\\]\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".fxsEzN\",\"tasks\":[[\"has-text\",\"Sign up to our newsletter\"]]}"],["{\"selector\":\"section.sidebar-section\",\"tasks\":[[\"has-text\",\"email\"]]}"],["{\"selector\":\".has-background.has-dark-gray-background-color\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\".sidebar-item-container\",\"tasks\":[[\"has-text\",\"Email me\"]]}"],["{\"selector\":\".has-background\",\"tasks\":[[\"has-text\",\"/newsletter|inbox/\"]]}"],["{\"selector\":\".promo-card-primary\",\"tasks\":[[\"has-text\",\"Check your inbox\"]]}"],["{\"selector\":\".pull-right.inline-gallery-container\",\"tasks\":[[\"has-text\",\"Post this\"]]}"],["{\"selector\":\".mobile-only-on-col-ab\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\".bg-gray-50\",\"tasks\":[[\"has-text\",\"Want to stay informed\"]]}"],["{\"selector\":\".border-brand-pink\",\"tasks\":[[\"has-text\",\"inbox\"]]}"],["{\"selector\":\".md\\\\:decorative-horizontal-lines\",\"tasks\":[[\"has-text\",\"subscribe\"]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"daily newsletter\"]]}"],["{\"selector\":\".hide.post__sidebar\",\"tasks\":[[\"has-text\",\"Share this article\"]]}"],["{\"selector\":\".elementor-section\",\"tasks\":[[\"has-text\",\"Subscribe for\"]]}","{\"selector\":\".elementor-widget-container\",\"tasks\":[[\"has-text\",\"tired of censorship\"]]}"],["{\"selector\":\"[style=\\\"text-align:center\\\"]\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".text_multiline\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".wp-block-pullquote\",\"tasks\":[[\"has-text\",\"Sign up for\"]]}"],["{\"selector\":\".wp-block-group__inner-container\",\"tasks\":[[\"has-text\",\"Discover\"]]}"],["{\"selector\":\"strong > .link--button\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".restricted-body.html-content\",\"tasks\":[[\"has-text\",\"Email us\"]]}","{\"selector\":\".restricted-body.html-content\",\"tasks\":[[\"has-text\",\"your inbox\"]]}"],["{\"selector\":\".wp-block-quote\",\"tasks\":[[\"has-text\",\"inbox daily\"]]}"],["{\"selector\":\"p.t-links-underlinedy\",\"tasks\":[[\"has-text\",\"Sign up for The Brief\"]]}"],["{\"selector\":\".LostInventoryMessage_root__YllYq\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"[data-testid=\\\"contributions-liveblog-epic\\\"]\",\"tasks\":[[\"has-text\",\"daily newsletter\"]]}"],["{\"selector\":\".bg-soft-teal\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\".rounded-3.px-5\",\"tasks\":[[\"has-text\",\"Newsletter\"]]}"],["{\"selector\":\".rounded-md.md\\\\:p-8.p-5.shadow-light\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\".duet--article--highlight\",\"tasks\":[[\"has-text\",\"Sign up here\"]]}"],["{\"selector\":\".textwidget > .textwidget\",\"tasks\":[[\"has-text\",\"Subscribe\"]]}"],["{\"selector\":\".has-medium-font-size\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".mt-\\\\[2rem\\\\]\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\"div[class^=\\\"-_\\\"] > form\",\"tasks\":[[\"has-text\",\"newsletters\"]]}"],["{\"selector\":\".section > .wrapper\",\"tasks\":[[\"has-text\",\"Newsletters\"]]}"],["{\"selector\":\".bg-light\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has-text\",\"newsletter\"]]}"],["{\"selector\":\".border.rounded.p-2\",\"tasks\":[[\"has-text\",\"news letter\"]]}"],["{\"selector\":\".moola-search-view\",\"tasks\":[[\"has-text\",\"hide these ads\"]]}"],["{\"selector\":\".notificationsContainer\",\"tasks\":[[\"has-text\",\"whitelisten of beleef Tweakers\"]]}"],["{\"selector\":\"#modal_login\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".fbUserStory\",\"tasks\":[[\"has-text\",\"Popular Across Facebook\"]]}","{\"selector\":\".userContentWrapper\",\"tasks\":[[\"has-text\",\"Popular Across Facebook\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"AdB\\\")]\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"/addLinkToCopy/i\"]]}"],["{\"selector\":\"div[tabindex=\\\"0\\\"]\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}],[\"spath\",\":has([href=\\\"/signup\\\"])\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//div[contains(text(),\\\"Adblock\\\")]/..\"]]}"],["{\"selector\":\".js-dismissable-hero\",\"tasks\":[[\"has-text\",\"Sign up\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"oncontextmenu\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"We think our Android\"]]}"],["{\"selector\":\"#root > div > div\",\"tasks\":[[\"has-text\",\"Get one more story in your member\"]]}","{\"selector\":\".overlay\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"Welcome back\"]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"write a response\"]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"Publish now\"]]}]]}"],["{\"selector\":\"body > div:nth-of-type(1) > div\",\"tasks\":[[\"has-text\",\"adblocker\"]]}"],["{\"selector\":\".dark-theme-dialog__dialogBody___106Di\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"copyprotect\"]]}"],["{\"selector\":\".modal-content\",\"tasks\":[[\"has\",{\"selector\":\".text > b\",\"tasks\":[[\"has-text\",\"Privacy Policy\"]]}]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"debugger\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"@media print\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"::selection\"]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Using an ad blocker?\"],[\"upward\",3]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"Adblock\\\")]\"]]}"],["{\"selector\":\"p > b\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"AdBlock\\\")]\"]]}"],["{\"selector\":\".adbanner\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"user-select\"]]}"],["{\"selector\":\"div[style] > div > .userBanner--red\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"[href=\\\"/about#support\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"div[class=\\\"container_box content_box\\\"] > div:only-child > div:last-child > div:last-child > ins.adsbygoogle\",\"tasks\":[[\"upward\",4]]}","{\"selector\":\"div[class=\\\"container_box content_box\\\"] > div[id][class] > div:last-child > div:last-child > ins.adsbygoogle\",\"tasks\":[[\"upward\",3]]}","{\"selector\":\"div[id][class][style^=\\\"position:\\\"] > div:last-child > div:last-child > ins.adsbygoogle\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".ct_warn\",\"tasks\":[[\"has-text\",\"adblock\"]]}"],["{\"selector\":\".has-profile.post:first-child\",\"tasks\":[[\"has-text\",\"/adblock/i\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/-moz-user-select:none|@media print/\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"innerText\"]]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",1]]}","{\"selector\":\"body > div[id]\",\"action\":[\"style\",\"visibility: hidden !important\"],\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.carbonLoaded\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"user-select:\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"unselectable\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"-moz-none\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/user-select|::selection/\"]]}"],["{\"selector\":\".ReactModal__Overlay--after-open\",\"tasks\":[[\"has-text\",\"/Premium|Try 7 days/\"]]}","{\"selector\":\".ReactModal__Overlay--after-open:has(iframe[srcdoc], img)\",\"tasks\":[[\"has-text\",\"signing up\"]]}","{\"selector\":\"main > div[class*=\\\"-\\\"] > div[class^=\\\"_\\\"] > div[class^=\\\"_\\\"] > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"_\\\"]\",\"tasks\":[[\"has-text\",\"Do your part to support us\"]]}]]}"],["{\"selector\":\"#side > ins.adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#MainModule + div[class] > div[style^=\\\"width\\\"] > div > i[data-icon-name=\\\"OutlookLogo\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/media print|user-select:/\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Adblock\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"xpath\",\"//*[contains(text(),\\\"blocker\\\")]\"]]}"],["{\"selector\":\"[data-text-as-pseudo-element*=\\\" push \\\"]\",\"tasks\":[[\"upward\",\"[role]\"],[\"upward\",\"[role]\"]]}"],["{\"selector\":\"[data-pw-desk]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.oncontextmenu\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.onkeydown\"]]}"],["{\"selector\":\".around-desktop-ad\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has-text\",\"Winter-Update\"],[\"upward\",1]]}"],["{\"selector\":\"style\",\"tasks\":[[\"has-text\",\"user-select: none;\"]]}"],["{\"selector\":\"form[id=\\\"tfnewsearch\\\"]\",\"action\":[\"remove-attr\",\"onsubmit\"]}"],["{\"selector\":\"html\",\"action\":[\"remove-class\",\"modal-open\"],\"tasks\":[[\"watch-attr\",[\"class\"]]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"checkAdblockBait\"]]}"],["{\"selector\":\"html.show-intro-popup\",\"action\":[\"remove-class\",\"show-intro-popup\"]}"],["{\"selector\":\"body[oncontextmenu=\\\"return false\\\"]\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"_0x\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"DisableDevtool\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"/oncontextmenu|devtools|stateObject|debugger/\"]]}"],["{\"selector\":\"html.no-scroll\",\"action\":[\"remove-class\",\"no-scroll\"]}"],["{\"selector\":\"[oncopy=\\\"return false\\\"]\",\"action\":[\"remove-attr\",\"oncopy\"]}"],["{\"selector\":\"[oncontextmenu=\\\"return false;\\\"]\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\".no-select\",\"action\":[\"remove-class\",\"no-select\"]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"document.onmousedown\"]]}"],["{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\":not(input):not(textarea)\"]]}"],["{\"selector\":\"a:has(shreddit-player)\",\"action\":[\"remove-attr\",\"href\"]}","{\"selector\":\"shreddit-player\",\"action\":[\"remove-attr\",\"autoplay\"]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"stopRefreshSite\"]]}"],["{\"selector\":\"[id=\\\"toggle_notification_notification-ad-blocker\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"nocontextmenu\"]]}"],["{\"selector\":\".ReactModalPortal\",\"tasks\":[[\"has-text\",\"mobile\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"devtoolsDetector\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"contextmenu\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"/contextmenu|devtool/\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"preventDefault\"]]}"],["{\"selector\":\"script[id=\\\"jquery-core-js-after\\\"]\",\"tasks\":[[\"has-text\",\"e.preventDefault();\"]]}"],["{\"selector\":\"button[type=\\\"submit\\\"]\",\"action\":[\"remove-attr\",\"disabled\"]}"],["{\"selector\":\".swal2-shown\",\"action\":[\"remove-class\",\"swal2-shown\"]}"],["{\"selector\":\".confirm\",\"tasks\":[[\"has-text\",\"AdBlocker\"]]}"],["{\"selector\":\".under-map-wrapper\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".elementor-top-column h6\",\"tasks\":[[\"has-text\",\"advertisement\"],[\"upward\",\".elementor-top-column\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"/onselectstart|oncopy|oncontextmenu/\"]}"],["{\"selector\":\"*\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"/oncopy|oncut|onpaste/\"]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"contextmenu\"]}"],["{\"selector\":\".loading-text\",\"action\":[\"remove-class\",\"loading-text\"]}"],["{\"selector\":\"body[class^=\\\"scroll-block--is-blocked\\\"]\",\"action\":[\"remove-class\",\"/scroll-block--is-blocked/\"]}"],["{\"selector\":\"div[oncopy]\",\"action\":[\"remove-attr\",\"/oncopy|oncut|onpaste/\"]}"],["{\"selector\":\"body[oncontextmenu=\\\"return!1\\\"]\",\"action\":[\"remove-attr\",\"oncontextmenu\"]}"],["{\"selector\":\".forbidden_select\",\"action\":[\"remove-class\",\"forbidden_select\"]}"],["{\"selector\":\"div.confuse\",\"action\":[\"remove\",\"\"]}"]];

const hostnamesMap = new Map([["dailygalaxy.com",0],["coder.com",1],["wideopencountry.com",2],["foxnews.com",3],["marketbeat.com",4],["dailystar.co.uk",5],["dailydot.com",6],["thetransmitter.org",7],["forksoverknives.com",8],["bigthink.com",9],["babylonbee.com",10],["us500.com",11],["balls.ie",12],["crunchydata.com",13],["commoncog.com",14],["businesstimes.com.sg",15],["amgreatness.com",16],["calgaryherald.com",17],["edmontonjournal.com",17],["montrealgazette.com",17],["ottawacitizen.com",17],["thestarphoenix.com",17],["aspentimes.com",18],["craigdailypress.com",18],["postindependent.com",18],["skyhinews.com",18],["steamboatpilot.com",18],["vaildaily.com",18],["chron.com",19],["sfgate.com",19],["hellmanns.com",20],["ffrfaction.org",21],["bitcoinsensus.com",22],["advancedsciencenews.com",23],["bravenewcoin.com",24],["wyseguide.com",25],["paloaltoonline.com",26],["linuxiac.com",27],["potatonewstoday.com",28],["thecooldown.com",29],["comicbook.com",30],["thebarbedwire.com",31],["mensjournal.com",32],["businessinsider.in",33],["bakerbynature.com",34],["cockroachlabs.com",35],["rd.com",36],["ctpost.com",37],["aarp.org",38],["cjr.org",39],["brooklynvegan.com",40],["interestingengineering.com",41],["ensemblemagazine.co.nz",42],["systemsapproach.org",43],["creepycatalog.com",44],["iheartrecipes.com",45],["lemonblossoms.com",46],["historiccity.com",47],["stitchsnitches.com",47],["labrujulaverde.com",48],["politicalwire.com",49],["haitiantimes.com",50],["cheknews.ca",51],["dlnews.com",52],["faithwire.com",53],["entrepreneur.com",54],["erlang-solutions.com",55],["ew.com",56],["fastcompany.com",57],["finsmes.com",58],["sherwood.news",59],["foxandbriar.com",60],["freethink.com",61],["gript.ie",62],["guitar.com",63],["heraldextra.com",64],["hot-dinners.com",65],["jointhefollowup.com",66],["jweekly.com",67],["kerrang.com",68],["laravel-news.com",69],["levernews.com",70],["londonpass.com",71],["marginalrevolution.com",72],["montanafreepress.org",73],["neo4j.com",74],["newsroom.co.nz",75],["newsroom.ucla.edu",76],["newswire.ca",77],["notateslaapp.com",78],["notthebee.com",79],["officialcharts.com",80],["pcmag.com",81],["people.com",82],["quantamagazine.org",83],["reclaimthenet.org",84],["salon.com",85],["sciencenorway.no",86],["sfpublicpress.org",87],["skepticalraptor.com",88],["countryandtownhouse.com",89],["stuff.co.nz",90],["taskandpurpose.com",91],["texastribune.org",92],["theatlantic.com",93],["theguardian.com",94],["theskimm.com",95],["thestreamable.com",96],["urbandictionary.com",97],["vox.com",98],["washington.edu",99],["worldsensorium.com",100],["yourstory.com",101],["androidauthority.com",102],["cultofmac.com",103],["market.samm.com",104],["recordcollectormag.com",105],["rprealtyplus.com",106],["flickr.com",107],["tweakers.net",108],["deezer.com",109],["facebook.com",110],["facebookcorewwwi.onion",110],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",110],["wotlabs.net",111],["bloombergquint.com",112],["twitter.com",113],["x.com",113],["diffnow.com",114],["askubuntu.com",115],["mathoverflow.net",115],["serverfault.com",115],["stackapps.com",115],["stackexchange.com",115],["superuser.com",115],["yoututosjeff.es",116],["dailymail.co.uk",117],["500ish.com",118],["artplusmarketing.com",118],["atrium.co",118],["backchannel.com",118],["backstage.1blocker.com",118],["badootech.badoo.com",118],["baharudinyusuf.com",118],["bitcointechtalk.com",118],["blog.bitsrc.io",118],["blog.inkdrop.app",118],["bitwarden.com",118],["blog.coinbase.com",118],["blog.confiant.com",118],["blog.devcolor.org",118],["blog.growthhackers.com",118],["blog.hiri.com",118],["blog.ltse.com",118],["blog.statebox.org",118],["blog.twitch.tv",118],["blog.waffle.io",118],["bluerockpublicradio.com",118],["bolt.io",118],["boomsupersonic.com",118],["bradfieldcs.com",118],["brightthemag.com",118],["broadcast.listennotes.com",118],["checkio.org",118],["citizen428.net",118],["coach.me",118],["codeburst.io",118],["dave-bailey.com",118],["discordapp.com",118],["doist.com",118],["doit-intl.com",118],["dotandline.net",118],["doublepulsar.com",118],["economist.com",118],["electricliterature.com",118],["elidourado.com",118],["esciencecenter.nl",118],["faun.pub",118],["fossa.io",118],["freecodecamp.org",118],["fritz.ai",118],["getadblock.com",118],["levelup.gitconnected.com",118],["greylock.com",118],["headmelted.com",118],["helium.com",118],["howwegettonext.com",118],["iheart.com",118],["injusticetoday.com",118],["insightdatascience.com",118],["iota.org",118],["itnext.io",118],["itsyourturnblog.com",118],["jupyter.org",118],["keepingstock.net",118],["kiwi.com",118],["learngoprogramming.com",118],["learningbyshipping.com",118],["ledwards.com",118],["legalist.com",118],["logrocket.com",118],["mapbox.com",118],["medium.com",118],["melmagazine.com",118],["mondaynote.com",118],["newco.co",118],["news.smugmug.com",118],["nyulocal.com",118],["ofdollarsanddata.com",118],["okmeter.io",118],["open.nytimes.com",118],["javascript.plainenglish.io",118],["postlight.com",118],["proandroiddev.com",118],["prototypr.io",118],["rainway.io",118],["sagefy.org",118],["signalvnoise.com",118],["slack.engineering",118],["slackhq.com",118],["springboard.com",118],["standardnotes.org",118],["startupsventurecapital.com",118],["stoplight.io",118],["tech.buzzfeed.com",118],["theabacus.io",118],["theawl.com",118],["thebigroundtable.com",118],["thebillfold.com",118],["thebolditalic.com",118],["thecontrol.co",118],["theringer.com",118],["thinkprogress.org",118],["thriveglobal.com",118],["timeline.com",118],["towardsdatascience.com",118],["udacity.com",118],["unpatent.co",118],["usejournal.com",118],["uxdesign.cc",118],["uxplanet.org",118],["warisboring.com",118],["wearemel.com",118],["whatahowler.com",118],["x.company",118],["blog.canopas.com",118],["blog.dp6.com.br",118],["blog.angular.io",118],["thetaoist.online",118],["writingcooperative.com",118],["tech.ahrefs.com",118],["hardware.info",119],["tunein.com",120],["skidrowreloaded.com",121],["myanimelist.net",122],["apps.jeurissen.co",123],["librospreuniversitariospdf.blogspot.com",124],["lvturbo.com",124],["sbbrisk.com",124],["sbface.com",124],["sbspeed.com",124],["streamsb.net",124],["camcaps.to",124],["vtplayer.net",124],["weakstream.org",124],["camcaps.io",124],["selfstudyhistory.com",125],["selfstudyanthro.com",125],["android1pro.com",125],["gakki.me",125],["tunegate.me",125],["celebzcircle.com",125],["sertracen.com.pa",125],["pitesti24.ro",125],["samsungtechwin.com",125],["cours-de-droit.net",125],["iptv4best.com",125],["blogvisaodemercado.pt",125],["kapitalis.com",125],["tiempo.hn",125],["winmeen.com",125],["ibps.in",125],["visse.com.br",125],["javsubtitle.co",125],["learninsta.com",125],["licensekeys.org",125],["mediahiburan.my",125],["tipssehatcantik.com",125],["jbjbgame.com",125],["viatasisanatate.com",125],["ziarulargesul.ro",125],["globaldefensecorp.com",125],["gossipnextdoor.com",125],["coffeeapps.ir",125],["media.framu.world",125],["immobiliaremia.com",125],["colegiosconcertados.info",125],["bigdatauni.com",125],["riwyat.com",125],["rukim.id",125],["visefierbinti.ro",125],["theaircurrent.com",125],["ncert-solutions.com",125],["ncertsolutions.guru",125],["nocturnetls.net",125],["clockks.com",125],["ananda-yoga.ro",125],["poolpiscina.com",125],["infodifesa.it",125],["getective.com",125],["flashdumpfiles.com",125],["formatatmak.com",125],["drkrok.com",125],["alphagirlreviews.com",125],["kitchennovel.com",125],["voxvalachorum.ro",125],["cracksone.com",125],["day-hoc.org",125],["onlineonderdelenshop.nl",125],["primicia.com.ve",125],["tech-recipes.com",125],["afrikmag.com",125],["maduras.vip",125],["aprendeinglessila.com",125],["kicknews.today",125],["koalasplayground.com",125],["hellokpop.com",125],["hayatbilgileri.com",125],["moneyexcel.com",125],["placementstore.com",125],["neuroteam-metz.de",125],["codedosa.com",125],["liveyourmaths.com",125],["newspao.gr",125],["ieltsliz.com",125],["programasvirtualespc.net",125],["tempatwisataseru.com",125],["wikiofcelebs.com",125],["jornaljoca.com.br",125],["arcanescans.com",125],["filmzone.com",125],["hiraethtranslation.com",125],["kaystls.site",125],["home.novel-gate.com",125],["plural.jor.br",125],["evreporter.com",125],["sinhasannews.com",125],["viewsofgreece.gr",125],["rozbor-dila.cz",125],["piklodz.pl",125],["secondlifetranslations.com",125],["ferroviando.com.br",125],["counciloflove.com",125],["infokik.com",125],["kulinarnastronamocy.pl",125],["jafekri.com",125],["ezmanga.net",125],["truyenbanquyen.com",125],["bingotingo.com",125],["joysound.com",125],["velicu.eu",125],["anascrie.ro",125],["guidingliterature.com",125],["cabinetexpert.ro",125],["lokercirebon.com",126],["loginhit.com.ng",126],["duolingo.com",127],["sythe.org",128],["tileman.io",130],["dreamsfriend.com",131],["apk1s.com",131],["mercenaryenrollment.com",131],["xossipy.com",131],["8muses.com",132],["gridcoinstats.eu",133],["online2pdf.com",134],["1fichier.com",135],["forum.release-apk.com",136],["elektrikmen.com",137],["th-world.com",138],["hotcleaner.com",139],["cssreference.io",140],["hitproversion.com",141],["techsini.com",141],["operatorsekolahdbn.com",141],["themosvagas.com.br",141],["appd.at",141],["lazytranslations.com",142],["faloo.com",143],["janvissersweer.nl",144],["spanishdict.com",145],["bwitter.me",146],["outlook.live.com",147],["naaree.com",148],["nusantararom.org",149],["mail.tm",150],["web.skype.com",151],["lightnovelpub.com",152],["streamservicehd.click",153],["eplayer.click",153],["olacast.live",153],["kooora4lives.net",[153,157]],["kooora4livs.com",[153,157]],["allcryptoz.net",154],["crewbase.net",154],["crewus.net",154],["shinbhu.net",154],["shinchu.net",154],["thumb8.net",154],["thumb9.net",154],["topcryptoz.net",154],["uniqueten.net",154],["ultraten.net",154],["tarnkappe.info",155],["airbnb.de",156],["safirsoft.com",158],["surreyhillsgrocer.sg",159],["mgsm.pl",160],["entra.news",161],["microsoftsecurityinsights.com",161],["substack.com",161],["ntuplay.xyz",162],["adslink.pw",163],["jpopsingles.eu",163],["phimlongtieng.net",164],["hket.com",165],["shortform.com",166],["verfutebol.net",167],["financasdeouro.com",167],["webnovel.com",168],["canalnatelinhaonline.blogspot.com",169],["snbc13.com",170],["embed.reddit.com",171],["jpost.com",172],["9now.com.au",173],["teamkong.tk",174],["embibe.com",175],["animesaga.in",176],["seriesperu.com",177],["playertv.net",178],["warungkomik.com",179],["themeslide.com",179],["gdrivedescarga.com",180],["appimagehub.com",181],["gnome-look.org",181],["store.kde.org",181],["linux-apps.com",181],["opendesktop.org",181],["pling.com",181],["xfce-look.org",181],["expquebec.com",182],["photopea.com",183],["marinetraffic.com",184],["streambuddy.net",185],["ncrtsolutions.in",186],["studiestoday.com",187],["teachoo.com",188],["pendulumedu.com",189],["ipphone-warehouse.com",190],["techcrunch-com.translate.goog",191],["crunchyroll.com",192],["mskmangaz.blogspot.com",193],["myntra.com",194],["esscctv.com",195],["karistudio.com",196]]);

const entitiesMap = new Map([["fmovies",125],["extreme-down",129],["vidmoly",176]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
