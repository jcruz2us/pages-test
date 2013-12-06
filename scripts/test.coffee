#!
# Itibit video player plugin
# ===
# Original author: @jorgecruz
# Further changes, comments:

# This is a plugin to easily add Itibit content to any video player.
# The content will be synchronized and displayed alongside the video.
# In order to create desired experience, we need to... 
# - Load the content map to drive itibit
# - Use HTML5 fullscreen instead of Flash so we can overlay content at all times
# - Replace Flash controls if necessary
#

window.itibit = {
	adapters: {
	},
	version: "@version"
}

class Base
	constructor: ()->
