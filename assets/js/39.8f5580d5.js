(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{248:function(a,s,e){"use strict";e.r(s);var t=e(0),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"_7z"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7z"}},[a._v("#")]),a._v(" 7z")]),a._v(" "),e("p",[a._v("This guide explain how you can install, compress and decompress archives with the "),e("a",{attrs:{href:"https://www.7-zip.org/7z.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("7z"),e("OutboundLink")],1),a._v(" software, such as zip files.")]),a._v(" "),e("h3",{attrs:{id:"install-7z"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-7z"}},[a._v("#")]),a._v(" Install 7z")]),a._v(" "),e("p",[a._v("Install the 7z software on your lab machine.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt-get")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" p7zip-full\n")])])]),e("h3",{attrs:{id:"extract-a-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extract-a-file"}},[a._v("#")]),a._v(" Extract a file")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("7za e "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("myfile"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".7z\n")])])]),e("p",[a._v("or")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("7za e "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("myfile"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(".zip\n")])])]),e("h3",{attrs:{id:"compress-a-folder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compress-a-folder"}},[a._v("#")]),a._v(" Compress a folder")]),a._v(" "),e("p",[a._v("This command allow you to compress and encrypt a folder:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("7za "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("filename-for-new-file.7z"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("lab-folder"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -p"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("ul",[e("li",[e("strong",[a._v("filename-for-new-file.7z")]),a._v(" - this wil be the name for the the new file you are compressing.")]),a._v(" "),e("li",[e("strong",[a._v("lab-folder")]),a._v(" - this is the folder (or file) in your lab that will be compressed.")]),a._v(" "),e("li",[e("strong",[a._v("key")]),a._v(" - this is the password that your will need to decrypt your archive.")])]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("Key transfer")]),a._v(" "),e("p",[a._v("Always transfer your key in a separate channel than your file. For example, you may consider to transfer files directly over SSH or filesender.no and keys over the encrypted mobile app Signal.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);