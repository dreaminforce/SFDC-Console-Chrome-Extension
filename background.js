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
  if (!(baseURL.includes("salesforce.com") || baseURL.includes("force.com"))) {
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: () => alert('This Extension cannot be used on this website')
    });
    return;
  }

  const developerConsoleUrl = baseURL + "/_ui/common/apex/debug/ApexCSIPage";
  const anonymousUrl = baseURL + "/_ui/common/apex/debug/ApexExecAnon";
  chrome.tabs.query({ url: developerConsoleUrl }, (tabs) => {
    if (tabs && tabs.length > 0) {
      const devConsoleTabId = tabs[0].id;
      chrome.scripting.executeScript({
        target: { tabId: devConsoleTabId },
        func: (anonUrl) => {
          window.open(anonUrl, '_blank');
        },
        args: [anonymousUrl]
      });
    } else {
      chrome.tabs.create({ url: developerConsoleUrl });
    }
  });
});
