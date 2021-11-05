"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6506],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){var r=n(67294),a=n(79443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},30547:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},49366:function(e,t,n){var r=n(67294),a=n(80944),o=n(86010);t.Z=function(e){var t,n=e.lazy,i=(e.block,e.defaultValue),l=e.values,s=e.groupId,c=(e.className,r.Children.toArray(e.children)),u=null!=l?l:c.map((function(e){return{value:e.props.value,label:e.props.label}})),p=null!=i?i:null==(t=c.find((function(e){return e.props.default})))?void 0:t.props.value,d=(0,a.Z)(),m=d.tabGroupChoices,f=d.setTabGroupChoices,y=(0,r.useState)(p),g=y[0],b=y[1];if(null!=s){var v=m[s];null!=v&&v!==g&&u.some((function(e){return e.value===v}))&&b(v)}var k=function(e){b(e),null!=s&&f(s,e)};return r.createElement("div",{className:"tabs-container"},r.createElement("div",{className:"sm:hidden"},r.createElement("label",{htmlFor:"tabs",className:"sr-only"},"Select a tab"),r.createElement("select",{id:"tabs",name:"tabs",value:g,onChange:function(e){return k(e.currentTarget.value)},className:"block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"},u.map((function(e){var t=e.value,n=e.label;return r.createElement("option",{value:t,key:t},null!=n?n:t)})))),r.createElement("div",{className:"hidden sm:block"},r.createElement("nav",{className:"flex space-x-4","aria-label":"Tabs"},u.map((function(e){var t=e.value,n=e.label;return r.createElement("button",{key:t,onClick:function(){return k(t)},className:(0,o.Z)(g===t?"bg-blue-100 text-blue-700":"text-gray-500 hover:text-gray-700","px-3 py-2 font-medium text-sm rounded-md"),"aria-current":g===t?"page":void 0},null!=n?n:t)})))),n?(0,r.cloneElement)(c.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},99600:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(49366),l=n(30547),s=["components"],c={title:"iOS",sidebar_position:2,pagination_prev:"intro",pagination_next:"concepts/data-model"},u="iOS Installation Instructions",p={unversionedId:"installation/ios",id:"installation/ios",isDocsHomePage:!1,title:"iOS",description:"1. Ensure you have CocoaPods 1.1.0 or later",source:"@site/docs/installation/ios.md",sourceDirName:"installation",slug:"/installation/ios",permalink:"/installation/ios",editUrl:"https://github.com/getditto/docs/edit/master/docs/installation/ios.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"iOS",sidebar_position:2,pagination_prev:"intro",pagination_next:"concepts/data-model"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Data Model",permalink:"/concepts/data-model"}},d=[],m={toc:d};function f(e){var t=e.components,c=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ios-installation-instructions"},"iOS Installation Instructions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://guides.cocoapods.org/using/getting-started.html"},"Ensure you have CocoaPods 1.1.0 or later")),(0,o.kt)("li",{parentName:"ol"},"Ensure you have ",(0,o.kt)("inlineCode",{parentName:"li"},"use_frameworks!")," in your Podfile"),(0,o.kt)("li",{parentName:"ol"},"Add the following to your ",(0,o.kt)("strong",{parentName:"li"},"Podfile")," like so:")),(0,o.kt)(i.Z,{groupId:"programming-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'DittoSwift'\n"))),(0,o.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'DittoObjC'\n")))),(0,o.kt)("p",null,"And run ",(0,o.kt)("inlineCode",{parentName:"p"},"pod install --repo-update")," to install the latest versions."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Navigate to your App's ",(0,o.kt)("strong",{parentName:"li"},"Target")," and go to the ",(0,o.kt)("strong",{parentName:"li"},"Info")," tab and right click on any row and ",(0,o.kt)("strong",{parentName:"li"},"Add Row"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"XCode 13 Info Plist Edit",src:n(12899).Z})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"Add")," the following keys to your Info.plist. ")),(0,o.kt)(i.Z,{groupId:"info-plist",defaultValue:"info-tab",values:[{label:"From Info Tab",value:"info-tab"},{label:"From Source Code",value:"source-code"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"info-tab",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the following values to your Info tab."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Key: NSBluetoothAlwaysUsageDescription\nType: String\nValue: Uses Bluetooth to connect and sync with nearby devices\n\nKey: NSBluetoothPeripheralUsageDescription\nType: String\nValue: Uses Bluetooth to connect and sync with nearby devices\n\nKey: NSLocalNetworkUsageDescription\nType: String\nValue: Uses WiFi to connect and sync with nearby devices\n\nKey: NSBluetoothPeripheralUsageDescription\nType: String\nValue: Uses Bluetooth to connect and sync with nearby devices\n\nKey: NSBonjourServices\nType: String\nValue: _http-alt._tcp.\n"))),(0,o.kt)(l.Z,{value:"source-code",mdxType:"TabItem"},(0,o.kt)("p",null,"If your app already has an ",(0,o.kt)("strong",{parentName:"p"},"Info.plist")," file, you can right click on it and ",(0,o.kt)("strong",{parentName:"p"},"Open As Source")," and add the following values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=Info.plist",title:"Info.plist"},"<key>NSBluetoothAlwaysUsageDescription</key>\n<string>Uses Bluetooth to connect and sync with nearby devices</string>\n<key>NSBluetoothPeripheralUsageDescription</key>\n<string>Uses Bluetooth to connect and sync with nearby devices</string>\n<key>NSLocalNetworkUsageDescription</key>\n<string>Uses WiFi to connect and sync with nearby devices</string>\n<key>NSBonjourServices</key>\n<array>\n  <string>_http-alt._tcp.</string>\n</array>\n")))),(0,o.kt)("p",null,"The values like ",(0,o.kt)("inlineCode",{parentName:"p"},"Uses WiFi to connect and sync with nearby devices")," will be displayed in a prompt. Replace it with whatever language is best for your users."),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"You can now use Ditto in your application:")),(0,o.kt)(i.Z,{groupId:"programming-language",defaultValue:"swift",values:[{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import DittoSwift\n\nlet ditto = Ditto()\ntry! ditto.setLicenseToken("my license token")\ntry! ditto.tryStartSync()\n'))),(0,o.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},'#import <DittoObjC/DittoObjC.h>\n\n\nDITDitto *ditto = [[DITDitto alloc] init];\nNSError *error = nil;\n\nif (![ditto setLicenseToken:@"my license token": error:&error]) {\n  NSLog(@"Error setting license token: %@", error);\n}\n\nif (![ditto tryStartSync:&error]) {\n  NSLog(@"Error starting sync: %@", error);\n}\n')))))}f.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},12899:function(e,t,n){t.Z=n.p+"assets/images/xcode13-infoplist-ecde0e9bfdc585ae89a7e9d3c71b246e.png"}}]);