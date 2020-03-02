# Paywall Sledger 
Many sites utilize a 'paywall' to block content unless the user meets some criteria for making the site availible to them- often times this takes form as a subscription or owning an account on the site. Some sites are more secure than others, but especially in the news industry, it's common for the site to serve the content, and then put a paywall over this content to block access. This technique blocks viewing of the content, but it means the content is still served in the HTML file. In these situations, using pattern matching to remove this imposed paywall can allow the user to view the content of the website with only local modifications, similar to how some ad-blockers work.  


Other methods to get over this paywall is to alter the site's data such that a paywall is never served to begin with, such as removing cookies meant for tracking article views. This project takes an alternate approach by instead detecting what a paywall is and looks like, and removing it after it appears. This way cookies can be maintained which is important because sites often utilize cookies to improve user experience by recomending similar articles as previous articles viewed. An additional advantage of this method is that some sites--- such as Bloomberg News---, after launching the paywall, stop reloading ad content because these ads are typically covered by the paywall. Therefore, once the paywall is removed, not only can the user access the article free of cost, but also is ad-free. 