---
title: Matlab
permalink: /working-in-your-lab/analytical-tools/matlab
sidebarDepth: 1
---

# Matlab

[MATLAB](https://www.mathworks.com/) is a computing environment developed by MatWorks for efficient matrix manipulations and other handy computing tools.

We do provide the opportunity for MATLAB installations on managed and unmanaged machines.
Installation on home-nodes require us to run some code.

The below guide is for multi-user setup in an unmanaged environment (iaas-node).

::: warning Dependencies

`Without these, it will be impossible to get MATLAB to work in your lab.`

- A machine prepared for [x2go](/working-in-your-lab/technical-tools/x2go/).
- An unmanaged machines (IAAS or BLUE machine) where you have root access.
- Access to MATLAB software binaries for linux.
- Access to a MATLAB license, typically provided by your organization.

:::

## Download MATLAB to your lab

1. Download the MATLAB software on your local computer (client).

   For NTNU users, log into [NTNU's software repository for matlab](https://software.ntnu.no/ntnu/matlab),
   choose your desired version in the top right corner and download on your local computer.
   We recommend that you skip the latest version and choose a slightly older version to ensure a reliable installation.

2. Transfer MATLAB to your preferred folder in your lab machine, for example /mnt/work/software/matlab/)
3. Unpack the zip file in your folder.

   Install software:

   ```bash
   sudo apt install unzip
   ```

   Unzip:

   ```bash
   unzip <matlabfile.zip>
   ```

4. Make all files in folder executables: `chmod -R 777 <matlab-folder>`. This is a primitive fix so you are able to run the files within subfolders as required by MATLAB.

## Add a license file

::: tip
For NTNU users, the exact content of this files is described in [NTNU's repository for matlab](https://software.ntnu.no/ntnu/matlab).
:::

- Create a file named `license.dat` with your license information. The content of this file is dependent on your organizations license. The example below will need you to replace `<license-server-address>`, `<key1>` and `<key2>` with an url-address and strings provided by your host institutions license page.:

```ini
SERVER <license-server-address> <key1> <key2>
USE_SERVER

```

::: warning
Make sure you add a new/empty line after "USE_SERVER".
:::

## Install

The below steps require the code to be run in `xterm` started from X2GO on the machine holding the MATLAB files downloaded in the above steps.

1. Go to your matlab folder and run the installer:

   ```
   sudo ./install
   ```

2. During the install choose: `Use a File Installation Key`
3. Choose `I have the File Installation Key for my license` and enter the key (these are found on you software repository)
4. Follow the installer and choose the packages you want.
5. When the installer ask for your product activation, choose the `non internet` option and provide the location of the `license.dat` file previously generated.
6. If successful, your should see a "product activation message".

## Run MATLAB

- If you prefer MATLAB's graphical interface, run `matlab` in your terminal (`xterm`) started in X2GO.
- If you're fine with command lines, run `matlab` directly in your shell.

With a little bit of luck, it's now time to celebrate with fresh coffee running your favourite test code on the fresh MATLAB. If not, here's some of our known issues:

## Known issues

### Why can't MATLAB find the packages I choose to install?

Some of the latest MATLAB versions compiled by some universities miss some packages.
Try to download and install a slightly older version.

### Can I install the code without sudo?

Not in a straight forward way.
We recommend that you install on a unmanaged node where you have root.

### My product activation do not seem to work?

We need to open for traffic from your lab to your organization's license server.
Give us a shout [here](/contact).