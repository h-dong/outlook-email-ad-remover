# Outlook ad remover

This extension removes the ad sidebar from Outlook web client.

There are already other extensions which does this, however, I would like offer people an alternative that is open source. This extension only does one thing, that is to remove the ads side panel on Outlook web client.

View it on [Chrome Webstore](https://chrome.google.com/webstore/detail/outlook-email-ad-remover/kkjehflbllibgnhbikhgfbohmaifgpii?hl=en-GB&authuser=0) (currently taken off the store due to complaints from Microsoft, in the middle of trying to publish a new version)

View it on [Firefox Webstore](https://addons.mozilla.org/en-GB/firefox/addon/email-ad-remover)

## How to hide the ad without downloading this extension

Chrome Webstore refuses to let me re-upload this extension after Microsoft complained the original extension name included their trademark "Outlook".

Of course, there are plenty other extension which can hide ads on Outlook. However, if you want full control, there is this extension that lets you run custom JavaScript on each site - [Custom JavaScript for Websites 2](https://chrome.google.com/webstore/detail/custom-javascript-for-web/ddbjnfjiigjmcpcpkmhogomapikjbjdk). After installing this, you can simply copy and paste this extension's [source code](https://github.com/h-dong/outlook-email-ad-remover/blob/master/src/contentScript.js) directly into this extension on the Outlook browser tab and it will hide the ads just the same.

Here's also a gist [removeOutlookPremiumButton.js](https://gist.github.com/h-dong/686ef55f43efc65937ca51034989317b) which hides Outlook's premium button. You can copy and paste into the same extension.

PS: If you would like to use both then you'll have to use modify them slightly.
