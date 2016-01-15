# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty32"
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.network "forwarded_port", guest: 4200, host: 4200
  config.vm.network "forwarded_port", guest: 49152, host: 49152
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "512"
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
    sed -i '$ export NVM_DIR="$HOME/.nvm"\[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"' .bashrc
    source .bashrc
    echo "Installing node..."
    nvm install 4.0
    nvm alias default 4.0
    nvm use default
    echo "Installing bower..."
    npm install -g bower
    echo "Installing ember-cli..."
    npm install -g ember-cli
    mkdir /home/vagrant/ember-booker
  SHELL
end
