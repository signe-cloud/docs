(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{388:function(e,a,t){"use strict";t.r(a);var n=t(19),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"saige-package-for-r-on-an-iaas-machine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#saige-package-for-r-on-an-iaas-machine"}},[e._v("#")]),e._v(" Saige package for R on an IAAS machine")]),e._v(" "),t("p",[e._v("This page describes installation of the "),t("a",{attrs:{href:"https://github.com/weizhouUMICH/SAIGE",target:"_blank",rel:"noopener noreferrer"}},[e._v("SAIGE R package"),t("OutboundLink")],1),e._v("\non a clean IAAS or BLUE machine in HUNT Cloud.")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/weizhouUMICH/SAIGE",target:"_blank",rel:"noopener noreferrer"}},[e._v("SAIGE is an R package"),t("OutboundLink")],1),e._v(" with Scalable and\nAccurate Implementation of Generalized mixed model (Chen, H. et al. 2016).\nIt accounts for sample relatedness and is feasible for genetic association tests\nin large cohorts and biobanks (N > 400,000).\nThe below guide is based on packages listed in the Dockerfile example in Github.")]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[e._v("Ubuntu operating system (current installation is tested on 18.04)\nAdministrator privileges (HUNT IAAS or HUNT BLUE machines)\nFresh coffee and 30 minutes to spare")]),e._v(" "),t("h2",{attrs:{id:"defining-your-software-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defining-your-software-directory"}},[e._v("#")]),e._v(" Defining your software directory")]),e._v(" "),t("p",[e._v("Below is an example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('# Define your software directory\nsoftware_dir="/home/ubuntu/software/"\n\n# Create directory if it don\'t exist\nmkdir -p $software_dir\n\n# Move into the directory\ncd $software_dir\n')])])]),t("h2",{attrs:{id:"install-required-apt-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-required-apt-packages"}},[e._v("#")]),e._v(" Install required APT packages")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sudo apt update -y && sudo apt-get install -y \\\n    build-essential \\\n    cmake \\\n    curl \\\n    libboost-all-dev \\\n    libbz2-dev \\\n    libcairo2-dev \\\n    libcurl4-openssl-dev \\\n    liblzma-dev \\\n    libopenblas-dev \\\n    libpcre3-dev \\\n    libpng-dev \\\n    libreadline-dev \\\n    libssl-dev \\\n    libz-dev \\\n    python3-pip \\\n    python3-setuptools \\\n    unzip \\\n    gfortran \\\n    r-cran-rjava \\\n    openjdk-8-jdk\n")])])]),t("h2",{attrs:{id:"defining-your-java-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defining-your-java-version"}},[e._v("#")]),e._v(" Defining your Java version")]),e._v(" "),t("p",[e._v("Run the code below and manually choose java-8in the provided list and hit 'ENTER'.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# manual update to java-8-openjdk\nsudo update-alternatives --config java\n")])])]),t("h2",{attrs:{id:"installing-required-python-packages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-required-python-packages"}},[e._v("#")]),e._v(" Installing required python packages")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pip3 install cget;\n")])])]),t("h2",{attrs:{id:"installing-a-specific-r-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-specific-r-version"}},[e._v("#")]),e._v(" Installing a specific R version")]),e._v(" "),t("p",[e._v("The current SAIGE version requires a specific R-version (3.5.1). The below snippets compile this specific version.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('# ensure software dir\ncd $software_dir\n\n# define version\nr_version="3.5.1";\n\n# download\ncurl -O https://cloud.r-project.org/src/base/R-3/R-${r_version}.tar.gz;\n\n# unzip\ntar xvzf R-${r_version}.tar.gz;\n\n# cleanup\nrm R-${r_version}.tar.gz;\n\n# move into r-folder\ncd $software_dir/R-${r_version}\n\n# configure\nsudo ./configure \\\n  --with-x=no \\\n  --with-blas="-lopenblas" \\\n  --enable-R-shlib  \\\n  -enable-shared;\n\n# make\nsudo make; # TODO stopped here\nsudo mkdir -p /usr/local/lib/R/lib;\n\n# install\nsudo make install;\n\n# cleanup\ncd $software_dir\nsudo rm -rf $software_dir/R-${r_version}\n')])])]),t("h2",{attrs:{id:"installing-saige"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-saige"}},[e._v("#")]),e._v(" Installing SAIGE")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd $software_dir\n\n# Download latest version\ncurl -OL https://github.com/weizhouUMICH/SAIGE/archive/master.zip\n\n# Unpack\nunzip master.zip\n\n# Update file folder names\nmv SAIGE-master/ SAIGE/\n\n# Install required R-packages\nRscript SAIGE/extdata/install_packages.R\n\n# Install SAIGE\nR CMD INSTALL SAIGE\n")])])]),t("h2",{attrs:{id:"set-number-of-threads-for-openblas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-number-of-threads-for-openblas"}},[e._v("#")]),e._v(" Set number of threads for openblas")]),e._v(" "),t("p",[e._v("This steps adds a thread restriction on BLAS to avoid multithread\nconflicts with other R packages.")]),e._v(" "),t("p",[e._v("First, add restriction to "),t("code",[e._v("step2_SPAtests.R")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('echo "#!/usr/bin/env Rscript\n\n# Restrict threads in openblas\nhasOpenBlas = grepl(\\"openblas\\",extSoftVersion()[\\"BLAS\\"]);\nif (hasOpenBlas) {\n  ### Only when using openblas instead of blas\n  require(inline)\n  openblas.set.num.threads <- cfunction( signature(ipt=\\"integer\\"),\n    body = \\\'openblas_set_num_threads(*ipt);\\\',\n    otherdefs = c (\\\'extern void openblas_set_num_threads(int);\\\'),\n      libargs = c (\\\'-L/opt/openblas/lib -lopenblas\\\'),\n      language = \\"C\\",\n      convention = \\".C\\")};\nif (hasOpenBlas) openblas.set.num.threads(1)\n" > insert_openblas_restriction.tmp\n')])])]),t("p",[e._v("Then, add to file:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# cut header\ncat SAIGE/extdata/step2_SPAtests.R | sed -n '1!p' > step2_body.tmp\n")])])]),t("h1",{attrs:{id:"combine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#combine"}},[e._v("#")]),e._v(" Combine")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cat insert_openblas_restriction.tmp \\\n    step2_body.tmp > step2_SPAtests.R\nInstall the required 'inline' R-package:\necho 'req_packages <- \"inline\";\nfor (pack in req_packages) {\n  if(!require(pack,character.only = TRUE)) {\n    install.packages(pack, repos = \"http://cran.us.r-project.org\")}}' \\\n> install_inline.R\nRscript install_inline.R\nrm install_inline.R\n")])])]),t("p",[e._v("Add quick references:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# Move files to usr/local/bin for quick referencing\nsudo mv SAIGE/extdata/step1_fitNULLGLMM.R /usr/local/bin/\nsudo mv step2_SPAtests.R /usr/local/bin/\nsudo mv SAIGE/extdata/createSparseGRM.R /usr/local/bin/\nsudo chmod a+x /usr/local/bin/*.R\n")])])]),t("h2",{attrs:{id:"cleanup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[e._v("#")]),e._v(" Cleanup")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("rm -rf master.zip\nrm -rf SAIGE\nrm insert_openblas_restriction.tmp\nrm step2_body.tmp\nrm step2_SPAtests.R\n")])])]),t("h2",{attrs:{id:"testing-saige"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing-saige"}},[e._v("#")]),e._v(" Testing SAIGE")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("step1_fitNULLGLMM.R\n\nstep2_SPAtests.R\n\ncreateSparseGRM.R\n")])])]),t("p",[e._v("More information")])])}),[],!1,null,null,null);a.default=s.exports}}]);