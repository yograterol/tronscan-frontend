(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1421:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAolBMVEUAAAD9/f3///////////////////////////////////////////////////////////////////////////////////////////////////////////////+1tbW9vb35+fn29vbz8/Pu7u7U1NTw8PDj4+PQ0NDCwsK/v7/IyMjX19fn5+fd3d3Gxsa6urrh4eHZ2dnKysrExMTp6enMzMwjnaLvAAAAHXRSTlMA/QjdudlbT0oQzu7mtYxy4JchHBflm4tx8bTLntSLMkcAAAH3SURBVEjHxZbZeoIwEEYbC2LdcN/aMSAgICri8v6v1khiGCSCeuN/443nOzMTsnx9Kj9GV9NbhLR0rWv8VP+/Vu8QQCFavVYOmGMoZGyWQI1vUOa78UjRh4fpK0WjXyhJc1QkBllR6uIG98SwBxXpDe/6aEJlmvl+JvBEJrnpwlNpoLLuWveiwHVUI8hKmwGKtd4sr9kfrAIzk5IxErh0eQvFKg9Y2jdNHQtksMranQK4pi4QjQOOFODEruP49LTjVWpifxCOxMsHob4skPD9Y4BAAiWwX+MxGCkyBR668iJRWnECXsJ/uymykMj9ADZCYK331Ic0nRTRJSLWMeSCyJNzD3Y28OgpMs8QHsJUUnBgArQ8rRQBhIhY1OZz95mAs2KspAxhgpMUrNwTRuZFxKa26EAUSo9nXJiusgSZIAqDhLG4/YUCiZNMcOECPOSuqjCLj1cKyBkvpaFEmGDPBLI40b6R+yypjZAt6n7Lut8S+Vmijz/2vayXWAqSMIykX8tvMedCb5vXoo4QHKUgt8Vq7Vs9u4C6Dl+XtAMsEBu5eFw4/lVFqCU7wDGLh5LY5/QS+2GY2MpDCR99WBUet6qj7+UD9u+NY/z1y+LdKwln1Cy/+N69Xt+/xLHIbBeBtlmreJBoigdJ9bNn2uHPns6UPXs+lH/GLsFEEcCdEQAAAABJRU5ErkJggg=="},1445:function(e,a,t){"use strict";t.d(a,"a",function(){return s});var n=t(3),c=t(0),r=t.n(c),l=t(265);function s(e){var a=e.label,t=e.children,c=e.tip,s=void 0!==c&&c,m=e.text;return r.a.createElement("tr",null,r.a.createElement("th",null,Object(n.c)(a),s&&r.a.createElement("span",null,"\xa0",r.a.createElement(l.a,{text:m,className:"ml-2"}))),r.a.createElement("td",null,t))}},2471:function(e,a,t){"use strict";t.d(a,"a",function(){return f});var n=t(2),c=t.n(n),r=t(6),l=t(16),s=t(15),m=t(21),o=t(20),d=t(0),i=t.n(d),E=t(2716),b=t.n(E),u=t(11),_=t(3),f=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).initCameras=Object(r.a)(c.a.mark(function a(){var t;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.a.Camera.getCameras();case 3:if(0<(t=a.sent).length)return a.next=7,e.scanner.start(t[0]);a.next=9;break;case 7:a.next=10;break;case 9:e.setState({error:i.a.createElement(u.a,{color:"warning",className:"text-center"},Object(_.c)("no_webcam_found"))});case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),e.setState({error:i.a.createElement(u.a,{color:"danger",className:"text-center"},Object(_.c)("trying_enable_webcam_message_0")," ",i.a.createElement("br",null),Object(_.c)("trying_enable_webcam_message_1"))});case 15:case"end":return a.stop()}},a,null,[[0,12]])})),e.state={error:null},e.ref=i.a.createRef(),e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.onScan;this.scanner=new b.a.Scanner({video:this.ref.current,backgroundScan:!1}),this.scanner.addListener("scan",function(a){e({code:a})}),this.initCameras()}},{key:"componentWillUnmount",value:function(){this.scanner.stop()}},{key:"render",value:function(){return this.state.error||i.a.createElement("video",{className:"w-100",style:N.video,ref:this.ref})}}]),t}(i.a.Component),N={video:{}}},3500:function(e,a,t){"use strict";t.r(a);var n=t(37),c=t.n(n),r=t(2),l=t.n(r),s=t(6),m=t(16),o=t(15),d=t(21),i=t(20),E=t(0),b=t.n(E),u=t(3),_=t(13),f=t(18),N=t(387),v=t(50),O=t.n(v),h=t(4),p=t(23),x=t(1445),T=t(137),j=t(60),g=t(31),A=t(274);function C(e){var a=e.contract,n=["MAINTENANCE_TIME_INTERVAL","ACCOUNT_UPGRADE_COST","CREATE_ACCOUNT_FEE","TRANSACTION_FEE","ASSET_ISSUE_FEE","WITNESS_PAY_PER_BLOCK","WITNESS_STANDBY_ALLOWANCE","CREATE_NEW_ACCOUNT_FEE_IN_SYSTEM_CONTRACT","CREATE_NEW_ACCOUNT_BANDWIDTH_RATE","ALLOW_CREATION_OF_CONTRACTS","REMOVE_THE_POWER_OF_THE_GR","ENERGY_FEE","EXCHANGE_CREATE_FEE","MAX_CPU_TIME_OF_ONE_TX","ALLOW_UPDATE_ACCOUNT_NAME","ALLOW_SAME_TOKEN_NAME"];if(a.parameters)for(var c in a.parameters)for(var r in n)c===r&&a.parameters[c];var l,s,m,o,d,i,f=[];if(f.push(a),f&&(l=Object(j.a)(f,"asset_name","amount")[0]),a.contractType)switch(a.contractType.toUpperCase()){case"TRANSFERCONTRACT":return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("transfer_contract"),b.a.createElement("small",null,Object(u.c)("TRX_transfer_between_addresses")))),b.a.createElement("div",{className:"table-responsive"},b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"from"},b.a.createElement(p.a,{address:a.owner_address},a.owner_address)),b.a.createElement(x.a,{label:"to"},b.a.createElement(p.a,{address:a.to_address},a.to_address)),b.a.createElement(x.a,{label:"amount"},b.a.createElement(T.b,{amount:a.amount/h.K})),a.contract_note&&b.a.createElement(x.a,{label:"note"},decodeURIComponent(a.contract_note))))));case"TRANSFERASSETCONTRACT":return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("transfer_asset_contract"),b.a.createElement("small",null,Object(u.c)("token_transfer_between_addresses")))),b.a.createElement("div",{className:"table-responsive"},b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"from"},b.a.createElement(p.a,{address:a.owner_address},a.owner_address)),b.a.createElement(x.a,{label:"to"},b.a.createElement(p.a,{address:a.to_address},a.to_address)),b.a.createElement(x.a,{label:"amount"},l.map_amount),b.a.createElement(x.a,{label:"token"},b.a.createElement(A.a,{value:a,notamount:!0,totoken:!0}))))));case"PARTICIPATEASSETISSUECONTRACT":return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("participate_asset_issue_contract"),b.a.createElement("small",null,Object(u.c)("participate_token_between_addresses")))),b.a.createElement("div",{className:"table-responsive"},b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"to"},b.a.createElement(p.a,{address:a.owner_address},a.owner_address)),b.a.createElement(x.a,{label:"issuer"},b.a.createElement(p.a,{address:a.to_address},a.to_address)),b.a.createElement(x.a,{label:"amount"},a.amount/h.K),b.a.createElement(x.a,{label:"token"},b.a.createElement(A.a,{value:a,notamount:!0,totoken:!0}))))));case"WITNESSUPDATECONTRACT":return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("witness_update_contract"),b.a.createElement("small",null,Object(u.c)("updates_a_witness")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"owner_address"},b.a.createElement(p.a,{address:a.owner_address})),b.a.createElement(x.a,{label:"URL"},a.url))));case"WITNESSCREATECONTRACT":return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("witness_create_contract"),b.a.createElement("small",null,Object(u.c)("create_a_witness")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"owner_address"},b.a.createElement(p.a,{address:a.owner_address})),b.a.createElement(x.a,{label:"URL"},a.url))));case"ACCOUNTUPDATECONTRACT":return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("account_update_contract"),b.a.createElement("small",null,Object(u.c)("update_account_name")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"owner_address"},b.a.createElement(p.a,{address:a.owner_address})),b.a.createElement(x.a,{label:"account_name"},Object(g.toUtf8)(a.account_name)))));case"ACCOUNTCREATECONTRACT":return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("account_create_contract"),b.a.createElement("small",null,Object(u.c)("account_create")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"create_from_address"},b.a.createElement(p.a,{address:a.owner_address})),b.a.createElement(x.a,{label:"create_to_address"},b.a.createElement(p.a,{address:a.account_address})))));case"WITHDRAWBALANCECONTRACT":return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("withdraw_balance_contract"),b.a.createElement("small",null,Object(u.c)("withdraw_balance")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"owner_address"},b.a.createElement(p.a,{address:a.owner_address})))));case"FREEZEBALANCECONTRACT":return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("freeze_balance_contract"),b.a.createElement("small",null,Object(u.c)("freeze_TRX")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"owner_address"},b.a.createElement(p.a,{address:a.owner_address})),a.receiver_address&&b.a.createElement(x.a,{label:"receive_list"},b.a.createElement(p.a,{address:a.receiver_address})),a.resource?b.a.createElement(x.a,{label:"type"},a.resource):b.a.createElement(x.a,{label:"type"},"Bandwidth"),b.a.createElement(x.a,{label:"frozen_balance"},a.frozen_balance/h.K),b.a.createElement(x.a,{label:"frozen_days"},a.frozen_duration))));case"UNFREEZEBALANCECONTRACT":return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("unfreeze_balance_contract"),b.a.createElement("small",null,Object(u.c)("unfreeze_TRX")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"owner_address"},b.a.createElement(p.a,{address:a.owner_address})),a.receiver_address&&b.a.createElement(x.a,{label:"receive_list"},b.a.createElement(p.a,{address:a.receiver_address})))));case"VOTEWITNESSCONTRACT":return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("vote_witness_contract"),b.a.createElement("small",null,Object(u.c)("vote_for_a_witness")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"owner_address"},b.a.createElement(p.a,{address:a.owner_address})),b.a.createElement("tr",null,b.a.createElement("th",null,Object(u.c)("votes")),b.a.createElement("td",null,b.a.createElement("ul",null,a.votes.map(function(e,a){return b.a.createElement("li",{key:a},b.a.createElement(p.a,{address:e.vote_address,truncate:!1}),Object(u.c)("counts")," : ",e.vote_count)})))))));case"ASSETISSUECONTRACT":return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("asset_issue_contract"),b.a.createElement("small",null,Object(u.c)("issue_a_new_asset")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"owner_address"},b.a.createElement(p.a,{address:a.owner_address})),b.a.createElement(x.a,{label:"token_name"},Object(g.toUtf8)(a.name)),b.a.createElement(x.a,{label:"total_supply"},b.a.createElement(_.c,{value:a.total_supply/(a.precision?Math.pow(10,a.precision):1)})),b.a.createElement(x.a,{label:"TRX_exchange_rate"},a.trx_num/h.K," : ",a.num),b.a.createElement(x.a,{label:"start_time"},1e3<a.end_time-a.start_time?b.a.createElement(_.a,{value:a.start_time}):"-"),b.a.createElement(x.a,{label:"end_time"},1e3<a.end_time-a.start_time?b.a.createElement(_.a,{value:a.end_time}):"-"),b.a.createElement(x.a,{label:"description"},Object(g.toUtf8)(a.description)),b.a.createElement(x.a,{label:"URL"},b.a.createElement(p.d,{url:Object(g.toUtf8)(a.url)})))));case"PROPOSALCREATECONTRACT":return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("proposal_create_contract"),b.a.createElement("small",null,Object(u.c)("proposal_create")))),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"owner_address"},b.a.createElement(p.a,{address:a.owner_address})))));case"TRIGGERSMARTCONTRACT":a.method;var N=t(1421);return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},(m=(s=a).contract_address,o=s.method,d=Object(u.c)("trigger_smart_contract"),i=Object(u.c)("normal_address_trigger_smart_contract"),h.C&&m===h.O.SIDECHAIN&&o.includes(h.T.WITHDRAW)&&(d=Object(u.c)("sign_trigger_smart_contract"),i=Object(u.c)("sign_normal_trigger_smart_contract")),b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),d,b.a.createElement("small",null,i)))),b.a.createElement("div",{className:"content"},b.a.createElement("div",{className:"content_pos"},b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(u.c)("Basic_info")),b.a.createElement("div",{className:"flex1"},b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(u.c)("contract_triggers_owner_address"),":"),b.a.createElement("div",{className:"flex1"},b.a.createElement(p.a,{address:a.owner_address},a.owner_address))),b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(u.c)("contract_address"),":"),b.a.createElement("div",{className:"flex1"},b.a.createElement(p.a,{address:a.contract_address,isContract:!0},a.contract_address))),b.a.createElement("div",{className:"d-flex content_item"},b.a.createElement("div",{className:"content_name"},Object(u.c)("value"),":"),a.call_value?b.a.createElement(T.b,{amount:a.call_value/h.K}):b.a.createElement(T.b,{amount:0})))),a.tokenTransferInfo&&void 0!==a.tokenTransferInfo.decimals&&void 0!==a.tokenTransferInfo.symbol&&b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(u.c)("TRC20_transfers")),b.a.createElement("div",{className:"flex1"},b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(u.c)("from"),":"),b.a.createElement("div",{className:"flex1"},b.a.createElement(p.a,{address:a.tokenTransferInfo.from_address},a.tokenTransferInfo.from_address))),b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(u.c)("to"),":"),b.a.createElement("div",{className:"flex1"},b.a.createElement(p.a,{address:a.tokenTransferInfo.to_address},a.tokenTransferInfo.to_address))),b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(u.c)("amount"),":"),b.a.createElement("div",{className:"flex1"},Number(a.tokenTransferInfo.amount_str)/Math.pow(10,a.tokenTransferInfo.decimals))),b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(u.c)("token_txs_info"),":"),b.a.createElement("div",{className:"flex1"},a.tokenTransferInfo.contract_address==h.p||a.tokenTransferInfo.contract_address==h.q||a.tokenTransferInfo.contract_address==h.j?b.a.createElement("b",{className:"token-img-top",style:{marginRight:5}},b.a.createElement("img",{width:20,height:20,src:a.tokenTransferInfo.icon_url,alt:a.tokenTransferInfo.name,onError:function(e){e.target.onerror=null,e.target.src=N}}),b.a.createElement("i",{style:{width:10,height:10,bottom:-5}})):b.a.createElement("img",{width:20,height:20,src:a.tokenTransferInfo.icon_url,alt:a.tokenTransferInfo.name,style:{marginRight:5},onError:function(e){e.target.onerror=null,e.target.src=N}}),b.a.createElement(p.g,{name:a.tokenTransferInfo.name,address:a.tokenTransferInfo.contract_address,namePlus:a.tokenTransferInfo.name+" ("+a.tokenTransferInfo.symbol+")"}))))),"{}"!=JSON.stringify(a.internal_transactions)&&b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(u.c)("Internal_txns")),b.a.createElement("div",{className:"flex1"},Object.keys(a.internal_transactions).map(function(e,t){var n=[];return a.internal_transactions[e].map(function(e,a){var t=Object(j.a)(JSON.parse(e.value_info_list),"token_id","call_value")[0];n.push(b.a.createElement("div",{key:e.transaction_id,className:"d-flex align-items-center content_item"},b.a.createElement("div",{className:"d-flex"},b.a.createElement("div",{className:"mr-1"},Object(u.c)("transfers")),b.a.createElement("div",{className:"mr-1"},t.map_amount+" "+t.map_token_name_abbr),b.a.createElement("div",{className:"mr-1"},Object(u.c)("from")),b.a.createElement("div",{className:"mr-1",style:{width:"150px"}},b.a.createElement(p.c,{address:e.caller_address},e.caller_address)),b.a.createElement("div",{className:"mr-1"},Object(u.c)("to")),b.a.createElement("div",{className:"mr-1",style:{width:"150px"}},b.a.createElement(p.c,{address:e.transfer_to_address},e.transfer_to_address)))))}),n}))),"{}"!=JSON.stringify(a.cost)&&b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(u.c)("Fee_Consumption")),b.a.createElement("div",{className:"flex1"},Object.keys(a.cost).map(function(e){return"energy_fee"===e||"net_fee"===e?b.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},b.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(u.c)(e),":"),b.a.createElement("div",{className:"flex1"},a.cost[e]/1e6," TRX")):b.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},b.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(u.c)(e),":"),b.a.createElement("div",{className:"flex1"},a.cost[e]))}))),a.method&&b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(u.c)("Method_calling")),b.a.createElement("div",{className:"flex1"},b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(u.c)("contract_method"),":"),b.a.createElement("div",{className:"flex1"},a.method)),a.parameter&&Object.keys(a.parameter).map(function(e){return b.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},b.a.createElement("div",{className:"content_name"},e,":"),b.a.createElement("div",{className:"flex1"},a.parameter[e]))}))))));case"UPDATEBROKERAGECONTRACT":return a.method,b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(u.c)("trigger_smart_contract"),b.a.createElement("small",null,Object(u.c)("SR_set_brokerage_contract")))),b.a.createElement("div",{className:"content"},b.a.createElement("div",{className:"content_pos"},b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(u.c)("Basic_info")),b.a.createElement("div",{className:"flex1"},b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(u.c)("contract_triggers_owner_address"),":"),b.a.createElement("div",{className:"flex1"},b.a.createElement(p.a,{address:a.owner_address},a.owner_address))),b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_voting"},Object(u.c)("SR_set_brokerage"),":"),b.a.createElement("div",{className:"flex1"},a.brokerage?100-a.brokerage:100," %")),b.a.createElement("div",{className:"d-flex content_item"},b.a.createElement("div",{className:"content_name"},Object(u.c)("value"),":"),a.call_value?b.a.createElement(T.b,{amount:a.call_value/h.K}):b.a.createElement(T.b,{amount:0})))),"{}"!=JSON.stringify(a.cost)&&b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(u.c)("Fee_Consumption")),b.a.createElement("div",{className:"flex1"},Object.keys(a.cost).map(function(e){return"energy_fee"===e||"net_fee"===e?b.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},b.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(u.c)(e),":"),b.a.createElement("div",{className:"flex1"},a.cost[e]/1e6," TRX")):b.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},b.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(u.c)(e),":"),b.a.createElement("div",{className:"flex1"},a.cost[e]))}))),a.method&&b.a.createElement("div",{className:"d-flex border-bottom pt-2"},b.a.createElement("div",{className:"content_box_name"},Object(u.c)("Method_calling")),b.a.createElement("div",{className:"flex1"},b.a.createElement("div",{className:"d-flex border-bottom content_item"},b.a.createElement("div",{className:"content_name"},Object(u.c)("contract_method"),":"),b.a.createElement("div",{className:"flex1"},a.method)),a.parameter&&Object.keys(a.parameter).map(function(e){return b.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},b.a.createElement("div",{className:"content_name"},e,":"),b.a.createElement("div",{className:"flex1"},a.parameter[e]))}))))));default:return b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card-body table-title"},b.a.createElement("h5",null,b.a.createElement("i",{className:"fa fa-exchange-alt"}),"\xa0\xa0",a.contractType)),b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,a.owner_address?b.a.createElement(x.a,{label:"owner_address"},b.a.createElement(p.a,{address:a.owner_address})):"")))}return b.a.createElement("div",null,a.contractType&&b.a.createElement("div",{className:"card-body"},JSON.stringify(a)))}function y(e){var a=e.signature;return b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"Signature"},a.bytes)))}var w=t(14),S=Object(w.a)(function(){return t.e(16).then(t.bind(null,3487))}),k=t(28),R=t(11),I=t(2471),M=function(e){Object(d.a)(t,e);var a=Object(i.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).hideModal=function(){var a=e.props.onClose;a&&a()},e.onCodeScan=function(a){var t=a.code,n=e.props.onConfirm;n&&n({code:t})},e.state={body:null},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({body:b.a.createElement("div",null,b.a.createElement(I.a,{onScan:this.onCodeScan}))})}},{key:"render",value:function(){var e=this.state.body;return b.a.createElement(R.c,{isOpen:!0,toggle:this.hideModal,fade:!1,className:"modal-dialog-centered"},b.a.createElement(R.f,{className:"text-center",toggle:this.hideModal},"Scan Transaction"),b.a.createElement(R.d,null,e))}}]),t}(b.a.Component),U=Object(k.connect)(function(e){return{account:e.app.account}},{})(M),F=function(e){Object(d.a)(t,e);var a=Object(i.a)(t);function t(e){var n;Object(m.a)(this,t),(n=a.call(this,e)).hideModal=function(){n.setState({modal:null})},n.setHex=function(e){n.setState({hex:e})},n.loadTransaction=function(){var e=Object(s.a)(l.a.mark(function e(a){var t,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.b.readTransactionNew(a);case 3:t=e.sent,(c=t.transaction)?n.setState({transactionData:c}):n.setState({modal:b.a.createElement(O.a,{danger:!0,title:Object(u.c)("transaction_load_error"),onConfirm:n.hideModal},Object(u.c)("transaction_load_error_message"))}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n.setState({modal:b.a.createElement(O.a,{danger:!0,title:Object(u.c)("transaction_load_error"),onConfirm:n.hideModal},Object(u.c)("transaction_load_error_message"))});case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(a){return e.apply(this,arguments)}}(),n.scanTransaction=Object(s.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({modal:b.a.createElement(U,{onClose:n.hideModal,onConfirm:function(e){var a=e.code;n.loadTransaction(a),n.hideModal(),n.setHex(a)}})});case 1:case"end":return e.stop()}},e)})),n.broadcastTransaction=function(){var e=Object(s.a)(l.a.mark(function e(a){var t,c,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.b.sendTransactionRaw(a);case 2:t=e.sent,c=t.success,r=t.code,c?n.setState({modal:b.a.createElement(O.a,{success:!0,title:Object(u.c)("transaction_success"),onConfirm:n.hideModal},Object(u.c)("transaction_success_message"))}):n.setState({modal:b.a.createElement(O.a,{danger:!0,title:Object(u.c)("transaction_error"),onConfirm:n.hideModal},Object(u.c)("transaction_error_message"),b.a.createElement("br",null),"Code: ",r)});case 6:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),n.broadcastTransactionModal=Object(s.a)(l.a.mark(function e(){var a,t,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.state.hex,e.next=3,f.b.readTransactionNew(a);case 3:t=e.sent,c=t.transaction,n.setState({modal:b.a.createElement(O.a,{info:!0,showCancel:!0,confirmBtnText:Object(u.c)("confirm_transaction"),confirmBtnBsStyle:"success",cancelBtnBsStyle:"default",title:Object(u.c)("confirm_transaction_message"),onConfirm:function(){return n.broadcastTransaction(a)},onCancel:n.hideModal})}),n.setState({transactionData:c});case 7:case"end":return e.stop()}},e)})),n.addSignature=function(){var e=n.state.hex;n.setState({modal:b.a.createElement(S,{transaction:e,onClose:n.hideModal})})};var c=Object(N.a)(e.location,"hex","");return n.state={hex:c,showInput:""===c,transactionData:null,modal:null},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.hex;e&&this.loadTransaction(e)}},{key:"componentDidUpdate",value:function(e,a){var t=Object(N.a)(this.props.location,"hex","");""!==t&&a.hex!==t&&(this.loadTransaction(t),this.setState({hex:t}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.hex,n=a.transactionData,r=a.modal,l=a.showInput;return this.props.flags,b.a.createElement("main",{className:"container header-overlap _transactionViewer"},r,l&&b.a.createElement("div",{className:"card"},b.a.createElement("div",{className:"card-body"},b.a.createElement("h5",{className:"card-title text-center"},Object(u.c)("transaction")," HEX"),b.a.createElement("p",{className:"text-center"},Object(u.c)("info_tx_viewer")),b.a.createElement("textarea",{className:"w-100 form-control",rows:"6",value:t,onChange:function(a){return e.setState({hex:a.target.value})}}),b.a.createElement("div",{className:"text-center _load_tx"},b.a.createElement("button",{className:"btn btn-primary",disabled:""===c()(t),onClick:function(){return e.loadTransaction(t)}},Object(u.c)("load_tx"))),b.a.createElement("hr",null),b.a.createElement("div",{className:"text-center p-3 _qrcode"},b.a.createElement("h5",{className:"card-title text-center"},Object(u.c)("tx_qrcode")),b.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.scanTransaction()}},Object(u.c)("load_tx_qrcode"),b.a.createElement("i",{className:"fa fa-qrcode ml-2"}))))),n&&b.a.createElement(E.Fragment,null,b.a.createElement("div",{className:"card mt-3"},b.a.createElement("div",{className:"card-body"},b.a.createElement("h5",{className:"card-title text-center"},"Transaction")),b.a.createElement("div",{className:"table-responsive"},b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(x.a,{label:"timestamp"},b.a.createElement(_.a,{value:n.timestamp}),"\xa0",b.a.createElement(_.e,{value:n.timestamp,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})),b.a.createElement(x.a,{label:"contracts"},n.contracts.length),b.a.createElement(x.a,{label:"signatures"},n.signatures.length))))),b.a.createElement("div",{className:"card mt-3"},b.a.createElement("div",{className:"card-header text-center"},Object(u.c)("Contracts")),n.contracts.map(function(e,a){return b.a.createElement(C,{key:a,contract:e})})),b.a.createElement("div",{className:"card mt-3"},b.a.createElement("div",{className:"card-header text-center"},Object(u.c)("Signatures")),n.signatures.map(function(e){return b.a.createElement(y,{signature:e})})),b.a.createElement("div",{className:"card mt-3 mb-5"},b.a.createElement("button",{className:"btn btn-success btn-lg",onClick:this.broadcastTransactionModal},Object(u.c)("broadcast_transaction_to_network")))))}}]),t}(E.Component);a.default=Object(k.connect)(function(e){return{flags:e.app.flags}},{})(F)}}]);