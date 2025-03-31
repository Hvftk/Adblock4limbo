/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

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

// ruleset: irn-0

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["","a[href^=\"https://arongroups.co/\"]\na[href^=\"https://arongroups.site/\"]",".ads_link8",".blog_center_bar > center > a[href*=\"eramblog.com/action/static_ads\"]",".hamsandiv",".blog-home-ads-blog","a[href^=\"https://eramblog.com/direct_link/?ads=\"][rel=\"nofollow\"][target=\"_blank\"]\ndiv[class^=\"ads_link\"]","div.blog-home-ads-blog","div.main_content[style=\"border-radius:10px;\"]:has(> div[style=\"padding: 10px; text-align:center; font-size:13px;\"])","bloglinkdumpblock\nbloglinksblock","body > div:first-of-type:has(a[style][href^=\"www.parsiblog.com/adv\"])","div#ZAD","div.single-text-ads","div.block-content[class*=\"a.d.s-sidebar\"]","div.b-cont > div.download-link-ads-below","div#modal_container > span.a-modal-backdrop","div#BodyMain > div#Body > div#Content > div[style] > div.Box:has(> div.CenterSmall > div.AdsBanerDiv)","div#mobile-headerads","div.footer-ads","div#topads","div.side-ads","div[style=\"text-align:right; margin:10px;\"]:has(> a[href=\"http://ads.aftab.cc\"])","div.panel:has(> div#collapse_Linkestan)","div.ml-4.space-right-delt > div.bg-all-box:has(> div.yn-bnr)","a[onclick^=\"increase_ad_click_count\"]","div.back_links","figure.size-full.wp-block-image",".ads-side","#kaprila_linktable","#popular",".lolo",".app_ads_banner","div.app_ads_banner","a[href*=\"nobitex.ir\"]",".right-sidebar > p > a > img[title=\"رپورتاژ\"]",".baner",".tab_news > a[href*=\"gameup.ir\"]","x","div.click1000_allcontent",".e3lan",".kpl_linktable","#left2","#ads",".content-box",".box[class^=\"asan\"]","article.post.game:not(:has(.button, .post-cat))",".text-asan",".header-ad",".top-ad",".mks_ads_widget",".webgardi",".bottom-ad","header + div#slider","div.ads","div#ads-sticky",".yn-bnr","#pos-article-display-66259",".ag-agah",".announce","div[type=\"aparat\"]:has(> .link)",".dsp-ad",".side-ads",".promote-puls",".banner-container","#footer_js_d1",".col-sm-3 > .block > .img:not(:has(a[href*=\"aftabir.com\"]))",".co-ads",".pt-3.text-center.py-2.bg-all-box",".text-center.py-3.bg-all-box",".ads-text-sid",".ads-post",".link-paeen",".adv_l",".adv_r_news2","#toshare-dl-link",".textads","div.download_ad_box","div.arh_appad","#text-25",".main-zxc","[id^=\"linkcat\"] > ul > li:not(:has(a[href*=\"apktops.ir\"]))",".asiatech","div.sidebar_ads","div[data-viewport-type=\"element\"] > div > div[class^=\"DialogAd_DialogWrapper\"]","div[style]:has(> iframe[src=\"/ddd.html\"])","aside > div.sec_right > div.menu_box > div.margin > ul > li:has(> a[href*=\"bargozideha.com/reportage/\"])","#middlead",".vfozk",".stream-item",".stream-item-widget","[href*=\"bourse24.ir/ads/click/\"]",".ads-margin-bot",".banner",".abox","#iddivtoplevelscript","div[style]:nth-of-type(3)","div.mp_box:has(> div.mpbb_ads a[target=\"_blank\"] > img[alt][title])",".parent_txt_adv_container2","div.zxc","div.all_adv","section.reportage","div.others_web","#featured > .owl-stage-outer",".linkbox",".alert-dismissible","div.text-center.col-md-3 > .paddingAll10.panel-success.panel","div.selected-news:has(> div.txt_adv_parent)",".bdaia-e3-container",".widget_text.bdaia-widget.widget","#ad-hoc-2","#headerbar","#bil_fix_top_pc",".countclick","div[class^=\"pcfadv\"]",".content-slider",".hamsan-container",".m-banner-r",".c-ads-banner",".leftads",".col-md-3 > .panel > .tarh-forosh\n.col-md-3 > .panel > center","img[alt=\"ad banner\"]",".mtn-ads-content-sticky","figcaption","#custom_html-51",".ads-block","script[id^=\"wpcp_\"]",".ads-sticky",".ads-sidebar","#ADbox-1",".pm",".box-title",".moreads.widget_text",".ads-box",".ads-content",".after-post-ads",".block-simpleads",".banner-cafe",".center-talgh",".clads-inner","div[id^=\"topic_\"] + div:not([id]):has(a[class=\"\"][target=\"_blank\"])","div.col-md-12 > div.sidebar-box:has(> div.row > div.text-center > a[target=\"_blank\"][title] > h4.text-dark[style])","a[rel=\"nofollow\"]:has(> img[title=\"تبلیغات\"])","div.adv","div#kaprila_linktable","div#mediaad-vFkp",".adsboxfix","div[style*=\"position: fixed; right: 0px; bottom: 0px;\"]:has(> .close-fixedSd)","a[href^=\"https://zaya.io/\"]",".ads-link","div[id^=\"ads\"]",".index-adstop > a:not([href*=\"dlrozaneh.ir\"])",".bd-adsbar",".delta-top-content-ads",".delta-content-ads",".digiBannerArea","[href*=\"/banners/click/\"]",".weblink",".skip-container p:not(:has(a[href*=\"1da.ir\"])):has(img)",".left.col-md-4",".khp-site-info p",".phoenixad","a[rel=\"dofollow\"]","div.aspace[style]","[id^=\"pos-article-display-\"]\nsection li:not(:has([href^=\"https://download1music.ir/\"]))",".d1yekta","div[itemtype=\"https://schema.org/WPAdBlock\"]","div.ads_area_small_banner > div.col-xs-12:has(> div.shbanner_cover)","div.ADS_wrapper","div.blog_wrapper","div.single_post_small_banner","div.single_post_banner",".widget_custom_html.widget.widget_text",".mom_custom_text.widget",".widget_custom_html.widget.primary-sidebar-widget.w-t.h-ni.widget_text",".widget_text.widget.primary-sidebar-widget.w-t.h-i","#home-2-col > .bs-vc-wrapper > .vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column",".widget_nav_menu.widget.primary-sidebar-widget.w-t.h-ni","[href^=\"/advertisements/triggered/\"]",".zxc",".zxc-m",".custom-ad-one",".top-ads",".ads-fix-post",".ads-matni","#page-content > .wpb_row:has(a[href*=\"faradars.org\"])","#faradars","div#header-bar","div.slider-tab-ring:has(> div.textwidget p > a)",".Js_Div5",".homeMainBanner",".todaysNewsList__sidebar","div#ProductListPagesWrapper > section > div[class^=\"product-list_ProductList__pagesContainer\"] > div[class^=\"product-list_ProductList__item__\"]:has(> a[href*=\"?ad_variant_id\"])\ndiv#ProductListPagesWrapper > section[class*=\"product-list_ProductList__sidebar__\"] > div.sticky-outer-wrapper > div.sticky-inner-wrapper > a[href*=\"?ad_variant_id\"]","div.kt-inset-banner","div[class^=\"post-list__items-container\"] > div[class^=\"full-width\"] > a[class=\"\"][href^=\"https://a-banners.divar.ir/auction/\"]\nmain > div[class^=\"item\"]:has(img[src*=\"divarcdn.com/ssp/ads/\"])","div.adsfix_box","aside.lefts_sides:has(> div.txt_letfs > ul.ads_txtcv)","div.popup-ads","article#post-fix-ads","div.top-full-ads","div.textwidget:has(> div.parsi-ads)","div.chatlist-parts > div.chatlist-top > ul.ads-dialog-box",".emojo-ad",".pzbkcvuqrn","#middle a > img[title*=\"تبلیغات\"]","#sidebar a:not([href*=\"elmevarzesh.com/\"]) > img[width=\"300\"][height=\"200\"]",".col-md-8 a:not([href*=\"elmevarzesh.com/\"]) > img[width=\"728\"][height=\"90\"]",".left_pos_mod > .l_box.imgs",".r_box:has(p)",".newstopads",".centernews_soc",".text-ads",".sidebar-home:has(.ads_0)",".all_ads",".advertise-place",".province-advertise","main > div:has([href*=\"/advertising/\"])",".adv",".adv-ttl","[class*=\"text_ads\"]",".fix-ez",".ezp30-ads","#ynpos-10831",".ads",".medicaldirectory-sidebar:nth-of-type(5) > .claims.sidebar-content > .cbp-l-project-details-title > span","div.medicaldirectory-sidebar:nth-of-type(6) > .claims.sidebar-content > .cbp-l-project-details-title > span","div.tabligh","div.txt_adv_content","[href^=\"/advertisements/\"]",".advs-wrapper","div.ads-sec","div.heightAds","div.bottomTextAdv","div.ads-sec-web","div.textwidget > div.ads","#head728","#ad728","#ad640a","#ContentPlaceHolder1_divBanner",".widget-ad-image",".ads-bottom","div.avdDiv","div.banner-ads","div.ads-content","div#ADbox-1","div#phon","div.floating-banner","a[href=\"https://maktabsharif.ir/\"]","div.col-md-12 > div.card:has(> a > img[src$=\".gif\"])",".ad-custom-size",".ad-cat","div.ad-cat:not(div.ad-custom-size)","section.player-container div.filimo-logo-filimo",".flex-ad-body",".container55","article > .box > a[href*=\"salampnu.com\"]",".adrightPanel",".abvertise > .container > a:not(a[href=\"https://t.me/filmha_top\"])","div.ads-row-left",".ads-banner",".custom",".customads",".talfighat-row",".ul-talfigh-con",".inline-news-box",".header-adv",".txt-adv-box",".zxc-visible-fixed",".zxc-stik",".others_media",".sticky_notify2",".news_slider_sec2",".webgardi_adv",".results__a",".FixedAdvertising",".left_ads",".right_ads",".top_ads",".left.sidebar_widget:nth-of-type(3)",".advertisement",".pull-right.zm-post-lay-a-area",".header-mdh",".eif:not(:has(a[href*=\"farnet.io\"]))","#site-footer .col-sm-4:has(a[rel=\"noopener\"][target=\"_blank\"])","nav.site-top-nav > ul.grid-row > li:has(> a[rel=\"dofollow\"])","div[class^=\"not-first\"] a[rel^=\"sponsored\"]","div#rt-download:has(> div#ZAD)","a[target=\"_blank\"]:has(> img[src*=\"/Gif/\"][src$=\".gif\"])\na[target=\"_blank\"]:has(> img[src*=\"/files/\"][src$=\".gif\"])",".post-ad-box",".card-ads",".bottom-ads",".meta-ad",".herald-ad",".herald-ad:not(:has(a[href*=\"kurdsoft\"])):not(:has(a[href*=\"7ganj.ir\"]))","div[class*=\"linkads\"]",".size-full.attachment-full",".aligncenter.wp-image-9273.size-full",".zxc_home",".zxc_news",".zxc_left","#next1-231",".asd_top",".fl.block_right > div.box_sh.ads_2",".ads_2","#ads-main-home",".ads-img",".page-ads",".banner-ads","[href^=\"/ads/\"]",".sidebar_tabliq","header.header-part div.banner:has(> div.d-table-cell > a.d-block > img)","section#top-banners","section#image-advertise","div.content-ads","div#fix-advertise","div.single-advertise",".tads","div.post:has(a[href^=\"https://www.tarhdokan.com/\"])","ul#tabligh","ul#tablighc",".ads-top",".ad-cell",".widget_text","#ad14","div.full-ad-box","aside.sidebar .widget:has(a.external)",".tabliq",".logo-ad","div.container > div.ads","div.box:has(> div.ads)",".sticky-ad",".doctor-ads-item",".ads.box","#ads-container","div.advertising","div.responsive-image:has(> a[rel$=\"sponsored\"])","div.t3-contentwindows1:has(a[target=\"_blank\"] > img[src$=\".gif\"])",".advert-image",".block-advert",".advert-wrap",".q2am-page-advert",".ads-div-block","#floating-region-zone",".sin-part","[href^=\"/redirect/ads/\"]","div[class^=\"cr-banner-\"]","div[class^=\"css-\"][dir=\"auto\"][data-testid=\"favoritesSuperAppTitle\"]\ndiv[class^=\"css-\"][dir=\"auto\"][data-testid=\"favoritesSuperAppTitle\"] + div[class^=\"css-\"]:has(> div[class^=\"css-\"] > div[class^=\"css-\"][style] > div[class^=\"css-\"][tabindex=\"0\"][style=\"transition-duration: 0s;\"])\ndiv[class^=\"css-\"][tabindex=\"0\"][style=\"transition-duration: 0s;\"]:has(> div[class^=\"css-\"] > div[class^=\"css-\"] > div[class^=\"css-\"][style] > div[class^=\"css-\"][dir=\"auto\"][data-testid=\"yourGoodMood\"])\ndiv[style]:has(> div[style] > div[style] > div[tabindex][role=\"link\"] > img[alt=\"Advertisement\"])",".primary-sidebar-widget:has(a[rel*=\"sponsored\"])",".secondary-sidebar-widget:has(a[rel*=\"sponsored\"])",".type-resource-image",".advertise_default",".tab_box",".links_footer",".banner468","#header_ad",".sb_ad","#sidebar-alt","a[href^=\"https://www.iranjib.ir/ra.php?adid=\"]:not([title=\"اینستاگرام ایران جیب\"])\ndiv[id^=\"pos-article-display-\"][style=\"min-height:400px\"]","div.CenterBlock:has(> div.Tadsb2)","div.zxc_mb","div.text_adv",".adv_title","div.owl-item:has(> li[id^=\"ad\"])","section.box.ads","#slideshow[class=\"rounded\"]","#banners-position-14",".adstop","script[id^=\"wccp_\"]",".download-dialog",".content_item:has(a[href*=\"/category/ads/\"])",".sidebar-area .image","div.video-area > div > div.d-flex:has(> a[href^=\"/c/\"][aria-label=\"bebin\"] > img)",".stream-item-top-wrapper","#block-3","#block-4","li:has([href^=\"https://jalebamooz.com/reportage/\"])",".col-xs-36.col-sm-4.col-md-4.col-lg-4",".hidden-xs.col-sm-4.col-md-4.col-lg-4",".widget_custom_html","aside:nth-of-type(2)","div.c-forceToLogin__message","div.c-forceToLogin__overlay","div.ads-list","a[href^=\"/advertisements/triggered/\"]",".news-bottom-link",".top_img_ads",".ads_bt_box",".ads_singles_post","#top-ad","#box358",".mrauto",".position-g5",".ads-containter","#textads-contents","[class^=\"zxc\"]",".sticky_notify","div[id^=\"tabligh\"]",".size-large.attachment-large",".elementor-element-d41b3d1",".adsside",".mobile-fixed-banner",".ads-placment","[href^=\"/nf/sponsor/\"]",".track-click","#ads_f","#banners_120_top_1","#block-block-120","div.wideheader-b1:has(> div.bannercontainer)","div.mobileBanner","#header-ad",".bg-gray-links.box","#ads-container > .list-thumbs.title-only.list.box",".widget_custom_html.widget.container-wrapper.widget_text",".inline_ads","div.type-resource-image:has(> a[href^=\"/advertisements/triggered/\"])","div.peyvand","div.white-block:nth-of-type(2)","div.main > div.box:has(> p > a[href=\"http://botsaz.com/\"])","div.im-header-ad","div.im-top-ad","div.im-entry-top-ad","div.ribp-banners","#table4 > tbody > tr > td > table > tbody > tr > td > center","table#table9.bgtable:nth-of-type(13)","#table10\n#table10 > tbody > tr > .textBoldColor",".bgleftmenu > div > div","div.btn-app","a[href^=\"https://bit.ly/\"]",".down-box-ads",".down-box1",".singleads",".type-sticky.status-publish",".msg_ad_explain",".msg_ad_subject",".msg_ad_pictorial",".adbar","#custom_html-4","#text-31","#text-35",".ads-widget","div.post-content > div.fusion-builder-row-1 > div.fusion-row:has(> div.fusion-layout-column a[data-wpel-link=\"external\"])","div.blur-text","div.widget-ad-image","div.ad-wrap","div[class^=\"yektabanner\"]\ndiv[style]:has(> div.yn-bnr)","div#Abox-mobo",".adBox","section.adBox:has(> div.row > div > a[rel$=\"sponsored\"])","section.ads","div.e3lan","div.widget#text-15","div.ads_fix_top","div.text_ads_box","a[href=\"http://www.asalchat.skin\"]\na[href=\"https://www.tarhpardaz.ir\"]",".opanel-ads",".srjtbaungo",".banneritem:has(a[href*=\"/banners/click/\"])",".eb-inst",".sezfvg","#sezfvg-2",".sticky-column:not(:has(a[href*=\"modirnameh.ir\"]))",".news-col-2 .related-news",".ads-full-banner-img",".b",".apnl","#bottombanner",".txt-ads-sl",".adlink",".adstext",".maincontent > center","tbody","#titr-box",".adsfix_box",".widget_text.widget",".adwrap-widget","#text-13","[id^=\"ad\"]","#ads__bottom_of_the_header",".sponsors","#sponsor_wrapper","div.banner_v",".mdiaad","section.sidebox:nth-of-type(4)",".text-center.mt-3.py-3.bg-all-box",".alert-new","center:nth-of-type(2)",".col-xs-12.col-md-6.main-sidebar > center","div#contents a[rel$=\"sponsored\"]","div#Ads_Fix_pnlMain","div.is_ads","div.ads_posts",".txt-box:has(> .txt_adv_content)","#advertise","#promotion",".widget-ad",".boxads",".stream-item-above-post","#text-5",".advertorial","div.up-ad","div#forum-native-ad","div.ad-wrapper",".footer__subscribe",".banner_sidebar",".box-ads-single","div.box-tag-single:nth-of-type(2)",".box-custom.box_other","aside > div.border-t:has(> div#ads-sidebar-top,  > div.backlinks)",".featured_news",".zxc_matni",".adspanel","div.big-banner","div.advertop","div.ssad","div.block-simpleads",".dlbtnhidden",".multi-ads-container",".ad--content",".ad__header","#ads-120",".block-ads",".block-ads2",".block-ads4",".navad",".ytn-hamsan",".my-single-t-p",".dailylink","body > div > font\ncenter > center > center > center\ncenter:nth-of-type(2) > center\ndiv > font > font > font > p","div > font > font > .menuheader","div#header-ad1","div.adcontainer div#p30konkor-ads-p > div.bs-vc-wrapper > div#bf-color-white:has(p > a[rel=\"noopener\"]):not(:has(a[href*=\"p30konkor.com\"]))\ndiv.adcontainer div.vc_row:has(div[itemtype$=\"AdBlock\"][data-adid]):last-of-type","div#sponser-dl-btn",".dtnoppu","section.banners",".adsblockpop","section.textAds",".aa-container","div[class^=\"topadvers\"]","div.tab.sidebar-box:nth-of-type(2) > .sidebar-box-content\ndiv.tab.sidebar-box:nth-of-type(2) > h3",".ADS_header_all",".download-link-ads-below","[id*=\"kaprila\"]\naside > div:has(a[href*=\"links.p30download.ir\"], a[class][target=\"_blank\"][title][rel=\"nofollow\"])\naside > div:not(:has(a[href*=\"/entry/\"]))","div.copyright-wrapper > div#copyright > a",".ads_box",".ads-text","a[href*=\"&m_name=ads\"]","div.dotline-sticky","div.wblock > a[href*=\"patoghu.com/repotaz/\"]",".widget_whmcs_ads_widget.widget",".wpb_content_element.sidebar.wpb_widgetised_column",".topbanners",".agahi-view",".adv_img",".ad_global_header",".body_wrapper > div:nth-of-type(4)","article.fixedadv:not(:has(> div.fixedadvcontent > a[href=\"https://www.youtube.com/c/Par30Game\"]))","section.sidebar-box-shop","div.adbox","div.post-ads","div.sidebar-ads","div.ad_global_header","div#ad_global_below_navbar","div#ad_global_above_footer","div#custom_html-4",".main22",".up_submit > span","div#ads1","div[class*=\"company_company__ads--ab\"]","main > div.container-fluid.my-3:has(> div.row.mb-2 > div.col-lg-4 > a[target=\"_blank\"] > img.w-100[style=\"border-radius: 10px;\"])",".fara-main",".bannermiddle",".mybannerimg",".c-advertisement","div[class*=\"blockByVisit_blockByVisit__container\"]\ndiv[class^=\"RequireAuth_mainBox\"]",".ads.big_post",".cat",".advertising","#middle-ads",".txtad",".center.body_c > div > div\n.center.body_c > div:nth-of-type(2)","div.side_txt_zxc","ul#rssbank",".widget_better-ads",".adloc-is-banner",".adv-box","section.ads-section","#block-block-22.ads","div.vw_d","div.home_middle4","div.shortcode-wrapper > p > a.backlink-into",".box_ads","div.ecbox2:has(> div.ec_body2 > div.adswrapper)","div.ecbox:has(div.ads_text, div.text-ads)","a[target=\"_blank\"][href*=\"utm_content=shahrekhabar\"] > img[style=\"margin-top: 0px;margin-bottom: 0px;margin-left: auto;margin-right: auto;\"]","div.sk-section:has(> div[class*=\"sponsor-\"])","div.container-ads","div.left-ads","section.sidebar-left-item:has(> div.custom-html-widget > p > a[target=\"_blank\"][rel=\"noopener\"] > img)","div.adsLoader","a[href=\"https://academy-eris.com/\"]\na[href=\"https://sahamir-ac.com/\"]\na[href=\"https://sarafer.com/\"]\na[href=\"https://veriacco.com/\"]","div.banner:has(> a > img)",".qxsbniv",".ads2","div.top-banner",".vebgardi",".popup-box-wrapper","#block-views-shabake2-clone-of-ad-link-block","#block-views-ad-link-block-2",".field-name-ads-under-summery","#arasideadvertising",".left_banner",".links",".header_adv",".pb0.stickyscroll_widget",".homebar a[href=\"https://setare.com/%d8%aa%d8%a8%d9%84%db%8c%d8%ba%d8%a7%d8%aa/\"] > img",".cyt-ad-content",".b_box","[href*=\"/fa/ads/\"]","div[style=\"margin-bottom:10px\"]:has(> .txt_adv_content)",".adv_top",".textwidget","aside:nth-of-type(5)",".mnb_wrapper",".mauto_div","#inline_agahi_z0",".generalBoxStyle[data-element-name=\"FRONT_M\"]\n.generalBoxStyle[data-element-name=\"SHARE_NEWS\"]",".noagahi.otherMedia",".heading-ads",".sidebar-right > div.box:nth-of-type(1)",".no-mobile.out-container:nth-of-type(3)",".adv_mobile",".middle-ads",".top_adv",".side_adv","#header-ads",".bannergroup",".bannergroupsam-full-width",".OpenTable5",".GSAdsLR","div#advBan","div#advBan2","div#left_panel > div#RightPan:has(ul.adv_text)","a[class^=\"text-ads-\"]\np:has(> a[href^=\"https://shirazsocial.com\"])","div.backoritybase","div.dadsd","article.morders","div.right-body:has(> div.text div.adsr)","div.left-body:has(> div.text div.text-ads)","a[class^=\"skinak-text-ads\"]","div.footer-block-1:has(> a[class^=\"text-ads\"])",".bannerLarge",".banner9",".ads2col",".flexbanneritem","#g-top",".ads-title",".tz_ad300_widget","#ad7_40",".footer-ads",".b-hd","#sidebar_ad","#ads-text",".hideOnMobile",".hidden-xs.hidden-sm.block",".bannersHome","div#rt-backlinks-pos",".kanban-col",".col-md-offset-6.col-md-3","div.bnr-ads","div.col3:has(div.txt_adv_content)",".container_ads",".adss",".behtarinseo",".adcbar","[class^=\"adv\"]:not(.adv8, .adv19)",".side1:has(a[title][rel=\"noopener noreferrer\"])",".col-xs-12 > article:has(a[href*=\"/category/pr/\"])","div.shop-card.seller-element:has(> div.shop-info > div#vijhe_small)",".baners",".right-ads",".left-ads","#popbox-blackout","#box_1398",".inline-4d",".advertisment",".jmb_banner","div.ads-site","section#downloadbox > div#indicatorr",".tab-cpc",".tab-dpd-post","div[class^=\"ads\"]",".sidebar-banners",".inner-wrapper-sticky > .mb-3","#cycle_adv_tabnak",".rmp-ad-container","div.mask",".stream-item-mag.mag-box",".stream-item-above-post.stream-item",".content-container:has(.ad-reportage)","#fpc-banner-top",".square-ad",".square-ad:not(:has(#featured-posts))","#top-right-ad",".light-text.footer-widgets",".ads-box-red",".ads-box-green",".slider-banners.partial",".sponsor-link","ul.advertise","div.bottom-left-ad","div.bottom-right-ad","div.tjads",".AdsContainer",".ad-item",".ads-footer",".Topadver",".link-ads","section#LeftPanel > div.leftads","#text-2","#text-3","#text-4","#text-6","#text-7","img[alt=\"ads\"]","li.ad-link","a[href*=\"utm_source=uptrack\"]",".free_ad_con",".footer-back-link",".logo_full_view","div.upbu",".special_links",".text_adds_container","#tabligh","div.sideheader2:nth-of-type(3)",".full2.box.right","div#popupModal","div.modal-backdrop","div.style-text-adv","div.col-ms-36 > section:has(div.txt_adv_content)","div.row > section:has(a[href*=\"/ads/redirect/\"])",".zxc_top","div.mnb:has(a[href^=\"/advertisements/triggered/\"])",".tabligh","div.js-userLogin-popup","div.is-justify-content-flex-end > a#js-register-button + div[style]:has(> input[placeholder^=\"شماره موبایل\"])","div#ads__start_of_the_post",".headads",".fixpost",".gsh",".ads120",".ads468","a[href^=\"/url/\"][target=\"_blank\"]:has(> img)",".left-side-ad-col",".adbox:not(.adbar)","a[href^=\"/ad/\"][target=\"_blank\"]","a.textad","div.tb-box","div.topAds","div.colRight div[class^=\"adsBox\"]","#text-12","#text-24",".ads-image","#slider-box",".mortabet-links","div.row:nth-of-type(2) > .col-xs-12 > .category-side-ads",".two-ad-banners",".adsBanner",".widget_media_image.widget.container-wrapper","#kaprila_linktable_left",".left-block-top",".advertisements",".row.fixed-post.post",".sidebar-textads","div.header-banners",".home-ads",".sidebar-ads",".BannerA","#BannerHome","div[id^=\"BehinAva\"]",".DetailArea > .AdAreaDetail",".sideads","div[class^=\"sc-\"]:has(> div[class^=\"sc-\"][rowcount][columncount] > div[class^=\"sc-\"][maxwidth][maxheight])","div.zoomtech-banner",".new-banner",".pix_of_day","div[style=\"margin-top:4px;overflow:hidden;\"]\ndiv[style=\"margin-top:5px;margin-bottom:3px; overflow:hidden;\"]"];
const argsSeqs = [0,1,-2,-3,-4,5,-6,-7,8,9,10,11,-11,23,-12,13,14,15,16,-17,-18,-19,20,-21,22,24,25,26,27,-28,-29,30,-28,-43,-44,-45,46,28,-28,-253,-254,255,31,32,33,34,35,36,37,38,-39,40,-39,-496,-717,-718,-719,-720,721,-41,42,-42,325,-47,-48,-49,-50,51,47,48,-49,-107,-108,109,-52,-53,54,53,-53,196,-53,722,-53,723,-53,-734,735,-55,56,-55,523,57,-58,-59,-60,-61,62,61,-63,-64,65,66,-67,-68,69,-67,-68,-69,-482,483,-70,71,-70,-320,-321,322,-72,73,74,75,-75,-468,-469,470,-75,671,-75,-745,-746,-747,-748,749,-76,77,78,79,-80,81,82,83,-84,85,86,87,-88,89,88,-89,238,-89,-495,496,-89,-238,-764,-765,766,-90,91,-92,93,-92,-690,691,-94,95,96,97,-98,-99,-100,101,102,103,-104,105,106,-110,-111,-112,-113,-114,-115,-116,117,-118,119,-120,121,122,123,-124,-181,-770,771,124,-125,-126,-127,128,125,-127,132,-129,-130,131,132,-132,133,-133,-542,-654,655,134,135,-136,137,138,139,140,141,142,-142,510,-143,144,-145,146,147,148,-148,630,149,150,-151,-152,153,-154,-189,190,-155,156,156,-157,-158,159,-160,161,162,-163,164,165,-166,-167,-168,-169,170,-171,172,-173,174,-174,-581,582,-175,176,-177,-178,-179,180,-177,178,178,-178,-227,228,-178,-264,-265,-266,-267,-268,269,-178,383,-178,-296,-389,390,-178,-413,414,-178,-266,-394,460,-178,-227,265,-178,265,-178,-296,-297,-507,508,-178,603,-178,-296,611,-178,216,-178,-631,632,-178,-266,-508,-739,740,-181,-182,183,-184,185,-186,187,188,191,-192,193,-194,195,-197,-198,199,200,-201,202,-203,-204,205,-206,-207,-208,-209,210,-210,287,210,211,212,-213,-214,215,-216,217,218,-219,-220,221,222,-222,-332,343,-222,-343,-408,-409,410,-222,471,-222,332,-222,-604,-605,-606,607,-222,-609,610,-222,616,-222,-712,713,-222,741,223,224,-225,226,225,-227,-261,-262,263,227,-227,-550,551,-227,348,-229,-230,-231,232,233,-234,-235,236,237,238,239,240,241,242,-243,-244,245,246,247,-248,249,250,251,252,256,257,258,-259,260,264,-270,271,272,-273,-274,-275,-276,277,278,-278,-279,280,-281,282,283,284,285,286,-288,289,-290,292,291,293,-294,295,-296,-297,298,-299,-300,301,302,-303,304,-305,306,-307,308,-309,-310,-311,-312,313,314,315,-316,-317,318,319,323,324,326,-327,328,329,330,331,-331,-387,388,332,-333,334,335,-336,-337,338,339,-340,341,342,344,345,346,347,348,349,-350,-351,352,-351,-563,564,-351,731,-353,354,355,356,357,-358,359,360,-361,362,-363,364,365,366,367,-368,369,370,-371,-372,-373,374,-375,376,-377,378,-379,380,381,382,-384,-385,386,-391,392,-393,394,395,-396,-397,398,399,400,401,-402,-403,-404,405,-406,-407,780,411,-411,-654,-695,696,412,415,416,-417,-418,-419,420,-421,-422,-423,424,425,426,-427,428,429,430,-431,-432,433,-434,-435,-436,437,438,439,440,-441,442,443,444,445,-446,447,-447,-531,-532,-533,534,447,-448,449,-450,451,452,453,454,-455,456,-457,-458,459,461,-462,-463,464,465,-466,467,472,-473,474,475,476,477,-478,479,-480,481,-484,485,486,487,488,489,490,-491,492,493,494,497,-498,-499,500,501,-502,-503,-504,505,506,509,511,512,513,514,515,516,517,-518,-519,-520,521,522,524,-525,-526,527,-528,529,530,535,536,537,-538,539,-540,541,542,-542,-573,574,543,544,545,546,-547,-548,549,-549,715,-552,553,-554,-555,556,-557,558,-559,-560,561,562,565,566,-566,572,567,568,-569,570,571,-575,576,-575,608,-577,578,-579,580,583,584,585,-586,587,588,589,-590,591,592,593,-594,595,596,597,598,599,600,601,602,-612,-613,614,615,-617,618,-619,620,-621,-622,-623,-624,625,-626,627,628,629,631,-633,634,-634,635,-636,637,-638,-639,640,-641,642,-643,-644,-645,-646,-647,648,-649,650,-651,-652,653,-656,657,-658,-659,-660,-661,662,663,664,-665,666,667,668,-669,670,672,673,674,675,676,-677,-678,679,-678,-751,752,-680,681,682,683,684,685,686,-687,-688,689,692,693,694,-697,-698,-700,701,699,702,-703,704,-705,706,-707,-708,709,710,711,714,716,724,-725,-726,727,728,-729,730,-732,733,-736,-737,738,-742,743,744,750,-753,754,755,-756,757,-758,759,760,-761,-762,763,-767,768,769,772,-773,774,-775,-776,-777,778,779,780,781,782,-783,784];
const hostnamesMap = new Map([["~arongroups.site",1],["~arongroups.co",1],["blogsazan.com",2],["eramblog.com",6],["niloblog.com",9],["parsiblog.com",10],["appnab.ir",11],["androidify.ir",12],["moddinggame.ir",11],["androidtime.com",14],["appiroid.ir",16],["alibaba.ir",17],["aboutall.ir",18],["asbe-bokhar.com",19],["aftab.cc",23],["appreview.ir",25],["ana.press",26],["avapedia.com",27],["anzalweb.ir",28],["alldriver.ir",29],["asandl.com",32],["cafejozve.ir",37],["20file.org",38],["khoshamoz.ir",37],["androidparsi.ir",42],["artmusics.top",43],["arzcenter.com",44],["asemooni.com",45],["applicationha.com",46],["anaj.ir",47],["abadis.ir",48],["asriran.com",49],["androidzoom.ir",50],["20tayi.ir",52],["akharinnews.com",59],["harmonydl.us",61],["arga-mag.com",63],["icivil.ir",68],["plus.ir",69],["beautyhome.ir",70],["androidina.net",74],["car.ir",77],["downloadha.com",78],["tajrobe.wiki",77],["targoman.ir",77],["upsara.com",80],["uploadkon.ir",82],["uploadboy.com",84],["alamto.com",87],["power-music.ir",89],["androidgozar.com",91],["aparat.com",92],["mihanvideo.com",97],["aftabir.com",98],["aftabyazdonline.ir",101],["abipic.com",102],["mihandownload.com",105],["1abzar.com",110],["gadgetnews.net",112],["aftabnews.ir",116],["androidsharp.com",118],["ariapix.net",119],["my-film.pw",120],["tarfandha.org",124],["varoone.ir",126],["androidha.com",132],["accpress.com",134],["afkarnews.com",135],["apktops.ir",136],["barcanews.org",138],["web.bale.ai",139],["bargozideha.com",140],["bazimag.com",142],["bazdeh.org",143],["bikarsho.ir",144],["softsaaz.ir",146],["youc.ir",146],["ensafnews.com",147],["netpaak.com",149],["wikihoax.org",152],["~iranecar.com",147],["~pezeshket.com",147],["bourse24.ir",157],["b2n.ir",159],["timecity.ir",161],["bils.ir",164],["behmusic.com",166],["bultannews.com",167],["bartarinha.ir",168],["barato.ir",172],["buzdid.ir",173],["barsadic.com",174],["borna.news",176],["beytoote.com",177],["boyernews.com",185],["chibepoosham.com",187],["charbzaban.com",189],["chetor.com",190],["yasdl.com",191],["~chetor.com",195],["coffeeapps.ir",196],["sclinic.ir",200],["~webii.ir",201],["cooldl.net",203],["itgheymat.com",206],["~cooldl.net",207],["~sakhtafzar.com",209],["computeruser.ir",213],["citna.ir",214],["cannews.aero",215],["click.ir",217],["dadysite.com",218],["dana.ir",219],["darkroid.ir",220],["delta3da.cam",221],["persiansub.com",222],["real-madrid.ir",221],["dehlinks.ir",224],["dailymobile.ir",226],["drdmag.com",228],["dolatebahar.ir",229],["sourceiran.com",230],["daneshchi.ir",232],["dlrozaneh.ir",233],["deltapayam.com",234],["digiato.com",237],["delgarm.com",240],["payamekhabar.ir",242],["1da.ir",243],["1ea.ir",246],["themez.top",248],["download1music.ir",249],["digiro.ir",251],["dlfox.com",252],["dlbook.net",257],["delbaraneh.com",259],["rouzegar.com",261],["doctorwp.com",264],["donya-e-eqtesad.com",266],["ecoiran.com",270],["etemadonline.com",272],["eghtesadnews.com",273],["fardanews.com",276],["khabarerooz.com",283],["khanefootball.com",285],["khabarfoori.com",289],["mosalasonline.com",292],["moroornews.com",296],["mojnews.com",299],["55online.news",301],["sobhtazeh.news",306],["sharghdaily.com",308],["shomavaeghtesad.com",311],["shayanews.com",313],["varandaz.com",316],["downloadsoftware.ir",321],["downloadly.ir",324],["digiboy.ir",326],["dabi.ir",328],["www.digikala.com",329],["divar.ir",330],["doostihaa.com",332],["download.ir",334],["web.eitaa.com",337],["emojo.ir",338],["elmevarzesh.com",340],["etelanews.com",343],["gahar.ir",348],["mihand.ir",350],["eghtesademeli.com",351],["eghtesadepooya.ir",352],["rastannews.ir",352],["econews.ir",353],["ejiga.com",356],["emeil.ir",358],["ezp30.com",359],["e-teb.com",362],["imna.ir",363],["khabaronline.ir",366],["mer30download.com",371],["mehrnews.com",373],["shabakeh-mag.com",375],["salameno.com",362],["shmi.ir",380],["shahraranews.ir",383],["4tools.ir",362],["tebyan.net",362],["tasnimnews.com",385],["vipofilm.com",388],["brain.be-teb.com",390],["ravan.e-teb.com",391],["entekhab.ir",392],["itresan.com",394],["fartaknews.com",395],["mojnews.co",399],["parsnews.com",400],["tinn.ir",403],["eghtesadonline.com",405],["elmefarda.com",409],["~elmefarda.com",410],["emalls.ir",413],["mag.khanoumi.com",414],["~estekhtam.com",415],["enama.ir",416],["filmekade.ir",417],["fileboro.com",418],["fastmobile.ir",419],["ftdigital.ir",422],["forsatnet.ir",423],["~footofan.com",424],["footofan.com",426],["filimo.com",427],["filmino.me",428],["filmha.top",429],["footballi.net",430],["mybia4music.com",431],["~farskids.me",431],["~snapp.doctor",431],["freedownload.ir",432],["~video-learn.ir",434],["fararu.com",435],["fastdic.com",437],["freescript.ir",438],["faaltarin.com",443],["faceit.ir",444],["farnet.io",447],["farsroid.com",449],["farsnews.ir",450],["gameeroid.com",451],["games4online.ir",452],["gharbtv.com",453],["7ganj.ir",455],["~7ganj.ir",457],["getandroid.ir",458],["gold-team.org",459],["gostaresh.news",461],["gamesib.ir",464],["~gamesib.ir",467],["gooyait.com",468],["~gooyait.com",470],["gsm.ir",472],["gamefa.com",474],["en.gamefa.com",479],["ghatreh.com",480],["graphiran.com",481],["~gadgetnews.net",484],["hadese24.ir",485],["honarfardi.com",486],["~honarehzendegi.com",487],["harfetaze.com",488],["hamgardy.com",490],["hidoctor.ir",491],["hamshahrionline.ir",492],["irna.ir",492],["khabarvarzeshi.com",493],["salamatnews.com",492],["~hamshahrionline.ir",496],["~khabaronline.ir",496],["~sedayebourse.ir",496],["ivnanews.ir",497],["iica.ir",499],["~ifixit.ir",500],["irancircle.com",503],["iranstar.com",504],["itarfand.com",506],["imvbox.com",507],["my.irancell.ir",508],["idehalmag.com",509],["idehaltech.com",510],["iranart.news",511],["itna.ir",512],["imgurl.ir",513],["8pic.ir",516],["uupload.ir",519],["imemar.icivil.ir",521],["icoff.ee",523],["iranjib.ir",524],["irannaz.com",525],["ilna.ir",526],["~ilna.ir",528],["isna.ir",529],["itbazar.com",531],["~javan-musics.com",533],["jafekri.com",534],["podbean.com",535],["jeyran.net",536],["jabeh.com",538],["jalebamooz.com",539],["jahannews.com",543],["jesarat.com",545],["jobinja.ir",547],["kamapress.com",549],["khodrotak.com",550],["khodropluss.ir",551],["khaandaniha.ir",554],["khabareazad.com",556],["konkur.in",558],["konkur.info",559],["khodrobank.com",562],["kilipo.com",563],["khabarban.com",564],["khabarfarsi.com",565],["kojaro.com",569],["koolakmag.ir",572],["tourismonline.co",573],["khabarpu.com",577],["ketabesabz.com",578],["kalakamuz.ir",579],["kafebook.ir",580],["k2cod.com",584],["lennamusic.ir",588],["learnparsi.com",589],["listen2music.ir",590],["loudmusic.ir",592],["languagedownload.ir",593],["lamtakam.com",594],["lenzak.com",597],["lastsecond.ir",601],["~sourceiran.com",601],["mastertest.ir",602],["magiran.com",603],["mediat.ir",604],["musicdel.ir",606],["mobomod.com",607],["~miniroid.com",608],["miniroid.com",609],["p30day.ir",611],["sedayebourse.ir",616],["musicdays.ir",617],["magbazi.com",619],["maxstars.ir",621],["movienama.com",622],["minevisam.com",623],["moviemag.ir",624],["modirnameh.ir",626],["mobo.news",629],["mobile.ir",630],["montiego.ir",633],["~mybia4music.com",634],["mihangame.com",636],["majalesalamat.com",637],["mashreghnews.ir",639],["moderndl.com",640],["mihanmarket.com",641],["news.mihanmarket.com",642],["mihanfal.com",644],["myhastidl.cam",646],["nospam.ir",648],["nournews.ir",649],["najiremix.ir",650],["nex11music.ir",651],["nabzefanavari.ir",652],["namayesh.com",653],["~netnevesht.com",655],["~nicmusic.net",656],["nodud.com",657],["ninisite.com",658],["~ninisite.com",661],["niksalehi.com",662],["namnak.com",666],["omidnamehnews.ir",667],["prozhedownload.com",668],["pluginyab.ir",669],["payju.ir",670],["phonroid.ir",671],["peivast.com",672],["plaza.ir",673],["~plaza.ir",674],["parsfootball.com",675],["~parsfootball.com",679],["parsroid.net",680],["pichak.net",681],["p30konkor.com",684],["par30dl.net",686],["picofile.com",687],["parsnaz.com",688],["persiangfx.com",689],["p30afzar.com",690],["p30download.ir",692],["persianv.com",694],["radiojavan-iran.com",695],["~persianv.com",698],["pgnews.ir",699],["pedal.ir",700],["patoghu.com",701],["parstools.com",702],["taktemp.com",705],["parsipet.ir",707],["par30games.net",709],["p30world.com",712],["forum.p30world.com",714],["1pezeshk.com",717],["qnama.ir",718],["rasmio.com",719],["rasm.io",720],["rbiran.ir",722],["rozmusic.com",723],["rayamag.com",724],["rahnamato.ir",726],["rozblog.com",727],["sid.ir",729],["rozup.ir",731],["rokna.net",733],["roozno.com",735],["rond.ir",736],["rajanews.com",737],["safheeghtesad.ir",738],["shahrebours.com",740],["~shahrebours.com",741],["soorban.com",742],["shahrekhabar.com",744],["subkade.ir",745],["7sobh.com",746],["silasdl.ir",748],["safarmarket.com",749],["sabtta.com",750],["skyroom.online",751],["shanbemag.com",752],["sargarme.com",753],["~tamin.ir",753],["sariasan.com",754],["setare.com",755],["shereno.com",758],["sedayiran.com",759],["sornamusic.ir",761],["shomanews.com",763],["smusic.ir",768],["shirazsong.in",770],["snn.ir",771],["~tabnakjavan.com",772],["sakhtafzarmag.com",773],["seemorgh.com",775],["sarzamindownload.com",777],["softgozar.com",779],["subf2m.ir",782],["skinak.ir",784],["simcart.com",790],["shahrsakhtafzar.com",792],["sena.ir",795],["salamdl.rip",797],["sakhtafzar.com",802],["saednews.com",803],["1000site.ir",804],["tinroid.ir",806],["tejaratemrouz.ir",807],["tak3da.com",808],["takhfife.com",810],["tehranrasaneh.ir",811],["top90.ir",812],["technews-iran.com",813],["torob.com",814],["techfars.com",815],["varzesh3.com",818],["takblog.net",821],["yektablog.net",821],["titr.online",823],["topseda.ir",824],["techna.news",825],["texahang.org",826],["trainbit.com",827],["techrato.com",828],["tabnak.ir",831],["telewebion.com",832],["takhfifan.com",833],["toranji.ir",834],["~toranji.ir",838],["topnaz.com",839],["top2download.com",840],["tiwall.com",842],["tgju.org",844],["tejaratnews.com",847],["article.tebyan.net",848],["talab.org",849],["taknaz.ir",850],["uptrack.ir",851],["uplod.ir",852],["upmusics.com",855],["uplooder.net",856],["up44.ir",858],["vananews.com",860],["virgool.io",863],["vgdl.ir",865],["vajehyab.com",866],["vista.ir",867],["wisgoon.com",869],["webgozar.com",870],["wikisemnan.com",872],["~wikisemnan.com",874],["webii.ir",875],["webgoo.ir",878],["yun.ir",880],["zaya.io",881],["zendegionline.ir",882],["zibamoon.com",884],["zohur12.ir",888],["zoomit.ir",889],["zoomg.ir",889],["zoomtech.org",890],["oila.tj",891],["benawa.com",892]]);
const hasEntities = false;

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
