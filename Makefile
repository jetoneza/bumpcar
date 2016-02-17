CHDIR_SHELL := $(SHELL)
define chdir
	 $(eval _D=$(firstword $(1) $(@D)))
	 $(info $(MAKE): cd $(_D)) $(eval SHELL = cd $(_D); $(CHDIR_SHELL))
endef

setup-web:
	sudo npm install --loglevel error
	cd ./public/libs/semantic; gulp build

setup: update-git
	make setup-web

update-git:
	git submodule sync
	git submodule update --init --recursive
