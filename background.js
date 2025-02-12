chrome.action.onClicked.addListener((activeTab) => {
  const activeURL = activeTab.url;
  const pos = activeURL.indexOf(".com");
  if (pos === -1) {
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: () => alert('This Extension cannot be used on this website')
    });
    return;
  }

  const baseURL = activeURL.slice(0, pos + 4);
  if (!(baseURL.includes("salesforce.com") || baseURL.includes("force.com") || baseURL.includes("salesforce-setup.com"))) {
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: () => alert('This Extension cannot be used on this website')
    });
    return;
  }

  const developerConsoleUrl = baseURL + "/_ui/common/apex/debug/ApexCSIPage";
  const anonymousUrl = baseURL + "/_ui/common/apex/debug/ApexExecAnon";

  // Instead of querying all tabs, check if the active tab is the developer console.
  if (activeURL === developerConsoleUrl) {
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      func: (anonUrl) => {
        window.open(anonUrl, '_blank');
      },
      args: [anonymousUrl]
    });
  } else {
    chrome.tabs.create({ url: developerConsoleUrl });
  }
});
