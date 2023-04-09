var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/chat/docs.mdx.js"]=function(e){function t(t){for(var n,s,r=t[0],i=t[1],o=t[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&d.push(l[s][0]),l[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(m&&m(t);d.length;)d.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==l[i]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},l={16:0},c=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var m=i;return c.push([778,0]),a()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},778:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",(function(){return L})),a.d(t,"getContents",(function(){return B}));var n=a(0),l=a.n(n),c=a(4),s=a(2),r=a(26),i=a(15),o=a(14),m=a(5),u=a.n(m),d=a(51),b=a(11),p=a(154),h=function(e){return l.a.createElement("section",{role:"log",className:u()("slds-chat",{"slds-chat_past":e.isPast})},e.children)},y=function(e){return l.a.createElement("ul",{className:"slds-chat-list"},e.children)},g=function(e){return l.a.createElement("li",{className:u()("slds-chat-listitem",{"slds-chat-listitem_bookend":"bookend"===e.type,"slds-chat-listitem_event":"event"===e.type,"slds-chat-listitem_inbound":"inbound"===e.type,"slds-chat-listitem_outbound":"outbound"===e.type})},e.children)},E=function(e){return l.a.createElement("div",{className:u()("slds-chat-message",{"slds-chat-message_faux-avatar":e.hasFauxAvatar})},e.children)},O=function(e){var t={"slds-chat-message__text":!e.messageType,"slds-chat-message__text_inbound":!e.messageType&&"inbound"===e.type,"slds-chat-message__text_outbound":!e.messageType&&"outbound"===e.type,"slds-chat-message__text_outbound-agent":!e.messageType&&"outbound-agent"===e.type,"slds-chat-message__text_unsupported-type":!e.messageType&&"unsupported-type"===e.type,"slds-chat-message__text_delivery-failure":!e.messageType&&"delivery-failure"===e.type,"slds-chat-message__text_sneak-peek":!e.messageType&&e.hasSneakPeek},a={"slds-chat-message__file":"file"===e.messageType,"slds-chat-message__file_inbound":"file"===e.messageType&&"inbound"===e.type,"slds-chat-message__file_outbound":"file"===e.messageType&&"outbound"===e.type},n={"slds-chat-message__image":"image"===e.messageType,"slds-chat-message__image_inbound":"image"===e.messageType&&"inbound"===e.type,"slds-chat-message__image_outbound":"image"===e.messageType&&"outbound"===e.type};return l.a.createElement("div",{className:u()("slds-chat-message__body",{"slds-chat-message__file_loading":"file"===e.messageType&&e.isLoading,"slds-chat-message__image_loading":"image"===e.messageType&&e.isLoading})},e.name&&e.timeStamp&&e.isPast&&l.a.createElement(j,{isPast:!0,name:e.name,timeStamp:e.timeStamp}),l.a.createElement("div",{className:u()(t,a,n)},e.isTyping&&l.a.createElement(p.a,{isAnimated:!0,isPaused:e.isPaused,assistiveText:"Customer is typing",title:"Customer is typing"}),"unsupported-type"===e.type&&l.a.createElement(T,{symbol:"warning",assistiveText:"Warning"}),e.children&&("image"===e.messageType||"file"===e.messageType?e.children:l.a.createElement("span",{"aria-hidden":e.hasSneakPeek?"true":null},e.children)),"delivery-failure"===e.type&&l.a.createElement(f,null,e.deliveryFailureReason)),"delivery-failure"===e.type?l.a.createElement("div",{className:"slds-grid slds-grid_align-spread slds-grid_vertical-align-start"},e.name&&e.timeStamp&&!e.isPast&&l.a.createElement(j,{name:e.name,timeStamp:e.timeStamp}),"delivery-failure"===e.type&&l.a.createElement(v,{symbol:"redo",actionTitle:"Resend"})):e.name&&e.timeStamp&&!e.isPast&&l.a.createElement(j,{name:e.name,timeStamp:e.timeStamp}))},j=function(e){return l.a.createElement("div",{className:"slds-chat-message__meta","aria-label":"said ".concat(e.name," at ").concat(e.timeStamp)},e.isPast?l.a.createElement("b",null,e.name):e.name," • ",e.timeStamp)},f=function(e){return l.a.createElement("div",{className:"slds-chat-message__text_delivery-failure-reason",role:"alert"},l.a.createElement(T,{symbol:"error"}),l.a.createElement("span",null,e.children))},v=function(e){return l.a.createElement("button",{className:"slds-button slds-chat-message__action slds-m-top_xxx-small"},l.a.createElement(b.a,{assistiveText:!1,title:!1,className:"slds-icon_xx-small",containerClassName:"slds-chat-icon",symbol:e.symbol}),l.a.createElement("span",null,e.actionTitle))},_=function(e){return l.a.createElement(d.a,{className:"slds-avatar_circle slds-chat-avatar",ariaHidden:e.ariaHidden},l.a.createElement("abbr",{className:"slds-avatar__initials slds-avatar__initials_inverse",title:e.name},e.initials))},w=function(e){return l.a.createElement("div",{className:u()("slds-chat-event",{"slds-has-error":e.hasError}),role:e.hasError&&"alert"},l.a.createElement("div",{className:"slds-chat-event__body"},l.a.createElement(T,{symbol:e.symbol,assistiveText:e.iconAssistiveText}),l.a.createElement("p",null,e.children," • ",e.timeStamp)),e.agentMessage&&l.a.createElement("div",{className:"slds-chat-event__agent-message"},e.agentMessage))},S=function(e){return l.a.createElement("div",{className:u()("slds-chat-bookend",{"slds-chat-bookend_stop":"stop"===e.type})},l.a.createElement(T,{symbol:"start"===e.type?"chat":"end_chat"}),l.a.createElement("p",null,"Chat ","stop"===e.type?"ended":"started"," by ",l.a.createElement("b",null,e.name)," ","• ",e.timeStamp))},T=function(e){return l.a.createElement(b.a,{assistiveText:e.assistiveText||!1,className:u()("slds-icon_x-small slds-icon-text-default",{"slds-icon-text-default":"error"===e.symbol,"slds-icon-text-warning":"warning"===e.symbol}),containerClassName:"slds-chat-icon",symbol:e.symbol,title:e.assistiveText||!1})},M=a(52),C=a(147),P=c.c.a,A=c.c.code,k=c.c.h2,W=c.c.h3,x=c.c.h4,I=c.c.li,D=c.c.p,H=c.c.table,R=c.c.tbody,N=c.c.td,F=c.c.th,z=c.c.thead,J=c.c.tr,q=c.c.ul,L=function(){return Object(n.createElement)(c.b,{},Object(n.createElement)("div",{className:"doc lead"},"The Chat component is used to display real-time and past chat logs between service agents and customers. It comes with a number of sub components that can be used to display the different types of chat items."),Object(n.createElement)(s.a,{exampleOnly:!0},Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"bookend"},Object(n.createElement)(S,{type:"start",name:"Andy Martinez",timeStamp:"4:58 PM"})),Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(_,{initials:"AM",name:"Andy Martinez",ariaHidden:"true"}),Object(n.createElement)(O,{type:"inbound",name:"Andy Martinez",timeStamp:"4:59 PM"},"Hi, my CloudWidget only speaks French"))),Object(n.createElement)(g,{type:"outbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"outbound-agent"},"Hi Andy, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?"))),Object(n.createElement)(g,{type:"outbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"outbound-agent",name:"Jason Dewar",timeStamp:"5:02 PM"},"Have you tried turning it off and on again?"))),Object(n.createElement)(g,{type:"bookend"},Object(n.createElement)(S,{type:"stop",name:"Andy Martinez",timeStamp:"5:30 PM"}))))),k({id:"About-Chat"},"About Chat"),D({},"A chat consists of an unordered list of possible chat items, wrapped in a ",A({},"section")," which has the accessible role of ",A({},"log"),"."),W({id:"Accessibility"},"Accessibility"),D({},"The ",A({},"log")," role has an implicit ",A({},"aria-live")," property value of ",A({},"polite"),", meaning that it comes for free. It also has an implicit ",A({},"aria-relevant")," property value of ",A({},"additions text"),". Together this means any additional text, or chat items added to the list will automatically be politely announced by a screen reader"),k({id:"Base"},"Base"),Object(n.createElement)(r.a,{toggleCode:!1},Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,null)))),k({id:"Structuring-a-chat"},"Structuring a chat"),D({},"To correctly structure and communicate a chat, you should first follow the basic structure (see above) that forms any chat log and can contain any type of chat item."),D({},"Each ",A({},"slds-chat-listitem")," comes with 4 modifier classes, each one needing to be applied based on the type of chat item you are display in the list item:"),H({},z({},J({},F({},"Chat item"),F({},"Modifier"),F({},"When to apply"))),R({},J({},N({},P({href:"#Inbound-messages"},"Inbound message")),N({},A({},".slds-chat-listitem slds-chat-listitem_inbound")),N({},"Apply to all list items that contain inbound messages")),J({},N({},P({href:"#Outbound-messages"},"Outbound message")),N({},A({},".slds-chat-listitem slds-chat-listitem_outbound")),N({},"Apply to all list items that contain outbound messages")),J({},N({},P({href:"#Displaying-events-during-a-chat-session"},"Chat event")),N({},A({},".slds-chat-listitem slds-chat-listitem_event")),N({},"Apply to all list items that contain events")),J({},N({},P({href:"#Starting-and-ending-a-chat"},"Chat bookend")),N({},A({},".slds-chat-listitem slds-chat-listitem_bookend")),N({},"Apply to all list items that contain chat log bookends")))),D({},"The modifiers are used to apply any specific styling to the type of chat item it represents, including spacing, position and layout."),Object(n.createElement)(i.a,{title:"Chat list"},Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"bookend"},Object(n.createElement)(S,{type:"start",name:"Andy Martinez",timeStamp:"4:58 PM"})),Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"inbound",name:"Andy Martinez",timeStamp:"4:59 PM"},"Hi, my CloudWidget only speaks French"))),Object(n.createElement)(g,{type:"outbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"outbound"},"Hi Andy, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?"))),Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"inbound",name:"Andy Martinez",timeStamp:"5:09 PM"},"I'm not trying to program any language"))),Object(n.createElement)(g,{type:"outbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"outbound",name:"Jason Dewar",timeStamp:"5:15 PM"},"Sorry to hear that. Let me see what I can do about this.")))))),k({id:"Starting-and-ending-a-chat"},"Starting and ending a chat"),D({},"When each chat session is started or stopped, it is represented with a bookend. The bookend displays when the chat was stopped or started and by who."),W({id:"Chat-started-bookend"},"Chat started bookend"),Object(n.createElement)(s.a,null,Object(n.createElement)(S,{type:"start",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"})),W({id:"Chat-stopped-bookend"},"Chat stopped bookend"),Object(n.createElement)(s.a,null,Object(n.createElement)(S,{type:"stop",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"})),k({id:"Chat-messages"},"Chat messages"),D({},"Chat messages are comprised of the message text, and message meta data including the persons name and time at which the message was sent. Chat messages come in 3 forms:"),W({id:"Inbound-messages"},"Inbound messages"),Object(n.createElement)(o.a,{header:"Use of aria-label",type:"a11y"},Object(n.createElement)("p",null,"Each message meta data wrapper has ",Object(n.createElement)("code",null,"aria-label")," ","added, which we can use to form more human sounding messages as they arrive,"," ",Object(n.createElement)("b",null,'"Hi, my CloudWidget only speaks French said Taylor Watson-Rice at 4:59 PM"'),". A screen reader, when ",Object(n.createElement)("code",null,"aria-label")," is applied to an element, will only announce the contents of the label, not the text content held in it.")),Object(n.createElement)(i.a,{title:"Chat Inbound message"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"inbound",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},"Hi, my CloudWidget only speaks French"))))))),x({id:"Consecutive-inbound-messages"},"Consecutive inbound messages"),D({},"Consecutive messages only display name and time meta data once"),Object(n.createElement)(i.a,{title:"Chat Consecutive Inbound message"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"inbound"},"Hi, my CloudWidget only speaks French"))),Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"inbound",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},"I'm having trouble changing that."))))))),x({id:"Inbound-with-avatar"},"Inbound with avatar"),D({},"Inbound messages can optionally display the customers avatar. When displaying an avatar in inbound messages, be sure to apply the ",A({},"slds-chat-message_faux-avatar")," modifier to any consecutive ",A({},"slds-chat-message")," containers, to ensure correct alignment where the avatar is missing."),Object(n.createElement)(o.a,{header:"Aria Hidden Avatars",type:"a11y"},Object(n.createElement)("p",null,"Because every inbound message already includes the user's name, the user's avatar is redundant and therefore should be treated as decorative. For this reason, we hide the avatar using ",Object(n.createElement)("code",null,'aria-hidden="true"')," on the ",Object(n.createElement)("code",null,"<span>"),"with ",Object(n.createElement)("code",null,'class="slds-avatar"')," to avoid redundancy for screen reader users.")),Object(n.createElement)(i.a,{title:"Chat Inbound message with avatar"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(_,{initials:"TW",name:"Taylor Watson-Rice",ariaHidden:"true"}),Object(n.createElement)(O,{type:"inbound"},"Hi, my CloudWidget only speaks French"))),Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,{hasFauxAvatar:!0},Object(n.createElement)(O,{type:"inbound",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},"I'm having trouble changing that."))))))),x({id:"Receiving-a-file-attachment"},"Receiving a file attachment"),D({},"During a chat an agent can request the customer upload a file attachment to be sent to the agent."),Object(n.createElement)(i.a,{title:"Chat Inbound message with file attachment"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(_,{initials:"TW",name:"Taylor Watson-Rice",ariaHidden:"true"}),Object(n.createElement)(O,{type:"inbound",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},Object(n.createElement)(C.a,{assistiveText:"Attachment",className:"slds-icon_small",containerClassName:"slds-chat-icon",symbol:"attachment",title:"Attachment"}),Object(n.createElement)("a",{href:"#",onClick:function(e){return e.preventDefault()}},"filename_of_attachment.jpg")))))))),D({},"It is also possible to display an image preview when sending a supported file format, such as a JPEG. This is accomplished by using the ",P({href:"files/"},"File")," component within Chat."),Object(n.createElement)(o.a,{header:"Contrast",type:"a11y"},Object(n.createElement)("p",null,"When using actions without a title, it's important to use the"," ",Object(n.createElement)("code",null,"slds-file__title_scrim")," class in conjunction with"," ",Object(n.createElement)("code",null,"slds-file__title")," to ensure proper contrast. Without this, it can be difficult for users to see the action icons when the image being sent is predominantly light in color.")),Object(n.createElement)(i.a,{title:"Chat inbound message with image attachment preview"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(_,{initials:"TW",name:"Taylor Watson-Rice",ariaHidden:"true"}),Object(n.createElement)(O,{type:"inbound",messageType:"image",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},Object(n.createElement)(M.b,{hasActions:!0,iconColor:"white",noCaption:!0,hasImage:!0,hasScrim:!0})))))))),D({},"Non-image file formats are also supported by using the File component."),Object(n.createElement)(i.a,{title:"Chat inbound message with PDF attachment preview"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(_,{initials:"TW",name:"Taylor Watson-Rice",ariaHidden:"true"}),Object(n.createElement)(O,{type:"inbound",messageType:"file",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},Object(n.createElement)(M.b,{has4x3Crop:!0,hasTitleCard:!0,symbol:"pdf",title:"File.pdf",hasActions:!0,hasImage:!0})))))))),D({},"Both file and image transfers support messages with and without titles; however, titles are generally not recommended when transferring images."),Object(n.createElement)(i.a,{title:"Comparing image transfers with and without titles"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(_,{initials:"TW",name:"Taylor Watson-Rice",ariaHidden:"true"}),Object(n.createElement)(O,{type:"inbound",messageType:"image"},Object(n.createElement)(M.b,{hasActions:!0,iconColor:"white",noCaption:!0,hasScrim:!0,hasImage:!0})))),Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,{hasFauxAvatar:!0},Object(n.createElement)(O,{type:"inbound",messageType:"image",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},Object(n.createElement)(M.b,{hasTitleCard:!0,symbol:"image",title:"Image.jpg",hasActions:!0,hasImage:!0})))))))),D({},"When sending or receiving a portrait-orientation image, use the ",A({},"slds-file__figure_portrait")," in conjunction with the ",A({},"slds-file__figure")," class. This will properly display the entire image within the chat message."),Object(n.createElement)(i.a,{title:"Chat inbound message with portrait-orientation image attachment preview"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"outbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"outbound",messageType:"image",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},Object(n.createElement)(M.b,{hasTitleCard:!0,symbol:"image",title:"Image.jpg",hasActions:!0,hasImagePortrait:!0})))))))),x({id:"Customer-is-typing"},"Customer is typing"),D({},"Whilst chatting with customers, agents can see when a customer is typing a response by using the ",P({href:"/components/dynamic-icons"},"Dynamic Icon, Typing"),"."),Object(n.createElement)(o.a,{header:"Assistive text",type:"a11y"},Object(n.createElement)("p",null,"It's important to set descriptive assistive text to the typing icon, as this is the only means a screen reader user will know a customer is currently typing. The assistive text, because it is text content, will be announced as the icon is added to the DOM. As an example, we use"," ",Object(n.createElement)("b",null,'"Customer is typing"'))),Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(_,{initials:"TW",name:"Taylor Watson-Rice",ariaHidden:"true"}),Object(n.createElement)(O,{isTyping:!0,type:"inbound"})))))),x({id:"Sneak-peek"},"Sneak peek"),D({},"We can take that experience one step further when the sneak peek feature is enabled. This allows agents to see what customers are typing in real time, as they type it."),Object(n.createElement)(o.a,{header:"aria-hidden",type:"a11y"},Object(n.createElement)("p",null,"When the sneak peek feature is active, we take care to try and reduce the verbosity a screen reader user will encounter. As they will hear the final message once it is typed, we have found it is preferred to use"," ",Object(n.createElement)("code",null,'aria-hidden="true"')," on the text they are currently typing, to reduce noise.")),Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(_,{initials:"TW",name:"Taylor Watson-Rice",ariaHidden:"true"}),Object(n.createElement)(O,{isTyping:!0,hasSneakPeek:!0,type:"inbound"},"Hi, my CloudWidget only spe")))))),W({id:"Outbound-messages"},"Outbound messages"),D({},"Outbound messages come in 2 forms. Ones that are written by the agent in the current chat session, and ones which have been written by other agents who have dealt with the customer during the same chat session."),x({id:"Outbound-message-by-current-agent"},"Outbound message by current agent"),Object(n.createElement)(i.a,{title:"Chat Outbound message current agent"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"outbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"outbound",name:"Amber Cann",timeStamp:"4:59 PM"},"Hi Taylor, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?"," ",Object(n.createElement)("a",{href:"#",onClick:function(e){return e.preventDefault()}},"http://www/cloud.widget")))))))),x({id:"Outbound-message-by-another-agent"},"Outbound message by another agent"),Object(n.createElement)(i.a,{title:"Chat Outbound message another agent"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"outbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"outbound-agent",name:"Jason Dewar",timeStamp:"4:59 PM"},"So sorry to hear that. Let me transfer you to a more technical support member. Thank you for your patience. Have you tried visiting our help site?"))))))),x({id:"Consecutive-outbound-messages"},"Consecutive outbound messages"),D({},"For consecutive outbound messages the same rules apply to both types, as consecutive inbound messages."),Object(n.createElement)(i.a,{title:"Chat consecutive outbound messages"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"outbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"outbound"},"Hi Andy, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?"))),Object(n.createElement)(g,{type:"outbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"outbound",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},"It might be the cause of the problem"))))))),W({id:"Delivery-Status-Messages"},"Delivery Status Messages"),x({id:"Unsupported-Message-Type-(Inbound)"},"Unsupported Message Type (Inbound)"),D({},"If a customer tries sending a message that is not supported, it will appear as an unsupported message type."),Object(n.createElement)(i.a,{title:"Chat Inbound message unsupported type"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(_,{initials:"TW",name:"Taylor Watson-Rice",ariaHidden:"true"}),Object(n.createElement)(O,{type:"unsupported-type",name:"Taylor Watson-Rice",timeStamp:"4:59 PM"},"Message type is not supported"))))))),x({id:"Message-Delivery-Failure-(Outbound)"},"Message Delivery Failure (Outbound)"),D({},"If the agent attempts to send a message that can't be delivered, a message delivery failure indication appears beneath the original message text, along with an option to resend."),Object(n.createElement)(o.a,{header:"Role alert",type:"a11y"},Object(n.createElement)("p",null,"Message delivery failures have the addition ",Object(n.createElement)("code",null,'role="alert"')," to their container. A chat log has an ",Object(n.createElement)("code",null,'aria-live="polite"')," value, but we would like to inform agents of errors immediately. The"," ",Object(n.createElement)("code",null,'role="alert"')," attribute comes with an implicit"," ",Object(n.createElement)("code",null,"aria-live")," value of ",Object(n.createElement)("code",null,"assertive")," which will achieve this.")),Object(n.createElement)(i.a,{title:"Chat Outbound message with delivery failure"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"outbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"delivery-failure",deliveryFailureReason:"Message was not delivered because Andy stopped receiving messages.",name:"Amber Cann",timeStamp:"4:59 PM"},"It might be the cause of the problem"))))))),k({id:"Displaying-events-during-a-chat-session"},"Displaying events during a chat session"),D({},"During a chat session a number of events can occur and these are displayed to the agent, with descriptions and sometimes messages."),W({id:"Basic-chat-event"},"Basic chat event"),D({},"The basic type of events that can occur include:"),q({},I({},"Rasing a flag"),I({},"Lowering a flag"),I({},"A whisper"),I({},"File request"),I({},"File sent"),I({},"File request cancelled"),I({},"Transfer request"),I({},"Transfer accepted"),I({},"Transfer cancelled"),I({},"Transfer declined")),Object(n.createElement)(i.a,{title:"Chat event types"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{symbol:"priority",timeStamp:"5:09 PM"},Object(n.createElement)("b",null,"Jason Dewar")," raised a flag")),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{symbol:"lower_flag",timeStamp:"5:09 PM"},Object(n.createElement)("b",null,"Jason Dewar")," lowered the flag")),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{symbol:"chat",timeStamp:"5:09 PM"},"Whisper from super ",Object(n.createElement)("b",null,"SuperAlly"))),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{symbol:"share_file",timeStamp:"5:09 PM"},Object(n.createElement)("b",null,"Jason Dewar")," sent a file request to ",Object(n.createElement)("b",null,"Andy Martinez"))),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{symbol:"file",timeStamp:"5:09 PM"},Object(n.createElement)("b",null,"Andy Martinez")," sent a file")),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{symbol:"cancel_file_request",timeStamp:"5:09 PM"},Object(n.createElement)("b",null,"Jason Dewar")," cancelled the file request")),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{symbol:"change_owner",timeStamp:"5:09 PM"},Object(n.createElement)("b",null,"Jason Dewar")," sent a transfer request to"," ",Object(n.createElement)("b",null,"Technical Support Team"))),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{symbol:"change_owner",timeStamp:"5:09 PM"},Object(n.createElement)("b",null,"Technical Support Team")," accepted the transfer request")),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{symbol:"cancel_transfer",timeStamp:"5:09 PM"},Object(n.createElement)("b",null,"Jason Dewar")," cancelled the transfer request")),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{symbol:"cancel_request",timeStamp:"5:09 PM"},Object(n.createElement)("b",null,"Technical Support Team")," declined the transfer request")))))),W({id:"Chat-event-with-an-agent-message"},"Chat event with an agent message"),D({},"Sometimes an agent might add a message to an event for another agent to read."),Object(n.createElement)(i.a,{title:"Chat event with agent message"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{agentMessage:"Andy needs help changing the language on his CloudWidget",symbol:"change_owner",timeStamp:"5:19 PM"},Object(n.createElement)("b",null,"Jason Dewar")," sent a transfer request to ",Object(n.createElement)("b",null,"Amber Cann"))))))),W({id:"Chat-event-error"},"Chat event - error"),D({},"In the event of an error occurring during the chat, an error event can be displayed to the agent. This is done by adding the ",A({},".slds-has-error")," modifier class."),Object(n.createElement)(o.a,{header:"Role alert",type:"a11y"},Object(n.createElement)("p",null,"Event errors have the addition ",Object(n.createElement)("code",null,'role="alert"')," to their container. A chat log has a ",Object(n.createElement)("code",null,'aria-live="polite"')," value, but we would like to inform agents of errors immediately. The ",Object(n.createElement)("code",null,'role="alert"')," attribute comes with an implicit ",Object(n.createElement)("code",null,"aria-live")," value of ",Object(n.createElement)("code",null,"assertive")," ","which will achieve this.")),Object(n.createElement)(i.a,{title:"Chat event error"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{hasError:!0,symbol:"error",iconAssistiveText:"warning",timeStamp:"5:06 PM"},"The file sent by ",Object(n.createElement)("b",null,"Andy Martinez")," is too large")))))),k({id:"Putting-it-all-together"},"Putting it all together"),Object(n.createElement)(i.a,{title:"Chat full list"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,null,Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"bookend"},Object(n.createElement)(S,{type:"start",name:"Andy Martinez",timeStamp:"4:58 PM"})),Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(_,{initials:"AM",name:"Andy Martinez",ariaHidden:"true"}),Object(n.createElement)(O,{type:"inbound",name:"Andy Martinez",timeStamp:"4:59 PM"},"Hi, my CloudWidget only speaks French"))),Object(n.createElement)(g,{type:"outbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"outbound-agent"},"Hi Andy, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?"))),Object(n.createElement)(g,{type:"outbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"outbound-agent",name:"Jason Dewar",timeStamp:"5:02 PM"},"Have you tried turning it off and on again?"))),Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(_,{initials:"AM",name:"Andy Martinez",ariaHidden:"true"}),Object(n.createElement)(O,{type:"inbound",name:"Andy Martinez",timeStamp:"5:09 PM"},"yes, of course"))),Object(n.createElement)(g,{type:"outbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"outbound-agent",name:"Jason Dewar",timeStamp:"5:15 PM"},"Sorry to hear that. Let me transfer you to a more technical support member. Thank you for your patience!"))),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{agentMessage:"Andy needs help changing the language on his CloudWidget",symbol:"change_owner",timeStamp:"5:19 PM"},Object(n.createElement)("b",null,"Jason Dewar")," sent a transfer request to"," ",Object(n.createElement)("b",null,"Technical Support Team"))),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{symbol:"change_owner",timeStamp:"5:20 PM"},Object(n.createElement)("b",null,"Technical Support Team")," accepted the transfer request")),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{symbol:"change_owner",timeStamp:"5:22 PM"},Object(n.createElement)("b",null,"Amber Cann")," accepted this chat")),Object(n.createElement)(g,{type:"outbound"},Object(n.createElement)(E,null,Object(n.createElement)(O,{type:"outbound",name:"Amber Cann",timeStamp:"5:23 PM"},"Hi Andy, my name is Amber and I can help you solve your issue."))),Object(n.createElement)(g,{type:"inbound"},Object(n.createElement)(E,null,Object(n.createElement)(_,{initials:"AM",name:"Andy Martinez",ariaHidden:"true"}),Object(n.createElement)(O,{type:"inbound",name:"Andy Martinez",timeStamp:"5:29 PM"},"Nevermind, I speak french."))),Object(n.createElement)(g,{type:"bookend"},Object(n.createElement)(S,{type:"stop",name:"Andy Martinez",timeStamp:"5:30 PM"})))))),k({id:"Past-Chats"},"Past Chats"),D({},"An agent has the ability to view past chats with particular customers. In this instance the exact same components and markup for all types of chat items can be used, with just 4 differences:"),q({},I({},"A single modifier class of ",A({},".slds-chat_past")," is added to the ",A({},".slds-chat")," container"),I({},"Each chat message ",A({},".slds-chat-listitem")," container looses it's ",A({},".slds-chat-listitem_inbound")," or ",A({},".slds-chat-listitem_outbound")," modifier class"),I({},"Each chat message ",A({},".slds-chat-message__text")," looses it's ",A({},".slds-chat-message__text_inbound")," or ",A({},".slds-chat-message__text_outbound")," modifier class"),I({},A({},".slds-chat-message__meta")," moves to before ",A({},".slds-chat-message__text")," in DOM order")),Object(n.createElement)(i.a,{title:"Chat past chat"},Object(n.createElement)(s.a,null,Object(n.createElement)(h,{isPast:!0},Object(n.createElement)(y,null,Object(n.createElement)(g,{type:"bookend"},Object(n.createElement)(S,{type:"start",name:"Andy Martinez",timeStamp:"4:58 PM"})),Object(n.createElement)(g,null,Object(n.createElement)(E,null,Object(n.createElement)(O,{isPast:!0,name:"Andy Martinez",timeStamp:"4:59 PM"},"Hi, my CloudWidget only speaks French"))),Object(n.createElement)(g,null,Object(n.createElement)(E,null,Object(n.createElement)(O,{isPast:!0,name:"Jason Dewar",timeStamp:"5:02 PM"},"Hi Andy, thank you for contacting Widget Support. Can you please tell me what language you are trying to program on your CloudWidget?"))),Object(n.createElement)(g,null,Object(n.createElement)(E,null,Object(n.createElement)(O,{isPast:!0,name:"Jason Dewar",timeStamp:"5:03 PM"},"Have you tried turning it off and on again?"))),Object(n.createElement)(g,null,Object(n.createElement)(E,null,Object(n.createElement)(O,{isPast:!0,name:"Andy Martinez",timeStamp:"5:09 PM"},"yes, of course"))),Object(n.createElement)(g,null,Object(n.createElement)(E,null,Object(n.createElement)(O,{isPast:!0,name:"Jason Dewar",timeStamp:"5:15 PM"},"Sorry to hear that. Let me transfer you to a more technical support member. Thank you for your patience!"))),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{agentMessage:"Andy needs help changing the language on his CloudWidget",symbol:"change_owner",timeStamp:"5:19 PM"},Object(n.createElement)("b",null,"Jason Dewar")," sent a transfer request to"," ",Object(n.createElement)("b",null,"Technical Support Team"))),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{symbol:"change_owner",timeStamp:"5:20 PM"},Object(n.createElement)("b",null,"Technical Support Team")," accepted the transfer request")),Object(n.createElement)(g,{type:"event"},Object(n.createElement)(w,{symbol:"change_owner",timeStamp:"5:22 PM"},Object(n.createElement)("b",null,"Amber Cann")," accepted this chat")),Object(n.createElement)(g,null,Object(n.createElement)(E,null,Object(n.createElement)(O,{isPast:!0,name:"Amber Cann",timeStamp:"5:23 PM"},"Hi Andy, my name is Amber and I can help you solve your issue."))),Object(n.createElement)(g,null,Object(n.createElement)(E,null,Object(n.createElement)(O,{isPast:!0,name:"Andy Martinez",timeStamp:"5:29 PM"},"Nevermind, I speak french."))),Object(n.createElement)(g,{type:"bookend"},Object(n.createElement)(S,{type:"stop",name:"Andy Martinez",timeStamp:"5:30 PM"})))))))},B=function(){return Object(c.a)(L())}}});