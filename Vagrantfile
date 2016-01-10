# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "hashicorp/precise32"
  config.vm.network "forwarded_port", guest: 4200, host: 4200
  config.vm.network "forwarded_port", guest: 35729, host: 35729
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.synced_folder "./", "/home/vagrant/ember-booker", id: "vagrant-root",
    owner: "vagrant",
    group: "vagrant",
    mount_options: ["dmode=777,fmode=777"]
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end
  config.vm.provision "shell", privileged: false, inline: <<-SHELL
    echo vagrant | sudo -S apt-get update
    echo "Installing git, build-essential and libssl-dev..."
    echo vagrant | sudo -S apt-get install -y build-essential
    echo vagrant | sudo -S apt-get install -y libssl-dev
    echo vagrant | sudo -S apt-get install -y git
    echo "Installing nvm..."
    git clone https://github.com/creationix/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
    . ~/.nvm/nvm.sh
    #sed -i '$ export NVM_DIR="$HOME/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"' .bashrc
    #source .bashrc
    echo "Installing node..."
    nvm install 4.0
    nvm alias default 4.0
    nvm use default
    echo "Installing bower..."
    npm install -g bower
    echo "Installing ember-cli..."
    npm install -g ember-cli
    cd /home/vagrant/ember-booker
    echo "Installing node packages for the project..."
    npm install
    echo "Installing bower packages for the project..."
    bower install
    echo "Running ember server..."
    ember s
  SHELL
end
