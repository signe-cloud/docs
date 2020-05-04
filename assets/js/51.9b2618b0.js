(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{381:function(t,e,s){"use strict";s.r(e);var o=s(18),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"x2go"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x2go"}},[t._v("#")]),t._v(" X2Go")]),t._v(" "),s("p",[t._v("This guide explain how you can install and configure the "),s("a",{attrs:{href:"https://wiki.x2go.org/doku.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("X2Go"),s("OutboundLink")],1),t._v(" software to get instant and 'passwordless' access to graphical tools in your lab, such as "),s("strong",[t._v("RStudio")]),t._v(", "),s("strong",[t._v("Stata")]),t._v(", "),s("strong",[t._v("SPSS")]),t._v(" and "),s("strong",[t._v("MatLab")]),t._v(".")]),t._v(" "),s("p",[t._v("If you are connecting to the home machine in your lab, you are good to go after you have set up your local machine:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#set-up-your-local-machine"}},[t._v("Set up your local machine")])])]),t._v(" "),s("p",[t._v("If you want to connet to an unmanaged machine (iaas or blue) you will need to install the X2Go server before you connect:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#install-x2go-server-on-unmanaged-lab-machine-iaas"}},[t._v("Set up your unmanaged lab machine (iaas)")])])]),t._v(" "),s("h2",{attrs:{id:"set-up-your-local-machine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-your-local-machine"}},[t._v("#")]),t._v(" Set up your local machine")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("REQUIREMENTS")]),t._v(" "),s("ul",[s("li",[t._v("A working connection to your lab machines.")]),t._v(" "),s("li",[t._v("A lab machine set up for X2Go connection (home machines are by default set up with X2Go and Rstudio).")])])]),t._v(" "),s("h3",{attrs:{id:"install-x2go-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-x2go-client"}},[t._v("#")]),t._v(" Install X2Go client")]),t._v(" "),s("p",[t._v("Install the "),s("a",{attrs:{href:"https://wiki.x2go.org/doku.php/doc:installation:x2goclient",target:"_blank",rel:"noopener noreferrer"}},[t._v("x2go client"),s("OutboundLink")],1),t._v(" on your own local machine.")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("OS X/macOS")]),s("p",[s("ul",[s("li",[s("p",[t._v("Run brew to install both xquartz and x2goclient:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("brew cask "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xquartz\nbrew cask "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" x2goclient\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("REQUIREMENT")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install Homebrew package manager for macOS: brew"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[s("p",[t._v("Please read the "),s("a",{attrs:{href:"https://wiki.x2go.org/doku.php/doc:installation:x2goclient#os_x",target:"_blank",rel:"noopener noreferrer"}},[t._v("X2Go installation docs"),s("OutboundLink")],1),t._v(" for handy tweaks.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("OS X 10.15 Catalina")]),t._v(" "),s("p",[t._v("In case of issues with x2goclient you can try "),s("a",{attrs:{href:"https://code.x2go.org/releases/X2GoClient_nightly_macosx/x2goclient-4.1.2.2.git20191230.1893.heuler.OSX_10_13.dmg",target:"_blank",rel:"noopener noreferrer"}},[t._v("nightly build"),s("OutboundLink")],1),t._v(" version.")])])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Windows")]),s("p"),s("p",[t._v("Download and run the "),s("a",{attrs:{href:"https://wiki.x2go.org/doku.php/doc:installation:x2goclient#ms_windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("X2Go client"),s("OutboundLink")],1),t._v(" clicking "),s("strong",[s("code",[t._v("Download X2Go for MS Windows™ and install.")])]),t._v(" and then selecting the "),s("strong",[s("code",[t._v("exe-file")])]),t._v(".")]),t._v(" "),s("p")]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Linux (Ubuntu / Debian)")]),s("p"),s("p",[t._v("Install x2goclient using apt:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update -y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y x2goclient\n")])])]),s("p")]),s("h3",{attrs:{id:"configure-the-x2go-client-for-home-machines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-x2go-client-for-home-machines"}},[t._v("#")]),t._v(" Configure the X2Go client for home machines")]),t._v(" "),s("p",[t._v("Once installed, open X2Go and click "),s("strong",[s("code",[t._v("New session")])]),t._v(" and enter a "),s("em",[t._v("Session name")]),t._v(" that you will use to identify this connection later, e.g. "),s("em",[t._v("demolab - rstudio")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("The configuration below will work on "),s("RouterLink",{attrs:{to:"/faq/compute/#machine-types"}},[t._v("home")]),t._v(" machines. This configuration will -not- work on unmanaged "),s("RouterLink",{attrs:{to:"/faq/compute/#machine-types"}},[t._v("iaas and blue")]),t._v(" machines.")],1)]),t._v(" "),s("h4",{attrs:{id:"in-the-session-tab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-the-session-tab"}},[t._v("#")]),t._v(" In the "),s("code",[t._v("Session")]),t._v(" tab")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Server section")]),s("p",[s("ul",[s("li",[s("p",[s("em",[t._v("Host")]),t._v(": "),s("strong",[s("code",[t._v("10.5.5.12")])])])]),t._v(" "),s("li",[s("p",[s("em",[t._v("Login/username")]),t._v(": "),s("strong",[s("code",[t._v("<your-lab-username>")])])])]),t._v(" "),s("li",[s("p",[s("em",[t._v("SSH port")]),t._v(": "),s("strong",[s("code",[t._v("22")])])])]),t._v(" "),s("li",[s("p",[s("em",[t._v("Use RSA/DSA key for ssh connection")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("For Mac and Linux:")]),t._v(" "),s("p",[t._v('Leave blank if your login is "passwordless" (key-based). If not, confer the \''),s("RouterLink",{attrs:{to:"/getting-started/how-to-connect/#simplify-your-life"}},[t._v("establish a password less login")]),t._v("' section in the installation guide.")],1)]),t._v(" "),s("li",[s("p",[t._v("For Windows:")]),t._v(" "),s("p",[t._v("You will need to save the access key to your local machine and point to this file: (1) log into your lab "),s("strong",[s("code",[t._v("home")])]),t._v(" machine, (2) print your key with "),s("strong",[s("code",[t._v("cat ~/.ssh/id_rsa")])]),t._v(", (3) open "),s("em",[t._v("Notepad")]),t._v(" on your local machine and copy the text from "),s("strong",[s("code",[t._v("-----BEGIN KEY-----")])]),t._v(" to "),s("strong",[s("code",[t._v("-----END KEY-----")])]),t._v(" (including both headers and the key between) into a file that your save on your computer. (4) link to this file in the window "),s("em",[t._v("Use RSA/DSA key for ssh connection")]),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("This file is a key to your lab. Store the key somewhere in the "),s("strong",[s("code",[t._v("C:")])]),t._v(" drive on your local machine.")])])])])]),t._v(" "),s("li",[s("p",[s("em",[t._v("Try auto login")]),t._v(": "),s("strong",[s("code",[t._v("Check")])])])]),t._v(" "),s("li",[s("p",[s("em",[t._v("Use Proxy server for SSH connection")]),t._v(": "),s("strong",[s("code",[t._v("Check")])])])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Proxy server section")]),s("p",[s("ul",[s("li",[s("em",[t._v("Proxy server type:")]),t._v(" "),s("strong",[s("code",[t._v("SSH")])])]),t._v(" "),s("li",[s("em",[t._v("Host:")]),t._v(" "),s("strong",[s("code",[t._v("<lab-ip>")])]),t._v(" "),s("ul",[s("li",[t._v("For all: This is your lab specific IP that starts with "),s("strong",[s("code",[t._v("10.42.130.")])]),t._v(". You will find the full address in the software that you use to connect to your lab.")])])]),t._v(" "),s("li",[s("em",[t._v("Port:")]),t._v(" "),s("strong",[s("code",[t._v("22")])])]),t._v(" "),s("li",[s("em",[t._v("Same login as on X2Go Sever:")]),t._v(" "),s("strong",[s("code",[t._v("Leave blank")])])]),t._v(" "),s("li",[s("em",[t._v("Login:")]),t._v(" "),s("strong",[s("code",[t._v("<your-lab-username>")])]),t._v(" "),s("ul",[s("li",[t._v("For all: This is the user name that you use to connect to your lab.")])])]),t._v(" "),s("li",[s("em",[t._v("Same password as on X2Go Server:")]),t._v(" "),s("strong",[s("code",[t._v("Leave blank")])])]),t._v(" "),s("li",[s("em",[t._v("RSA/DSA key:")]),t._v(" "),s("ul",[s("li",[t._v("For Mac and Linux: "),s("strong",[s("code",[t._v("Leave blank")])])]),t._v(" "),s("li",[t._v("For Windows: "),s("strong",[s("code",[t._v("Link to the same file that you established above")])])])])]),t._v(" "),s("li",[s("em",[t._v("ssh-agent or default ssh key:")]),t._v(" "),s("strong",[s("code",[t._v("Check")])])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Session type section")]),s("p",[s("ul",[s("li",[t._v("Choose "),s("strong",[s("code",[t._v("Single application")])]),t._v(" from the drop down menu")]),t._v(" "),s("li",[t._v("Add "),s("strong",[s("code",[t._v("/usr/bin/xterm")])]),t._v(" in the command window")])])])]),s("h4",{attrs:{id:"in-the-connection-tab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-the-connection-tab"}},[t._v("#")]),t._v(" In the "),s("code",[t._v("Connection")]),t._v(" tab")]),t._v(" "),s("p",[t._v("Play with the "),s("em",[t._v("Connection speed")]),t._v(" and "),s("em",[t._v("Compression")]),t._v(" methods. For office use "),s("strong",[s("code",[t._v("LAN")])]),t._v(" and "),s("strong",[s("code",[t._v("16m-png")])]),t._v(" should be fine.")]),t._v(" "),s("h4",{attrs:{id:"in-the-media-tab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-the-media-tab"}},[t._v("#")]),t._v(" In the "),s("code",[t._v("Media")]),t._v(" tab")]),t._v(" "),s("ul",[s("li",[t._v("Uncheck "),s("strong",[s("code",[t._v("Client side printing support")])])]),t._v(" "),s("li",[t._v("Uncheck "),s("strong",[s("code",[t._v("Enable sound support")])])])]),t._v(" "),s("p",[t._v("Hit "),s("strong",[s("code",[t._v("OK")])]),t._v(" in the lower right corner.")]),t._v(" "),s("h4",{attrs:{id:"connect-to-x2go-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-x2go-server"}},[t._v("#")]),t._v(" Connect to X2Go server")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Ensure that your HUNT Cloud VPN is running and connected.")])]),t._v(" "),s("li",[s("p",[t._v("Click on your newly saved session in X2Go to connect to your lab machine.\nIf this works you should see a terminal pop up on your screen.")])]),t._v(" "),s("li",[s("p",[t._v("Type "),s("strong",[s("code",[t._v("xclock")])]),t._v(" in the terminal to test the setup. With a little bit of luck,\nyou should now see a new window popping up with a digital clock.")])])]),t._v(" "),s("h4",{attrs:{id:"connect-to-other-software"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-other-software"}},[t._v("#")]),t._v(" Connect to other software")]),t._v(" "),s("p",[t._v("You may use X2Go to access software with graphical interfaces.\nSuch software needs to be installed in your lab machine.")]),t._v(" "),s("p",[t._v("For your home machine, "),s("RouterLink",{attrs:{to:"/working-in-your-lab/analytical-tools/r-studio/#install-r-studio"}},[t._v("RStudio")]),t._v(" should be installed by default. To access this program, go back to your configuration and update "),s("strong",[s("code",[t._v("Session type")])]),t._v(" at the bottom of the "),s("strong",[s("code",[t._v("Session tab")])]),t._v(" from "),s("strong",[s("code",[t._v("/usr/bin/xterm/")])]),t._v(" to the location of Rstudio ("),s("strong",[s("code",[t._v("/usr/bin/rstudio")])]),t._v(") and reconnect. With a little bit of luck, you should now see Rstudio on the your screen. If so, time to celebrate with coffee! If not, time to visit the "),s("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/#troubleshooting"}},[t._v("troubleshooting section")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"configure-the-x2go-client-for-unmanaged-machines"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-x2go-client-for-unmanaged-machines"}},[t._v("#")]),t._v(" Configure the X2Go client for unmanaged machines")]),t._v(" "),s("p",[t._v("Once installed, open X2Go and click "),s("strong",[s("code",[t._v("New session")])]),t._v(" and enter a "),s("em",[t._v("Session name")]),t._v(" that you will use to identify this connection later, e.g. "),s("em",[t._v("demolab - rstudio")])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("The configuration below will only work on "),s("strong",[s("code",[t._v("iaas")])]),t._v(" or "),s("strong",[s("code",[t._v("blue")])]),t._v(" machines, and not home machines. This setup require that someone in your lab already have installed X2Go server and your software of choice on the particular machine you will be connecting to.")])]),t._v(" "),s("h4",{attrs:{id:"in-the-session-tab-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-the-session-tab-2"}},[t._v("#")]),t._v(" In the "),s("code",[t._v("Session")]),t._v(" tab")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Server section")]),s("p",[s("ul",[s("li",[s("p",[s("em",[t._v("Host")]),t._v(": "),s("strong",[s("code",[t._v("10.5.5.<something>")])])]),t._v(" "),s("ul",[s("li",[t._v("You need to type in the IP address for the machine that is set up for X2Go. You will fine the IP by logging into the iaas machine on ssh and type "),s("strong",[s("code",[t._v("ifconfig | grep 10.5.5.")])])])])]),t._v(" "),s("li",[s("p",[s("em",[t._v("Login/username")]),t._v(": "),s("strong",[s("code",[t._v("<iaas-machine-username>")])])]),t._v(" "),s("ul",[s("li",[t._v("The default user name of iaas and blue machines is "),s("strong",[s("code",[t._v("ubuntu")])]),t._v(". It may be good to confer with your lab coordinator to learn their specific setup for the machine you plan to access.")])])]),t._v(" "),s("li",[s("p",[s("em",[t._v("SSH port")]),t._v(": "),s("strong",[s("code",[t._v("22")])])])]),t._v(" "),s("li",[s("p",[s("em",[t._v("Use RSA/DSA key for ssh connection")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("For Mac and Linux:")]),t._v(" "),s("p",[t._v('Leave blank if your login is "passwordless" (key-based). If not, confer the \''),s("RouterLink",{attrs:{to:"/getting-started/how-to-connect/#simplify-your-life"}},[t._v("establish a password less login")]),t._v("' section in the installation guide.")],1)]),t._v(" "),s("li",[s("p",[t._v("For Windows:")]),t._v(" "),s("p",[t._v("You will need to save the access keys to your local machine and point to this file: (1) log into your lab "),s("strong",[s("code",[t._v("home")])]),t._v(" machine, (2) print your key with "),s("strong",[s("code",[t._v("cat ~/.ssh/id_rsa")])]),t._v(", (3) open "),s("em",[t._v("Notepad")]),t._v(" on your local machine and copy the text from "),s("strong",[s("code",[t._v("-----BEGIN KEY-----")])]),t._v(" to "),s("strong",[s("code",[t._v("-----END KEY-----")])]),t._v(" (including both headers and the key between) into a file that your save on your computer. (4) link to this file in the window "),s("em",[t._v("Use RSA/DSA key for ssh connection")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("On IAAS nodes:")]),t._v(" "),s("p",[t._v("In addition to the steps above, ensure that you are able to log directly into the machine from your local machine following "),s("a",{attrs:{href:"#install-x2go-server-on-unmanaged-lab-machine-iaas"}},[t._v("this guide")]),t._v(".")])])])]),t._v(" "),s("li",[s("p",[s("em",[t._v("Try auto login")]),t._v(": "),s("strong",[s("code",[t._v("Check")])])])]),t._v(" "),s("li",[s("p",[s("em",[t._v("Use Proxy server for SSH connection")]),t._v(": "),s("strong",[s("code",[t._v("Check")])])])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Proxy server section")]),s("p",[s("ul",[s("li",[s("em",[t._v("Proxy server type:")]),t._v(" "),s("strong",[s("code",[t._v("SSH")])])]),t._v(" "),s("li",[s("em",[t._v("Host:")]),t._v(" "),s("strong",[s("code",[t._v("<lab-ip>")])]),t._v(" "),s("ul",[s("li",[t._v("This is your lab specific IP that starts with "),s("strong",[s("code",[t._v("10.42.130.")])]),t._v(". You will find the full address in the software that you use to connect to your lab.")])])]),t._v(" "),s("li",[s("em",[t._v("Port:")]),t._v(" "),s("strong",[s("code",[t._v("22")])])]),t._v(" "),s("li",[s("em",[t._v("Same login as on X2Go Sever:")]),t._v(" "),s("strong",[s("code",[t._v("Leave blank")])])]),t._v(" "),s("li",[s("em",[t._v("Login:")]),t._v(" "),s("strong",[s("code",[t._v("<your-lab-username>")])]),t._v(" "),s("ul",[s("li",[t._v("This is the user name that you use to connect to your lab.")])])]),t._v(" "),s("li",[s("em",[t._v("Same password as on X2Go Server:")]),t._v(" "),s("strong",[s("code",[t._v("Leave blank")])])]),t._v(" "),s("li",[s("em",[t._v("RSA/DSA key:")]),t._v(" "),s("ul",[s("li",[t._v("For Mac and Linux: "),s("strong",[s("code",[t._v("Leave blank")])])]),t._v(" "),s("li",[t._v("For Windows: "),s("strong",[s("code",[t._v("Link to the same file that you established above")])])])])]),t._v(" "),s("li",[s("em",[t._v("ssh-agent or default ssh key:")]),t._v(" "),s("strong",[s("code",[t._v("Check")])])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Session type section")]),s("p",[s("ul",[s("li",[t._v("Choose "),s("strong",[s("code",[t._v("Single application")])]),t._v(" from the drop down menu")]),t._v(" "),s("li",[t._v("Add "),s("strong",[s("code",[t._v("/usr/bin/xterm")])]),t._v(" in the command window")])])])]),s("h4",{attrs:{id:"remaining-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remaining-configuration"}},[t._v("#")]),t._v(" Remaining configuration")]),t._v(" "),s("p",[t._v("Follow the setups outlines in the "),s("strong",[s("code",[t._v("Configure the X2Go client for home machines")])]),t._v(" for further setup, including "),s("strong",[s("code",[t._v("In the connection tab")])]),t._v(", "),s("strong",[s("code",[t._v("In the media tab")])]),t._v(", "),s("strong",[s("code",[t._v("connecting to the X2Go server")])]),t._v(" and "),s("strong",[s("code",[t._v("Connect to other software")])]),t._v(": "),s("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/#configure-the-x2go-client-for-home-machines"}},[t._v("Start here")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"install-a-desktop-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-a-desktop-environment"}},[t._v("#")]),t._v(" Install a desktop environment")]),t._v(" "),s("p",[t._v("The default X2Go setup connects directly to individual applications. This section describe how you may install a lightweight "),s("a",{attrs:{href:"https://www.xfce.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("XFCE"),s("OutboundLink")],1),t._v(" desktop environment using common settings.")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Minimal setup of XFCE desktop")]),s("p"),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update -y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" autoremove -y\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y --no-install-recommends xubuntu-desktop\n")])])]),s("p")]),s("p",[t._v("The default setup will need some care to run smoothly:")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("TAB completion")]),s("p",[s("ul",[s("li",[s("p",[t._v("Fixing TAB completion using shell: (1) Log into your lab machine and (2) run this code:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'s|name="\\&lt\\;Super\\&gt\\;Tab" type="string" value="switch_window_key"|name="\\&lt\\;Super\\&gt\\;Tab" type="empty"|g\'')]),t._v(" ~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-keyboard-shortcuts.xml\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Fixing TAB completion using GUI approach over x2go client.")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("1.")]),t._v(" Open the Xfce "),s("span",{pre:!0,attrs:{class:"token bold"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("`Application Menu`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v(" > "),s("span",{pre:!0,attrs:{class:"token bold"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("`Settings`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v(" > "),s("span",{pre:!0,attrs:{class:"token bold"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("`Window Manager`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("2.")]),t._v(" Click on the "),s("span",{pre:!0,attrs:{class:"token bold"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("`Keyboard Tab`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("**")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("3.")]),t._v(" Clear the Switch window for same application setting\n")])])])])])])]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Copy-paste functionality")]),s("p"),s("p",[t._v("Connect to your lab machine and run this code:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Client is connecting "),s("strong",[t._v("from macOS")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" ~/.Xresources\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" u+x ~/.Xresources\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*VT100.translations: #override Meta <KeyPress> V: insert-selection(PRIMARY, CUT_BUFFER0)"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.Xresources\nxrdb -merge ~/.Xresources\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Client is connecting from "),s("strong",[t._v("Windows")]),t._v(" or "),s("strong",[t._v("Linux")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" ~/.Xresources\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" u+x ~/.Xresources\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*VT100.Translations: #override Ctrl Shift <Key>V: insert-selection(CLIPBOARD)"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.Xresources\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*VT100.Translations: #override Ctrl Shift <Key>C: copy-selection(CLIPBOARD)"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.Xresources\nxrdb -merge ~/.Xresources\n")])])])])]),t._v(" "),s("p")]),s("h2",{attrs:{id:"install-x2go-server-on-unmanaged-lab-machine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-x2go-server-on-unmanaged-lab-machine"}},[t._v("#")]),t._v(" Install X2Go server on unmanaged lab machine")]),t._v(" "),s("p",[t._v("Connection to X2Go require the application "),s("strong",[s("code",[t._v("x2goserver")])]),t._v(" to run for connections to work.\nYou may install this on iaas and blue machines as follows:")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("This section is for lab coordinators that want to set up their unmanaged iaas and blue machines for GUI access.")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("REQUIREMENTS")]),t._v(" "),s("ul",[s("li",[t._v("Root access to your lab machine. The below configuration will not work on home machines.")])])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Install x2goserver")]),s("p"),s("p",[t._v("Log into your unmanaged lab machine and install "),s("strong",[s("code",[t._v("x2goserver")])]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:x2go/stable\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" x2goserver libnss3 libasound2 -y\n")])])]),s("p")]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Ensure smooth access")]),s("p"),s("p",[t._v("You need to make sure you and your lab colleagues can log in to the x2go machine passwordless using RSA certificates, e.g. by following these steps:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("From your local machine, log into your lab's entry machine:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("labname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("-entry\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Form your entry machine, copy your machine key to your iaas-machine with the running X2Go server:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("ssh-copy-id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name-of-iaas-node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[s("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" if you are unable to make the above step work since a security setting may prohibit this depending on your lab setup.")])])]),t._v(" "),s("li",[s("p",[t._v("Confirm the passwordless route to your iaas machine:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("iaas-node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Get the IP for your IAAS machine")]),t._v(" "),s("p",[t._v("Inside your IAAS node, list the IP address for the node with "),s("strong",[s("code",[t._v("ifconfig")])]),t._v(". The IP address is listed after "),s("strong",[s("code",[t._v("inet addr:")])]),t._v(" and start with 10.5. Note this as you will use this for the X2Go setup on your local machine (steps above).")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hostname")]),t._v(" -I\n")])])])])]),t._v(" "),s("p")]),s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Password prompts during login")]),s("p"),s("p",[t._v("X2Go rely either password or certificate to authenticate your connection. If the certificate do not work (or not included), your may be asked to insert your password four times before your application start. If so, try to fetch and save your certificate as described in our "),s("RouterLink",{attrs:{to:"/working-in-your-lab/technical-tools/x2go/#configure-the-x2go-client-for-home-machines"}},[t._v("X2Go configuration")]),t._v(" under "),s("strong",[s("code",[t._v("Use RSA/DSA key for ssh connection")])]),t._v(".")],1),t._v(" "),s("p")]),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("Manually 'killing' a stuck X2Go session")]),s("p"),s("p",[t._v("From time to time your X2Go sessions may get stuck, such as when your software inside X2Go consumes all available memory. In such circumstances you may need to manually terminate the stuck X2Go processes using the command line in your lab machine.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("From your local machine, connect to your lab machine over SSH, either using command line (Mac/Linux) or MobaXterm (Windows).")])]),t._v(" "),s("li",[s("p",[t._v("Once onboard your lab machine, list X2Go processes running under your user name.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" aux "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" x2go "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoami")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])]),s("p",[t._v("A single line of your output will similar to the output below. This is from a process running the RStudio software. Your output may look different depending on the software your run:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("demouser 22463 0.0 0.0 11300 1796 ? Ss Jul11 0:00 /bin/bash /usr/bin/x2goruncommand 50 22408 demouser-50-1563761927_stRrstudio_dp32 39401 /usr/bin/rstudio nosnd R\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Identify the process ID number that you want to terminate. The unique process ID is listes in the second column in the output from Step 2. For example, the process ID for the X2Go session below is "),s("strong",[s("code",[t._v("22463")])]),t._v(" (your number will be different).")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("demouser 22463 0.0 0.0 11300 1796 ? Ss Jul11 0:00 /bin/bash /usr/bin/x2goruncommand 50 22408 demouser-50-1563761927_stRrstudio_dp32 39401 /usr/bin/rstudio nosnd R\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Terminate the session ID that is stuck.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("process-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# e.g.: kill 22463")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("Confirm that the process is killed by reapeating Step 2 to verify that the process ID is no longer listed. Repeat the procedure to kill additional processes if needed.")])]),t._v(" "),s("li",[s("p",[t._v("Restart X2Go.")])])]),t._v(" "),s("p")])])}),[],!1,null,null,null);e.default=a.exports}}]);