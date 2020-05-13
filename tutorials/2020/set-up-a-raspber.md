# Set Up a Raspberry Pi Without a Monitor

This page will explain how to set up a Raspberry Pi out-of-the-box without a monitor. To interact with the Raspberry Pi, we can remote into it using another computer, either via SSH (command line) or VNC (virtual desktop with full graphical interface).

This is useful for applications where you are not using the Raspberry Pi as a desktop computer, for example, if the Raspberry Pi is inside a robot.

For the purposes of demonstration, I am using a Raspberry Pi 4 with Raspbian Buster. I am setting up the Raspberry Pi using a computer running Windows 10; however, the process does not differ much across platforms.

## Step 1: Install Raspbian

To begin, download the latest version of [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) and flash it to a microSD card using a tool such as [balenaEtcher](https://www.balena.io/etcher/).

The microSD card will automatically be unmounted when the flashing is complete. Remove the card and insert it back into the computer to access the file directory.

## Step 2: Configure Wi-Fi Settings

Navigate to the root directory of the microSD card and create a new file called `wpa-supplicant.conf`.

Open up the file in Notepad and add the following text:

```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=AU

network={
ssid=""
psk=""
}
```

Replace the ssid and psk fields with the appropriate values for your Wi-Fi network. If you are not in Australia, change the country code to an [appropriate value](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes). This will ensure the Raspberry Pi uses the correct 5GHz frequencies for your country.

Save the file before continuing!

## Step 3: Enable SSH

Create an empty file with the filename `ssh`.

Download and install [PuTTY](https://www.putty.org/) on your desktop computer. PuTTY is an SSH client which, without going into too much depth, basically allows us to call the Raspberry Pi command line remotely from another computer.

Next, download and install [Advanced IP Scanner](https://www.advanced-ip-scanner.com/). Run a scan, and you will see a list of all connected devices on your local network. If everything has gone as planned, you will see a device called `raspberrypi` along with its associated IP address (in my case, `192.168.0.15`).

If you only intend on interacting with the Raspberry Pi via the command line, then you can end here. However, if you want a full virtual desktop with keyboard and mouse interaction, then read on.

## Step 4: Enable VNC

In the PuTTY terminal, enter the command:

```
sudo raspi-config
```

The configuration menu should appear. Navigate to `5. Interfacing Options`, and then `P3. VNC`. Enable VNC, close the menu, and reboot the Pi using `sudo reboot` to apply the changes.

## Step 5: Connect to the Pi’s virtual desktop

The last step prepared the Pi to share its desktop remotely. However, without a monitor connected, there is no desktop to share! Hence, we need to tell the Pi to create a virtual desktop, which will run in memory and be accessible over the network.

To do this, simply create open another PuTTY terminal and enter the command:

```
vncserver
```

A load of information will appear on the screen, but we are interested in the last line, which should be something like:

```
New desktop is raspberrypi:1 (192.168.0.15:1)
```

Next, download and run [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/). In the bar that says ‘Enter a VNC server address’, enter the IP and port address from before, e.g. `192.168.0.15:1` on my machine.

VNC Viewer will now connect to the Raspberry Pi, and you will see a new window appear with the Pi’s desktop. You can now interact with the Raspberry Pi with your mouse and keyboard as if it were directly connected to a monitor!

_Last updated: 06/01/2020_
