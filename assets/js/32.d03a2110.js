(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{375:function(e,t,a){"use strict";a.r(t);var r=a(19),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"troubleshooting-lab-reports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-lab-reports"}},[e._v("#")]),e._v(" Troubleshooting lab reports")]),e._v(" "),a("p",[e._v("Starting from January 2020, we aim to send monthly reports to lab leaders and lab coordinators of the resource allocations and usage in their lab environments. Here is a collection of some of the known issues as of today:")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#storage"}},[e._v("Storage")]),a("ul",[a("li",[a("a",{attrs:{href:"#discrepancy-in-reported-volume-numbers"}},[e._v("Discrepancy in reported volume numbers")])]),a("li",[a("a",{attrs:{href:"#discrepancy-in-reported-volume-sizes"}},[e._v("Discrepancy in reported volume sizes")])]),a("li",[a("a",{attrs:{href:"#discrepancy-in-reported-volume-usage"}},[e._v("Discrepancy in reported volume usage")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage"}},[e._v("#")]),e._v(" Storage")]),e._v(" "),a("p",[e._v("The reported storage volumes may deviate from the observed storage as you see it inside your lab machines. We know of a few reasons why this may happen which is listed below. You can check your storage as reported on your machines by logging into the machine and type "),a("code",[e._v("df -h")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"discrepancy-in-reported-volume-numbers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discrepancy-in-reported-volume-numbers"}},[e._v("#")]),e._v(" Discrepancy in reported volume numbers")]),e._v(" "),a("p",[e._v("Storage volumes that are attached to the machine, but not mounted as volumes, will appear in the reported list. However, these may not be seen on the machine using the regular "),a("code",[e._v("df -h")]),e._v(" command. If you see such discrepancies, feel free to "),a("a",{attrs:{href:"/contact"}},[e._v("contact us")]),e._v(". We are happy to help adding or removing those to your machines.")]),e._v(" "),a("h3",{attrs:{id:"discrepancy-in-reported-volume-sizes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discrepancy-in-reported-volume-sizes"}},[e._v("#")]),e._v(" Discrepancy in reported volume sizes")]),e._v(" "),a("p",[e._v("Storage volumes sizes may show larger sizes in the report than those you observe in your machine. One reason for this could be that the volume size is expanded on our end, although we have not effectuated this on your end as this will require a planned restart of the machine.")]),e._v(" "),a("h3",{attrs:{id:"discrepancy-in-reported-volume-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discrepancy-in-reported-volume-usage"}},[e._v("#")]),e._v(" Discrepancy in reported volume usage")]),e._v(" "),a("p",[e._v("Volumes that are attached to machines that has been running without a restart since December 2019 may report zero usage. These machine may need a restart for all of your volumes to be reported correctly. You can do this yourself by logging into the machine where the storage is attached and execute the "),a("code",[e._v("sudo reboot")]),e._v(" command.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Rebooting your lab machine may affect all your lab colleagues. We advice that you discuss this with your lab colleagues and announce restarts so no one looses their valuable work.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);