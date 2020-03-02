const SLEDGE_PAYWALL_MENU_ITEM_ID = "sledge-paywall-menu-item"; 
const SLEDGE_PAYWALL_MENU_ITEM_TITLE = "Sledge Paywall";
const SLEDGE_PAYWALL_FILE_NAME = "paywall_sledger.js";
 
chrome.contextMenus.create({
    id: SLEDGE_PAYWALL_MENU_ITEM_ID,
    title: SLEDGE_PAYWALL_MENU_ITEM_TITLE,
    contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === SLEDGE_PAYWALL_MENU_ITEM_ID) {
		chrome.tabs.executeScript({
			file: SLEDGE_PAYWALL_FILE_NAME
		});
    }
});
