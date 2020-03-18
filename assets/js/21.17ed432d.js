(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{229:function(e,t,o){"use strict";o.r(t);var n=o(17),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"connecting-to-your-lab"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-your-lab"}},[e._v("#")]),e._v(" Connecting to your lab")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("General requirements")]),e._v(" "),o("p",[o("strong",[e._v("Without these, it is impossible to access your lab environment.")])]),e._v(" "),o("ul",[o("li",[e._v("Signed user agreement ("),o("a",{attrs:{href:"/assets/hunt-cloud-user-agreement.pdf"}},[e._v("blank template")]),e._v(") forwarded to us over "),o("a",{attrs:{href:"/contact"}},[e._v("email")]),e._v(" for account activation.")]),e._v(" "),o("li",[e._v("Computer connected to the Internet")]),e._v(" "),o("li",[e._v("Smartphone to receive system keys from HUNT Cloud")]),e._v(" "),o("li",[e._v("Compressed file from HUNT Cloud downloaded from link sent over email")])])]),e._v(" "),o("p",[e._v("Your initial setup has four steps:\n(i) collect your keys and configuration files\n(ii) setup google authenticator app\n(iii) establish a successful VPN connection, and\n(iv) establish a smooth SSH connection.\nPlan for the first step to take a few days, and the two next steps to take a few hours.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#setup-signal"}},[e._v("Setup Signal")]),e._v(" and download your configuration file")]),e._v(" "),o("li",[o("a",{attrs:{href:"#_2-setup-google-authenticator"}},[e._v("Setup Google Authenticator")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#_3-setup-openvpn-client"}},[e._v("Setup OpenVPN Client")]),e._v(" ("),o("a",{attrs:{href:"#windows"}},[e._v("Windows")]),e._v(", "),o("a",{attrs:{href:"#os-x-and-macos"}},[e._v("OS X and macOS")]),e._v(", "),o("a",{attrs:{href:"#linux"}},[e._v("Linux")]),e._v(")")]),e._v(" "),o("li",[o("a",{attrs:{href:"#_4-connecting-to-your-lab"}},[e._v("Connecting to your lab")])])]),e._v(" "),o("h2",{attrs:{id:"_1-collect-your-digital-lab-keys"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-collect-your-digital-lab-keys"}},[e._v("#")]),e._v(" 1. Collect your digital lab keys")]),e._v(" "),o("ul",[o("li",[e._v("We will send you the keys over your personal mobile phone.")]),e._v(" "),o("li",[e._v("We will send you a link to your VPN certificate and SSH configuration on your organizational email.")])]),e._v(" "),o("h3",{attrs:{id:"setup-signal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-signal"}},[e._v("#")]),e._v(" Setup Signal")]),e._v(" "),o("p",[e._v("Signal is a private messenger app that provide a secret channel to communicate system keys.")]),e._v(" "),o("h4",{attrs:{id:"how-to-install"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install"}},[e._v("#")]),e._v(" How to install")]),e._v(" "),o("p",[e._v("Search for "),o("code",[e._v("Signal")]),e._v(" in the iOS or Android app stores, or use the links below.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://itunes.apple.com/us/app/signal-private-messenger/id874139669?mt=8",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and install for "),o("strong",[e._v("iOS")]),e._v(" here"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms&hl=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and install for "),o("strong",[e._v("Android")]),e._v(" here"),o("OutboundLink")],1)])]),e._v(" "),o("h4",{attrs:{id:"transfer-keys"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#transfer-keys"}},[e._v("#")]),e._v(" Transfer keys")]),e._v(" "),o("ul",[o("li",[e._v("Send us a notification on cloud@hunt.ntnu.no when you have installed Signal.")]),e._v(" "),o("li",[e._v("We will by default send you the keys from number 91001893. This number is registered on '"),o("a",{attrs:{href:"https://www.1881.no/?query=91001893",target:"_blank",rel:"noopener noreferrer"}},[e._v("Norges teknisk-naturvitenskapelige universitet NTNU"),o("OutboundLink")],1),e._v("'. We will notify you on your organizational email if this number change.")])]),e._v(" "),o("p",[e._v("You are able to continue the onboarding as soon as you receive the system keys. Please allow for this step to take up to 3 days before completion.")]),e._v(" "),o("h3",{attrs:{id:"download-vpn-certificate-and-ssh-configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#download-vpn-certificate-and-ssh-configuration"}},[e._v("#")]),e._v(" Download VPN certificate and SSH configuration")]),e._v(" "),o("p",[e._v("We will send you a link to an encrypted archive (ZIP-file) with your VPN certificate and your SSH config on your organizational email.")]),e._v(" "),o("ul",[o("li",[e._v("Click on the link in the email to download the file and save this on your local machine.")]),e._v(" "),o("li",[e._v("Unpack (extract) the file with your favourite file archiver software that recognize the 7z format ("),o("a",{attrs:{href:"https://www.google.no/search?q=unpack+7z+windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("windows"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://www.google.no/search?q=unpack+7z+mac",target:"_blank",rel:"noopener noreferrer"}},[e._v("mac"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://www.google.no/search?q=unpack+7z+linux",target:"_blank",rel:"noopener noreferrer"}},[e._v("linux"),o("OutboundLink")],1),e._v(") using the key named "),o("code",[e._v("ZIP file key")]),e._v(" from your Signal transfer.")])]),e._v(" "),o("h3",{attrs:{id:"verify-that-this-step-is-completed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verify-that-this-step-is-completed"}},[e._v("#")]),e._v(" Verify that this step is completed")]),e._v(" "),o("p",[e._v("By completion of this step you should have two files stored on your local computer:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("<your-username>.ovpn")]),e._v(" - your personal OpenVPN certificate")]),e._v(" "),o("li",[o("code",[e._v("ssh-config.txt")]),e._v(" - your SSH configuration which you should use to connect to your lab")])]),e._v(" "),o("p",[e._v("In addition, you should have 4 secrets:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("ZIP file key")]),e._v(" - your key for unlocking the archive we sent you")]),e._v(" "),o("li",[o("code",[e._v("Google Authenticator key")]),e._v(" - your key for generating Google Authenticator verification codes")]),e._v(" "),o("li",[o("code",[e._v("VPN passphrase")]),e._v(" - your passphrase for unlocking your OpenVPN certificate")]),e._v(" "),o("li",[o("code",[e._v("SSH temporary key")]),e._v(" - your temporary passphrase when logging on with SSH for the first time")])]),e._v(" "),o("p",[e._v("It will be impossible to continue without these.")]),e._v(" "),o("h2",{attrs:{id:"_2-setup-google-authenticator"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-setup-google-authenticator"}},[e._v("#")]),e._v(" 2. Setup Google Authenticator")]),e._v(" "),o("p",[e._v("Google Authenticator is a multifactor app for mobile devices that generates verification codes every 30 seconds.")]),e._v(" "),o("p",[e._v("We call this the "),o("strong",[o("code",[e._v("verification code")])]),e._v(" which will be used for logging in to your OpenVPN account.")]),e._v(" "),o("h3",{attrs:{id:"how-to-install-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-2"}},[e._v("#")]),e._v(" How to install")]),e._v(" "),o("p",[e._v("Search for "),o("code",[e._v("Google Authenticator")]),e._v(" in the iOS or Android app stores, or use the links below.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and install for "),o("strong",[e._v("iOS")]),e._v(" here"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and install for "),o("strong",[e._v("Android")]),e._v(" here"),o("OutboundLink")],1)])]),e._v(" "),o("h3",{attrs:{id:"setup-the-app-and-add-a-new-account"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-the-app-and-add-a-new-account"}},[e._v("#")]),e._v(" Setup the app and add a new account")]),e._v(" "),o("ol",[o("li",[e._v("Start the Google Authenticator app")]),e._v(" "),o("li",[e._v("Tap "),o("em",[e._v("Begin setup")]),e._v(" (first time setup) or "),o("em",[e._v("Add an account")]),e._v(" (additional accounts)")]),e._v(" "),o("li",[e._v("Select "),o("em",[e._v("Enter a provided key")])]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("HUNT CLOUD VPN")]),e._v(" as the "),o("em",[e._v("account name")])]),e._v(" "),o("li",[e._v("Enter the "),o("code",[e._v("Google Authenticator key")]),e._v(" sent to you from HUNT over Signal")]),e._v(" "),o("li",[e._v("Make sure "),o("em",[e._v("Time based")]),e._v(" is selected.")]),e._v(" "),o("li",[e._v("Tap "),o("em",[e._v("Add")]),e._v(" to finish the setup of the new account")])]),e._v(" "),o("p",[e._v("You should now be prompted with a 6 digit "),o("strong",[o("code",[e._v("verification code")])]),e._v(" that refreshes ever 30 seconds.")]),e._v(" "),o("h2",{attrs:{id:"_3-setup-openvpn-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-setup-openvpn-client"}},[e._v("#")]),e._v(" 3. Setup OpenVPN Client")]),e._v(" "),o("p",[e._v("OpenVPN is an open-source application that allows you to connect to the HUNT virtual private network (VPN).")]),e._v(" "),o("h3",{attrs:{id:"windows"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),o("h4",{attrs:{id:"install-the-client"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-the-client"}},[e._v("#")]),e._v(" Install the client")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://openvpn.net/community-downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and install OpenVPN using the latest Windows Installer here"),o("OutboundLink")],1)])]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("Installing OpenVPN may require administrative rights on your computer.\nIf you don't have administrative rights on your computer, or don't know if you have administrative right on your computer, please see "),o("a",{attrs:{href:"#installing-openvpn-on-windows-without-administrative-rights"}},[e._v("Installing OpenVPN on Windows without administrative rights")]),e._v(".")])]),e._v(" "),o("h4",{attrs:{id:"setup-the-openvpn-profile"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-the-openvpn-profile"}},[e._v("#")]),e._v(" Setup the OpenVPN profile")]),e._v(" "),o("ol",[o("li",[e._v("Start the OpenVPN client (if it is not running already)")]),e._v(" "),o("li",[e._v("Right-click on the OpenVPN notification icon on the taskbar")]),e._v(" "),o("li",[e._v("Select "),o("code",[e._v("Import file...")])]),e._v(" "),o("li",[e._v("Select the OpenVPN profile named "),o("code",[e._v("<username>.ovpn")]),e._v(" in the collection of credentials given from HUNT.")])]),e._v(" "),o("h4",{attrs:{id:"connecting-to-the-vpn"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-the-vpn"}},[e._v("#")]),e._v(" Connecting to the VPN")]),e._v(" "),o("ol",[o("li",[e._v("Right-click on the OpenVPN notification icon on the taskbar")]),e._v(" "),o("li",[e._v("Select "),o("em",[e._v("Connect")])]),e._v(" "),o("li",[e._v("Enter your user name (same as the OpenVPN profile file name)")]),e._v(" "),o("li",[e._v("Enter the "),o("strong",[o("code",[e._v("verification code")])]),e._v(" from Google Authenticator as your password")])]),e._v(" "),o("ul",[o("li",[e._v("Make sure that the "),o("em",[e._v("Save password")]),e._v(" checkbox is "),o("strong",[o("code",[e._v("unchecked")])]),e._v(".")])]),e._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[e._v("If prompted for a "),o("em",[e._v("Private Key Password")]),e._v(" or "),o("em",[e._v("Passphrase")]),e._v(", use the "),o("code",[e._v("VPN passphrase")]),e._v(" from "),o("code",[e._v("vpn-key-passphrase.txt")]),e._v(" sent to you from HUNT over Signal")])]),e._v(" "),o("ul",[o("li",[e._v("This passphrase can be saved.")])]),e._v(" "),o("p",[e._v("You should now be connected to the VPN.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Troubleshooting")]),e._v(" "),o("p",[e._v("If it does not connect, but displays another "),o("code",[e._v("User Authentication")]),e._v(" prompt, please try again with a new "),o("strong",[o("code",[e._v("verification code")])])]),e._v(" "),o("p",[e._v("Please see "),o("a",{attrs:{href:"openvpn-on-windows"}},[e._v("OpenVPN on Windows")]),e._v(" for troubleshooting.")])]),e._v(" "),o("h3",{attrs:{id:"os-x-and-macos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#os-x-and-macos"}},[e._v("#")]),e._v(" OS X and macOS")]),e._v(" "),o("h4",{attrs:{id:"install-the-client-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-the-client-2"}},[e._v("#")]),e._v(" Install the client")]),e._v(" "),o("p",[e._v("The recommended OpenVPN client for OS X and macOS is called Tunnelblick.")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://tunnelblick.net/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and install the latest "),o("strong",[e._v("stable release")]),e._v(" from here"),o("OutboundLink")],1)])]),e._v(" "),o("h4",{attrs:{id:"setup-the-openvpn-profile-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-the-openvpn-profile-2"}},[e._v("#")]),e._v(" Setup the OpenVPN profile")]),e._v(" "),o("ol",[o("li",[e._v("If prompted with the "),o("code",[e._v("Welcome to Tunnelblick")]),e._v(" prompt, otherwise jump to 2.\n"),o("ol",[o("li",[e._v("Select "),o("code",[e._v("I have configuration files")])]),e._v(" "),o("li",[e._v("In the "),o("code",[e._v("Welcome to Tunnelblick")]),e._v(" prompt, select "),o("code",[e._v("I have configuration files")])]),e._v(" "),o("li",[e._v("When prompted for which type of configuration you have, select "),o("code",[e._v("OpenVPN Configurations")])]),e._v(" "),o("li",[e._v("Select the OpenVPN profile named "),o("code",[e._v("<username>.ovpn")]),e._v(" in the collection of credentials given from HUNT.")]),e._v(" "),o("li",[e._v("Continue to section "),o("a",{attrs:{href:"connecting-to-the-vpn"}},[e._v("Connecting to the VPN")]),e._v(" section below")])])]),e._v(" "),o("li",[e._v("Find the OpenVPN profile named "),o("code",[e._v("<username>.ovpn")]),e._v(" in the collection of credentials given from HUNT.\n"),o("ol",[o("li",[e._v("Right-click the file OpenVPN profile named "),o("code",[e._v("<username>.ovpn")])]),e._v(" "),o("li",[e._v("Select "),o("code",[e._v("Open With -> Tunnelblick")])]),e._v(" "),o("li",[e._v("When prompted for "),o("code",[e._v("Install Configuration For All Users")]),e._v(", select "),o("code",[e._v("Only Me")])]),e._v(" "),o("li",[e._v("Enter your macOS password to allow Tunnelblick to install the OpenVPN configuration")]),e._v(" "),o("li",[e._v("Continue to section "),o("a",{attrs:{href:"connecting-to-the-vpn"}},[e._v("Connecting to the VPN")]),e._v(" section below")])])])]),e._v(" "),o("h4",{attrs:{id:"connecting-to-the-vpn-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-the-vpn-2"}},[e._v("#")]),e._v(" Connecting to the VPN")]),e._v(" "),o("ol",[o("li",[e._v("Start Tunnelblick and "),o("code",[e._v("Connect")])]),e._v(" "),o("li",[e._v("Enter your user name (same as the OpenVPN profile file name)")]),e._v(" "),o("li",[e._v("Enter the "),o("strong",[o("code",[e._v("verification code")])]),e._v(" from Google Authenticator as your password\n"),o("ol",[o("li",[e._v("Make sure that the "),o("em",[e._v("Save in Keychain")]),e._v(" checkbox is "),o("strong",[o("code",[e._v("unchecked")])])])])]),e._v(" "),o("li",[e._v("If prompted for a "),o("em",[e._v("Private Key Password")]),e._v(" or "),o("em",[e._v("Passphrase")]),e._v(", use the "),o("code",[e._v("VPN passphrase")]),e._v(" sent to you from HUNT over Signal")])]),e._v(" "),o("p",[e._v("This password can be saved")]),e._v(" "),o("p",[e._v("You should now be connected to the VPN.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Troubleshooting")]),e._v(" "),o("p",[e._v("If VPN does not connect, but displays another "),o("code",[e._v("Login Required")]),e._v(" prompt,\nplease try again with a new "),o("strong",[o("code",[e._v("verification code")])])])]),e._v(" "),o("h3",{attrs:{id:"ubuntu-linux"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-linux"}},[e._v("#")]),e._v(" Ubuntu Linux")]),e._v(" "),o("h4",{attrs:{id:"install-the-client-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install-the-client-3"}},[e._v("#")]),e._v(" Install the client")]),e._v(" "),o("p",[e._v("Install the "),o("code",[e._v("openvpn")]),e._v(" and "),o("code",[e._v("network-manager-openvpn-gnome")]),e._v(" packages from the standard repositories.")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" openvpn network-manager-openvpn-gnome\n")])])]),o("h4",{attrs:{id:"setup-the-openvpn-profile-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup-the-openvpn-profile-3"}},[e._v("#")]),e._v(" Setup the OpenVPN profile")]),e._v(" "),o("ol",[o("li",[e._v("Click on the "),o("em",[e._v("Network Manager")]),e._v(" icon in the task bar")]),e._v(" "),o("li",[e._v("Select "),o("em",[e._v("Edit Connections...")])]),e._v(" "),o("li",[e._v("Click "),o("em",[e._v("Add")])]),e._v(" "),o("li",[e._v("Choose "),o("em",[e._v("Import a saved VPN configuration")]),e._v(" and click "),o("em",[e._v("Create")])]),e._v(" "),o("li",[e._v("Select the OpenVPN profile named "),o("code",[e._v("<username>.ovpn")]),e._v(" in the collection of credentials given from HUNT.")]),e._v(" "),o("li",[e._v("Enter your user name (same as the OpenVPN profile file name)")]),e._v(" "),o("li",[e._v("Click on the person icon in the "),o("em",[e._v("Password")]),e._v(" field and select "),o("code",[e._v("Ask for this password every time")])]),e._v(" "),o("li",[e._v("Enter the "),o("em",[e._v("Private Key Password")]),e._v(" with the "),o("code",[e._v("VPN passphrase")]),e._v(" sent to you from HUNT over Signal")]),e._v(" "),o("li",[e._v("Click on the "),o("em",[e._v("IPv4 Settings")]),e._v(" tab")]),e._v(" "),o("li",[e._v("Click "),o("em",[e._v("Routes...")])]),e._v(" "),o("li",[e._v("Select the "),o("em",[e._v("Use this connection only for resources on its network")]),e._v(" and click "),o("em",[e._v("OK")])]),e._v(" "),o("li",[e._v("Click "),o("em",[e._v("Apply")])])]),e._v(" "),o("p",[e._v("The OpenVPN profile should now be setup.")]),e._v(" "),o("h4",{attrs:{id:"connecting-to-the-vpn-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-the-vpn-3"}},[e._v("#")]),e._v(" Connecting to the VPN")]),e._v(" "),o("ol",[o("li",[e._v("Click on the "),o("em",[e._v("Network Manager")]),e._v(" icon in the task bar")]),e._v(" "),o("li",[e._v("Select "),o("em",[e._v("VPN Connections >")]),e._v(" and the name of your profile")]),e._v(" "),o("li",[e._v("In the "),o("em",[e._v("Authenticate VPN")]),e._v(" window, enter the "),o("strong",[o("code",[e._v("verification code")])]),e._v(" from Google Authenticator in the "),o("em",[e._v("Password")]),e._v(" field")]),e._v(" "),o("li",[e._v("Click "),o("em",[e._v("OK")]),e._v(" to connect")])]),e._v(" "),o("p",[e._v("If you receive the notification "),o("em",[e._v("VPN connection has been successfully established")]),e._v(", then you are good to go.")]),e._v(" "),o("h4",{attrs:{id:"troubleshooting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),o("ul",[o("li",[e._v("If the "),o("em",[e._v("Authenticate VPN")]),e._v(" prompt pops up again, then please try again with a new "),o("strong",[o("code",[e._v("verification code")])])]),e._v(" "),o("li",[e._v("If you receive the notification "),o("em",[e._v("VPN Connection Failed")]),e._v(" after 60 seconds, please check the following")]),e._v(" "),o("li",[e._v("Verify that you have an active internet connection")]),e._v(" "),o("li",[e._v("Verify that the "),o("em",[e._v("Private Key Password")]),e._v(" is correct")]),e._v(" "),o("li",[e._v("If you cannot access the rest of the internet while connected to the VPN, then please check the following:")]),e._v(" "),o("li",[e._v("Verify steps 9-11 in "),o("a",{attrs:{href:"setup-the-openvpn-profile"}},[e._v("Setup the OpenVPN profile")]),e._v(".")]),e._v(" "),o("li",[e._v("If you are unable to hit "),o("em",[e._v("Apply")]),e._v(" after the changes, try to re-enter your "),o("em",[e._v("Private Key Password")]),e._v(" with your "),o("code",[e._v("VPN passphrase")]),e._v(".")]),e._v(" "),o("li",[e._v("If nothing else works, please go the "),o("a",{attrs:{href:"#4-troubleshooting"}},[e._v("troubleshooting steps")]),e._v(" and contact us.")])]),e._v(" "),o("h3",{attrs:{id:"other-linux-distributions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#other-linux-distributions"}},[e._v("#")]),e._v(" Other Linux distributions")]),e._v(" "),o("p",[e._v("There are a few options on how to install OpenVPN clients in other distributions.")]),e._v(" "),o("ul",[o("li",[e._v("Install the "),o("code",[e._v("openvpn")]),e._v(" package from the official distribution repository")]),e._v(" "),o("li",[e._v("Add the "),o("a",{attrs:{href:"https://community.openvpn.net/openvpn/wiki/OpenvpnSoftwareRepos",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenVPN community repository"),o("OutboundLink")],1),e._v(" and install "),o("code",[e._v("openvpn")]),e._v(" package.")]),e._v(" "),o("li",[e._v("Download the latest source tarball from OpenVPN "),o("a",{attrs:{href:"https://openvpn.net/index.php/open-source/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(" and install.")])]),e._v(" "),o("h2",{attrs:{id:"_4-connecting-to-your-lab"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-connecting-to-your-lab"}},[e._v("#")]),e._v(" 4. Connecting to your lab")]),e._v(" "),o("p",[e._v("After the VPN connection is successfully established, you can connect to your lab with SSH.")]),e._v(" "),o("h3",{attrs:{id:"connecting-with-ssh"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connecting-with-ssh"}},[e._v("#")]),e._v(" Connecting with SSH")]),e._v(" "),o("p",[e._v("To connect with SSH please see "),o("code",[e._v("ssh-config.txt")]),e._v(" which contains the necessary information to connect to your lab, such as your username and IP.")]),e._v(" "),o("h4",{attrs:{id:"example-contents-of-ssh-config-txt"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-contents-of-ssh-config-txt"}},[e._v("#")]),e._v(" Example contents of "),o("code",[e._v("ssh-config.txt")])]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("Host "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-lab-name"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("-entry\n    HostName "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-lab-IP"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n    User "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-username"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),o("ol",[o("li",[e._v("Start your favorite terminal program which supports SSH. For Windows users we strongly recommend to set up this initial set using the Putty executable ("),o("a",{attrs:{href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("putty.exe"),o("OutboundLink")],1),e._v(", 64-bit version).")]),e._v(" "),o("li",[e._v("Type "),o("code",[e._v("ssh <your-username>@<your-lab-IP>")])]),e._v(" "),o("li",[e._v("You should then be prompted to enter a password "),o("code",[e._v("<your-username>@<your-lab-IP>'s password:")])]),e._v(" "),o("li",[e._v("Enter your "),o("code",[e._v("SSH temporary key")]),e._v(" sent to you from HUNT over Signal "),o("em",[e._v("two")]),e._v(" times.")]),e._v(" "),o("li",[e._v("Enter your new "),o("code",[e._v("passphrase")]),e._v(" (see below for a how to). Retype for verification. You will be kicked off the entry server by completion.")]),e._v(" "),o("li",[e._v("Login again to your entry server, "),o("code",[e._v("ssh <your-username>@<your-lab-IP>")]),e._v(", with your newly generated passphrase.")]),e._v(" "),o("li",[e._v("When on your entry server, connect to your home server by typing "),o("code",[e._v("ssh home")]),e._v(".")]),e._v(" "),o("li",[e._v("Similar to step 3, you will be prompted to retype your "),o("code",[e._v("SSH temporary key")]),e._v(" sent to you from HUNT over Signal and to repeat your new passphrase two times (it is fine to use the same passphrase as on your entry node). You will be kicked back to your entry server by completion.")]),e._v(" "),o("li",[e._v("Log into your home server using "),o("code",[e._v("ssh home")]),e._v(" using your new passphrase.")]),e._v(" "),o("li",[e._v("With a tiny bit of luck, you should now be inside your project lab which should look something like below. Enjoy!")])]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Example when logged in to a lab's home server")]),o("p"),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("Welcome to Ubuntu 16.04.3 LTS (GNU/Linux 4.4.0-98-generic x86_64)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  Get cloud support with Ubuntu Advantage Cloud Guest:\n    http://www.ubuntu.com/business/services/cloud\n\n66 packages can be updated.\n0 updates are security updates.\n\nWelcome to TEST-LAB.\n\nFor the record, if you shouldn't be here - please\nleave and report the incident to cloud@hunt.ntnu.no.\n\nLast login: Sun Dec  3 12:29:28 2017 from 10.10.10.10\ntestuser1@test-lab-home:~$\n")])])]),o("p")]),o("h3",{attrs:{id:"designing-your-own-passphrase"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#designing-your-own-passphrase"}},[e._v("#")]),e._v(" Designing your own passphrase")]),e._v(" "),o("p",[e._v("We prefer that you give a "),o("code",[e._v("passphrase")]),e._v(" instead of a password. A passphrase is a series of words that create a phrase.\nIt should be:")]),e._v(" "),o("ul",[o("li",[e._v("long enough to be hard to guess")]),e._v(" "),o("li",[e._v("not a famous quotation from the literature (but could be pretty close)")]),e._v(" "),o("li",[e._v("hard to guess by intuition (even by someone who knows you well)")]),e._v(" "),o("li",[e._v("easy to remember")])]),e._v(" "),o("p",[e._v("Oh, and, it should be unique to this site only (not to mention at least\n12 characters long and include both lower and upper cases).\nMaking a good passphrase is great fun and good security hygiene.\nHere is one to get you going:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("PokemonAnalysisAreGreat4Fun\n")])])]),o("h3",{attrs:{id:"simplify-your-life"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#simplify-your-life"}},[e._v("#")]),e._v(" Simplify your life")]),e._v(" "),o("p",[e._v("Do not skip this chapter... We hope that you will log into your lab a lot over the coming months and years, so we need to make sure that you simplify that process to the point where you get instant access to your lab.")]),e._v(" "),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Windows")]),o("p"),o("p",[e._v("We recommend MobaXterm as a free X server that allow you to connect with both SSH and SFTP. Here is a "),o("a",{attrs:{href:"/working-in-your-lab/technical-tools/mobaxterm"}},[e._v("step wise guide")]),e._v(" on how to establish a password less login directly to your home-machine.")]),e._v(" "),o("p")]),o("details",{staticClass:"custom-block details"},[o("summary",[e._v("Mac and Linux")]),o("p"),o("h4",{attrs:{id:"establish-an-ssh-alias"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#establish-an-ssh-alias"}},[e._v("#")]),e._v(" Establish an SSH alias")]),e._v(" "),o("ol",[o("li",[e._v("Open the "),o("code",[e._v("ssh-config.txt")]),e._v(" file your received.")]),e._v(" "),o("li",[e._v("Add this content to the file named "),o("code",[e._v("config")]),e._v("in the hidden ssh-folder in your home directory ("),o("code",[e._v("~/.ssh/config")]),e._v(") using your favourite file editor. You may need to generate this file if it is your first ssh-configuration.")])]),e._v(" "),o("p",[e._v("You should now be able to connect to your lab with the SSH-command "),o("code",[e._v("ssh <your-lab-name>")]),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"establish-a-password-less-login"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#establish-a-password-less-login"}},[e._v("#")]),e._v(" Establish a password-less login")]),e._v(" "),o("p",[e._v("If you already have a RSA certificate on your local computer that you would like to use, start from step 3")]),e._v(" "),o("ol",[o("li",[e._v("Log out from your project lab typing "),o("code",[e._v("exit")]),e._v(" (you should now be in your local computer)")]),e._v(" "),o("li",[e._v("Generate a new RSA certificate with "),o("code",[e._v("ssh-keygen")]),e._v(". Hint enter three times. When this finish:")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("ssh-copy-id <your-lab-name>-entry")]),e._v(" to add your certificate to your entry node. Enter the entry-node passphrase you generated in the section above.")]),e._v(" "),o("li",[e._v("Enter "),o("code",[e._v("ssh-add")]),e._v("to add the certificate to the ssh-agent. If you don't have a running ssh-agen you may see an error message. In such a case, first enter "),o("code",[e._v('eval "$(ssh-agent -s)"')]),e._v(" and next enter "),o("code",[e._v("ssh-add")])]),e._v(" "),o("li",[e._v("You should now be able to log directly into your home node with the command "),o("code",[e._v("ssh <your-lab-name>")]),e._v(", e.g. 'ssh demolab'.")])]),e._v(" "),o("p",[e._v("Simple and secure, you should now be able to directly enter your home node with this command:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your-lab-name"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),o("p")]),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Time for coffee!")])])])}),[],!1,null,null,null);t.default=a.exports}}]);