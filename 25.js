window.habitlab_content_script = true;

(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./src/components/call-to-action-button.deps.js":function(t,o,e){const{import_dom_modules:n}=e("./src/libs_frontend/dom_utils.ls");e("./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js"),n(e("./src/components/call-to-action-button.html"),"components/call-to-action-button.html"),e("./src/components/call-to-action-button.js")},"./src/components/call-to-action-button.html":function(t,o){t.exports="<link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <habitlab-dom-module id=call-to-action-button> <template> <style>:host{display:var(--call-to-action-button-display,inline-block);min-height:var(--call-to-action-button-min-height,38px);width:var(--call-to-action-button-width);margin:var(--call-to-action-button-margin,0 0 0 0)}.call-to-action-button{cursor:pointer;color:var(--call-to-action-button-color,#fff);background-color:var(--call-to-action-button-bg-color,#415D67);margin:0 auto;width:100%;height:100%;box-shadow:var(--call-to-action-button-shadow,2px 2px 2px #888)}</style> <habitlab-paper-button class=call-to-action-button on-click=buttonClicked>{{buttonText}}</habitlab-paper-button> </template> <script src=call-to-action-button.js><\/script> </habitlab-dom-module>"},"./src/components/call-to-action-button.js":function(t,o,e){const{polymer_ext:n}=e("./src/libs_frontend/polymer_utils.ls"),{log_action:_}=e("./src/libs_frontend/intervention_log_utils.ls"),{get_intervention:i,get_goal_info:s}=e("./src/libs_common/intervention_info.ls"),{close_tab_with_id:c}=e("./src/generated_libs/libs_frontend/tab_utils.js"),{get_tab_id:r}=e("./src/libs_common/intervention_info.ls");n({is:"call-to-action-button",properties:{goal:{type:Object},buttonText:{type:String,computed:"computeButtonText(goal)"}},ready:function(){this.goal=s()},buttonClicked:function(){if(this.goal.is_positive){_({positive:"habitlab-positive-goal-site-button clicked"});var t=this.goal.domain;-1==t.search("http")&&(t="https://"+t),window.location.href=t}else _({positive:"habitlab-close-tab-button clicked"}),c(r())},computeButtonText:function(t){return null!=t.call_to_action?t.call_to_action:t.is_positive?t.description:"Close "+s().sitename_printable}})},"./src/components/fb-scroll-block-display.deps.js":function(t,o,e){const{import_dom_modules:n}=e("./src/libs_frontend/dom_utils.ls");e("./src/bower_components/polymer/polymer.deps.js"),e("./src/bower_components/habitlab-paper-button/habitlab-paper-button.deps.js"),e("./src/components/habitlab-logo-v2.deps.js"),e("./src/components/call-to-action-button.deps.js"),n(e("./src/components/fb-scroll-block-display.html"),"components/fb-scroll-block-display.html"),e("./src/components/fb-scroll-block-display.js")},"./src/components/fb-scroll-block-display.html":function(t,o){t.exports="<link rel=import href=../bower_components/polymer/polymer.html> <link rel=import href=../bower_components/habitlab-paper-button/habitlab-paper-button.html> <link rel=import href=habitlab-logo-v2.html> <link rel=import href=call-to-action-button.html> <habitlab-dom-module id=fb-scroll-block-display> <template> <style>#container{height:50px;position:fixed;color:#fff;width:100%;top:0;right:0;z-index:99999;text-align:center;display:flex;align-items:center;justify-content:center;background-color:[[clr]];transition:background-color .25s}#habitlab_logo{position:absolute;left:10px;top:-5px;z-index:999999;margin-top:10px}.text_display{font-size:14px;align-content:center;text-align:center}#call-to-action{position:static;height:34px}#continue_scrolling{position:static;background-color:#415D67;color:#fff;height:34px;box-shadow:2px 2px 2px #888}</style> <div id=container> <div class=text_display style=color:#415D67;font-size:20px>You have spent </div> <div style=color:#415D67> <div style=display:inline-block;margin-left:20px;margin-right:20px> <div style=font-size:28px;margin-bottom:-4px>{{minutes}}</div> <div>min</div> </div> <div style=display:inline-block;margin-right:20px> <div style=font-size:28px;margin-bottom:-4px>{{seconds}}</div> <div>sec</div> </div> </div> <div class=text_display style=color:#415D67;font-size:20px>on <span>{{site}}</span> </div> <habitlab-logo-v2 id=habitlab_logo></habitlab-logo-v2> <div style=position:absolute;right:10px;top:7px> <call-to-action-button id=call-to-action></call-to-action-button> <habitlab-paper-button id=continue_scrolling on-click=continue_scrolling>Continue Scrolling</habitlab-paper-button> </div> </div> </template> <script src=fb-scroll-block-display.js><\/script> </habitlab-dom-module>"},"./src/components/fb-scroll-block-display.js":function(t,o,e){const{close_selected_tab:n}=e("./src/generated_libs/libs_frontend/tab_utils.js"),{load_css_file:_}=e("./src/libs_frontend/content_script_utils.ls"),{get_seconds_spent_on_current_domain_today:i,get_minutes_spent_on_domain_today:s}=e("./src/libs_common/time_spent_utils.ls"),{url_to_domain:c}=e("./src/libs_common/domain_utils.ls"),{polymer_ext:r}=e("./src/libs_frontend/polymer_utils.ls"),{get_intervention:a,get_goal_info:l}=e("./src/libs_common/intervention_info.ls");r({is:"fb-scroll-block-display",doc:"Block facebook scrolling",properties:{minutes:{type:Number},site:{type:String,value:l().sitename_printable},visits:{type:Number},clr:{type:String,value:"#95CBEE;"}},listeners:{},continue_scrolling:function(t){this.fire("continue_scrolling",{})},ready:function(){const t=this;var o=()=>{i().then(function(o){t.minutes=Math.floor(o/60),t.seconds=o%60})};o(),setInterval(o,1e3)}})},"./src/generated_libs/libs_frontend/db_utils.js":function(t,o,e){const{import_lib:n}=e("./src/libs_frontend/import_lib.ls");t.exports=n("db_utils")},"./src/libs_common/domain_utils.ls":function(module,exports,__webpack_require__){var ref$,gexport,gexport_module,url_to_domain,domain_to_url,out$=void 0!==exports&&exports||this;ref$=__webpack_require__("./src/libs_common/gexport.ls"),gexport=ref$.gexport,gexport_module=ref$.gexport_module,out$.url_to_domain=url_to_domain=function(t){return t.indexOf("://")>-1?t.split("/")[2]:t.split("/")[0]},out$.domain_to_url=domain_to_url=function(t){return"http://"+url_to_domain(t)+"/"},gexport_module("domain_utils",function(it){return eval(it)})},"./src/libs_common/time_spent_utils.ls":function(module,exports,__webpack_require__){var moment,prelude,ref$,getkey_dictdict,getdict_for_key_dictdict,getdict_for_key2_dictdict,getCollection,setkey_dict,getkey_dict,url_to_domain,get_days_since_epoch,get_session_id,gexport,gexport_module,get_seconds_spent_on_all_domains_today,get_seconds_spent_on_all_domains_days_before_today,get_seconds_spent_on_domain_all_days,get_seconds_spent_on_domain_days_before_today,get_seconds_spent_on_domain_today,get_minutes_spent_on_domain_today,get_seconds_spent_on_current_domain_today,get_visits_to_domain_today,get_visits_to_domain_days_before_today,get_visits_to_current_domain_today,get_new_session_id_for_domain,get_seconds_spent_on_current_domain_in_session,get_seconds_spent_on_domain_in_session,get_seconds_spent_on_current_domain_in_current_session,out$=void 0!==exports&&exports||this;moment=__webpack_require__("./node_modules/moment/moment.js"),prelude=__webpack_require__("./node_modules/prelude-ls/lib/index.js"),ref$=__webpack_require__("./src/generated_libs/libs_frontend/db_utils.js"),getkey_dictdict=ref$.getkey_dictdict,getdict_for_key_dictdict=ref$.getdict_for_key_dictdict,getdict_for_key2_dictdict=ref$.getdict_for_key2_dictdict,getCollection=ref$.getCollection,setkey_dict=ref$.setkey_dict,getkey_dict=ref$.getkey_dict,url_to_domain=__webpack_require__("./src/libs_common/domain_utils.ls").url_to_domain,get_days_since_epoch=__webpack_require__("./src/libs_common/time_utils.ls").get_days_since_epoch,get_session_id=__webpack_require__("./src/libs_common/intervention_info.ls").get_session_id,ref$=__webpack_require__("./src/libs_common/gexport.ls"),gexport=ref$.gexport,gexport_module=ref$.gexport_module,out$.get_seconds_spent_on_all_domains_today=get_seconds_spent_on_all_domains_today=async function(){return await getdict_for_key2_dictdict("seconds_on_domain_per_day",get_days_since_epoch())},out$.get_seconds_spent_on_all_domains_days_before_today=get_seconds_spent_on_all_domains_days_before_today=async function(t){return await getdict_for_key2_dictdict("seconds_on_domain_per_day",get_days_since_epoch()-t)},out$.get_seconds_spent_on_domain_all_days=get_seconds_spent_on_domain_all_days=async function(t){var o,e,n,_,i;for(_ in o=await getdict_for_key_dictdict("seconds_on_domain_per_day",t),e=get_days_since_epoch(),n={},o)i=o[_],n[e-_]=i;return n},out$.get_seconds_spent_on_domain_days_before_today=get_seconds_spent_on_domain_days_before_today=async function(t,o){var e,n;return e=get_days_since_epoch(),null!=(n=await getkey_dictdict("seconds_on_domain_per_day",t,e-o))?n:0},out$.get_seconds_spent_on_domain_today=get_seconds_spent_on_domain_today=async function(t){var o,e;return o=get_days_since_epoch(),null!=(e=await getkey_dictdict("seconds_on_domain_per_day",t,o))?e:0},out$.get_minutes_spent_on_domain_today=get_minutes_spent_on_domain_today=async function(t){var o,e;return o=get_days_since_epoch(),null!=(e=await getkey_dictdict("seconds_on_domain_per_day",t,o))?Math.floor(e/60):0},out$.get_seconds_spent_on_current_domain_today=get_seconds_spent_on_current_domain_today=async function(){var t,o;return t=window.location.host,null!=(o=await get_seconds_spent_on_domain_today(t))?o:0},out$.get_visits_to_domain_today=get_visits_to_domain_today=async function(t){var o,e;return o=get_days_since_epoch(),null!=(e=await getkey_dictdict("visits_to_domain_per_day",t,o))?e:0},out$.get_visits_to_domain_days_before_today=get_visits_to_domain_days_before_today=async function(t,o){var e,n;return e=get_days_since_epoch(),null!=(n=await getkey_dictdict("visits_to_domain_per_day",t,e-o))?n:0},out$.get_visits_to_current_domain_today=get_visits_to_current_domain_today=async function(){var t,o;return t=window.location.host,null!=(o=await get_visits_to_domain_today(t))?o:0},out$.get_new_session_id_for_domain=get_new_session_id_for_domain=async function(t){var o;return null==(o=await getkey_dict("domain_to_last_session_id",t))?(await setkey_dict("domain_to_last_session_id",t,0),0):(await setkey_dict("domain_to_last_session_id",t,o+1),o+1)},out$.get_seconds_spent_on_current_domain_in_session=get_seconds_spent_on_current_domain_in_session=async function(t){var o,e;return o=window.location.host,null!=(e=await get_seconds_spent_on_domain_in_session(o,t))?e:0},out$.get_seconds_spent_on_domain_in_session=get_seconds_spent_on_domain_in_session=async function(t,o){var e;return null!=(e=await getkey_dictdict("seconds_on_domain_per_session",t,o))?e:0},out$.get_seconds_spent_on_current_domain_in_current_session=get_seconds_spent_on_current_domain_in_current_session=async function(){var t,o,e;return t=get_session_id(),o=window.location.host,null!=(e=await get_seconds_spent_on_domain_in_session(o,t))?e:0},gexport_module("time_spent_utils",function(it){return eval(it)})},"./src/libs_common/time_utils.ls":function(module,exports,__webpack_require__){var moment,ref$,gexport,gexport_module,get_days_since_epoch,pad_to_two_digits,printable_time_spent_short,printable_time_spent,printable_time_spent_long,out$=void 0!==exports&&exports||this;moment=__webpack_require__("./node_modules/moment/moment.js"),ref$=__webpack_require__("./src/libs_common/gexport.ls"),gexport=ref$.gexport,gexport_module=ref$.gexport_module,out$.get_days_since_epoch=get_days_since_epoch=function(){var t;return t=moment().year(2016).month(0).date(1).hours(0).minutes(0).seconds(0).milliseconds(0),moment().diff(t,"days")},pad_to_two_digits=function(t){var o;return 1===(o=t.toString()).length?"0"+o:o},out$.printable_time_spent_short=printable_time_spent_short=function(t){var o;return t<0?"00:00":(o=Math.floor(t/60))+":"+pad_to_two_digits(t-=60*o)},out$.printable_time_spent=printable_time_spent=function(t){return t<60?t+" seconds":moment().add(t,"seconds").fromNow(!0)},out$.printable_time_spent_long=printable_time_spent_long=function(t){var o,e,n,_;return t<0?"0 seconds":(e=t-3600*(o=Math.floor(t/3600)),e-=60*(n=Math.floor(e/60)),_=[],o>0&&(1===o?_.push("1 hour"):_.push(o+" hours")),(n>0||o>0)&&(1===n?_.push("1 minute"):_.push(n+" minutes")),1===e?_.push("1 second"):e>=0&&_.push(e+" seconds"),_.join(" "))},gexport_module("time_utils",function(it){return eval(it)})}}]);