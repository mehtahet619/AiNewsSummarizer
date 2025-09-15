document.addEventListener('DOMContentLoaded', () => {
  // Load saved API key when options page opens
  chrome.storage.sync.get(['geminiApiKey'], (result) => {
    if (result.geminiApiKey) {
      document.getElementById('api-key').value = result.geminiApiKey;
    }
  });

  // Save API key when save button is clicked
  document.getElementById('save-button').addEventListener('click', () => {
    const apiKey = document.getElementById('api-key').value.trim();
    
    if (apiKey) {
      chrome.storage.sync.set({ geminiApiKey: apiKey }, () => {
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'block';
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 3000);
      });
    }
  });
});